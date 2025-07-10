export default function OverviewSection() {
  const overviewItems = [
    {
      title: "Vision Statement",
      description:
        "To be the leading innovator in our industry, creating solutions that transform how businesses operate and grow in the digital age.",
    },
    {
      title: "Core Values",
      description:
        "Integrity, innovation, and excellence guide every decision we make, ensuring sustainable success for all stakeholders.",
    },
    {
      title: "Strategic Focus",
      description:
        "Customer-centric approach combined with cutting-edge technology to deliver exceptional value and drive market leadership.",
    },
  ]

  return (
    <div className="bg-white p-8 rounded-lg shadow-sm border min-h-[500px]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Overview</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <p className="text-gray-600 leading-relaxed">
              Our comprehensive overview outlines the fundamental principles and strategic direction that drive our
              organization forward in an ever-evolving marketplace.
            </p>

            <div className="space-y-4">
              {overviewItems.map((item, index) => (
                <div key={index} className="p-4 border-l-4 border-gray-200 hover:border-gray-900 transition-colors">
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="/placeholder.svg?height=400&width=300"
              alt="Modern office workspace with plants"
              className="w-80 h-96 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
