export type RiskStatus = 'Safe' | 'Suspicious' | 'High Risk'

export type RiskLevel = RiskStatus | 'Legitimate' | 'Fraudulent'

export type MessageLanguage = 'Urdu (Roman)' | 'Urdu (Nastaliq)' | 'English' | 'Mixed (Urdu/English)' | 'Multilingual (Urdu/Eng)'

export type MessageChannel = 'SMS' | 'WhatsApp' | 'Social Media' | 'Email' | 'Telegram'

export type InvestigationStatus = 'Completed' | 'In Review' | 'Flagged' | 'Archived'

export interface HighlightedIndicator {
  text: string
  reason: string
  type: 'danger' | 'warning' | 'info'
}

export interface AnalysisResult {
  id: string
  originalMessage: string
  channel: MessageChannel
  status: RiskStatus
  category: string
  plainExplanation: string
  indicators: HighlightedIndicator[]
  evidenceNotes: string
  safetyActions: string[]
  analyzedAt: string
}

export interface MessageCheckItem {
  id: string
  previewText: string
  category: string
  status: RiskStatus
  language: string
  channel: MessageChannel
  date: string
  plainReason: string
}

export interface SimpleStats {
  totalChecked: number
  safeCount: number
  suspiciousCount: number
  highRiskCount: number
}

/* Underlying Enterprise / SOC Types preserved for scalable architecture */
export interface Investigation {
  id: string
  previewText: string
  category: string
  riskLevel: RiskLevel
  riskScore: number
  language: MessageLanguage
  channel: MessageChannel
  date: string
  status: InvestigationStatus
  keyIndicator?: string
  evidenceSourcesCount?: number
}

export interface DashboardStats {
  totalAnalyzed: number
  potentialThreats: number
  highRisk: number
  investigationsCompleted: number
  detectionRateFormatted: string
  avgResponseTime: string
}

export interface ClassificationTimePoint {
  date: string
  legitimate: number
  suspicious: number
  fraudulent: number
  total: number
}

export interface ThreatCategoryDistribution {
  name: string
  value: number
  percentage: number
  color: string
}

export interface FeatureItem {
  id: string
  title: string
  description: string
  iconName: string
  tag: string
  detail: string
}

export interface HowItWorksStep {
  step: number
  title: string
  description: string
  badge: string
  technicalDetail: string
}
