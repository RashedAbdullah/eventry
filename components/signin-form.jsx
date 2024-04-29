"use client";

import { signinUser } from "@/actions";
import { useState } from "react";

const SigninForm = () => {
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget);
      await signinUser(formData);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      {error && <p className="my-2 text-center text-red-500">{error}</p>}
      <form className="login-form" onSubmit={handleSubmit}>
        {/* <!-- email --> */}
        <div>
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" id="email" />
        </div>
        {/* <!-- password --> */}
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>

        <button
          type="submit"
          className="btn-primary w-full mt-4 bg-indigo-600 hover:bg-indigo-800"
        >
          Login
        </button>
      </form>
    </>
  );
};

export default SigninForm;
