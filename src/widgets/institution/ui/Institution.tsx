'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export const Institution = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-6"
        >
          <h2 className="text-5xl md:text-6xl font-light text-gray-900 tracking-tight">
            ГОРОДСКОЕ УЧРЕЖДЕНИЕ
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            История, начавшаяся в 1733 году, делает Literal Cafe дорогой частью города, 
            где время, кажется, остановилось. Здесь традиция и утонченность гармонично 
            переплетаются, создавая пространство, где кондитерское искусство и искусство 
            изысканного шоколада отражают столетия культуры и вкуса.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Каждое посещение — это приглашение заново открыть город через очарование места, 
            которое сделало качество своим вневременным отличительным знаком.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-8 py-3 bg-gray-900 text-white uppercase tracking-wider text-sm font-light hover:bg-gray-800 transition-colors"
          >
            Узнать больше
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

