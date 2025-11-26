import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="page-section">
      <div className="cta-section">
        <h2 className="section-heading">
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
