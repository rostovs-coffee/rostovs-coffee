import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logo from "@/assets/ros-logo.svg";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-border/10 bg-background/80 backdrop-blur-sm px-4 sm:px-10 lg:px-20 py-3">
      <Link to="/" className="flex items-center gap-4 text-foreground">
        <img src={logo} alt="Rostov's Coffee & Tea" className="h-8" />
      </Link>
      <div className="flex flex-1 justify-end gap-8">
        <nav className="hidden sm:flex items-center gap-9">
          <a
            className="text-foreground text-sm font-medium hover:text-primary transition-colors"
            href="#"
          >
            Shop
          </a>
          <Link
            className="text-foreground text-sm font-medium hover:text-primary transition-colors"
            to="/our-story"
          >
            Our Story
          </Link>
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
