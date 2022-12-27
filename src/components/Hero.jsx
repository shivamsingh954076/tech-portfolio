import React from "react";

const Hero = () => {
  return (
    <>
      <div className="isolate bg-white navbar">
        <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">

        </div>
        <div className="px-6 pt-6 lg:px-8">
          <div>
            <nav
              className="flex h-9 items-center justify-between"
              aria-label="Global"
            >
              <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
                <a href="#" className="-m-1.5 p-1.5">
                  {/* <span className="sr-only">Your Company</span> */}
                  <img src="/assets/images/footerimage.png" />


                </a>
              </div>

              <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
                <a
                  href="#"
                  className="font-semibold text-gray-900 hover:text-gray-900"
                >
                  Home
                </a>


                <a
                  href="#"
                  className="font-semibold text-gray-900 hover:text-gray-900"
                >
                  What We Do
                </a>

                <a
                  href="#"
                  className="font-semibold text-gray-900 hover:text-gray-900"
                >
                  Hirexpertise
                </a>

                <a
                  href="#"
                  className="font-semibold text-gray-900 hover:text-gray-900"
                >
                  Company
                </a>
                <a
                  href="#"
                  className="font-semibold text-gray-900 hover:text-gray-900"
                >
                  SAYHELLO!
                </a>
                <svg className="h-6 w-8 text-red-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>

                <svg className="h-6  w-8 text-red-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </div>
              
            </nav>
          
            <div role="dialog" aria-modal="true">
              <div
                focus="true"
                className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden"
              >
                <div className="flex h-9 items-center justify-between">
                  <div className="flex">
                    <a href="#" className="-m-1.5 p-1.5">
                      <span className="sr-only">Your Company</span>
                      <img
                        className="h-8"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="flex">
                    <button
                      type="button"
                      className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                      <span className="sr-only">Close menu</span>


                    </button>
                  </div>
                </div>
                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-6">
                      <a
                        href="#"
                        className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                      >
                        Product
                      </a>

                      <a
                        href="#"
                        className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                      >
                        Features
                      </a>

                      <a
                        href="#"
                        className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                      >
                        Marketplace
                      </a>

                      <a
                        href="#"
                        className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                      >
                        Company
                      </a>
                    </div>
                    <div className="py-6">
                      <a
                        href="#"
                        className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10"
                      >
                        Log in
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <main>
          <div className="relative px-6 lg:px-8">

            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
              <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center py-5 text-center nav-section">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 nav-heading">About Us
                
                </h1>
                <p className="mb-8 leading-relaxed w-2/4">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>

              </div>
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img className="object-cover object-center rounded" alt="hero" src="/assets/images/Team.png" />
              </div>
            </div>
           
          </div>
        </main>
      </div>
    </>
  );
};

export default Hero;
