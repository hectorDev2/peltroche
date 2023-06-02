import Pricing from "../components/Pricing/Pricing";

export default function PricingPage() {
  return (
    <section className="login-section">
      <div className="login-banner relative justify-center flex">
        <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
          Pricing
        </h1>
      </div>
      <Pricing />
    </section>
  );
}
