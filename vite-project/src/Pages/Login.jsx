import React from "react";
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

const Login = () => {
  return (
    <div>
      <div class="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 space-y-6">
        <h1 class="text-2xl font-bold">Log in to your account</h1>

        <div class="w-full max-w-sm space-y-3">
          <label class="text-sm">Email address</label>
          <input
            type="email"
            placeholder="you@example.com"
            class="w-full px-4 py-2 rounded bg-gray-800 text-white placeholder-gray-500"
          />

          <label class="text-sm">Password</label>
          <input
            type="password"
            placeholder="••••••••"
            class="w-full px-4 py-2 rounded bg-gray-800 text-white placeholder-gray-500"
          />

          <div class="flex items-center justify-between text-sm text-gray-400">
            <label class="flex items-center gap-2">
              <input
                type="checkbox"
                class="form-checkbox h-4 w-4 text-green-500"
              />
              Remember me
            </label>
            <a href="#" class="underline hover:text-white">
              Forgot password?
            </a>
          </div>

          <button class="bg-green-500 text-white px-6 py-2 rounded w-full hover:bg-green-600">
            Log In
          </button>
        </div>

        <p class="text-sm">or</p>

        <div class="space-y-2 w-full max-w-sm">
          <button class="w-full bg-gray-700 text-white py-2 px-4 rounded flex items-center justify-center gap-2 hover:bg-gray-600">
            <a>
              <FaGoogle />
            </a>
            Log in with Google
          </button>
          <button class="w-full bg-gray-700 text-white py-2 px-4 rounded flex items-center justify-center gap-2 hover:bg-gray-600">
            <a>
              <FaApple />
            </a>
            Log in with Apple
          </button>
        </div>

        <p class="text-sm">
          Don't have an account?
          <a href="#" class="underline">
            Sign up here.
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

export default Login;
