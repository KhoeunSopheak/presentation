import AgendaSection from "@/components/agenda-section"
import MissionSection from "@/components/mission-section"
import SwotAnalysisSection from "@/components/swot-analysis-section"
import AnalysisSection from "@/components/analysis-section"
import GoalSection from "@/components/goal-section"
import TargetsSection from "@/components/targets-section"
import OverviewSection from "@/components/overview-section"
import FeaturesSection from "@/components/features-section"
import SolutionsSection from "@/components/solutions-section"
import MarketShareSection from "@/components/market-share-section"

export default function PresentationPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 space-y-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Business Presentation</h1>
          <p className="text-xl text-gray-600">
            Comprehensive overview of our strategic initiatives and market position
          </p>
        </div>

        <div className="space-y-8">
          <AgendaSection />
          <MissionSection />
          <SwotAnalysisSection />
          <AnalysisSection />
          <GoalSection />
          <TargetsSection />
          <OverviewSection />
          <FeaturesSection />
          <SolutionsSection />
          <MarketShareSection />
        </div>
      </div>
    </div>
  )
}
