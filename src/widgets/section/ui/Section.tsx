'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface SectionProps {
  title: string
  subtitle: string
  description: string
  imagePosition?: 'left' | 'right'
  imageUrl?: string
  children?: React.ReactNode
}

export const Section = ({
  title,
  subtitle,
  description,
  imagePosition = 'left',
  imageUrl,
  children,
}: SectionProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-20 md:py-32 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
          imagePosition === 'right' ? 'lg:grid-flow-dense' : ''
        }`}>
          {imagePosition === 'left' && (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="h-96 bg-gray-100 rounded-lg flex items-center justify-center"
            >
              {imageUrl ? (
                <img src={imageUrl} alt={title} className="w-full h-full object-cover rounded-lg" />
              ) : (
                <div className="text-gray-400 text-6xl">☕</div>
              )}
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, x: imagePosition === 'left' ? 50 : -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: imagePosition === 'left' ? 50 : -50 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="space-y-6"
          >
            <h2 className="text-5xl md:text-6xl font-light text-gray-900 tracking-tight">
              {title}
            </h2>
            <h3 className="text-2xl md:text-3xl font-light text-gray-700 uppercase tracking-wider">
              {subtitle}
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
              {description}
            </p>
            {children}
          </motion.div>

          {imagePosition === 'right' && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="h-96 bg-gray-100 rounded-lg flex items-center justify-center lg:col-start-1"
            >
              {imageUrl ? (
                <img src={imageUrl} alt={title} className="w-full h-full object-cover rounded-lg" />
              ) : (
                <div className="text-gray-400 text-6xl">☕</div>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}

