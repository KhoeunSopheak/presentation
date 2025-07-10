import { Crown, Zap, Settings, RefreshCw } from "lucide-react"

export default function FeaturesSection() {
  const features = [
    {
      icon: <Crown className="w-6 h-6" />,
      title: "Premium",
      description: "High-quality solutions with premium support and advanced capabilities",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Prompt",
      description: "Fast response times and immediate action on critical business needs",
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Optimize",
      description: "Continuous improvement and performance optimization across all processes",
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: "Updated",
      description: "Regular updates and enhancements to stay ahead of market trends",
    },
  ]

  return (
    <div className="bg-white p-8 rounded-lg shadow-sm border min-h-[500px]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Features</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <p className="text-gray-600 leading-relaxed">
              Our comprehensive feature set is designed to meet the evolving needs of modern businesses, providing the
              tools and capabilities necessary for sustained growth and success.
            </p>

            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Key Benefits</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Enhanced productivity and efficiency</li>
                  <li>• Scalable solutions for growing businesses</li>
                  <li>• 24/7 support and maintenance</li>
                  <li>• Industry-leading security standards</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-lg border hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center mx-auto mb-3">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
