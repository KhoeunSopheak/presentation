export default function SwotAnalysisSection() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm border min-h-[500px]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          SWOT <span className="text-gray-600">Analysis</span>
        </h1>
        <p className="text-gray-600 mb-8 max-w-md">
          A comprehensive evaluation of our internal strengths and weaknesses, alongside external opportunities and
          threats in the market landscape.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-700">S</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Strengths</h3>
                <p className="text-sm text-gray-600">Core competencies and advantages</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-700">W</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Weaknesses</h3>
                <p className="text-sm text-gray-600">Areas requiring improvement</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-white">O</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Opportunities</h3>
                <p className="text-sm text-gray-600">Market potential and growth</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="text-6xl font-bold text-gray-900">85%</div>
              <p className="text-sm text-gray-600 mt-2">Strategic Alignment Score</p>
              <div className="absolute -top-4 -right-8 w-12 h-12 bg-gray-100 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
