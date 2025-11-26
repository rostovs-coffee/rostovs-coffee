import { Button } from "@/components/ui/button";

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
}

const ProductCard = ({ image, title, description }: ProductCardProps) => {
  return (
    <div className="flex h-full flex-1 flex-col gap-4 rounded-xl bg-card shadow-[0_4px_12px_rgba(0,0,0,0.05)] min-w-64">
      <div
        className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-t-xl"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="flex flex-col flex-1 justify-between p-4 pt-0 gap-4">
        <div>
          <p className="text-card-foreground text-base font-medium mb-2">
            {title}
          </p>
          <p className="text-card-foreground/70 text-sm">
            {description}
          </p>
        </div>
        <Button
          variant="outline"
          className="w-full bg-background hover:bg-muted text-foreground border-border/20"
        >
          View Details
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
