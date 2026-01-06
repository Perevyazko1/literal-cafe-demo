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
      <div
        className="mb-8 px-8 py-3  text-lg text-gray-600 leading-relaxed"
      >
          В сердце города наш Bistrot предлагает кулинарное путешествие, которое прославляет суть итальянской традиции с современным оттенком. Каждое блюдо демонстрирует аутентичные вкусы, переосмысленные с современной элегантностью.,
          От обеда до ужина каждое посещение становится исследованием вкуса, данью уважения лучшему кулинарному мастерству.,
      </div>
    </ScrollRevealSection>
  )
}
