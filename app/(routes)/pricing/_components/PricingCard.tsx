export default function PricingCard() {
  return (
    <div className="xl:px-20 px-6 py-16 bg-gray-50 text-gray-800">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Individual Plan */}
        <div className="bg-white p-8 rounded-2xl shadow-md border hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-4">Individual</h3>
          <p className="text-3xl font-bold mb-4">
            $9<span className="text-base font-medium">/mo</span>
          </p>
          <ul className="mb-6 space-y-2 text-sm text-gray-600">
            <li>✔️ 1 user</li>
            <li>✔️ Basic support</li>
            <li>✔️ 5 projects</li>
          </ul>
          <button className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>
        {/* Team Plan */}
        <div className="bg-white p-8 rounded-2xl shadow-md border hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-4">Team Plan</h3>
          <p className="text-3xl font-bold mb-4">
            $25<span className="text-base font-medium">/mo</span>
          </p>
          <ul className="mb-6 space-y-2 text-sm text-gray-600">
            <li>✔️ 5 user</li>
            <li>✔️ Advance support</li>
            <li>✔️ 20 projects</li>
          </ul>
          <button className="w-full bg-white text-blue-600 font-semibold py-2 rounded-xl hover:bg-gray-100 transition">
            Choose Plan
          </button>
        </div>
        {/* Enterprise plans */}
        <div className="bg-white p-8 rounded-2xl shadow-md border hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-4">Individual</h3>
          <p className="text-3xl font-bold mb-4">
            $45<span className="text-base font-medium">/mo</span>
          </p>
          <ul className="mb-6 space-y-2 text-sm text-gray-600">
            <li>✔️ Unlimited users</li>
            <li>✔️ 24/7 support</li>
            <li>✔️ Unlimited projects</li>
          </ul>
          <button className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  );
}
