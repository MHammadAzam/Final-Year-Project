import {
  AnalysisResult,
  MessageCheckItem,
  SimpleStats,
  DashboardStats,
  Investigation,
  ClassificationTimePoint,
  ThreatCategoryDistribution,
  FeatureItem,
  HowItWorksStep,
} from '../types'

export const DEMO_DATA_NOTICE = 'Sample Demonstrative Data (Milestone 1)'
export const IS_SAMPLE_DATA = true
export const SAMPLE_DATA_LABEL = 'Illustrative Prototype Sample Data (Simulated for Frontend Milestone)'

export const MOCK_STATS: SimpleStats = {
  totalChecked: 1284,
  safeCount: 869,
  suspiciousCount: 237,
  highRiskCount: 178,
}

export const MOCK_DASHBOARD_STATS: DashboardStats = {
  totalAnalyzed: 1284,
  potentialThreats: 326,
  highRisk: 89,
  investigationsCompleted: 214,
  detectionRateFormatted: '98.4%',
  avgResponseTime: '1.2s',
}

export const SAMPLE_PRESET_MESSAGES = [
  {
    id: 'bisp-scam',
    title: 'BISP Fake Cash Grant',
    language: 'Roman Urdu',
    channel: 'SMS' as const,
    text: 'Benazir Income Support Program: Aapka 25,000 ka wazeefa manzoor ho gaya hai. Abhi call karein 0304-7891234 par apna CNIC register karein taake raqam transfer ki ja sakay.',
  },
  {
    id: 'jazzcash-phish',
    title: 'JazzCash Account Block Alert',
    language: 'Roman Urdu',
    channel: 'SMS' as const,
    text: 'Aapka JazzCash account temporary block kar diya gaya hai. Biometric verification ke liye is link par click karein: http://bit.ly/jazz-secure-verify',
  },
  {
    id: 'jeeto-pakistan',
    title: 'Jeeto Pakistan Fake Prize',
    language: 'Urdu',
    channel: 'WhatsApp' as const,
    text: 'مبارک ہو! جیتو پاکستان کی طرف سے آپ کی گاڑی نکلی ہے۔ انعام حاصل کرنے کے لیے 5000 روپے رجسٹریشن فیس فوری بھیجیں۔ رابطہ کریں: 0311-2345678',
  },
  {
    id: 'job-scam',
    title: 'Daily YouTube Earning Offer',
    language: 'Urdu / English',
    channel: 'WhatsApp' as const,
    text: 'Assalam-o-Alaikum! Amazon online job available. Daily earning 5,000 to 8,000 PKR for liking YouTube videos. Contact manager on WhatsApp wa.me/923001234567',
  },
  {
    id: 'real-bank',
    title: 'Real Bank Deposit Notification',
    language: 'English',
    channel: 'SMS' as const,
    text: 'HBL Alert: Your account was credited with PKR 15,000 via Raast from A. Khan. Available balance is PKR 42,310.',
  },
  {
    id: 'real-otp',
    title: 'Real Login Security Code (OTP)',
    language: 'English',
    channel: 'SMS' as const,
    text: 'Google verification code: 894321. Do not share this code with anyone. We will never call to ask for it.',
  },
]

