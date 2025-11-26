import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="px-4 sm:px-10 lg:px-20 py-10">
      <div className="bg-secondary/80 rounded-xl p-8 sm:p-12 text-center flex flex-col items-center gap-6">
        <h2 className="text-3xl font-bold text-foreground">
          Get Your Fresh Roast Today
        </h2>
        <p className="text-lg font-semibold text-foreground">
          Call to order:{" "}
          <a
            className="underline hover:text-primary transition-colors"
            href="tel:123-456-7890"
          >
            123-456-7890
          </a>
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-2">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:opacity-90 font-bold"
          >
            Schedule a Pickup
          </Button>
          <Button
            size="lg"
            variant="secondary"
            className="bg-background text-foreground hover:opacity-90 font-bold"
          >
            Check Delivery Area
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
