import React from "react";
import { ArrowRight } from "lucide-react";

function HeroSection() {
  return (
    <>
      <div className="relative w-full">
        <div className="relative isolate z-0 bg-white px-6 pt-14 lg:px-8">
          <div className="relative mx-auto max-w-2xl py-24">
            <div className="absolute inset-x-0 -top-[4rem] -z-10 transform-gpu overflow-hidden blur-3xl md:-top-[10rem]">
              <svg
                className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
                viewBox="0 0 1155 678"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
                  fillOpacity=".3"
                  d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                />
                <defs>
                  <linearGradient
                    id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                    x1="1155.49"
                    x2="-78.208"
                    y1=".177"
                    y2="474.645"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#9089FC" />
                    <stop offset={1} stopColor="#FF80B5" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Unleashing the Next Generation of Card Solutions
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-2">
                <button
                  type="button"
                  className="flex items-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  <span>Unlock your card</span>
                  <ArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="justify-center items-center bg-white flex flex-col px-16 py-12 max-md:px-5">
        <div className="justify-between items-stretch flex w-full max-w-[1216px] gap-5 my-12 p-2 max-md:max-w-full max-md:flex-wrap max-md:my-10">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b40ca4e5b16358e81dda4e99745dd0bdf70447fab485ec2187fb75dc1f69e6f9?apiKey=105eeb8eb07c4151bab4adc148e10788&"
            className="aspect-[4.08] object-contain object-center w-[98px] justify-center items-center overflow-hidden shrink-0 max-w-full"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/123ee76ef7064f154575c0a2f4b173dda5da72eb3903099bd7c3c2f2fbfed3e8?apiKey=105eeb8eb07c4151bab4adc148e10788&"
            className="aspect-[2.83] object-contain object-center w-[68px] overflow-hidden shrink-0 max-w-full"
          />
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2e1c0aa3d4d6d5241c50cb9c7c47a60c98a2aa096cfb8dcc175584a603aece70?apiKey=105eeb8eb07c4151bab4adc148e10788&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2e1c0aa3d4d6d5241c50cb9c7c47a60c98a2aa096cfb8dcc175584a603aece70?apiKey=105eeb8eb07c4151bab4adc148e10788&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2e1c0aa3d4d6d5241c50cb9c7c47a60c98a2aa096cfb8dcc175584a603aece70?apiKey=105eeb8eb07c4151bab4adc148e10788&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2e1c0aa3d4d6d5241c50cb9c7c47a60c98a2aa096cfb8dcc175584a603aece70?apiKey=105eeb8eb07c4151bab4adc148e10788&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2e1c0aa3d4d6d5241c50cb9c7c47a60c98a2aa096cfb8dcc175584a603aece70?apiKey=105eeb8eb07c4151bab4adc148e10788&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2e1c0aa3d4d6d5241c50cb9c7c47a60c98a2aa096cfb8dcc175584a603aece70?apiKey=105eeb8eb07c4151bab4adc148e10788&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2e1c0aa3d4d6d5241c50cb9c7c47a60c98a2aa096cfb8dcc175584a603aece70?apiKey=105eeb8eb07c4151bab4adc148e10788&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2e1c0aa3d4d6d5241c50cb9c7c47a60c98a2aa096cfb8dcc175584a603aece70?apiKey=105eeb8eb07c4151bab4adc148e10788&"
            className="aspect-[5.17] object-contain object-center w-[124px] justify-center items-center overflow-hidden shrink-0 max-w-full"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/50e53bd1518a8d0f15a78332fc3cd0ad861ce9a26f405a943dca9553a00d1a5e?apiKey=105eeb8eb07c4151bab4adc148e10788&"
            className="aspect-[4.42] object-contain object-center w-[106px] overflow-hidden shrink-0 max-w-full"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9dbf5fa1d33a8f41ef6729b34ecf78e91c65f57a626901089b2fd07d8a3d30e0?apiKey=105eeb8eb07c4151bab4adc148e10788&"
            className="aspect-[4.08] object-contain object-center w-[98px] overflow-hidden shrink-0 max-w-full"
          />
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3253084e5360fe6b13b949d23ca9ffdfec79d248b945ec143557610a9e04a665?apiKey=105eeb8eb07c4151bab4adc148e10788&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3253084e5360fe6b13b949d23ca9ffdfec79d248b945ec143557610a9e04a665?apiKey=105eeb8eb07c4151bab4adc148e10788&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3253084e5360fe6b13b949d23ca9ffdfec79d248b945ec143557610a9e04a665?apiKey=105eeb8eb07c4151bab4adc148e10788&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3253084e5360fe6b13b949d23ca9ffdfec79d248b945ec143557610a9e04a665?apiKey=105eeb8eb07c4151bab4adc148e10788&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3253084e5360fe6b13b949d23ca9ffdfec79d248b945ec143557610a9e04a665?apiKey=105eeb8eb07c4151bab4adc148e10788&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3253084e5360fe6b13b949d23ca9ffdfec79d248b945ec143557610a9e04a665?apiKey=105eeb8eb07c4151bab4adc148e10788&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3253084e5360fe6b13b949d23ca9ffdfec79d248b945ec143557610a9e04a665?apiKey=105eeb8eb07c4151bab4adc148e10788&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3253084e5360fe6b13b949d23ca9ffdfec79d248b945ec143557610a9e04a665?apiKey=105eeb8eb07c4151bab4adc148e10788&"
            className="aspect-[5] object-contain object-center w-[120px] justify-center items-center overflow-hidden shrink-0 max-w-full"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d1c0ba7e9e6b0cb65e3f1323eac516ece26bce3859cd3bbf2d70383f6d61bb72?apiKey=105eeb8eb07c4151bab4adc148e10788&"
            className="aspect-[4.25] object-contain object-center w-[102px] overflow-hidden shrink-0 max-w-full"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ba587850a0485b2cb3fec68cc863985908b0b60ae9efd7c7eccf5cbcf71d556f?apiKey=105eeb8eb07c4151bab4adc148e10788&"
            className="aspect-[5.5] object-contain object-center w-[132px] overflow-hidden shrink-0 max-w-full"
          />
        </div>
      </div>
    </>
  );
}

export default HeroSection;
