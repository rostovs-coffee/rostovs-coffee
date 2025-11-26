import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="page-section py-5">
      <div
        className="hero-container"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="hero-overlay" />
        <div className="relative z-10 flex flex-col gap-6 items-center">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="hero-title">
              Artfully Roasted Since 1979.
            </h1>
            <h2 className="hero-subtitle">
              Generations of passion in every cup.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:opacity-90 font-bold">
              Shop Our Coffee
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="bg-background text-foreground hover:opacity-90 font-bold"
            >
              Learn Our Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
