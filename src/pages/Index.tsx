import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FanFavorites from "@/components/FanFavorites";
import FamilyTradition from "@/components/FamilyTradition";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <FanFavorites />
        <FamilyTradition />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
