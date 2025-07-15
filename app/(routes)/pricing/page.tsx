import PricingCard from "./_components/PricingCard";

function Pricing() {
  return (
    <div className="xl:px-20 px-6 py-16 bg-gray-50 text-gray-800">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold mb-2">Pricing</h2>
        <p className="text-gray-600">
          See pricing for our Individual, Team , and Enterprise plans.
        </p>
      </div>
      <PricingCard />
    </div>
  );
}

export default Pricing;
