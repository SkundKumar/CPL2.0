import Image from "next/image";
import Navbar from "@/components/global/navbar";
import { Button } from "@/components/ui/button";
import { ContainerScroll } from "@/components/container-scroll-animation";
import { clients, products } from "../../lib/constants";
import { InfiniteMovingCards } from "@/components/global/infinite-moving-cards";
import { HeroParallax } from "@/components/global/connect-parallax";
import { LampComponent } from "@/components/global/lamp";
import { CardBody, CardContainer, CardItem } from "@/components/global/3d-card";
import {CheckIcon} from "lucide-react"
import { Timeline } from "@/components/ui/timeline";
import { TimelineDemo } from "@/components/global/TimelineDemo";
export default function Home() {
  return (
    <main>
    <Navbar />
      <section className="h-screen w-full bg-neutral-950 rounnded-md !overflow-visible relative flex flex-col item-center antialiased" >
      <div className="absolute inset-0 h-full w-full items-center 
px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%, 
#000_35%,#223_100%)]">
        <div className="flex flex-col mt-[-100px] md:mt-[-50px]" >
          <ContainerScroll
            titleComponent = {
                <div className="flex items-center justify-center flex-col">
                     <Button
                  size={'lg'}
                  className="p-8 mb-8 md:mb-0 text-2xl w-full sm:w-fit border-t-2 rounded-full border-[#4D4D4D] bg-[#1F1F1F] hover:bg-white group transition-all flex items-center justify-center gap-4 hover:shadow-xl hover:shadow-neutral-500 duration-500"
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-500 to-neutral-600  md:text-center font-sans group-hover:bg-gradient-to-r group-hover:from-black goup-hover:to-black">
                    Register Today !!
                  </span>
                </Button>
                <h1 className="text-5xl md:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 font-sans font-bold ">
                  CODECHEF PREMIER LEAGUE 2.0
                </h1>
                </div>
            }
          />

        </div>
</div>
      </section>

      <InfiniteMovingCards
        className="md:mt-[18rem] mt-[100px] "
        items={clients}
        direction="right"
        speed="slow"
      />

      <section >
      
        <HeroParallax products={products}
        
        >

        </HeroParallax>
        
      </section>
     
      <section className="mt-[-500px]">
        <LampComponent/>
            <div className="flex flex-wrap items-center justify-center justify center flex-col md:flex-row gap-8 -mt-72 mb-32">
                <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white "
              >
                Prizes
                <h2 className="text-6xl mb-5">more info</h2>
              </CardItem>
              {/*card content first*/}
              <CardItem
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                <p></p>
                <ul className="my-4 flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    
                  </li>
                </ul>
              </CardItem>
              <div className="flex justify-between items-center mt-8">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                 .
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Click For Queries
                </CardItem>
              </div>
            </CardBody>
                </CardContainer>
                <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white "
              >
                YOU
                <h2 className="text-6xl mb-5">Scared ?</h2>
              </CardItem>
                <CardItem
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                
                <ul className="my-4 flex flex-col gap-2"><p>If that's how you think, you'll never be ready for anything. </p><p className="font-semibold text-base">Take the leap of faith—just like the Chefs before you, trust in the Creed, and the world will reveal itself in time.</p> 
                  <li className="flex items-center gap-2">
                  <CheckIcon /><p> Shh...a lil secrete "even if ou dont win you can learn about the CP experience"</p>
                  </li>
                  <li className="flex items-center gap-2">
                  <CheckIcon /> Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                  </li>
                  <li className="flex items-center gap-2">
                  <CheckIcon /> Lorem ipsum dolor sit amet consectetur adipisicing elit. In, excepturi.
                  </li>
                </ul>
                </CardItem>
              <div className="flex justify-between items-center mt-8">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  INTERESTED YET ?
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Click For Queries
                </CardItem>
              </div>
            </CardBody>
                </CardContainer>
                <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white "
              >
                Kya Matlab 
                <h2 className="text-6xl mb-5">Auctions are back</h2>
              </CardItem>
              <CardItem
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
               <p> well yes but you'll be the one auctioned this time</p>
                <ul className="my-4 flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                    <CheckIcon />A simple Coding MENTI quiz
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    Based on that you'll be auctioned
                  </li>
                  
                  <li className="flex items-center gap-2">
                    
                    <p className="font-bold">But ofc you will be given a fair chance to convice the Bidder that you are worth more that the quiz score.</p>
                  </li>
                </ul>
              </CardItem>
              <div className="flex justify-between items-center mt-8">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  INTERESTED YET ?
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Click For Queries
                </CardItem>
              </div>
            </CardBody>
                </CardContainer>
                
                
            </div>
            <div className="flex items-center justify-center flex-col mb-10">
            <Button
                  size={'lg'}
                  className="p-8 mb-8 md:mb-0 text-2xl w-full sm:w-fit border-t-2 rounded-full border-[#4D4D4D] bg-[#1F1F1F] hover:bg-white group transition-all flex items-center justify-center gap-4 hover:shadow-xl hover:shadow-neutral-500 duration-500"
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-500 to-neutral-600  md:text-center font-sans group-hover:bg-gradient-to-r group-hover:from-black goup-hover:to-black">
                    <a href="https://forms.office.com/r/FprYCMy6kw">Fill The Form</a> .
                  </span>
                </Button>

                
            </div>
            <div className="flex items-center justify-center flex-col mb-10">
              <p> or Else <span className="ml-2"><p>(ง&apos;̀-&apos;́)ง</p></span> </p>
            </div>
            
      </section>
      
      <TimelineDemo/>
      
     
      
      
      
      
   </main>
  );
}
