import { HeroCommon } from "@/components/HeroCommon";
import { PageWrapper } from "../../components/PageWrapper";
import Pricing from "../../components/Pricing/Pricing";

export default function PricingPage() {
  return (
    <>
      <HeroCommon title="Nuestras Suscripciones" />
      <PageWrapper>
        <section className="login-section">
          <Pricing />
        </section>
      </PageWrapper>
    </>
  );
}
