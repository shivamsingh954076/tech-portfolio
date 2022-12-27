import React from "react";

const Testimonial = () => {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-screen-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-4xl py-5 text-center">
            <h2 className="text-3x2 font-bold sm:text-4xl py-5 counter-testmonials">
             Few Word From Our Clients
             <p className="mt-4 text-gray-900">
             Some valuable words from our loving and ever growing customers.
             
            </p>  
            </h2>

            <p className="mt-4 text-gray-900">
            For my react native applications, Tejash and his team has provided me very professional and captivative app. They worked dedicatedly and keep me updated with project updates. I think that is the best support from the team for me. Thank you for the best application.
            </p>
          </div>

         
        </div>
        <div className="mt-8 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4 px-4">
        <a
          className="block rounded-xl  p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
          href="/services/digital-campaigns"
        >
           <div className="w-full flex justify-center">
            <img src="/assets/images/sizemedia.png"/>
            </div>
        
        </a>

        <a
          className="block rounded-xl  p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
          href="/services/digital-campaigns"
        >
        <div className="w-full flex justify-center">
            <img src="/assets/images/kanvas.png"/>
            </div>

        </a>

        <a
          className="block rounded-xl  p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
          href="/services/digital-campaigns"
        >
        <div className="w-full flex justify-center">
            <img src="/assets/images/olympus.png"/>
            </div>

         
        </a>

        <a
          className="block rounded-xl  p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
          href="/services/digital-campaigns"
        >
         <div className="w-full flex justify-center">
            <img src="/assets/images/ohtravel.png"/>
            </div>

          
        </a>
      </div>
      </section>
    </>
  );
};

export default Testimonial;
