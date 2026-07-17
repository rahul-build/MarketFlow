export function getProducts(req, res) {
  res.json({
    success: true,
    data: [],
  });
}

export function getProductById(req, res) {
  res.json({
    success: true,
    data: {
      id: req.params.id,
    },
  });
}
