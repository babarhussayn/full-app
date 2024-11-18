import BestSellerPage from "./pages/best-seller/page";
import CollectionPage from "./pages/collections/page";
import Homepage from "./pages/home/page";
import TrustedPartnerPage from "./pages/trusted-partner/page";

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
