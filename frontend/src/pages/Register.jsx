function Register() {
  return (
    <div className="mx-auto max-w-md p-6">
      <h1 className="mb-6 text-3xl font-bold">Register</h1>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full rounded-lg border p-3"
        />

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

        <button className="w-full rounded-lg bg-green-600 p-3 text-white">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
