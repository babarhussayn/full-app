import BestSellerPage from "./best-seller/page";
import CollectionPage from "./collections/page";
import Homepage from "./home/page";
import TrustedPartnerPage from "./trusted-partner/page";

export default function Home() {
  return (
    <section>
      <Homepage />
      <CollectionPage />
      <BestSellerPage />
      <TrustedPartnerPage />
    </section>
  );
}
