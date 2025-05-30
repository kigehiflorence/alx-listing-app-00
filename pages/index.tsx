import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/HeroSection";
import Filters from "@/components/Filters";
import ListingsSection from "@/components/ListingsSection";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <Filters />
      <ListingsSection />
    </Layout>
  );
}