export const MOCK_RECENT_CHECKS: MessageCheckItem[] = [
  {
    id: 'CHK-1092',
    previewText: 'Benazir Income Support Program: Aapka 25,000 ka wazeefa manzoor ho gaya hai. Abhi call karein 0304-7891234...',
    category: 'Government Aid Impersonation',
    status: 'High Risk',
    language: 'Roman Urdu',
    channel: 'SMS',
    date: 'Today, 2:15 PM',
    plainReason: 'Scammers pretending to be government officials asking you to call a personal mobile number.',
  },
  {
    id: 'CHK-1091',
    previewText: 'Aapka JazzCash account temporary block kar diya gaya hai. Biometric verification ke liye is link par click karein...',
    category: 'Fake Bank/Wallet Alert',
    status: 'High Risk',
    language: 'Roman Urdu',
    channel: 'SMS',
    date: 'Today, 11:40 AM',
    plainReason: 'Fake warning designed to steal your wallet PIN through an unofficial link.',
  },
  {
    id: 'CHK-1090',
    previewText: 'HBL Alert: Your account was credited with PKR 15,000 via Raast from A. Khan...',
    category: 'Genuine Bank Receipt',
    status: 'Safe',
    language: 'English',
    channel: 'SMS',
    date: 'Yesterday, 8:20 PM',
    plainReason: 'Standard bank deposit alert. It does not ask for passwords, PINs, or money.',
  },
  {
    id: 'CHK-1089',
    previewText: 'Assalam-o-Alaikum! Amazon online job available. Daily earning 5000 to 8000 PKR...',
    category: 'Unrealistic Job Offer',
    status: 'High Risk',
    language: 'Mixed',
    channel: 'WhatsApp',
    date: 'Yesterday, 4:10 PM',
    plainReason: 'Task scam: promises unrealistic daily wages to lure you into depositing fee money.',
  },
  {
    id: 'CHK-1088',
    previewText: 'محترم صارف، آپ کے بجلی کے بل میں زائد رقم شامل کر دی گئی ہے۔ واپسی کے لیے اس نمبر پر رابطہ کریں...',
    category: 'Utility Refund Scam',
    status: 'Suspicious',
    language: 'Urdu',
    channel: 'WhatsApp',
    date: 'May 16, 2025',
    plainReason: 'Electricity companies never process bill refunds over WhatsApp or personal numbers.',
  },
  {
    id: 'CHK-1087',
    previewText: 'Google verification code: 894321. Do not share this code with anyone...',
    category: 'Security OTP',
    status: 'Safe',
    language: 'English',
    channel: 'SMS',
    date: 'May 15, 2025',
    plainReason: 'Normal login security verification code. Keep it private.',
  },
]

export const MOCK_INVESTIGATIONS: Investigation[] = [
  {
    id: 'SCAM-2024-0891',
    previewText: 'Benazir Income Support Program: Aapka 25,000 ka wazeefa manzoor ho gaya hai. Abhi call karein 0304-xxxxxxx par apna CNIC register karein...',
    category: 'BISP / Ehsaas Impersonation',
    riskLevel: 'High Risk',
    riskScore: 94,
    language: 'Urdu (Roman)',
    channel: 'SMS',
    date: '2025-05-18 14:32',
    status: 'Completed',
    keyIndicator: 'Unverified mobile helpline & fake relief scheme grant',
    evidenceSourcesCount: 4,
  },
  {
    id: 'SCAM-2024-0890',
    previewText: 'Aapka JazzCash account temporary block kar diya gaya hai. Biometric verification ke liye is link par click karein: http://bit.ly/jazz-secure-verify',
    category: 'Financial Phishing',
    riskLevel: 'High Risk',
    riskScore: 98,
    language: 'Urdu (Roman)',
    channel: 'SMS',
    date: '2025-05-18 12:15',
    status: 'Completed',
    keyIndicator: 'Shortened URL mimicking telco/mobile wallet brand',
    evidenceSourcesCount: 5,
  },
  {
    id: 'SCAM-2024-0889',
    previewText: 'HBL Alert: Your account was credited with PKR 15,000 from A. Khan via Raast. Current balance is PKR 42,310.',
    category: 'Legitimate Banking Notice',
    riskLevel: 'Safe',
    riskScore: 6,
    language: 'English',
    channel: 'SMS',
    date: '2025-05-17 19:40',
    status: 'Completed',
    keyIndicator: 'Verified shortcode, no credentials requested, transactional format',
    evidenceSourcesCount: 2,
  },
  {
    id: 'SCAM-2024-0888',
    previewText: 'Assalam-o-Alaikum! Amazon remote jobs available in Lahore/Karachi. Daily earning 5000-8000 PKR. Join WhatsApp group: wa.me/92312xxxxxxx',
    category: 'Job Scam / Task Fraud',
    riskLevel: 'High Risk',
    riskScore: 88,
    language: 'Multilingual (Urdu/Eng)',
    channel: 'WhatsApp',
    date: '2025-05-17 16:05',
    status: 'In Review',
    keyIndicator: 'Unrealistic wage promise, Telegram/WhatsApp forwarding funnel',
    evidenceSourcesCount: 3,
  },
]

