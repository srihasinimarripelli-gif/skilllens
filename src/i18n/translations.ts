import type { Language } from '../types';

export interface TranslationDict {
  appName: string;
  tagline: string;
  offlineNotice: string;
  nav: {
    home: string;
    skills: string;
    practice: string;
    progress: string;
    profile: string;
  };
  landing: {
    headline: string;
    subheadline: string;
    getStarted: string;
    whyTitle: string;
    whyDesc: string;
    features: {
      watch: string;
      watchDesc: string;
      correct: string;
      correctDesc: string;
      track: string;
      trackDesc: string;
    };
  };
  onboarding: {
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
    next: string;
    back: string;
    finish: string;
    skip: string;
  };
  home: {
    greetingMorning: string;
    greetingDay: string;
    greetingEvening: string;
    streakLabel: string;
    daysStreak: string;
    readinessScore: string;
    scoreSubtitle: string;
    continuePractice: string;
    resumeCta: string;
    recommendedSkills: string;
    recentFeedback: string;
    noRecentFeedback: string;
    exploreCategories: string;
    viewAll: string;
    quickSummary: string;
  };
  skills: {
    title: string;
    searchPlaceholder: string;
    allCategories: string;
    skillsFound: string;
    noSkillsMatch: string;
    difficulty: string;
    duration: string;
    filterBy: string;
  };
  skillDetail: {
    difficulty: string;
    duration: string;
    toolsNeeded: string;
    stepByStep: string;
    safetyFirst: string;
    cameraTips: string;
    observableMetrics: string;
    personalBest: string;
    noScoreYet: string;
    startPractice: string;
    skincareDisclaimer: string;
  };
  practice: {
    simulatedBadge: string;
    simulatedNotice: string;
    connectingCamera: string;
    cameraAccessDenied: string;
    enableCameraFallback: string;
    useSimulatedCamera: string;
    liveTechniqueGuidance: string;
    trackingActive: string;
    start: string;
    pause: string;
    resume: string;
    finishSession: string;
    elapsed: string;
    sessionPaused: string;
  };
  results: {
    sessionSummary: string;
    formScore: string;
    metricsTitle: string;
    strengthsTitle: string;
    improvementsTitle: string;
    safetyTitle: string;
    practiceAgain: string;
    viewProgress: string;
    home: string;
    savedLocally: string;
  };
  progress: {
    title: string;
    subtitle: string;
    totalPractices: string;
    skillsMastered: string;
    currentStreak: string;
    averageScore: string;
    progressionTrend: string;
    recentSessions: string;
    noSessionsYet: string;
    categoriesProgress: string;
    earnedBadges: string;
  };
  profile: {
    title: string;
    learnerLevel: string;
    selectLanguage: string;
    appSettings: string;
    feedbackFrequency: string;
    continuous: string;
    periodic: string;
    low: string;
    visionSensitivity: string;
    normal: string;
    high: string;
    relaxed: string;
    audioCoaching: string;
    audioCoachingDesc: string;
    dataManagement: string;
    resetData: string;
    resetConfirm: string;
    dataResetSuccess: string;
    version: string;
  };
}

