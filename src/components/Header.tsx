import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-border/10 bg-background/80 backdrop-blur-sm px-4 sm:px-10 lg:px-20 py-3">
      <div className="flex items-center gap-4 text-foreground">
        <div className="w-6 h-6">
          <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path
              clipRule="evenodd"
              d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z"
              fillRule="evenodd"
            />
          </svg>
        </div>
        <h2 className="text-foreground text-lg font-bold leading-tight tracking-tight">
          Rostov's Coffee & Tea
        </h2>
      </div>
      <div className="flex flex-1 justify-end gap-8">
        <nav className="hidden sm:flex items-center gap-9">
          <a
            className="text-foreground text-sm font-medium hover:text-primary transition-colors"
            href="#"
          >
            Shop
          </a>
          <a
            className="text-foreground text-sm font-medium hover:text-primary transition-colors"
            href="#"
          >
            Our Story
          </a>
          <a
            className="text-foreground text-sm font-medium hover:text-primary transition-colors"
            href="#"
          >
            Contact
          </a>
        </nav>
        <Button
          variant="ghost"
          size="icon"
          className="text-foreground hover:bg-foreground/10"
        >
          <ShoppingCart className="w-5 h-5" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
