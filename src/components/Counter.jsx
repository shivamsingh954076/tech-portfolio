import React from "react";

const Counter = () => {
  return (
    <>
    <div className="mx-auto max-w-4xl py-5 text-center">
            <h2 className="text-3x2 font-bold sm:text-4xl py-5 counter-heading">
             What do we do to rememberd ?
            </h2>

            <p className="mt-2 text-gray-900">
            To connect smart actions and execute it with laser-like focus is our success mantra.  Exploring client’s business for online exposure is an ultimately worthy goal for us. We want to be a voice of client’s success. 
            </p>
            <div className="w-full flex justify-center">
              <button type="button"  class="text-white bg-purple-700 hover:bg-orange-800 focus:outline-none focus:ring-4 focus:ring-orange-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-purple-900">Submit</button>
            </div>
          </div>

      <div class="mt-8 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 px-4">
        <a
          class="block rounded-xl  p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
          href="/services/digital-campaigns"
        >
           <div className="w-full flex justify-center">
            <img src="/assets/images/bulb.png"/>
            </div>
        
        </a>

        <a
          class="block rounded-xl  p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
          href="/services/digital-campaigns"
        >
        <div className="w-full flex justify-center">
            <img src="/assets/images/men.png"/>
            </div>

        </a>

        <a
          class="block rounded-xl  p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
          href="/services/digital-campaigns"
        >
        <div className="w-full flex justify-center">
            <img src="/assets/images/coffee.png"/>
            </div>

         
        </a>

        <a
          class="block rounded-xl  p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
          href="/services/digital-campaigns"
        >
         <div className="w-full flex justify-center">
            <img src="/assets/images/rentitionrate.png"/>
            </div>

          
        </a>
      </div>
    </>
  );
};

export default Counter;
