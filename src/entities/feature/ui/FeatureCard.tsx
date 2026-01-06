interface Feature {
  id: number
  title: string
  description: string
  icon: string
}

interface FeatureCardProps {
  feature: Feature
}

export const FeatureCard = ({ feature }: FeatureCardProps) => {
  return (
    <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
      <div className="text-5xl mb-4 text-center">{feature.icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 text-center">
        {feature.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 text-center">
        {feature.description}
      </p>
    </div>
  )
}

