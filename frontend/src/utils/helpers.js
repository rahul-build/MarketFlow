export function formatCurrency(price) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(price);
}

export function truncateText(text, length = 60) {
  if (!text) return "";

  if (text.length <= length) {
    return text;
  }

  return `${text.substring(0, length)}...`;
}
