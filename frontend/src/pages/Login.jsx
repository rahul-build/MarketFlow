function Login() {
  return (
    <div className="mx-auto max-w-md p-6">
      <h1 className="mb-6 text-3xl font-bold">Login</h1>

      <form className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full rounded-lg border p-3"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full rounded-lg border p-3"
        />

        <button className="w-full rounded-lg bg-blue-600 p-3 text-white">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
