import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-10 lg:px-20 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-lg">Rostov's Coffee & Tea</h3>
            <p className="text-sm text-background/70">
              Artfully roasted since 1979.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-lg">Visit Us</h3>
            <p className="text-sm text-background/70">
              123 Coffee Bean Lane
              <br />
              Roastville, USA 12345
            </p>
            <p className="text-sm text-background/70">
              Mon - Sat: 7am - 6pm
              <br />
              Sun: 8am - 4pm
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-lg">Connect</h3>
            <div className="flex gap-4">
              <a
                className="text-background/70 hover:text-primary transition-colors"
                href="#"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                className="text-background/70 hover:text-primary transition-colors"
                href="#"
                aria-label="Twitter"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                className="text-background/70 hover:text-primary transition-colors"
                href="#"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-background/20 pt-8 text-center text-sm text-background/70">
          <p>© 2024 Rostov's Coffee & Tea. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
