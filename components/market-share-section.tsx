import { TrendingUp, Target, RefreshCw } from "lucide-react"

export default function MarketShareSection() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm border min-h-[500px]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Market Share</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <div className="relative">
              {/* Pie Chart Representation */}
              <div className="w-48 h-48 rounded-full bg-gradient-to-r from-gray-800 via-gray-600 to-gray-400 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-2xl font-bold">Goal</div>
                  <div className="text-sm">Market Position</div>
                </div>
              </div>

              {/* Growth Arrow */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Target className="w-6 h-6 text-gray-700" />
                <div>
                  <h3 className="font-semibold text-gray-900">Target Market</h3>
                  <p className="text-sm text-gray-600">Focused approach to key market segments</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <TrendingUp className="w-6 h-6 text-gray-700" />
                <div>
                  <h3 className="font-semibold text-gray-900">Growth Strategy</h3>
                  <p className="text-sm text-gray-600">Sustainable expansion through innovation</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <RefreshCw className="w-6 h-6 text-gray-700" />
                <div>
                  <h3 className="font-semibold text-gray-900">Continuous Improvement</h3>
                  <p className="text-sm text-gray-600">Adapting to market dynamics and trends</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-700">
                Our market share strategy focuses on sustainable growth through customer value creation, innovation
                leadership, and strategic partnerships that strengthen our competitive position.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
