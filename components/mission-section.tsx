import { Globe, CheckCircle } from "lucide-react"

export default function MissionSection() {
  const missionPoints = [
    "We take responsibility for creating a positive impact in our community",
    "Innovation drives our approach to solving complex challenges",
    "Sustainable practices guide every decision we make",
    "Excellence in service delivery is our commitment to clients",
  ]

  return (
    <div className="bg-white p-8 rounded-lg shadow-sm border min-h-[500px]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Mission</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-48 h-48 bg-gray-100 rounded-full flex items-center justify-center">
                <Globe className="w-24 h-24 text-gray-700" />
              </div>
              <div className="absolute -top-2 -right-2 w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center">
                <span className="text-xs font-bold">WE TAKE</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {missionPoints.map((point, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-gray-700" />
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
