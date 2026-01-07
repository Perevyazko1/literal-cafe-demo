'use client'
import {Patisserie} from '@/widgets/patisserie'
import {Chocolatier} from '@/widgets/chocolatier'
import {Bistrot} from '@/widgets/bistrot'
import {Footer} from '@/widgets/footer'
import {ZoomParallax} from "@/widgets/zoom-parallax";
import { useScroll, useTransform} from "framer-motion";
import {useEffect, useRef} from "react";
import Lenis from 'lenis';


 const HomePage = () => {

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



  return (
    <>
        <div className="min-h-screen lg:flex flex-col gap-[10vh] hidden" ref={container}>
          <ZoomParallax />
          <Patisserie />
          <Bistrot />
          <Chocolatier />
          <Footer />
        </div>

        <div className="min-h-screen flex items-center justify-center p-8 bg-gray-100 text-center lg:hidden">
          <div>
            <h1 className="text-3xl font-bold mb-4 text-gray-700">Демо доступно только на десктопе</h1>
            <p className="text-lg text-gray-700">
              Пожалуйста, откройте сайт на ПК или устройстве с шириной экрана больше 1024px.
            </p>
          </div>
        </div>

    </>
  )
}
export default HomePage; // <- default export
