'use client'

import {motion, MotionValue, useTransform} from "framer-motion";
interface SectionScrollProps {
    scrollYProgress:  MotionValue<number>
    children?: React.ReactNode

}

export const SectionScroll = ({children,scrollYProgress}:SectionScrollProps) => {

    return (
        <motion.div  className="relative ">


        {children}

        </motion.div>
    )
}