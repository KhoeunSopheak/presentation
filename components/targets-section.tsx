import { Target, TrendingUp, Award } from "lucide-react"

export default function TargetsSection() {
  const targets = [
    {
      number: "1",
      title: "New Market",
      description: "Expand into emerging markets with tailored solutions and strategic partnerships",
      icon: <Target className="w-6 h-6" />,
    },
    {
      number: "2",
      title: "Global Reach",
      description: "Establish international presence through digital transformation and local expertise",
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      number: "3",
      title: "Excellence",
      description: "Achieve industry-leading standards in quality, innovation, and customer satisfaction",
      icon: <Award className="w-6 h-6" />,
    },
  ]

  return (
    <div className="bg-white p-8 rounded-lg shadow-sm border min-h-[500px]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Targets</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {targets.map((target, index) => (
            <div key={index} className="text-center p-6 rounded-lg border hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">{target.number}</span>
              </div>

              <div className="flex items-center justify-center space-x-2 mb-3">
                {target.icon}
                <h3 className="text-xl font-semibold text-gray-900">{target.title}</h3>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed">{target.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our strategic targets are designed to create sustainable value while maintaining our commitment to
            innovation, quality, and customer success across all market segments.
          </p>
        </div>
      </div>
    </div>
  )
}
