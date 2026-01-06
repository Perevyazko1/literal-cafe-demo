'use client'

import { ScrollRevealSection } from '@/shared/ui/ScrollRevealSection'
import { motion } from 'framer-motion'
import Image from "next/image";

export const Bistrot = () => {
  return (
    <ScrollRevealSection
      title="BISTROT"
      description={[
        'В сердце города наш Bistrot предлагает кулинарное путешествие, которое прославляет суть итальянской традиции с современным оттенком. Каждое блюдо демонстрирует аутентичные вкусы, переосмысленные с современной элегантностью.',
        'От обеда до ужина каждое посещение становится исследованием вкуса, данью уважения лучшему кулинарному мастерству.',
      ]}
      imagePosition="left"
      imageContent={
          <Image src="/2365.png"
                 alt="test"
                 fill
                 priority
                 className="object-cover"/>
      }
      bgColor="bg-gray-50"
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
