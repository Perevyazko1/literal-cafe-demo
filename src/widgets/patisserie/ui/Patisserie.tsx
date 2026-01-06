'use client'

import { ScrollRevealSection } from '@/shared/ui/ScrollRevealSection'
import Image from "next/image";

export const Patisserie = () => {
  return (
    <ScrollRevealSection
      title="ОДА СЛАДОСТИ"
      description={[
        'Утонченное путешествие искусства и традиций, где цвета, вкусы и ароматы объединяются в творениях непревзойденного качества. Наши десерты — это празднование совершенства: тщательно отобранные ингредиенты и скрупулезное внимание к деталям, отдающее дань мастерству кондитерского искусства.',
      ]}
      imagePosition="right"
      imageContent={
        <Image src="/2393.png"
               alt="test"
               fill
               priority
               className="object-cover"/>
      }
      bottomText="Каждое творение воплощает баланс и утонченность и предназначено для наслаждения каждый день."
      navigationLabel="PATISSERIE"
    />
  )
}
