"use client";

import { Card, CardHeader, CardFooter, Image } from "@nextui-org/react";

export default function ProjectsCards() {
  const fitG = "/fitG.png";
  const coreDelk = "/coreDelk.png";

  return (
    <div className="gap-8 grid grid-cols-12 grid-rows-2 px-20">
      {/* Card 1 */}
      <div className="col-span-12 sm:col-span-4">
        <Card className="h-[300px] transform transition-all duration-300 hover:scale-105 hover:shadow-xl floating-card">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              What to watch
            </p>
            <h4 className="text-white font-medium text-large">
              Stream the Acme event
            </h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-110 transition duration-300"
            src="https://nextui.org/images/card-example-4.jpeg"
          />
        </Card>
      </div>

      {/* Card 2 */}
      <div className="col-span-12 sm:col-span-4">
        <Card className="h-[300px] transform transition-all duration-300 hover:scale-105 hover:shadow-xl floating-card">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              Plant a tree
            </p>
            <h4 className="text-white font-medium text-large">
              Contribute to the planet
            </h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-110 transition duration-300"
            src="https://nextui.org/images/card-example-3.jpeg"
          />
        </Card>
      </div>

      {/* Card 3 */}
      <div className="col-span-12 sm:col-span-4">
        <Card className="h-[300px] transform transition-all duration-300 hover:scale-105 hover:shadow-xl floating-card">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              Supercharged
            </p>
            <h4 className="text-white font-medium text-large">
              Creates beauty like a beast
            </h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-110 transition duration-300"
            src={fitG}
          />
        </Card>
      </div>

      {/* Card 4 */}
      <div className="col-span-12 sm:col-span-5">
        <Card
          isFooterBlurred
          className="h-[300px] transform transition-all duration-300 hover:scale-105 hover:shadow-xl floating-card"
        >
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">New!</p>
            <h4 className="text-white/90 font-medium text-xl">COREDELK Corp</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card example background"
            className="z-0 w-full h-full -translate-y-6 object-cover grayscale hover:grayscale-0 hover:scale-110 transition duration-300"
            src={coreDelk}
          />
          <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
            <div>
              <p className="text-black text-tiny">Available soon!</p>
            </div>
          </CardFooter>
        </Card>
      </div>

      {/* Card 5 */}
      <div className="col-span-12 sm:col-span-7">
        <Card
          isFooterBlurred
          className="h-[300px] transform transition-all duration-300 hover:scale-105 floating-card"
        >
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">New!</p>
            <h4 className="text-white/90 font-medium text-xl">
              FITG
            </h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Relaxing app background"
            className="z-0 w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-110 transition duration-300"
            src={fitG}
          />
          <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
            <div className="flex flex-grow gap-2 items-center">
              <Image
                alt="Breathing app icon"
                className="rounded-full w-10 h-11 bg-black"
                src="https://nextui.org/images/breathing-app-icon.jpeg"
              />
              <div className="flex flex-col">
                <p className="text-tiny text-white/60">Research portfolio</p>
              </div>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
