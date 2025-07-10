export default function GoalSection() {
  const goals = [
    {
      title: "Market Leadership",
      description:
        "Establish dominant position in our target market segments through innovation and customer excellence",
    },
    {
      title: "Operational Excellence",
      description: "Streamline processes and optimize efficiency to deliver superior value to stakeholders",
    },
    {
      title: "Sustainable Growth",
      description: "Build long-term value through responsible business practices and strategic investments",
    },
  ]

  return (
    <div className="bg-white p-8 rounded-lg shadow-sm border min-h-[500px]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Goal</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <div className="relative">
              <img
                src="/placeholder.svg?height=300&width=250"
                alt="Business professionals silhouette"
                className="w-64 h-80 object-cover rounded-lg grayscale"
              />
            </div>
          </div>

          <div className="space-y-6">
            {goals.map((goal, index) => (
              <div key={index} className="border-l-4 border-gray-900 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{goal.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{goal.description}</p>
              </div>
            ))}

            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-700 italic">
                "Success is not just about reaching our destination, but about the positive impact we create along the
                journey."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