export const MOCK_CLASSIFICATION_TRENDS: ClassificationTimePoint[] = [
  { date: 'Mon', legitimate: 120, suspicious: 42, fraudulent: 18, total: 180 },
  { date: 'Tue', legitimate: 145, suspicious: 38, fraudulent: 24, total: 207 },
  { date: 'Wed', legitimate: 160, suspicious: 55, fraudulent: 31, total: 246 },
  { date: 'Thu', legitimate: 135, suspicious: 48, fraudulent: 20, total: 203 },
  { date: 'Fri', legitimate: 180, suspicious: 62, fraudulent: 35, total: 277 },
  { date: 'Sat', legitimate: 110, suspicious: 45, fraudulent: 29, total: 184 },
  { date: 'Sun', legitimate: 95, suspicious: 36, fraudulent: 17, total: 148 },
]

export const MOCK_THREAT_DISTRIBUTION: ThreatCategoryDistribution[] = [
  { name: 'Legitimate Messages', value: 869, percentage: 67.7, color: '#10B981' },
  { name: 'Suspicious / Inconclusive', value: 237, percentage: 18.5, color: '#F59E0B' },
  { name: 'Fraudulent / High Risk', value: 178, percentage: 13.8, color: '#EF4444' },
]

export const MOCK_CATEGORY_BREAKDOWN = [
  { name: 'Financial Phishing', count: 112, color: '#EF4444' },
  { name: 'Government Impersonation (BISP/FBR)', count: 94, color: '#F97316' },
  { name: 'Prize / Lottery Advance-Fee', count: 68, color: '#F59E0B' },
  { name: 'Job Offer / Telegram Pyramid', count: 52, color: '#0EA5E9' },
]

export const LANDING_FEATURES: FeatureItem[] = [
  {
    id: 'multilingual',
    title: 'Multilingual Threat Detection',
    description: 'Understands Roman Urdu, Nastaliq, and English as used in Pakistan.',
    iconName: 'Languages',
    tag: 'Regional NLP',
    detail: 'Understands colloquial phrases like "wazeefa manzoor" and "lottery claim".',
  },
  {
    id: 'indicator-extraction',
    title: 'Suspicious Indicator Extraction',
    description: 'Identifies spoofed phone numbers, shortened URLs, and urgency hooks.',
    iconName: 'Crosshair',
    tag: 'Indicator Analysis',
    detail: 'Pinpoints bit.ly links and personal numbers posing as official helplines.',
  },
  {
    id: 'rag-evidence',
    title: 'Evidence-Based Investigation',
    description: 'Grounds scam warnings in verified PTA and State Bank alerts.',
    iconName: 'Database',
    tag: 'Official Evidence',
    detail: 'Cross-checks alerts against known telecom and banking scam directories.',
  },
  {
    id: 'llm-explanations',
    title: 'AI-Powered Risk Explanations',
    description: 'Explains in simple, everyday language why a message is risky or safe.',
    iconName: 'BrainCircuit',
    tag: 'Plain Language',
    detail: 'Clear explanations without confusing technical jargon.',
  },
  {
    id: 'actionable-guidance',
    title: 'Actionable Safety Recommendations',
    description: 'Provides exact steps to take, including PTA shortcode 9999 and FIA 1991.',
    iconName: 'ShieldAlert',
    tag: 'Safety Advice',
    detail: 'Clear, step-by-step guidance on what to do next.',
  },
]

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    step: 1,
    title: 'Submit Suspicious Text',
    description: 'Paste any SMS or WhatsApp message in Roman Urdu, Urdu, or English.',
    badge: 'Input',
    technicalDetail: 'Cleans text and detects language format.',
  },
  {
    step: 2,
    title: 'Detect Potential Threats',
    description: 'Checks for fake bank names, personal helpline numbers, and urgent threats.',
    badge: 'Checking',
    technicalDetail: 'Scans for known scam patterns and deceptive links.',
  },
  {
    step: 3,
    title: 'Retrieve Supporting Evidence',
    description: 'Finds matching warnings from Pakistan Telecommunication Authority and State Bank.',
    badge: 'Evidence',
    technicalDetail: 'Finds verified official consumer alerts.',
  },
  {
    step: 4,
    title: 'Generate Investigation Report',
    description: 'Gives you a plain-language verdict and tells you what actions to take.',
    badge: 'Result',
    technicalDetail: 'Simple plain-language summary for everyday safety.',
  },
]

