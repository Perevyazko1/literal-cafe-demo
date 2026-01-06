'use client'

import {motion, useScroll, useTransform, useSpring, useMotionTemplate} from 'framer-motion'
import { useRef } from 'react'

interface ScrollRevealSectionProps {
  title: string
  subtitle?: string
  description: string | string[]
  imageContent?: React.ReactNode
  imagePosition?: 'left' | 'right'
  children?: React.ReactNode
  className?: string
  bgColor?: string
  bottomText?: string
  navigationLabel?: string
  accentColor?: string
}

export const ScrollRevealSection = ({
  title,
  subtitle,
  description,
  imageContent,
  imagePosition = 'right',
  children,
  className = '',
  bgColor = 'bg-white',
  bottomText,
  navigationLabel,
  accentColor = 'bg-amber-100',
}: ScrollRevealSectionProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Отслеживаем скролл
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  // Картинка: стартует на 100vw, затем уменьшается до 33.33%
  const imageWidth = useTransform(
      scrollYProgress,
      [0, 0.3, 0.6, 1],
      [100, 80, 50, 33.33]
  )

  const imageX = useTransform(
    scrollYProgress,
    [0, 0.6, 1],
    ['0%', '0%', '0%']
  )

  // Левый и правый текст появляются по мере скролла
  // Текст появляется почти в конце анимации
  const textOpacity = useTransform(
      scrollYProgress,
      [0.75, 0.9, 1],
      [0, 0.6, 1]
  )

  const textY = useTransform(
      scrollYProgress,
      [0.75, 0.9, 1],
      [40, 20, 0]
  )

  // Вертикальная полоса слева (тонкая, светлая) - появляется сразу
  const barOpacity = useTransform(scrollYProgress, [0, 0.2, 0.4], [0, 0.5, 1])
  const barHeight = useTransform(scrollYProgress, [0, 0.2, 0.4], ['0%', '50%', '100%'])

  // Плавные анимации
  const smoothImageWidth = useSpring(imageWidth, { stiffness: 100, damping: 30 })
  const smoothImageX = useSpring(imageX, { stiffness: 100, damping: 30 })
  const smoothTextOpacity = useSpring(textOpacity, { stiffness: 100, damping: 30 })
  const smoothTextY = useSpring(textY, { stiffness: 100, damping: 30 })
  const smoothBarOpacity = useSpring(barOpacity, { stiffness: 100, damping: 30 })
  const smoothBarHeight = useSpring(barHeight, { stiffness: 100, damping: 30 })

  const descriptionArray = Array.isArray(description) ? description : [description]

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Секция с большой высотой для скролла */}
      <div className="h-[250vh] relative">
        {/* Sticky контейнер - 100% ширины и высоты экрана */}
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <div className="relative w-full h-full">
            {/* Вертикальная полоса слева (тонкая, светлая) */}
            <motion.div
              style={{
                opacity: smoothBarOpacity,
                height: smoothBarHeight,
              }}
              className={`absolute left-0 top-0 w-1 ${accentColor} z-30`}
            />

            {/* Картинка: начинается на весь экран, уменьшается и смещается вправо */}
            <motion.div
                style={{
                  width: useMotionTemplate`${smoothImageWidth}vw`,
                }}
                className="absolute inset-y-0 left-1/2 -translate-x-1/2 h-full flex items-center justify-center z-10"
            >
              <div className="h-full w-full overflow-hidden">
                {imageContent }
              </div>
            </motion.div>

            {/* Текстовый блок слева - занимает ~65% ширины */}
            <motion.div
              style={{
                opacity: smoothTextOpacity,
                y: smoothTextY,
              }}
              className="absolute inset-0 z-20 grid grid-cols-3"
            >
              {/* Левый текст */}
              <div className="flex items-start justify-center px-8 lg:px-12 pt-16 lg:pt-24">
                <div className="max-w-md space-y-6">
                  <h2 className="text-5xl md:text-6xl font-light text-gray-900 tracking-tight">
                    {title}
                  </h2>
                  {subtitle && (
                    <h3 className="text-2xl md:text-3xl font-light text-gray-700 uppercase tracking-wider">
                      {subtitle}
                    </h3>
                  )}
                  {descriptionArray.map((desc, index) => (
                    <p key={index} className="text-lg text-gray-600 leading-relaxed">
                      {desc}
                    </p>
                  ))}
                </div>
              </div>

              {/* Центральная колонка — пустая, под картинку */}
              <div />

              {/* Правый текст */}
              <div className="flex flex-col justify-end h-full px-8 lg:px-12 pt-16 lg:pt-24">
                <div className="max-w-md">
                  {children}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  )
}
