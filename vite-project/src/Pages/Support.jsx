import React from "react";
import Navbar from "../Components/Navbar";

const Support = () => {
  return (
    <div>
      <Navbar />
      <div class=" text-white min-h-screen font-stretch-expanded flex flex-col justify-around">
        {/* <!-- 💬 Hero Section --> */}
        <div class="text-center py-12 px-4">
          <h1 class="text-3xl font-bold mb-4">How can we help you?</h1>
          <a href="#" class="text-amber-50 underline">
            Log in for faster help
          </a>

          {/* <!-- 🔍 Search Bar --> */}
          <div class="mt-6 relative max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Search help topics..."
              class="w-full px-4 py-3 rounded bg-gray-800 text-white focus:outline-none"
            />
            <svg
              class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.387a1 1 0 01-1.414 1.414l-4.387-4.387zM10 16a6 6 0 100-12 6 6 0 000 12z" />
            </svg>
          </div>
        </div>

        {/* <!-- 📚 Help Topics --> */}
        <div class="max-w-2xl mx-auto px-6 pb-12 w-200">
          <details class="bg-gray-800 p-4 rounded mb-4 cursor-pointer open:bg-gray-700">
            <summary class="font-semibold">Payments & Billing</summary>
            <p class="mt-2 text-sm text-gray-300">
              Everything about payment methods, invoices, and billing cycles.
            </p>
          </details>

          <details class="bg-gray-800 p-4 rounded mb-4 cursor-pointer open:bg-gray-700">
            <summary class="font-semibold">Manage Your Account</summary>
            <p class="mt-2 text-sm text-gray-300">
              Learn how to update email, password, or user info.
            </p>
          </details>

          <details class="bg-gray-800 p-4 rounded mb-4 cursor-pointer open:bg-gray-700">
            <summary class="font-semibold">Devices & Troubleshooting</summary>
            <p class="mt-2 text-sm text-gray-300">
              Support for mobile, desktop, and smart devices.
            </p>
          </details>
        </div>

        {/* <!-- 📎 Footer --> */}
        <div class="text-center py-10 bg-gray-900 text-gray-500">
          Quick Help & Resources
        </div>
      </div>
    </div>
  );
};

export default Support;
