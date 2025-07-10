import { CheckCircle, Users, Target, BarChart } from "lucide-react"

export default function AgendaSection() {
  const agendaItems = [
    {
      number: "01",
      title: "Project Overview",
      description: "Understanding the scope and objectives of our initiative",
      icon: <CheckCircle className="w-6 h-6" />,
    },
    {
      number: "02",
      title: "Team Structure",
      description: "Roles and responsibilities across departments",
      icon: <Users className="w-6 h-6" />,
    },
    {
      number: "03",
      title: "Strategic Goals",
      description: "Key milestones and success metrics",
      icon: <Target className="w-6 h-6" />,
    },
    {
      number: "04",
      title: "Performance Analysis",
      description: "Data-driven insights and recommendations",
      icon: <BarChart className="w-6 h-6" />,
    },
  ]

  return (
    <div className="bg-white p-8 rounded-lg shadow-sm border min-h-[500px]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Agenda</h1>
        <p className="text-gray-600 mb-8 max-w-md">
          Our comprehensive roadmap outlines the key discussion points and strategic initiatives that will drive our
          success forward.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {agendaItems.map((item, index) => (
            <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold">
                  {item.number}
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  {item.icon}
                  <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                </div>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