export const SUPPORTED_MESSAGE_TYPES = [
  {
    title: 'SMS Alerts & Shortcodes',
    examples: 'Fake bank OTP requests, fake BISP aid, balance alerts.',
    badge: 'SMS',
  },
  {
    title: 'WhatsApp Messages',
    examples: 'Remote job offers, crypto groups, lottery notifications.',
    badge: 'WhatsApp',
  },
  {
    title: 'Email & Links',
    examples: 'Tax refund notices, delivery parcel delays, fake password resets.',
    badge: 'Email',
  },
  {
    title: 'Emergency Bait',
    examples: 'Urgent emergency money requests, fake hospital donations.',
    badge: 'Social Bait',
  },
]

export function getMockAnalysisForText(text: string, channel: any = 'SMS'): AnalysisResult {
  const lower = text.toLowerCase()

  // 1. Safe patterns
  if (lower.includes('credited with pkr') || lower.includes('google verification code') || lower.includes('balance is pkr')) {
    return {
      id: `CHK-${Math.floor(1000 + Math.random() * 9000)}`,
      originalMessage: text,
      channel,
      status: 'Safe',
      category: 'Official Account Notice',
      plainExplanation:
        'This message looks like a normal, genuine notification. It informs you of an activity without asking you to send money, share confidential PINs, or click suspicious links.',
      indicators: [
        {
          text: 'No request for passwords or OTP',
          reason: 'Genuine services inform you, they do not ask for secret login details.',
          type: 'info',
        },
        {
          text: 'Normal notification wording',
          reason: 'Uses standard official banking/security message format.',
          type: 'info',
        },
      ],
      evidenceNotes:
        'Matches State Bank of Pakistan consumer notification guidelines for automated transactional receipts.',
      safetyActions: [
        'No immediate action required.',
        'Never share any 4-digit or 6-digit verification code with anyone who calls you, even if they claim to be bank staff.',
      ],
      analyzedAt: 'Just now',
    }
  }

  // 2. Suspicious / High Risk patterns
  const isBisp = lower.includes('wazeefa') || lower.includes('benazir') || lower.includes('bisp') || lower.includes('cnic')
  const isWallet = lower.includes('jazzcash') || lower.includes('easypaisa') || lower.includes('block') || lower.includes('biometric') || lower.includes('bit.ly')
  const isLottery = lower.includes('jeeto') || lower.includes('inam') || lower.includes('gaari') || lower.includes('sona') || lower.includes('prize') || lower.includes('5000')
  const isJob = lower.includes('earning') || lower.includes('amazon') || lower.includes('wa.me') || lower.includes('online job')

  let category = 'Potential Scam Message'
  let plainExplanation =
    'This message contains patterns commonly used by scammers in Pakistan to trick people into giving away money or private personal details.'
  let indicators: AnalysisResult['indicators'] = []
  let evidenceNotes =
    'Matches official public safety alerts issued by the Pakistan Telecommunication Authority (PTA) and the Federal Investigation Agency (FIA).'
  let safetyActions = [
    'Do not click on any links in this message.',
    'Do not call the phone number or reply to the sender.',
    'Do not send any money, registration fee, or transfer charges.',
    'Report the sender number to the PTA by forwarding the SMS to 9999.',
  ]

  if (isBisp) {
    category = 'Fake Government Aid Scam (BISP / Ehsaas)'
    plainExplanation =
      'BISP and government welfare programs never send messages from regular mobile SIM numbers asking you to call to register your CNIC or collect cash. This is a common fraud.'
    indicators = [
      {
        text: 'Mentions "25,000 wazeefa" or cash grant',
        reason: 'Scammers use fake government aid promises to lure people.',
        type: 'danger',
      },
      {
        text: 'Personal mobile number as helpline',
        reason: 'Official BISP messages only come from 8171, never from private 03xx phone numbers.',
        type: 'danger',
      },
      {
        text: 'Urgent call-to-action ("Abhi call karein")',
        reason: 'Scammers try to pressure you into acting quickly without thinking.',
        type: 'warning',
      },
    ]
    evidenceNotes =
      'BISP official policy strictly states that all beneficiary notices are issued exclusively via official shortcode 8171. Private mobile numbers claiming to represent BISP are fraudulent.'
    safetyActions = [
      'Do not call the mobile number in the message.',
      'Never send any advance "processing fee" or EasyPaisa/JazzCash transfer.',
      'To check genuine BISP status, only send your CNIC to 8171 or visit an official BISP Tehsil office.',
      'Report the fake number to PTA by forwarding the SMS to 9999.',
    ]
  } else if (isWallet) {
    category = 'Fake Wallet Block / Phishing Link'
    plainExplanation =
      'Your wallet account is not blocked. Scammers send fake panic warnings with unofficial web links to steal your secret mobile PIN and account balance.'
    indicators = [
      {
        text: 'Panic warning: "Account temporary block"',
        reason: 'Creating fake urgency to make you panic and click without checking.',
        type: 'danger',
      },
      {
        text: 'Unofficial shortened link (bit.ly / strange link)',
        reason: 'JazzCash and EasyPaisa only use their official mobile apps or verified websites, never bit.ly links.',
        type: 'danger',
      },
    ]
    evidenceNotes =
      'State Bank of Pakistan circular BPRD instructs that banks and wallet providers will never request biometric verification or PIN verification through web links in SMS.',
    safetyActions = [
      'Do not tap or open the web link.',
      'Never enter your 4-digit or 5-digit wallet MPIN or password on any webpage.',
      'Open your real JazzCash / EasyPaisa app directly to verify your account status.',
      'Call the official helpline (4444 for JazzCash, 3737 for EasyPaisa) if in doubt.',
    ]
  } else if (isLottery) {
    category = 'Fake Prize / Advance-Fee Scam'
    plainExplanation =
      'You have not won a lottery or car. Scammers demand an advance "registration fee" or delivery charge. Once you send money, they disappear.'
    indicators = [
      {
        text: 'Claiming you won a car or big prize',
        reason: 'Classic lure. TV game shows do not award prizes through random WhatsApp messages.',
        type: 'danger',
      },
      {
        text: 'Asking for 5,000 advance registration fee',
        reason: 'Genuine competitions never demand money from winners to release a prize.',
        type: 'danger',
      },
    ]
    evidenceNotes =
      'FIA Cyber Crime Circle and PEMRA have issued repeated consumer warnings regarding fraudulent prize schemes using TV channel and game show names.',
    safetyActions = [
      'Never send any money or fee to claim a prize.',
      'Block and report the sender on WhatsApp.',
      'Warn family and friends who might receive similar messages.',
    ]
  } else if (isJob) {
    category = 'Online Task / Fake Job Scam'
    plainExplanation =
      'No company pays Rs 5,000–8,000 per day simply for liking YouTube videos. Scammers entice you with small initial payouts, then ask you to deposit thousands of rupees into "investment tasks" before stealing everything.'
    indicators = [
      {
        text: 'Unrealistic salary (Rs 5,000–8,000 daily)',
        reason: 'Promises of very high pay for effortless tasks are almost always fraudulent.',
        type: 'danger',
      },
      {
        text: 'Directing you to WhatsApp or Telegram group',
        reason: 'Unregulated chat apps are used so scammers can hide their identity.',
        type: 'warning',
      },
    ]
    evidenceNotes =
      'FIA Cyber Crime Wing warning advisory on "Task-based online fraud schemes targeting Pakistani youth via WhatsApp/Telegram groups".',
    safetyActions = [
      'Do not join the WhatsApp or Telegram group.',
      'Never transfer money to "unlock" tasks or withdraw earnings.',
      'Block the sender immediately.',
    ]
  } else {
    // General suspicious message
    indicators = [
      {
        text: 'Suspicious request or urgent tone',
        reason: 'The wording attempts to trigger emotional reaction or urgency.',
        type: 'warning',
      },
      {
        text: 'Unverified sender contact',
        reason: 'Message originates from an unverified source without official institutional credentials.',
        type: 'warning',
      },
    ]
  }

  return {
    id: `CHK-${Math.floor(1000 + Math.random() * 9000)}`,
    originalMessage: text,
    channel,
    status: isBisp || isWallet || isLottery || isJob ? 'High Risk' : 'Suspicious',
    category,
    plainExplanation,
    indicators,
    evidenceNotes,
    safetyActions,
    analyzedAt: 'Just now',
  }
}
