function decodeHtmlEntities(value) {
  const textarea = document.createElement("textarea");
  textarea.innerHTML = value;
  return textarea.value;
}

function cleanText(value) {
  return (value || "").replace(/\s+/g, " ").trim();
}

function buildSizeLabel(item) {
  if (!item) return "";

  const gender = item.genderName || "";
  const sizes = item.sizes || [];

  if (!sizes.length) return gender;

  const first = sizes[0]?.displayCode || "";
  const last = sizes[sizes.length - 1]?.displayCode || "";

  if (first && last && first !== last) {
    return `${gender}, ${first}-${last}`;
  }

  if (first) {
    return `${gender}, ${first}`;
  }

  return gender;
}

function extractDataProducts(root) {
  const container = root.querySelector(".js-fr-bff-products");
  if (!container) return [];

  const raw = container.getAttribute("data-products");
  if (!raw) return [];

  try {
    const decoded = decodeHtmlEntities(raw);
    return JSON.parse(decoded);
  } catch (error) {
    console.error("Failed to parse data-products:", error);
    return [];
  }
}

function extractProductCards(root) {
  const nodes = root.querySelectorAll(".fr-bff-product");

  return [...nodes].map((node) => {
    const anchor = node.querySelector(".fr-bff-product_inner");
    const image = node.querySelector(".fr-bff-product_imgWrapper img");
    const gender = node.querySelector(".fr-bff-product_gender");
    const name = node.querySelector(".fr-bff-product_name");
    const flag = node.querySelector(".fr-bff-product_futureExhibition");
    const price = node.querySelector(".fr-bff-product_price");
    const reviewNumber = node.querySelector(
      ".fr-bff-product_reviewStar_number"
    );
    const reviewCount = node.querySelector(".fr-bff-product_reviewCount");
    const chipImages = node.querySelectorAll(".fr-bff-product_colorChip_img");

    const productId =
      anchor?.getAttribute("data-label")?.match(/E\d{6}-\d{3}/)?.[0] ||
      anchor?.getAttribute("href")?.match(/E\d{6}-\d{3}/)?.[0] ||
      "";

    return {
      productId,
      href: anchor?.getAttribute("href") || "",
      colorCode: anchor?.getAttribute("data-color-code") || "",
      image:
        image?.getAttribute("src") || image?.getAttribute("data-src") || "",
      gender: cleanText(gender?.textContent),
      name: cleanText(name?.textContent),
      flag: cleanText(flag?.textContent),

      // HTML mode usually only has one visible price already rendered
      basePrice: "",
      promoPrice: "",
      promoLabel: "",
      promoDetail: "",

      price: cleanText(price?.textContent),
      reviewNumber: cleanText(reviewNumber?.textContent),
      reviewCount: cleanText(reviewCount?.textContent).replace(/[()]/g, ""),
      colorChips: [...chipImages].map((chip) => ({
        src: chip.getAttribute("src") || "",
        alt: chip.getAttribute("alt") || "",
      })),
    };
  });
}

function mapApiItemsToProducts(items) {
  return items.map((item) => {
    const selectedColorCode = item?.representative?.color?.displayCode || "";
    const mainImages = item?.images?.main || [];
    const chipImages = item?.images?.chip || [];

    const flags = item?.representative?.flags || {};
    const productFlags = flags?.productFlags || [];
    const priceFlags = flags?.priceFlags || [];

    const matchedMain =
      mainImages.find((img) => img.colorCode === selectedColorCode) ||
      mainImages[0] ||
      {};

    const colorChips = chipImages.slice(0, 4).map((chip) => {
      const colorMeta = (item.colors || []).find(
        (color) => color.displayCode === chip.colorCode
      );

      return {
        src: chip.url || "",
        alt: colorMeta?.name || chip.colorCode || "",
      };
    });

    const basePrice = item?.prices?.base?.value || "";
    const promoPrice = item?.prices?.promo?.value || "";
    const promoFlag = priceFlags[0] || null;
    const productFlag = productFlags[0] || null;

    return {
      productId: item.productId || "",
      href: item.productId
        ? `/ph/en/products/${item.productId}?colorCode=COL${
            selectedColorCode || "00"
          }`
        : "#",
      colorCode: selectedColorCode,
      image: matchedMain.url || "",
      gender: buildSizeLabel(item),
      name: item.name || "",

      // product/price flags
      flag: productFlag?.name || "",
      promoLabel: promoFlag?.name || "",
      promoDetail: promoFlag?.detail || "",

      // price fields for UI logic
      basePrice,
      promoPrice,

      // fallback plain price
      price: promoPrice || basePrice || "",

      reviewNumber: item?.rating?.average ? String(item.rating.average) : "",
      reviewCount: item?.rating?.count ? String(item.rating.count) : "",
      colorChips,
    };
  });
}

export function parseBffRenderedHtml(rawHtml) {
  if (!rawHtml || !rawHtml.trim()) {
    return {
      productIds: [],
      products: [],
      dataProducts: [],
    };
  }

  const parser = new DOMParser();
  const doc = parser.parseFromString(rawHtml, "text/html");

  const dataProducts = extractDataProducts(doc);
  const products = extractProductCards(doc);

  const idsFromDataProducts = dataProducts
    .map((item) => item.id)
    .filter(Boolean);

  const idsFromCards = products.map((item) => item.productId).filter(Boolean);

  const productIds = [...new Set([...idsFromDataProducts, ...idsFromCards])];

  return {
    productIds,
    products,
    dataProducts,
  };
}

export function parseBffApiJson(rawJson) {
  if (!rawJson || !rawJson.trim()) {
    return {
      productIds: [],
      products: [],
    };
  }

  try {
    const parsed = JSON.parse(rawJson);
    const items = parsed?.result?.items || [];

    const productIds = [
      ...new Set(items.map((item) => item.productId).filter(Boolean)),
    ];

    const products = mapApiItemsToProducts(items);

    return {
      productIds,
      products,
    };
  } catch (error) {
    console.error("Failed to parse API JSON:", error);
    return {
      productIds: [],
      products: [],
    };
  }
}
