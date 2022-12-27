import React from "react";

const Area = () => {
  return (
    <>
      <section className="bg-gray-50 text-black">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Our Area Expertise
            </h2>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <a
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
              href="/services/digital-campaigns"
            >
              <div className="w-full flex justify-center">
                <img src="/assets/images/web.png" />
              </div>
              <h2 className="mt-4 text-xl font-semi-bold text-black text-center">
                Web Development
              </h2>
            </a>

            <a
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
              href="/services/digital-campaigns"
            >
              <div className="w-full flex justify-center">
                <img src="/assets/images/ecommerce.png" />
              </div>
              <h2 className="mt-4 text-xl font-semi-bold text-black text-center">
                eCommerce Web Development
              </h2>


            </a>

            <a
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
              href="/assets/images/mobileapplication.png"
            >
              <div className="w-full flex justify-center">
                <img src="/assets/images/mobileapplication.png" />
              </div>
              <h2 className="mt-4 text-xl font-semi-bold text-black text-center">
                Mobile Application
              </h2>




            </a>

            <a
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
              href="/services/digital-campaigns"
            >
              <div className="w-full flex justify-center">
                <img src="/assets/images/ui/ux.png" />
              </div>
              <h2 className="mt-4 text-xl font-semi-bold text-black text-center">
                Ui/Ux designing
              </h2>




            </a>

            <a
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
              href="/services/digital-campaigns"
            >
              <div className="w-full flex justify-center">
                <img src="/assets/images/digitialmarketing.png" />
              </div>
              <h2 className="mt-4 text-xl font-semi-bold text-black text-center">
                Digital Marketing
              </h2>




            </a>

            <a
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
              href="/services/digital-campaigns"
            >
              <div className="w-full flex justify-center">
                <img src="/assets/images/appmaintaince.png" />
              </div>
              <h2 className="mt-4 text-xl font-semi-bold text-black text-center">
                Website&App Maintences
              </h2>




            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Area;
