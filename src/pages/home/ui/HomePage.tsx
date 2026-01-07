'use client'
import {Patisserie} from '@/widgets/patisserie'
import {Chocolatier} from '@/widgets/chocolatier'
import {Bistrot} from '@/widgets/bistrot'
import {Footer} from '@/widgets/footer'
import {ZoomParallax} from "@/widgets/zoom-parallax";
import {motion, useScroll, useTransform} from "framer-motion";
import {useEffect, useRef} from "react";
import Lenis from 'lenis';
import {SectionScroll} from "@/widgets/section-scroll";


export const HomePage = () => {

    const container = useRef<HTMLDivElement | null>(null);;
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"]
    })

    useEffect( () => {
        const lenis = new Lenis()

        function raf(time:  number) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    }, [])

    const redOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
    const whiteOpacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1])
    const yellowOpacity = useTransform(scrollYProgress, [0.6, 1], [0, 1])

  return (
    <div


        className="min-h-screen flex flex-col gap-[10vh]"
    >
      {/*<Hero />*/}

        <ZoomParallax/>
        {/*<div className="relative h-[400vh]">*/}
        {/*    /!* ОДИН sticky *!/*/}
        {/*    <div className="sticky top-0 h-screen overflow-hidden">*/}

        {/*        /!* СЛОИ *!/*/}
        {/*        <motion.div style={{ opacity: redOpacity }} className="absolute inset-0 bg-red-900" />*/}
        {/*        <motion.div style={{ opacity: whiteOpacity }} className="absolute inset-0 bg-white" />*/}
        {/*        <motion.div style={{ opacity: yellowOpacity }} className="absolute inset-0 bg-yellow-400" />*/}

        {/*    </div>*/}
        {/*</div>*/}
        <Patisserie />
        <Bistrot />
        <Chocolatier />

        {/*<div ref={container} className="relative h-[300vh]">*/}
        {/*    /!*<SectionScroll scrollYProgress={scrollYProgress}>*!/*/}
        {/*    /!*    *!/*/}
        {/*    /!*    /!*<div className={'h-full bg-red-900'} />*!/*!/*/}
        {/*    /!*</SectionScroll>*!/*/}
        {/*    /!*<SectionScroll scrollYProgress={scrollYProgress}>*!/*/}
        {/*    /!*    *!/*/}
        {/*    /!*    /!*<div className={'h-full  bg-green-900'} />*!/*!/*/}
        {/*    /!*</SectionScroll>*!/*/}
        {/*</div>*/}







      {/*<CocktailBar />*/}
      {/*<Institution />*/}
      <Footer />
    </div>
  )
}
