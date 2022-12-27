import React from "react";

const Vission = () => {
  return (
    <>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
              <img
                alt="Party"
                src="/assets/images/vission.png"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="lg:py-16">
              <article className="space-y-4 text-gray-600">
                <div className="max-w-3xl">
                  <h2 className="text-3xl font-bold sm:text-4xl">
                   Our Vission
                  </h2>
                </div>
                <p>
                We believe in serving quality services which can meet customersrequirements. Our vision is to bring out the best in people, technology andprocesses with top-notch quality. We build customer experience. Our mission is to place a consistent innovation to bring about an ultimate crest of triumph as our service.
                </p>

               
              </article>
              
            </div>
           
          </div>
          <div className="flex justify-end">
        <img  src="/assets/images/vissio.png" alt="" />
        </div>
        </div>
        
      </section>
    </>
  );
};

export default Vission;
