'use client'

import { motion } from 'framer-motion'

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-4xl md:text-6xl lg:text-7xl font-light text-gray-900 leading-tight mb-8"
        >
          В сердце города, с городом в сердце с 1834 года.
        </motion.h1>
      </div>
    </section>
  )
}
