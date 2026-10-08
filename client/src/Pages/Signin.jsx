const SignIn = () => {
  return (
    <div className="min-h-screen bg-[#0b090a] px-6 pt-36 text-white">

      <div className="mx-auto max-w-md">

        <h1 className="font-serif text-4xl font-semibold">
          Welcome Back
        </h1>

        <p className="mt-3 text-white/50">
          Sign in to your LUMÉRA BEAUTY account.
        </p>

        <form className="mt-8 space-y-5">

          <div>
            <label className="mb-2 block text-sm text-white/70">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-full border border-white/10 bg-white/[0.06] px-5 py-3.5 text-white outline-none placeholder:text-white/30 focus:border-[#b85c76]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-white/70">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-full border border-white/10 bg-white/[0.06] px-5 py-3.5 text-white outline-none placeholder:text-white/30 focus:border-[#b85c76]"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-[#b85c76] py-3.5 font-semibold transition hover:bg-[#d06f89]"
          >
            Sign In
          </button>

        </form>

      </div>
    </div>
  );
};

export default SignIn;

