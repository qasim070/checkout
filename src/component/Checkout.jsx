import React from "react";

const Checkout = () => {
  return (
    <>
      <div
        class="flex flex-wrap w-full"
      >
        <div class="w-full lg:w-7/12">
          <div className="paypal-btn">
            <button>
              Buy Now with{" "}
              <img src="https://checkout.checkify-demo.com/icons/paypal-icon.svg" />
            </button>
          </div>
          <div class="jss219">
            <span class="jss220">Or pay another way below</span>
          </div>
          <div className="left-checkout">
            <div class="jss28">
              <h1>Shipping Details</h1>
            </div>
            <div class="jss29">
              <div class="jss32">
                <span class="jss33">
                  🔥 Strong demand! Complete your order before it's too late!
                </span>
              </div>
            </div>
            <div className="rounded-lg bg-white p-4 shadow-lg lg:col-span-3">
              <form action="#" className="space-y-4">
                <div className="form-input">
                  <label className="block text-left" htmlFor="name">
                    Email Address
                  </label>
                  <input
                    className="mt-1 w-full text-sm"
                    placeholder="Email Address"
                    type="email"
                    id="name"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="form-input">
                    <label className="block text-left" htmlFor="email">
                      First Name
                    </label>
                    <input
                      className="mt-1 w-full text-sm"
                      placeholder="First Name"
                      type="text"
                      id="email"
                    />
                  </div>

                  <div className="form-input">
                    <label className="block text-left" htmlFor="phone">
                      Last Name
                    </label>
                    <input
                      className="mt-1 w-full text-sm"
                      placeholder="Last Name"
                      type="text"
                      id="phone"
                    />
                  </div>
                </div>

                <div className="form-input">
                  <label className="block text-left" htmlFor="name">
                    Address
                  </label>
                  <input
                    className="mt-1 w-full text-sm"
                    placeholder="Address"
                    type="text"
                    id="name"
                  />
                </div>

                <div className="form-input">
                  <label className="block text-left" htmlFor="name">
                    Apartment, suit, etc. (optional)
                  </label>
                  <input
                    className="mt-1 w-full text-sm"
                    placeholder="Apartment, suit, etc."
                    type="text"
                    id="name"
                  />
                </div>
                <div className="form-input">
                  <label className="block text-left" htmlFor="name">
                    Phone (optional)
                  </label>
                  <input
                    className="mt-1 w-full text-sm"
                    placeholder="3222222"
                    type="text"
                    id="name"
                  />
                </div>
              </form>
            </div>
            <div className="flex items-center rounded-lg bg-white p-4 shadow-lg mt-5">
              <input
                id="offers"
                type="checkbox"
                className="w-4 h-4 text-green-500 bg-white border border-gray-300 rounded-sm focus:ring-green-500 cursor-pointer"
                defaultChecked
              />
              <label
                htmlFor="offers"
                className="ml-3 text-sm font-medium"
              >
                Sign up for exclusive offers and news
              </label>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-5/12"></div>
      </div>
    </>
  );
};

export default Checkout;
