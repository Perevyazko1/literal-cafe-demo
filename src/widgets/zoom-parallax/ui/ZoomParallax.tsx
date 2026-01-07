'use client'

import Picture1 from '../../../../public/1750.jpg';
import Picture2 from '../../../../public/1751.jpg';
import Picture3 from '../../../../public/1754.jpg';
import Picture4 from '../../../../public/1755.jpg'
import Picture5 from '../../../../public/1759.jpg'
import Picture6 from '../../../../public/1770.jpg'
import Picture7 from '../../../../public/1771.jpg'
import Image from 'next/image';
import { useScroll, useTransform, motion} from 'framer-motion';
import { useRef } from 'react';

export const ZoomParallax =() =>{

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })

    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
    const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

    const pictures = [
        {
            src: Picture1,
            scale: scale4
        },
        {
            src: Picture2,
            scale: scale5
        },
        {
            src: Picture3,
            scale: scale6
        },
        {
            src: Picture4,
            scale: scale5
        },
        {
            src: Picture5,
            scale: scale6
        },
        {
            src: Picture6,
            scale: scale8
        },
        {
            src: Picture7,
            scale: scale9
        }
    ]

    return (
        <div ref={container} className="relative h-[300vh]">
            <div className="sticky top-0 h-screen overflow-hidden">
                {
                    pictures.map( ({src, scale}, index) => {
                        return <motion.div
                          key={index}
                          style={{ scale }}
                          className="absolute top-0 flex h-full w-full items-center justify-center"
                        >
                            <div
                              className={[
                                'relative',
                                index === 0 && 'w-[25vw] h-[25vh]',
                                index === 1 && 'top-[-30vh] left-[5vw] w-[35vw] h-[30vh]',
                                index === 2 && 'top-[-10vh] left-[-25vw] w-[20vw] h-[45vh]',
                                index === 3 && 'left-[27.5vw] w-[25vw] h-[25vh]',
                                index === 4 && 'top-[27.5vh] left-[5vw] w-[20vw] h-[25vh]',
                                index === 5 && 'top-[27.5vh] left-[-22.5vw] w-[30vw] h-[25vh]',
                                index === 6 && 'top-[22.5vh] left-[25vw] w-[15vw] h-[15vh]',
                              ]
                                .filter(Boolean)
                                .join(' ')
                              }
                            >
                                <Image
                                    src={src}
                                    fill
                                    alt="image"
                                    placeholder='blur'
                                />
                            </div>
                        </motion.div>
                    })
                }
            </div>
        </div>
    )
}