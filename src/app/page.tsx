'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const imgBackgroundImage = "/241c6a51f19c1f624895d832b17ea3b908e48ae0.png";
const imgImage17 = "/7cc22bd830e6d3a71d54f736e5488d3150a7361c.png";
const imgFrame16 = "/88084189288a5ddc3b5d32c55b9fb330837d52dc.svg";

export default function Home() {
  const [countdown, setCountdown] = useState(15);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          window.location.href = 'https://www.unipack.asia';
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-[#ffffff] relative size-full min-h-screen"
      data-name="Desktop"
      id="node-3589_12500"
    >
      <div
        className="absolute bg-center bg-cover bg-no-repeat h-full left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-full min-h-screen"
        data-name="Background Image"
        id="node-3589_12501"
        style={{ backgroundImage: `url('${imgBackgroundImage}')` }}
      />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute bg-[rgba(245,245,244,0.9)] left-1/2 rounded-[20px] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[768px] max-w-[90vw] md:w-[672px] sm:w-96"
        id="node-3589_12502"
      >
        <div className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-[20px] relative w-full">
          <div
            className="box-border content-stretch flex flex-col items-start justify-start p-0 relative rounded-[10px] shrink-0 w-full"
            id="node-3589_12503"
          >
            <div
              className="box-border content-stretch flex flex-row items-center justify-between p-[20px] relative rounded-tl-[10px] rounded-tr-[10px] shrink-0 w-full"
              id="node-3589_12504"
            >
              <div
                aria-hidden="true"
                className="absolute border border-solid border-stone-400 inset-[-0.5px] pointer-events-none rounded-tl-[10.5px] rounded-tr-[10.5px]"
              />
              <div
                className="bg-[0.09%_0%] bg-no-repeat bg-[length:334.25%_100%] h-20 shrink-0 w-[130px]"
                data-name="image 17"
                id="node-3589_12505"
                style={{ backgroundImage: `url('${imgImage17}')` }}
              />
              <div
                className="bg-[#f00027] overflow-clip relative shrink-0 size-20"
                data-name="Square Logo - Red Background"
                id="node-3589_12506"
              >
                <div
                  className="absolute h-[60.889px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[63.111px]"
                  id="node-3589_12507"
                >
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src={imgFrame16}
                  />
                </div>
              </div>
            </div>
            <div
              className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center p-[20px] relative shrink-0 w-full"
              id="node-3589_12510"
            >
              <div
                aria-hidden="true"
                className="absolute border border-solid border-stone-400 inset-[-0.5px] pointer-events-none"
              />
              <div
                className="font-['Geist',_sans-serif] leading-none not-italic relative shrink-0 text-[20px] md:text-[20px] sm:text-[16px] text-left text-stone-500 tracking-[-0.8px] md:tracking-[-0.8px] sm:tracking-[-0.64px] w-full"
                id="node-3589_12511"
              >
                <p className="block leading-none">28th July 2025</p>
              </div>
              <div
                className="font-['Geist',_sans-serif] font-semibold leading-none not-italic relative shrink-0 text-[30px] md:text-[36px] sm:text-[20px] text-left text-stone-800 tracking-[-1.44px] md:tracking-[-1.44px] sm:tracking-[-0.8px] w-full"
                id="node-3589_12512"
              >
                <p className="block leading-none">Congzhou Machinery</p>
              </div>
              <div
                className="font-['Geist',_sans-serif] leading-none not-italic relative shrink-0 text-[24px] md:text-[24px] sm:text-[20px] text-left text-stone-500 tracking-[-0.96px] md:tracking-[-0.96px] sm:tracking-[-0.8px] w-full"
                id="node-3589_12513"
              >
                <p className="block leading-none">has been acquired by</p>
              </div>
            </div>
            <div
              className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[20px] relative shrink-0 w-full"
              id="node-3589_12514"
            >
              <div
                aria-hidden="true"
                className="absolute border border-solid border-stone-400 inset-[-0.5px] pointer-events-none"
              />
              <div
                className="basis-0 font-['Geist',_sans-serif] font-semibold grow leading-none min-h-px min-w-px not-italic relative shrink-0 text-[#f00027] text-[30px] md:text-[60px] text-left md:tracking-[-2.4px] tracking-[-0.96px]"
                id="node-3589_12515"
              >
                <p className="block leading-[0.9]">UniPack Corrugated</p>
              </div>
            </div>
            <div
              className="box-border content-stretch flex flex-col gap-2.5 items-start justify-center p-[20px] relative shrink-0 w-full"
              id="node-3589_12516"
            >
              <div
                aria-hidden="true"
                className="absolute border border-solid border-stone-400 inset-[-0.5px] pointer-events-none"
              />
              <div
                className="font-['Geist',_sans-serif] leading-none min-w-full not-italic relative shrink-0 text-[16px] md:text-[18px] text-left text-stone-500 tracking-[-0.72px] md:tracking-[-0.72px] sm:tracking-[-0.64px]"
                id="node-3589_12517"
                style={{ width: "min-content" }}
              >
                <p className="block leading-[1.4]">
                  on 28th July 2025, Congzhou Packaging Machinery Mfg. Co. was
                  Acquired by UniPack Corrugated a Global Printing and Packaging
                  Engineering company. Through this Acquisition, UniPack marks
                  its Entry in the Indian and Asian Markets.
                </p>
              </div>
              <a 
                href="https://www.unipack.asia/hello/unipack-corrugated-launches-india-operations-through-strategic-acquisition-of-congzhou-machinery"
                className="inline-flex items-center justify-center rounded-md bg-stone-800 px-5 py-[15px] text-[20px] font-semibold text-white shadow transition-colors hover:bg-stone-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-950 font-['Geist',_sans-serif] tracking-[-0.8px]"
              >
                Read the Article
              </a>
            </div>
            <div
              className="box-border content-stretch flex flex-col gap-[5px] items-start justify-center p-[20px] relative shrink-0 w-full"
              id="node-3589_12520"
            >
              <div
                aria-hidden="true"
                className="absolute border border-solid border-stone-400 inset-[-0.5px] pointer-events-none"
              />
              <div
                className="font-['Geist',_sans-serif] leading-none not-italic relative shrink-0 text-[20px] md:text-[20px] sm:text-[14px] text-left text-stone-500 tracking-[-0.8px] md:tracking-[-0.8px] sm:tracking-[-0.56px] w-full"
                id="node-3589_12521"
              >
                <p className="block leading-[1.4]">
                  Please Visit the New Website of UniPack Corrugated at
                </p>
              </div>
              <motion.a
                whileHover={{ scale: 1.02 }}
                href="https://www.unipack.asia"
                className="font-['Geist',_sans-serif] font-semibold leading-none not-italic relative shrink-0 text-[#f00027] text-[20px] md:text-[24px] text-left tracking-[-0.96px] md:tracking-[-0.96px] sm:tracking-[-0.64px] w-full hover:underline"
                id="node-3589_12522"
              >
                <p className="block leading-[1.4]">https://www.unipack.asia</p>
              </motion.a>
            </div>
            <div
              className="box-border content-stretch flex flex-col md:flex-row gap-[5px] items-start md:items-center justify-start p-[20px] relative shrink-0 w-full"
              id="node-3589_12523"
            >
              <div
                aria-hidden="true"
                className="absolute border border-solid border-stone-400 inset-[-0.5px] pointer-events-none"
              />
              <div
                className="font-['Geist',_sans-serif] leading-none not-italic relative shrink-0 text-[18px] md:text-[18px] sm:text-[16px] text-left text-stone-700 tracking-[-0.72px] md:tracking-[-0.72px] sm:tracking-[-0.64px] sm:basis-0 sm:grow sm:min-h-px sm:min-w-px"
                id="node-3589_12524"
              >
                <p className="block leading-[1.4] sm:whitespace-normal">
                  You will be Redirected to this Page in
                </p>
              </div>
              <div
                className="font-['Geist',_sans-serif] font-semibold leading-none not-italic relative shrink-0 text-[24px] text-left text-nowrap text-stone-700 tracking-[-0.96px]"
                id="node-3589_12525"
              >
                <p className="block leading-[1.4] whitespace-pre">
                  {countdown} {countdown === 1 ? 'Second' : 'Seconds'}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute border border-[rgba(68,64,60,0.5)] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-2px_rgba(0,0,0,0.05)]"
        />
      </motion.div>
    </motion.div>
  );
}