export const translations: Record<Language, TranslationDict> = {
  en: {
    appName: 'SkillLens',
    tagline: 'AI Coach for Hands-On Skills',
    offlineNotice: 'Offline Mode — your practice data is saved on this device.',
    nav: {
      home: 'Home',
      skills: 'Skills',
      practice: 'Practice',
      progress: 'Progress',
      profile: 'Profile',
    },
    landing: {
      headline: 'Master Hands-On Skills with Intelligent Real-Time Guidance',
      subheadline: 'Position your phone camera. SkillLens analyzes your form, angle, and technique to provide instant feedback and score your craftsmanship.',
      getStarted: 'Get Started Free',
      whyTitle: 'Crafted for Real-World Learning',
      whyDesc: 'From roller painting to delicate stitchwork and makeup application, get micro-corrections before mistakes become habits.',
      features: {
        watch: 'Phone Camera Guidance',
        watchDesc: 'Mount your device facing your workspace for hands-free tracking.',
        correct: 'Micro-Feedback',
        correctDesc: 'Hear and see immediate adjustments to angle, stroke, and posture.',
        track: 'Measurable Mastery',
        trackDesc: 'Watch your technique score rise with persistent streak tracking.',
      },
    },
    onboarding: {
      step1Title: '1. Choose Any Hands-On Craft',
      step1Desc: 'Select from 67 practical skills across Painting, Tailoring, Crochet, Pottery, Cooking, DIY, and Beauty.',
      step2Title: '2. Position Your Phone Camera',
      step2Desc: 'Set up your phone on a stand or table with your hands and tools centered in the guide box.',
      step3Title: '3. Practice & Receive Feedback',
      step3Desc: 'SkillLens tracks your movement rhythm, angles, and precision to give you constructive coaching.',
      next: 'Next',
      back: 'Back',
      finish: 'Start Coaching',
      skip: 'Skip to Home',
    },
    home: {
      greetingMorning: 'Good morning, Maker',
      greetingDay: 'Good afternoon, Maker',
      greetingEvening: 'Good evening, Maker',
      streakLabel: 'Daily Streak',
      daysStreak: 'days active',
      readinessScore: 'Overall Technique Score',
      scoreSubtitle: 'Based on your recent practice sessions',
      continuePractice: 'Continue Practice',
      resumeCta: 'Resume Technique Drill',
      recommendedSkills: 'Recommended For You',
      recentFeedback: 'Latest AI Coaching Insights',
      noRecentFeedback: 'No sessions completed yet. Pick a skill to start!',
      exploreCategories: 'Explore 10 Craft Categories',
      viewAll: 'View All 67 Skills',
      quickSummary: 'Session Breakdown',
    },
    skills: {
      title: 'Skills Library',
      searchPlaceholder: 'Search skills (e.g. Roller, Stitch, Eyeliner)...',
      allCategories: 'All Categories',
      skillsFound: 'skills available',
      noSkillsMatch: 'No skills matched your search.',
      difficulty: 'Difficulty',
      duration: 'Est. Time',
      filterBy: 'Filter',
    },
    skillDetail: {
      difficulty: 'Difficulty Level',
      duration: 'Drill Duration',
      toolsNeeded: 'Tools & Materials Needed',
      stepByStep: 'Technique Steps',
      safetyFirst: 'Safety & Posture Notes',
      cameraTips: 'Camera Placement Tips',
      observableMetrics: 'Target Metrics Evaluated',
      personalBest: 'Personal Best Score',
      noScoreYet: 'Not practiced yet',
      startPractice: 'Start Practice Session',
      skincareDisclaimer: 'Note: SkillLens provides application and technique coaching only. It does not diagnose medical conditions.',
    },
    practice: {
      simulatedBadge: 'Simulated AI Vision Active',
      simulatedNotice: 'Simulation Demo: Visual posture & technique feedback are demonstrated via MockVisionAnalyzer.',
      connectingCamera: 'Connecting to device camera...',
      cameraAccessDenied: 'Camera unavailable or permission denied.',
      enableCameraFallback: 'Using interactive simulated workspace camera feed.',
      useSimulatedCamera: 'Switch to Simulated Camera',
      liveTechniqueGuidance: 'Live AI Guidance',
      trackingActive: 'Tracking Hand & Tool Orientation',
      start: 'Start Drill',
      pause: 'Pause',
      resume: 'Resume',
      finishSession: 'Finish Practice',
      elapsed: 'Elapsed Time',
      sessionPaused: 'Drill Paused — resume when ready',
    },
    results: {
      sessionSummary: 'Practice Complete!',
      formScore: 'Overall Technique Score',
      metricsTitle: 'Performance Breakdown',
      strengthsTitle: 'Form Strengths',
      improvementsTitle: 'Technique Adjustments',
      safetyTitle: 'Safety & Form Notes',
      practiceAgain: 'Practice Again',
      viewProgress: 'View Full Progress',
      home: 'Back to Home',
      savedLocally: 'Session saved to your device',
    },
    progress: {
      title: 'Your Progress & Mastery',
      subtitle: 'Tracking your hand-eye coordination and muscle memory growth',
      totalPractices: 'Total Drills',
      skillsMastered: 'Skills Practiced',
      currentStreak: 'Day Streak',
      averageScore: 'Average Score',
      progressionTrend: 'Score Progression',
      recentSessions: 'Recent Practice History',
      noSessionsYet: 'No practice sessions recorded yet.',
      categoriesProgress: 'Category Coverage',
      earnedBadges: 'Skill Badges & Milestones',
    },
    profile: {
      title: 'Learner Profile & Settings',
      learnerLevel: 'Apprentice Maker',
      selectLanguage: 'Language / भाषा / భాష',
      appSettings: 'AI Coaching Preferences',
      feedbackFrequency: 'Feedback Frequency',
      continuous: 'Continuous (High)',
      periodic: 'Periodic (Every 15s)',
      low: 'Summary Only',
      visionSensitivity: 'Tracking Sensitivity',
      normal: 'Balanced',
      high: 'High Precision',
      relaxed: 'Relaxed / Casual',
      audioCoaching: 'Audio Voice Guidance',
      audioCoachingDesc: 'Plays spoken cues for hand-eye alignment (UI simulation)',
      dataManagement: 'Data Management',
      resetData: 'Reset All Local Data',
      resetConfirm: 'Are you sure you want to reset your practice history and scores?',
      dataResetSuccess: 'All local data has been reset to defaults.',
      version: 'SkillLens v1.0.0 (iQOO Hackathon Edition)',
    },
  },
  hi: {
    appName: 'SkillLens',
    tagline: 'हस्त-कौशल के लिए AI कोच',
    offlineNotice: 'ऑफ़लाइन मोड — आपका अभ्यास डेटा इसी डिवाइस पर सुरक्षित है।',
    nav: {
      home: 'होम',
      skills: 'कौशल',
      practice: 'अभ्यास',
      progress: 'प्रगति',
      profile: 'प्रोफ़ाइल',
    },
    landing: {
      headline: 'वास्तविक समय AI मार्गदर्शन के साथ अपने हाथों के कौशल को निखारें',
      subheadline: 'अपने फोन का कैमरा सेट करें। SkillLens आपके कोण, गति और तकनीक का विश्लेषण करके तुरंत सुधार बताता है।',
      getStarted: 'शुरू करें',
      whyTitle: 'व्यावहारिक शिक्षा के लिए निर्मित',
      whyDesc: 'पेंटिंग, सिलाई, क्रोशिया से लेकर मेकअप तक - गलतियों को आदत बनने से पहले ठीक करें।',
      features: {
        watch: 'फोन कैमरा सहायता',
        watchDesc: 'हैंड्स-फ्री ट्रैकिंग के लिए फोन को कार्यक्षेत्र के सामने रखें।',
        correct: 'त्वरित मार्गदर्शन',
        correctDesc: 'कोण और गति के लिए तुरंत सुझाव देखें।',
        track: 'मापने योग्य सुधार',
        trackDesc: 'हर अभ्यास के साथ अपने तकनीक स्कोर को बढ़ते हुए देखें।',
      },
    },
    onboarding: {
      step1Title: '1. कोई भी कौशल चुनें',
      step1Desc: 'पेंटिंग, सिलाई, शिल्प, खाना पकाने और सौंदर्य में से 67 कौशलों में से चुनें।',
      step2Title: '2. फोन का कैमरा सेट करें',
      step2Desc: 'अपने फोन को स्टैंड या टेबल पर रखें ताकि हाथ और उपकरण गाइड बॉक्स में रहें।',
      step3Title: '3. अभ्यास करें और सुझाव पाएं',
      step3Desc: 'SkillLens आपकी गति, कोण और सटीकता को ट्रैक करके मार्गदर्शन देता है।',
      next: 'आगे',
      back: 'पीछे',
      finish: 'कोचिंग शुरू करें',
      skip: 'होम पर जाएं',
    },
    home: {
      greetingMorning: 'शुभ प्रभात, कारीगर',
      greetingDay: 'नमस्ते, कारीगर',
      greetingEvening: 'शुभ संध्या, कारीगर',
      streakLabel: 'दैनिक स्ट्रीक',
      daysStreak: 'दिन सक्रिय',
      readinessScore: 'समग्र तकनीक स्कोर',
      scoreSubtitle: 'आपके हालिया सत्रों के आधार पर',
      continuePractice: 'अभ्यास जारी रखें',
      resumeCta: 'तकनीक ड्रिल शुरू करें',
      recommendedSkills: 'आपके लिए अनुशंसित',
      recentFeedback: 'नवीनतम AI सुझाव',
      noRecentFeedback: 'अभी कोई सत्र पूरा नहीं हुआ। शुरू करने के लिए कौशल चुनें!',
      exploreCategories: '10 श्रेणियां देखें',
      viewAll: 'सभी 67 कौशल देखें',
      quickSummary: 'सत्र सारांश',
    },
    skills: {
      title: 'कौशल पुस्तकालय',
      searchPlaceholder: 'कौशल खोजें (उदा. पेंटिंग, सिलाई, आईलाइनर)...',
      allCategories: 'सभी श्रेणियां',
      skillsFound: 'कौशल उपलब्ध',
      noSkillsMatch: 'कोई कौशल नहीं मिला।',
      difficulty: 'कठिनाई',
      duration: 'अनुमानित समय',
      filterBy: 'फ़िल्टर',
    },
    skillDetail: {
      difficulty: 'कठिनाई स्तर',
      duration: 'अभ्यास समय',
      toolsNeeded: 'आवश्यक उपकरण व सामग्री',
      stepByStep: 'तकनीक के चरण',
      safetyFirst: 'सुरक्षा और मुद्रा निर्देश',
      cameraTips: 'कैमरा स्थिति के सुझाव',
      observableMetrics: 'मूल्यांकन किए जाने वाले मेट्रिक्स',
      personalBest: 'सर्वोत्तम स्कोर',
      noScoreYet: 'अभी अभ्यास नहीं किया गया',
      startPractice: 'अभ्यास शुरू करें',
      skincareDisclaimer: 'नोट: SkillLens केवल लगाने की तकनीक का मार्गदर्शन देता है। यह कोई चिकित्सा सलाह नहीं है।',
    },
    practice: {
      simulatedBadge: 'सिम्युलेटेड AI विज़न सक्रिय',
      simulatedNotice: 'सिम्युलेशन डेमो: MockVisionAnalyzer द्वारा तकनीक का पूर्वावलोकन प्रस्तुत किया गया है।',
      connectingCamera: 'डिवाइस कैमरे से कनेक्ट हो रहा है...',
      cameraAccessDenied: 'कैमरा उपलब्ध नहीं है।',
      enableCameraFallback: 'सिम्युलेटेड कैमरा वर्कस्पेस सक्रिय है।',
      useSimulatedCamera: 'सिम्युलेटेड कैमरे पर जाएं',
      liveTechniqueGuidance: 'लाइव AI मार्गदर्शन',
      trackingActive: 'हाथ और उपकरण ट्रैकिंग सक्रिय',
      start: 'शुरू करें',
      pause: 'रोकें',
      resume: 'पुनः शुरू करें',
      finishSession: 'अभ्यास पूरा करें',
      elapsed: 'बीता समय',
      sessionPaused: 'सत्र रुका हुआ है',
    },
    results: {
      sessionSummary: 'अभ्यास संपन्न!',
      formScore: 'तकनीक स्कोर',
      metricsTitle: 'प्रदर्शन विवरण',
      strengthsTitle: 'उत्कृष्ट पहलू',
      improvementsTitle: 'सुधार के बिंदु',
      safetyTitle: 'सुरक्षा और मुद्रा सुझाव',
      practiceAgain: 'पुनः अभ्यास करें',
      viewProgress: 'पूरी प्रगति देखें',
      home: 'होम पर वापस जाएं',
      savedLocally: 'सत्र डिवाइस पर सहेजा गया',
    },
    progress: {
      title: 'आपकी प्रगति और महारत',
      subtitle: 'हाथ और आंखों के समन्वय तथा मांसपेशियों की स्मृति का विकास',
      totalPractices: 'कुल अभ्यास',
      skillsMastered: 'अभ्यास किए गए कौशल',
      currentStreak: 'दिनों की स्ट्रीक',
      averageScore: 'औसत स्कोर',
      progressionTrend: 'स्कोर रुझान',
      recentSessions: 'हालिया अभ्यास इतिहास',
      noSessionsYet: 'कोई पिछला अभ्यास नहीं मिला।',
      categoriesProgress: 'श्रेणी कवरेज',
      earnedBadges: 'कौशल बैज',
    },
    profile: {
      title: 'शिक्षार्थी प्रोफ़ाइल और सेटिंग्स',
      learnerLevel: 'शिक्षार्थी कारीगर',
      selectLanguage: 'भाषा चुनें',
      appSettings: 'AI कोचिंग प्राथमिकताएं',
      feedbackFrequency: 'सुझाव आवृत्ति',
      continuous: 'निरंतर',
      periodic: 'नियमित अंतराल',
      low: 'केवल सारांश',
      visionSensitivity: 'ट्रैकिंग संवेदनशीलता',
      normal: 'संतुलित',
      high: 'उच्च परिशुद्धता',
      relaxed: 'सहज',
      audioCoaching: 'ऑडियो मार्गदर्शन',
      audioCoachingDesc: 'हाथ के संरेखण के लिए ध्वनि निर्देश (UI सिमुलेशन)',
      dataManagement: 'डेटा प्रबंधन',
      resetData: 'स्थानीय डेटा रीसेट करें',
      resetConfirm: 'क्या आप वाकई अपना अभ्यास इतिहास मिटाना चाहते हैं?',
      dataResetSuccess: 'डेटा रीसेट कर दिया गया है।',
      version: 'SkillLens v1.0.0 (iQOO हैकाथॉन)',
    },
  },
  te: {
    appName: 'SkillLens',
    tagline: 'చేతి నైపుణ్యాల కోసం AI కోచ్',
    offlineNotice: 'ఆఫ్‌లైన్ మోడ్ — మీ సాధన డేటా ఈ పరికరంలోనే భద్రపరచబడింది.',
    nav: {
      home: 'హోమ్',
      skills: 'నైపుణ్యాలు',
      practice: 'సాధన',
      progress: 'పురోగతి',
      profile: 'ప్రొఫైల్',
    },
    landing: {
      headline: 'రియల్-టైమ్ AI సూచనలతో చేతి పనులలో ప్రావీణ్యం సాధించండి',
      subheadline: 'ఫోన్ కెమెరాను అమర్చండి. SkillLens మీ చేతి కోణాలు, కదలికలు మరియు పద్ధతిని విశ్లేషించి తక్షణ మార్గదర్శకత్వం అందిస్తుంది.',
      getStarted: 'ప్రారంభించండి',
      whyTitle: 'నిజమైన నైపుణ్యాల కోసం రూపొందించబడింది',
      whyDesc: 'పెయింటింగ్, కుట్టుపని, క్రాఫ్ట్స్, మరియు మేకప్ వరకు - పొరపాట్లు అలవాటుగా మారకముందే సరిచేసుకోండి.',
      features: {
        watch: 'ఫోన్ కెమెరా గైడెన్స్',
        watchDesc: 'చేతులు ఫ్రేమ్‌లో ఉండేలా ఫోన్‌ను స్థిరంగా ఉంచండి.',
        correct: 'మైక్రో ఫీడ్‌బ్యాక్',
        correctDesc: 'కోణం మరియు పద్ధతిపై తక్షణమే సలహాలు పొందండి.',
        track: 'స్పష్టమైన పురోగతి',
        trackDesc: 'ప్రతి సాధనతో మీ టెక్నిక్ స్కోరును మెరుగుపరచుకోండి.',
      },
    },
    onboarding: {
      step1Title: '1. ఏదైనా నైపుణ్యాన్ని ఎంచుకోండి',
      step1Desc: 'పెయింటింగ్, కుట్టుపని, కుండల తయారీ, వంట మరియు క్రాఫ్ట్స్ వంటి 67 నైపుణ్యాల నుండి ఎంచుకోండి.',
      step2Title: '2. ఫోన్ కెమెరాను అమర్చండి',
      step2Desc: 'మీ చేతులు మరియు పనిముట్లు గైడ్ బాక్స్‌లో కనిపించేలా ఫోన్ అమర్చండి.',
      step3Title: '3. సాధన చేయండి & సలహాలు పొందండి',
      step3Desc: 'SkillLens మీ కదలికలు మరియు ఖచ్చితత్వాన్ని గమనించి శిక్షణ ఇస్తుంది.',
      next: 'తరువాత',
      back: 'వెనుకకు',
      finish: 'కోచింగ్ ప్రారంభించండి',
      skip: 'హోమ్‌కు వెళ్లండి',
    },
    home: {
      greetingMorning: 'శుభోదయం, కళాకారుడా',
      greetingDay: 'నమస్కారం, కళాకారుడా',
      greetingEvening: 'శుభ సాయంత్రం, కళాకారుడా',
      streakLabel: 'రోజువారీ స్ట్రీక్',
      daysStreak: 'రోజులు యాక్టివ్',
      readinessScore: 'మొత్తం టెక్నిక్ స్కోరు',
      scoreSubtitle: 'మీ ఇటీవలి సాధన సెషన్ల ఆధారంగా',
      continuePractice: 'సాధన కొనసాగించండి',
      resumeCta: 'టెక్నిక్ డ్రిల్ ప్రారంభించండి',
      recommendedSkills: 'మీ కోసం సిఫార్సు చేసినవి',
      recentFeedback: 'ఇటీవలి AI సలహాలు',
      noRecentFeedback: 'ఇంకా సాధన చేయలేదు. ప్రారంభించడానికి నైపుణ్యాన్ని ఎంచుకోండి!',
      exploreCategories: '10 వర్గాలను అన్వేషించండి',
      viewAll: 'అన్ని 67 నైపుణ్యాలు చూడండి',
      quickSummary: 'సెషన్ వివరాలు',
    },
    skills: {
      title: 'నైపుణ్యాల లైబ్రరీ',
      searchPlaceholder: 'నైపుణ్యాలను వెతకండి (ఉదా. పెయింటింగ్, కుట్టు, ఐలైనర్)...',
      allCategories: 'అన్ని వర్గాలు',
      skillsFound: 'నైపుణ్యాలు అందుబాటులో ఉన్నాయి',
      noSkillsMatch: 'ఏ నైపుణ్యం కనిపించలేదు.',
      difficulty: 'కష్టతరత',
      duration: 'సమయం',
      filterBy: 'ఫిల్టర్',
    },
    skillDetail: {
      difficulty: 'స్థాయి',
      duration: 'వ్యవధి',
      toolsNeeded: 'అవసరమైన పరికరాలు & వస్తువులు',
      stepByStep: 'పద్ధతి దశలు',
      safetyFirst: 'భద్రతా సూచనలు',
      cameraTips: 'కెమెరా అమరిక సూచనలు',
      observableMetrics: 'పరిశీలించే ప్రమాణాలు',
      personalBest: 'ఉత్తమ స్కోరు',
      noScoreYet: 'ఇంకా సాధన చేయలేదు',
      startPractice: 'సాధన ప్రారంభించండి',
      skincareDisclaimer: 'గమనిక: SkillLens అప్లికేషన్ టెక్నిక్‌ను మాత్రమే విశ్లేషిస్తుంది. ఇది ఎలాంటి వైద్య సలహా కాదు.',
    },
    practice: {
      simulatedBadge: 'సిమ్యులేటెడ్ AI విజన్ యాక్టివ్',
      simulatedNotice: 'సిమ్యులేషన్ డెమో: MockVisionAnalyzer ద్వారా టెక్నిక్ ఫీడ్‌బ్యాక్ ప్రదర్శించబడుతుంది.',
      connectingCamera: 'కెమెరాకు కనెక్ట్ అవుతోంది...',
      cameraAccessDenied: 'కెమెరా అనుమతి లభించలేదు.',
      enableCameraFallback: 'సిమ్యులేటెడ్ కెమెరా ప్రారంభించబడింది.',
      useSimulatedCamera: 'సిమ్యులేటెడ్ కెమెరాను ఎంచుకోండి',
      liveTechniqueGuidance: 'ప్రత్యక్ష AI సూచనలు',
      trackingActive: 'చేతి & సాధనాల గుర్తింపు సక్రియం',
      start: 'ప్రారంభించండి',
      pause: 'ఆపండి',
      resume: 'కొనసాగించండి',
      finishSession: 'ముగించండి',
      elapsed: 'గడిచిన సమయం',
      sessionPaused: 'సాధన తాత్కాలికంగా ఆపబడింది',
    },
    results: {
      sessionSummary: 'సాధన పూర్తయింది!',
      formScore: 'టెక్నిక్ స్కోరు',
      metricsTitle: 'పనితీరు విశ్లేషణ',
      strengthsTitle: 'బాగా చేసినవి',
      improvementsTitle: 'మెరుగుపరచుకోవాల్సినవి',
      safetyTitle: 'భద్రతా & భంగిమ సూచనలు',
      practiceAgain: 'మళ్ళీ సాధన చేయండి',
      viewProgress: 'పూర్తి పురోగతి చూడండి',
      home: 'హోమ్‌కు వెళ్లండి',
      savedLocally: 'సెషన్ మీ పరికరంలో భద్రపరచబడింది',
    },
    progress: {
      title: 'మీ పురోగతి & ప్రావీణ్యం',
      subtitle: 'కండరాల జ్ఞాపకశక్తి మరియు చేతి నియంత్రణ పెరుగుదల',
      totalPractices: 'మొత్తం సాధనలు',
      skillsMastered: 'సాధన చేసిన నైపుణ్యాలు',
      currentStreak: 'రోజుల స్ట్రీక్',
      averageScore: 'సగటు స్కోరు',
      progressionTrend: 'స్కోరు పురోగతి',
      recentSessions: 'ఇటీవలి సాధన చరిత్ర',
      noSessionsYet: 'గత సాధన వివరాలు లేవు.',
      categoriesProgress: 'వర్గాల పరిధి',
      earnedBadges: 'నైపుణ్య బ్యాడ్జ్‌లు',
    },
    profile: {
      title: 'ప్రొఫైల్ మరియు సెట్టింగ్స్',
      learnerLevel: 'నైపుణ్య సాధకుడు',
      selectLanguage: 'భాషను ఎంచుకోండి',
      appSettings: 'AI కోచింగ్ ఎంపికలు',
      feedbackFrequency: 'సూచనల ఫ్రీక్వెన్సీ',
      continuous: 'నిరంతరం',
      periodic: 'నిర్దిష్ట వ్యవధిలో',
      low: 'చివర్లో మాత్రమే',
      visionSensitivity: 'ట్రాకింగ్ సెన్సిటివిటీ',
      normal: 'సహజం',
      high: 'అధిక ఖచ్చితత్వం',
      relaxed: 'సాధారణం',
      audioCoaching: 'ఆడియో మార్గదర్శకత్వం',
      audioCoachingDesc: 'చేతి అమరిక కోసం వాయిస్ సూచనలు (UI సిమ్యులేషన్)',
      dataManagement: 'డేటా నిర్వహణ',
      resetData: 'డేటాను రీసెట్ చేయండి',
      resetConfirm: 'మీ సాధన చరిత్రను ఖచ్చితంగా రీసెట్ చేయాలనుకుంటున్నారా?',
      dataResetSuccess: 'డేటా విజయవంతంగా రీసెట్ చేయబడింది.',
      version: 'SkillLens v1.0.0 (iQOO హ్యాకథాన్)',
    },
  },
};
