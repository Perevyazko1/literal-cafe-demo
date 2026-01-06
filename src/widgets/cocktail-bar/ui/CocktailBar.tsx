'use client'

import { ScrollRevealSection } from '@/shared/ui/ScrollRevealSection'
import { motion } from 'framer-motion'

export const CocktailBar = () => {
  return (
    <ScrollRevealSection
      title="COCKTAIL BAR"
      description={[
        'Страсть наших барменов к итальянским и международным напиткам отражается в их утонченном и изысканном подходе к миксологии. Каждый напиток отдает дань классике с современными и творческими нотками, предлагая идеальное сочетание аутентичности и инноваций.',
        'Все подается в элегантной обстановке с вневременным шармом.',
      ]}
      imagePosition="right"
      imageContent={
        <div className="h-full w-full bg-gradient-to-br from-amber-100 to-yellow-100 flex items-center justify-center">
          <div className="text-8xl">🍸</div>
        </div>
      }
    >
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-6 px-8 py-3 bg-gray-900 text-white uppercase tracking-wider text-sm font-light hover:bg-gray-800 transition-colors"
      >
        Узнать больше
      </motion.button>
    </ScrollRevealSection>
  )
}
