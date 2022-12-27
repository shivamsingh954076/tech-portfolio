import React from "react";

const Brand = () => {
  return (
    <>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 bg-white">
          
          <div className="mx-auto w-full text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              We grow brand
            </h2>
            <h2 className="text-3xl font-bold sm:text-4xl">

              What is Techerudite?
            </h2>

            <p className="mt-4 text-gray-900">
            Since its inception in 2014, Techerudite scrutinizes the needs of all customers and with the mass experience and talented people, we can create an online presence of your business for any type of industry. With the enormous skills in the web & mobile app development, UI/UX design, digital marketing, we manage the entire creative process and stay available to provide robust solutions to solve complex tech snags.

            </p>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
              <img
                alt="Party"
                src="/assets/images/brand.png"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="lg:py-16">
              <article className="space-y-4 text-gray-600">
                <p>
                  Our tech mind offers expert, creative, scalable & high-quality solutions that fulfill your all requirements. We act ethically, deliver excellent solutions, respect your contribution. With nurturing trust, we analyze your requirements; put our heads into it to exceed customers’ expectations. We offer best-suited services which fetch mutually profitable experience.
                </p>

                <p>
                  With the huge client base all over the world, we build brands and build a long-lasting relationship with customers who reflect our success, struggle & a journey of making “Happy Customers”.Customer satisfaction & success is our biggest achievement. We grow by making people’s dreams alive by creating outstanding websites, mobile apps, and captivating designs. This is what we want to be remembered by making a difference. Be a part of our organization, we warmly welcome challengingprojects & innovation.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Brand;
