import React from "react";

const Premiumcard = () => {
  return (
    <div>
      <div class="bg-black p-8 h-screen">
        <div class="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto h-100">
          {/* <!-- Basic Plan --> */}
          <div class="bg-white rounded-lg shadow-md p-6 flex flex-col hover:bg-amber-100">
            <h3 class="text-lg font-semibold text-gray-700 mb-2">Basic</h3>
            <p class="text-4xl font-bold text-blue-600 mb-4">
              ₹499<span class="text-base text-gray-500">/mo</span>
            </p>
            <ul class="text-sm text-gray-600 space-y-2 flex-grow">
              <li>✔ 10 Projects</li>
              <li>✔ Email Support</li>
              <li>✔ Basic Analytics</li>
            </ul>
            <button class="mt-4 bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
              Choose Basic
            </button>
          </div>

          {/* <!-- Pro Plan --> */}
          <div class="bg-white rounded-lg shadow-lg border-2 border-blue-600 p-6 flex flex-col   hover:bg-amber-100 ">
            <h3 class="text-lg font-semibold text-gray-700 mb-2">Pro</h3>
            <p class="text-4xl font-bold text-blue-600 mb-4">
              ₹999<span class="text-base text-gray-500">/mo</span>
            </p>
            <ul class="text-sm text-gray-600 space-y-2 flex-grow">
              <li>✔ 50 Projects</li>
              <li>✔ Priority Support</li>
              <li>✔ Advanced Analytics</li>
              <li>✔ Custom Branding</li>
            </ul>
            <button class="mt-4 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 ">
              Choose Pro
            </button>
          </div>

          {/* <!-- Enterprise Plan --> */}
          <div class="bg-white rounded-lg shadow-md p-6 flex flex-col  hover:bg-amber-100 ">
            <h3 class="text-lg font-semibold text-gray-700 mb-2">Enterprise</h3>
            <p class="text-4xl font-bold text-blue-600 mb-4">
              ₹1999<span class="text-base text-gray-500">/mo</span>
            </p>
            <ul class="text-sm text-gray-600 space-y-2 flex-grow">
              <li>✔ Unlimited Projects</li>
              <li>✔ Dedicated Manager</li>
              <li>✔ Team Access</li>
              <li>✔ Premium Features</li>
            </ul>
            <button class="mt-4 bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
              Choose Enterprise
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Premiumcard;
