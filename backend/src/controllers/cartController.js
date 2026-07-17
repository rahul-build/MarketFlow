export function getCart(req, res) {
  res.json({
    success: true,
    data: [],
  });
}

export function addToCart(req, res) {
  res.json({
    success: true,
    message: "Product added to cart",
  });
}

export function removeFromCart(req, res) {
  res.json({
    success: true,
    message: "Product removed from cart",
  });
}
