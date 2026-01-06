'use client'

import { ScrollRevealSection } from '@/shared/ui/ScrollRevealSection'
import Image from "next/image";

export const Chocolatier = () => {
  return (
    <ScrollRevealSection
      title="АРОМАТ ТРАДИЦИИ"
      description={[
        'С XIX века наш тосканский шоколад наполняет сердце города ароматом, который передает элегантность ремесленного мастерства. Этот вневременной аромат оживает благодаря древнему искусству смешивания лучшего какао из одного источника.',
      ]}
      imagePosition="right"
      imageContent={
          <Image src="/2383.png"
                 alt="test"
                 fill
                 priority
                 className="object-cover"/>
      }
      bottomText="Традиция, сохраняемая с преданностью, предлагающая сенсорный опыт чистейшего совершенства."
      navigationLabel="CHOCOLATIER"
    >

        <div
            className=" mb-8 px-8 py-3  text-lg text-gray-600 leading-relaxed"
        >
            В сердце города наш Bistrot предлагает кулинарное путешествие, которое прославляет суть итальянской традиции с современным оттенком. Каждое блюдо демонстрирует аутентичные вкусы, переосмысленные с современной элегантностью.,
            От обеда до ужина каждое посещение становится исследованием вкуса, данью уважения лучшему кулинарному мастерству.,
        </div>
    </ScrollRevealSection>
  )
}
