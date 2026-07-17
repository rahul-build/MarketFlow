export function register(req, res) {
  res.status(201).json({
    success: true,
    message: "User registered successfully",
  });
}

export function login(req, res) {
  res.status(200).json({
    success: true,
    message: "User logged in successfully",
    token: "demo-jwt-token",
  });
}

export function profile(req, res) {
  res.status(200).json({
    success: true,
    data: {
      id: 1,
      name: "Rahul",
      email: "rahul@example.com",
    },
  });
}
