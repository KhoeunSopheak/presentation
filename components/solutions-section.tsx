import { CheckCircle, Users, Lightbulb, Shield } from "lucide-react"

export default function SolutionsSection() {
  const solutions = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Proven Results",
      description: "Track record of successful implementations across diverse industries",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Team",
      description: "Dedicated professionals with deep industry knowledge and experience",
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation",
      description: "Cutting-edge solutions that drive competitive advantage",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Reliability",
      description: "Robust systems with enterprise-grade security and performance",
    },
  ]

  return (
    <div className="bg-white p-8 rounded-lg shadow-sm border min-h-[500px]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Solutions</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-center">
            <div className="text-6xl font-bold text-gray-900 mb-2">96%</div>
            <p className="text-gray-600 mb-6">Client Satisfaction Rate</p>

            <div className="space-y-4 text-left">
              <p className="text-gray-600 text-sm leading-relaxed">
                Our solutions are built on a foundation of excellence, delivering measurable results that exceed client
                expectations and drive sustainable business growth.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {solutions.map((solution, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex-shrink-0 w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center">
                  {solution.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{solution.title}</h3>
                  <p className="text-gray-600 text-sm">{solution.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
