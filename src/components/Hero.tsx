import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="px-4 sm:px-10 lg:px-20 py-5">
      <div
        className="flex min-h-[60vh] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-center justify-center p-4 text-center relative"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--hero-overlay))]/40 to-[hsl(var(--hero-overlay))]/70 rounded-xl" />
        <div className="relative z-10 flex flex-col gap-6 items-center">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-white text-4xl sm:text-6xl font-black leading-tight tracking-tight">
              Artfully Roasted Since 1979.
            </h1>
            <h2 className="text-white/90 text-sm sm:text-lg font-normal">
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
