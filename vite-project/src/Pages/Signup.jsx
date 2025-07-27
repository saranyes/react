import React from "react";
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

const Signup = () => {
  return (
    <div>
      <div class="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 space-y-6">
        <h1 class="text-2xl font-bold">Sign up to start listening</h1>

        <div class="w-full max-w-sm space-y-2 flex flex-col">
          <label class="text-sm">Email address</label>
          <input
            type="email"
            placeholder="name@domain.com"
            class="w-full px-4 py-2 rounded bg-gray-800 text-white placeholder-gray-500"
          />
          <button class="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">
            Next
          </button>
        </div>

        <p class="text-sm">or</p>

        <div class="space-y-2 w-full max-w-sm">
          <button class="w-full bg-gray-700 text-white py-2 px-4 rounded flex items-center justify-center gap-2 hover:bg-gray-600">
            <a>
              <FaGoogle />
            </a>
            Sign up with Google
          </button>
          <button class="w-full bg-gray-700 text-white py-2 px-4 rounded flex items-center justify-center gap-2 hover:bg-gray-600">
            <a>
              <FaApple />
            </a>
            Sign up with Apple
          </button>
        </div>

        <p class="text-sm">
          Already have an account?
          <a href="#" class="underline">
            Log in here.
          </a>
        </p>

        <div class="mt-6 text-xs text-gray-500 text-center">
          This site is protected by reCAPTCHA and the Google Privacy Policy and
          Terms of Service apply.
        </div>
      </div>
    </div>
  );
};

export default Signup;
