/* eslint-disable react/no-unescaped-entities */

import Link from "next/link";
import SigninForm from "./signin-form";

const SigninPage = () => {
  return (
    <div>
      <main className="">
        <section className="h-screen grid place-items-center">
          <div className="max-w-[450px] w-full mx-auto p-6 border border-gray-700/20 rounded-md">
            <h4 className="font-bold text-2xl">Sign in</h4>
            <SigninForm />

            <span className="text-center text-xs text-gray-500">
              Don't have an account ?
              <Link href="/signup" className="underline hover:text-indigo-600">
                {" "}Register
              </Link>
            </span>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SigninPage;
