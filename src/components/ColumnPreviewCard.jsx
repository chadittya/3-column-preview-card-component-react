import React from "react";

export default function ColumnPreviewCard() {
  return (
    <div className="flex md:h-screen h-[1440px] justify-center items-center box-border">
      {/* card */}
      <div className="flex flex-col md:flex-row w-[325px] md:w-[920px] md:h-[500px] bg-c-veryLightGray rounded-xl overflow-hidden">
        <div className="bg-c-brightOrange">
          <div className="flex flex-col gap-5 box-border px-12 py-12">
            <div className="bg-[url('../assets/images/icon-sedans.svg')] w-[64px] h-[40px] bg-no-repeat"></div>
            <div>
              <h1 className="uppercase text-[2.3rem]">sedans</h1>
            </div>
            <div>
              <p>
                Choose a sedan for its affordability and excellent fuel economy.
                Ideal for cruising in the city or on your next road trip.
              </p>
            </div>
            <div className="md:mt-20">
              <button className="text-c-brightOrange rounded-3xl px-6 py-3 hover:border-2 hover:border-white hover:bg-c-brightOrange hover:text-c-transparentWhite">
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div className="bg-c-darkCyan w-full">
          <div className="flex flex-col gap-5 box-border px-12 py-12">
            <div className="bg-[url('../assets/images/icon-suvs.svg')] w-[64px] h-[40px] bg-no-repeat"></div>
            <div>
              <h1 className="uppercase text-[2.3rem]">suvs</h1>
            </div>
            <div>
              <p>
                Take an SUV for ots spacious interio, power, and versatility.
                Perfect for your next family vacation and off-road adventures.
              </p>
            </div>
            <div className="md:mt-20">
              <button className="text-c-darkCyan rounded-3xl px-6 py-3 hover:border-2 hover:border-white hover:bg-c-darkCyan hover:text-c-transparentWhite">
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div className="bg-c-veryDarkCyan w-full">
          <div className="flex flex-col gap-5 box-border px-11 py-11">
            <div className="bg-[url('../assets/images/icon-luxury.svg')] w-[64px] h-[40px] bg-no-repeat"></div>
            <div>
              <h1 className="uppercase text-[2.3rem]">luxury</h1>
            </div>
            <div>
              <p>
                Cruise in the best car brands without the bloated prices. Enjoy
                the enchanced comfort of a luxury rental and arrive in style.
              </p>
            </div>
            <div className="md:mt-[5.2rem]">
              <button className="text-c-veryDarkCyan rounded-3xl px-6 py-3 hover:border-2 hover:border-white hover:bg-c-veryDarkCyan hover:text-c-transparentWhite">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
