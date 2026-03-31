import { ref } from "vue";

export function useHtmlChecker() {
  const htmlInput = ref("");
  const preview = ref("");

  function renderPreview() {
    preview.value = htmlInput.value;
  }

  return {
    htmlInput,
    preview,
    renderPreview,
  };
}
