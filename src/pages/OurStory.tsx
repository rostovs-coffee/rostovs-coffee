import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import storefrontImage from "@/assets/storefront.jpg";

const OurStory = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="flex flex-1 justify-center py-5">
        <div className="flex flex-col w-full max-w-4xl px-4">
          {/* Hero Section */}
          <section className="mb-12">
            <div 
              className="hero-container overflow-hidden"
              style={{ backgroundImage: `url(${storefrontImage})` }}
            >
              <div className="hero-overlay" />
              <div className="relative z-10 flex flex-col gap-2">
                <h1 className="hero-title">
                  Crafting Our Story Since 1979
                </h1>
                <h2 className="hero-subtitle">
                  A family legacy in every bean.
                </h2>
              </div>
            </div>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-8 md:gap-12">
            {/* Timeline Sidebar */}
            <aside className="hidden md:block sticky top-24 self-start">
              <div className="grid grid-cols-[30px_1fr] gap-x-2">
                <div className="flex flex-col items-center gap-1 pt-3">
                  <div className="size-3 rounded-full bg-primary"></div>
                  <div className="w-[1.5px] bg-primary/30 h-2 grow"></div>
                </div>
                <div className="flex flex-1 flex-col py-3">
                  <p className="text-primary text-base font-bold leading-normal">The Beginning</p>
                  <p className="text-muted-foreground text-sm font-normal leading-normal">1979 - 1980s</p>
                </div>
                
                <div className="flex flex-col items-center gap-1">
                  <div className="w-[1.5px] bg-primary/30 h-2"></div>
                  <div className="size-3 rounded-full bg-primary/30"></div>
                  <div className="w-[1.5px] bg-primary/30 h-2 grow"></div>
                </div>
                <div className="flex flex-1 flex-col py-3">
                  <p className="text-base font-medium leading-normal">Community</p>
                  <p className="text-muted-foreground text-sm font-normal leading-normal">1990s</p>
                </div>
                
                <div className="flex flex-col items-center gap-1">
                  <div className="w-[1.5px] bg-primary/30 h-2"></div>
                  <div className="size-3 rounded-full bg-primary/30"></div>
                  <div className="w-[1.5px] bg-primary/30 h-2 grow"></div>
                </div>
                <div className="flex flex-1 flex-col py-3">
                  <p className="text-base font-medium leading-normal">New Generation</p>
                  <p className="text-muted-foreground text-sm font-normal leading-normal">2000s</p>
                </div>
                
                <div className="flex flex-col items-center gap-1 pb-3">
                  <div className="w-[1.5px] bg-primary/30 h-2"></div>
                  <div className="size-3 rounded-full bg-primary/30"></div>
                </div>
                <div className="flex flex-1 flex-col py-3">
                  <p className="text-base font-medium leading-normal">Our Philosophy</p>
                  <p className="text-muted-foreground text-sm font-normal leading-normal">Today</p>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex flex-col gap-12">
              {/* The Beginning Section */}
              <section>
                <h2 className="section-heading text-primary">
                  The Beginning (1979-80s)
                </h2>
                <div className="mt-4 space-y-4 body-text">
                  <p>
                    It all started with a simple vision: to treat coffee roasting as an art form. Our founder, 
                    driven by a passion for consistent, flavorful beans, opened the first Rostov's Coffee & Tea 
                    right here, laying the foundation for a community-driven legacy.
                  </p>
                  <p>
                    With a vintage Probat roaster and a handful of carefully sourced beans, the journey began to 
                    create a space that felt like home for every coffee lover who walked through the door.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                  <div className="rounded-lg aspect-[4/3] bg-muted overflow-hidden">
                    <img 
                      className="w-full h-full object-cover" 
                      src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80" 
                      alt="Vintage coffee roasting equipment"
                    />
                  </div>
                  <div className="rounded-lg aspect-[4/3] bg-muted overflow-hidden">
                    <img 
                      className="w-full h-full object-cover" 
                      src="https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&q=80" 
                      alt="Coffee shop founder"
                    />
                  </div>
                </div>
              </section>

              {/* Quote Section */}
              <section className="my-10 border-l-4 border-primary/50 pl-6 py-4">
                <blockquote className="text-xl italic leading-relaxed">
                  "Coffee is more than a drink. It's an experience, a memory, a moment of warmth. 
                  We've always strived to be a part of that perfect moment."
                </blockquote>
                <cite className="block text-right mt-4 not-italic font-medium">
                  - Michael Rostov, Founder
                </cite>
              </section>

              {/* Growing with Community Section */}
              <section>
                <h2 className="section-heading text-primary">
                  Growing with the Community (1990s)
                </h2>
                <div className="mt-4 space-y-4 body-text">
                  <p>
                    The 90s saw Rostov's become a local staple. We became the backdrop for first dates, 
                    study sessions, and quiet morning rituals. Our family grew, not just by blood, but by 
                    the loyal customers who shared their stories with us over a cup of our signature roast. 
                    We listened, we learned, and we roasted every batch with our community in mind.
                  </p>
                </div>
              </section>

              {/* New Generation Section */}
              <section>
                <h2 className="section-heading text-primary">
                  A New Generation (2000s - Present)
                </h2>
                <div className="mt-4 space-y-4 body-text">
                  <p>
                    As the new millennium dawned, the torch was passed to the next generation. We embraced 
                    new techniques and explored global flavors, but our core philosophy remained unchanged: 
                    honor the bean, respect the process, and cherish the customer. We've modernized our craft 
                    while preserving the art form that started it all.
                  </p>
                </div>

                {/* Team Members */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                  <div className="flex flex-col items-center text-center card-muted">
                    <div className="w-24 h-24 rounded-full bg-muted mb-4 ring-2 ring-primary/50 overflow-hidden">
                      <img 
                        className="w-full h-full object-cover" 
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" 
                        alt="David Rostov"
                      />
                    </div>
                    <h3 className="font-bold text-lg">David Rostov</h3>
                    <p className="text-sm text-muted-foreground">Head Roaster</p>
                    <p className="text-sm mt-2">
                      "I grew up with the smell of roasting coffee. It's in my blood. My goal is to perfect 
                      the legacy my father built."
                    </p>
                  </div>
                  
                  <div className="flex flex-col items-center text-center card-muted">
                    <div className="w-24 h-24 rounded-full bg-muted mb-4 ring-2 ring-primary/50 overflow-hidden">
                      <img 
                        className="w-full h-full object-cover" 
                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80" 
                        alt="Sarah Rostov"
                      />
                    </div>
                    <h3 className="font-bold text-lg">Sarah Rostov</h3>
                    <p className="text-sm text-muted-foreground">Community Manager</p>
                    <p className="text-sm mt-2">
                      "This shop is more than a business; it's our extended family's living room. I love 
                      hearing everyone's stories."
                    </p>
                  </div>
                </div>
              </section>

              {/* CTA Section */}
              <section className="mt-10 cta-section-primary">
                <h2 className="section-heading text-primary">
                  Taste the Legacy
                </h2>
                <p className="mt-2 max-w-2xl mx-auto body-text-lg">
                  Our story is best told through the taste of our coffee. Become a part of our journey.
                </p>
                <Button 
                  size="lg" 
                  className="mt-6 bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Explore Our Shop
                </Button>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OurStory;
