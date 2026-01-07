'use client'

import { ScrollRevealSection } from '@/shared/ui/ScrollRevealSection'
import { motion } from 'framer-motion'
import Image from "next/image";

export const Bistrot = () => {
  return (
    <ScrollRevealSection
      title="ПЕРВЫЕ БЛЮДА"
      description={[
        'это глубина вкуса и тепло русской кухни. Супы в нашем ресторане наваристые, ароматные и согревающие, они готовятся на медленном огне, чтобы раскрыть глубину вкуса каждого ингредиента. Сезонные супы радуют насыщенностью, натуральностью и ощущением настоящего домашнего обеда, дополненного аккуратной подачей и благородными акцентами.',
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
          Вкус щей — глубокий, благородный и выверенный. Каждый ингредиент здесь на своём месте, создавая гармонию простоты и утончённости. Подаются щи горячими, с ложкой густой сметаны и свежей зеленью, чтобы подарить ощущение уюта, покоя и настоящего русского гостеприимства.
      </div>
    </ScrollRevealSection>
  )
}
