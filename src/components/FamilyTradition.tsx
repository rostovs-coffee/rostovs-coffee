import storefrontImage from "@/assets/storefront.jpg";

const FamilyTradition = () => {
  return (
    <section className="page-section">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center px-4 py-10">
        <div className="flex flex-col gap-4 order-2 md:order-1">
          <h2 className="section-heading">
            A Family Tradition
          </h2>
          <p className="body-text">
            Since 1979, Rostov's Coffee & Tea has been a labor of love. What
            started in a small corner of our town has grown into a cherished
            local institution, all thanks to our family's unwavering commitment
            to the art of coffee roasting and our deep connection with the
            community we serve.
          </p>
        </div>
        <div className="order-1 md:order-2">
          <div
            className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
            style={{ backgroundImage: `url(${storefrontImage})` }}
          />
        </div>
      </div>
    </section>
  );
};

export default FamilyTradition;
