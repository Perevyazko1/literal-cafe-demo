import { Hero } from '@/widgets/hero'
import { Patisserie } from '@/widgets/patisserie'
import { Chocolatier } from '@/widgets/chocolatier'
import { Bistrot } from '@/widgets/bistrot'
import { CocktailBar } from '@/widgets/cocktail-bar'
import { Institution } from '@/widgets/institution'
import { Footer } from '@/widgets/footer'

export const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Hero />
      <Patisserie />
      <Chocolatier />
      <Bistrot />
      <CocktailBar />
      <Institution />
      <Footer />
    </div>
  )
}
