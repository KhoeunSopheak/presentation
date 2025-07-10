import { TrendingUp, Users, Target, BarChart } from "lucide-react"

export default function AnalysisSection() {
  const analysisItems = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Growth Metrics",
      description: "Tracking performance indicators and market expansion opportunities",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "User Engagement",
      description: "Understanding customer behavior patterns and satisfaction levels",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Strategic Focus",
      description: "Aligning resources with core business objectives and priorities",
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Data Insights",
      description: "Leveraging analytics to drive informed decision-making processes",
    },
  ]

  return (
    <div className="bg-white p-8 rounded-lg shadow-sm border min-h-[500px]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Analysis</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <p className="text-gray-600 leading-relaxed">
              Our comprehensive analysis framework provides deep insights into market dynamics, customer behavior, and
              operational efficiency to guide strategic decision-making.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {analysisItems.map((item, index) => (
                <div key={index} className="text-center p-4 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">{item.title}</h3>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-900 rounded-full flex items-center justify-center mb-4">
                <BarChart className="w-16 h-16 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Data-Driven Insights</h3>
              <p className="text-sm text-gray-600 mt-2">Transforming raw data into actionable business intelligence</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
