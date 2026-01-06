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
    />
  )
}
