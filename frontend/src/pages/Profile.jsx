function Profile() {
  return (
    <div className="mx-auto max-w-5xl p-6">
      <h1 className="text-3xl font-bold">Profile</h1>

      <div className="mt-6 rounded-lg border bg-white p-6 shadow">
        <p>
          <strong>Name:</strong> Demo User
        </p>

        <p className="mt-2">
          <strong>Email:</strong> demo@marketflow.com
        </p>
      </div>
    </div>
  );
}

export default Profile;
