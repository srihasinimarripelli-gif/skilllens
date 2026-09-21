import type { Language } from './types';

export interface TranslationDict {
  [key: string]: any;
}

export const translations: Record<Language, TranslationDict> = {
  en: {
  "common": {
    "appName": "SkillLens",
    "tagline": "AI Coach for Hands-On Skills",
    "offlineNotice": "Offline Mode — your practice data is saved on this device.",
    "home": "Home",
    "skills": "Skills",
    "practice": "Practice",
    "progress": "Progress",
    "profile": "Profile",
    "learn": "Learn",
    "startPractice": "Start Practice",
    "continuePractice": "Continue Practice",
    "continueLearning": "Continue Learning",
    "resumeDrill": "Resume Technique Drill",
    "back": "Back",
    "next": "Next",
    "finish": "Finish",
    "skip": "Skip",
    "save": "Save",
    "cancel": "Cancel",
    "loading": "Loading...",
    "error": "Error",
    "success": "Success",
    "retry": "Retry",
    "viewAll": "View All",
    "search": "Search",
    "filter": "Filter",
    "difficulty": "Difficulty",
    "duration": "Duration",
    "minutes": "min",
    "all": "All",
    "beginner": "Beginner",
    "intermediate": "Intermediate",
    "advanced": "Advanced",
    "signOut": "Sign Out",
    "signIn": "Sign In",
    "signUp": "Sign Up",
    "days": "days",
    "streak": "Streak",
    "sessions": "Sessions",
    "mastery": "Mastery",
    "activeCourses": "Active courses",
    "points": "points",
    "featured": "Featured",
    "drills": "Drills",
    "allSkills": "All Skills",
    "allCategories": "All Categories",
    "skillsFound": "skills available",
    "noSkillsMatch": "No skills matched your search.",
    "tools": "Tools",
    "materials": "Materials",
    "steps": "Steps",
    "safety": "Safety",
    "tips": "Tips",
    "close": "Close",
    "done": "Done",
    "confirm": "Confirm",
    "delete": "Delete",
    "edit": "Edit",
    "seconds": "seconds"
  },
  "nav": {
    "home": "Home",
    "skills": "Skills",
    "practice": "Practice",
    "progress": "Progress",
    "profile": "Profile",
    "learn": "Learn",
    "signOut": "Sign Out"
  },
  "auth": {
    "signIn": "Sign In",
    "signUp": "Sign Up",
    "email": "Email",
    "password": "Password",
    "confirmPassword": "Confirm Password",
    "forgotPassword": "Forgot Password?",
    "createAccount": "Create Account",
    "alreadyHaveAccount": "Already have an account?",
    "dontHaveAccount": "Don't have an account?",
    "invalidEmail": "Please enter a valid email address.",
    "passwordRequired": "Please enter your password.",
    "passwordMismatch": "Passwords do not match.",
    "loginSuccess": "Sign in successful! Redirecting...",
    "accountCreated": "Account created successfully! Redirecting...",
    "logout": "Sign Out",
    "sessionMessages": "Signed in successfully.",
    "welcomeBack": "Welcome back",
    "signInSubtitle": "Continue learning and improving your skills.",
    "createAccountSubtitle": "Join SkillLens to master hands-on skills with real-time AI guidance.",
    "fullName": "Full Name",
    "fullNamePlaceholder": "e.g. Alex Vance",
    "emailPlaceholder": "you@example.com",
    "passwordPlaceholder": "••••••••",
    "confirmPasswordPlaceholder": "••••••••",
    "quickDemo": "Quick Demo: Fill with Alex Vance",
    "resetPassword": "Reset Password",
    "resetPasswordSubtitle": "Enter your email address to receive password reset instructions.",
    "sendResetLink": "Send Reset Instructions",
    "backToSignIn": "Back to Sign In",
    "resetSuccessMessage": "Password reset instructions have been simulated for this demo account.",
    "passwordMinLength": "Password must be at least 6 characters.",
    "fillAllFields": "Please fill in all required fields.",
    "loginFailed": "Email or password is incorrect.",
    "registerFailed": "Failed to create account. Please try again."
  },
  "landing": {
    "tagline": "Hands-On Learning App",
    "badge": "Interactive Practice Coach",
    "headline": "Master Hands-On Skills with Intelligent Real-Time Guidance",
    "subheadline": "Position your phone camera. SkillLens analyzes your form, angle, and technique to provide instant feedback and score your craftsmanship.",
    "getStarted": "Get Started Free",
    "viewSkills": "Explore 67 Skills",
    "whyTitle": "Crafted for Real-World Learning",
    "whyDesc": "From roller painting to delicate stitchwork and makeup application, get micro-corrections before mistakes become habits.",
    "previewTitle": "Explore Flagship Crafts",
    "previewSubtitle": "Hands-on practice modules with AI vision analysis and step-by-step guidance.",
    "features": {
      "watch": "Phone Camera Guidance",
      "watchDesc": "Mount your device facing your workspace for hands-free tracking.",
      "correct": "Micro-Feedback",
      "correctDesc": "Hear and see immediate adjustments to angle, stroke, and posture.",
      "track": "Measurable Mastery",
      "trackDesc": "Watch your technique score rise with persistent streak tracking."
    }
  },
  "onboarding": {
    "step1Title": "1. Choose Any Hands-On Craft",
    "step1Desc": "Select from 67 practical skills across Painting, Tailoring, Crochet, Pottery, Cooking, DIY, and Beauty.",
    "step2Title": "2. Position Your Phone Camera",
    "step2Desc": "Set up your phone on a stand or table with your hands and tools centered in the guide box.",
    "step3Title": "3. Practice & Receive Feedback",
    "step3Desc": "SkillLens tracks your movement rhythm, angles, and precision to give you constructive coaching.",
    "next": "Next",
    "back": "Back",
    "finish": "Start Coaching",
    "skip": "Skip to Home"
  },
  "home": {
    "greetingMorning": "Good morning, {{name}}",
    "greetingDay": "Good afternoon, {{name}}",
    "greetingEvening": "Good evening, {{name}}",
    "whatToLearn": "What would you like to learn today?",
    "streakLabel": "Daily Streak",
    "daysStreak": "days active",
    "daysActive": "Days",
    "readinessScore": "Overall Technique Score",
    "overallReadiness": "Overall Readiness Score",
    "scoreSubtitle": "Based on hands-on camera technique checks",
    "continuePractice": "Continue Practice",
    "continueLearning": "Continue Learning",
    "resumeCta": "Resume Technique Drill",
    "recommendedSkills": "Recommended Practice Drills",
    "recommendedSubtitle": "Essential hands-on drills to build muscle memory",
    "recentFeedback": "Recent Coach Feedback",
    "latestInsights": "Latest AI Coaching Insights",
    "noRecentFeedback": "No sessions completed yet. Pick a skill to start!",
    "exploreCategories": "Explore Craft Categories",
    "exploreCategoriesSubtitle": "Comprehensive learning across 10 disciplines",
    "viewAll": "View All 67 Skills",
    "quickSummary": "Session Breakdown",
    "viewFullHistory": "View Full History →",
    "score": "score",
    "sessionsRecorded": "Sessions",
    "skillsCount": "Skills",
    "mastery": "Mastery"
  },
  "skills": {
    "title": "Skill Library",
    "subtitle": "Explore step-by-step masterclasses and camera technique drills.",
    "searchPlaceholder": "Search skills, tools, or techniques...",
    "allCategories": "All Categories",
    "allSkillsCount": "All Skills ({{count}})",
    "skillsFound": "skills available",
    "noSkillsMatch": "No skills matched your search.",
    "difficulty": "Difficulty",
    "duration": "Est. Time",
    "filterBy": "Filter",
    "featured": "Featured",
    "browseCatalog": "Browse 67 hands-on practice tutorials",
    "all": "All"
  },
  "skillDetail": {
    "difficulty": "Difficulty Level",
    "duration": "Drill Duration",
    "toolsNeeded": "Tools & Materials Needed",
    "stepByStep": "Technique Steps",
    "safetyFirst": "Safety & Posture Notes",
    "cameraTips": "Camera Placement Tips",
    "observableMetrics": "Target Metrics Evaluated",
    "personalBest": "Personal Record",
    "noScoreYet": "No practice recorded yet",
    "startPractice": "Start Practice Session",
    "learnStepByStep": "Learn Step-by-Step",
    "skincareDisclaimer": "Note: SkillLens provides application and technique coaching only. It does not diagnose medical conditions.",
    "videoAvailable": "Instructional Video Available",
    "videoAvailableDesc": "Includes real technique breakdown and steps",
    "readyToTest": "Ready to test your technique?",
    "readyToTestDesc": "Use your camera for real-time form checks and feedback.",
    "mastery": "Mastery",
    "whatYouNeed": "What you need",
    "overview": "Skill Overview"
  },
  "learning": {
    "lesson": "Lesson",
    "tutorial": "Skill Tutorial",
    "stepProgress": "Progress: Step {{current}} of {{total}}",
    "step": "Step {{current}}",
    "techniqueNote": "Technique Note",
    "whatYouNeed": "What you need",
    "commonMistakes": "Common mistakes to avoid",
    "safetyAndWorkspace": "Safety & Workspace",
    "previousStep": "Previous Step",
    "nextStep": "Next Step",
    "startPractice": "Start Practice",
    "readyToTest": "Ready to test your technique?",
    "readyToTestDesc": "Use your camera for real-time form checks and feedback.",
    "openStudio": "Open Practice Studio"
  },
  "video": {
    "lessonTitle": "Instructional Video Lesson",
    "watchVideo": "Watch Video",
    "videoUnavailable": "Video unavailable",
    "videoLoading": "Loading video...",
    "videoCompleted": "Video completed",
    "continue": "Continue",
    "previous": "Previous",
    "next": "Next",
    "markAsComplete": "Mark as Complete",
    "startPractice": "Start Practice",
    "markAsWatched": "Mark Video as Watched",
    "openInYouTube": "Watch directly on YouTube",
    "fallbackMessage": "The video could not be loaded. Please follow the step-by-step visual instructions below.",
    "demonstration": "Video demonstration",
    "noticeEn": "English instructional video",
    "noticeHi": "English video • हिंदी instructions below",
    "noticeTe": "English video • తెలుగు instructions below"
  },
  "practice": {
    "simulatedBadge": "Simulated AI Vision Active",
    "simulatedNotice": "Simulation Demo: Visual posture & technique feedback are demonstrated via MockVisionAnalyzer.",
    "connectingCamera": "Connecting to device camera...",
    "cameraAccessDenied": "Camera unavailable or permission denied.",
    "enableCameraFallback": "Using interactive simulated workspace camera feed.",
    "useSimulatedCamera": "Switch to Simulated Camera",
    "liveTechniqueGuidance": "Live AI Guidance",
    "trackingActive": "Tracking Hand & Tool Orientation",
    "start": "Start Drill",
    "pause": "Pause",
    "resume": "Resume",
    "finishSession": "Finish Practice",
    "elapsed": "Elapsed Time",
    "sessionPaused": "Drill Paused — resume when ready",
    "cameraTips": "Camera Placement & Setup",
    "targetMetrics": "Target Metrics Evaluated",
    "coachNotes": "Coach Insights",
    "visionStatus": "Vision Status",
    "requestingCamera": "Requesting camera permissions...",
    "grantCameraPrompt": "Allow camera access so SkillLens can analyze your technique.",
    "switchSimulated": "Use Simulated Feed Instead",
    "retryCamera": "Try Camera Again",
    "keepHandsInFrame": "Keep both hands inside the camera frame.",
    "adjustLighting": "Adjust room light so your hands are clearly visible.",
    "sufficientEvidence": "Visual evidence recorded",
    "incompleteObservation": "Incomplete observation"
  },
  "feedback": {
    "moveSlower": "Move your hand slower to maintain consistent form.",
    "consistentPressure": "Consistent pressure maintained along strokes.",
    "firmFooting": "Keep two feet firmly planted to maintain stability.",
    "goodAnchor": "Good hand anchoring creating a stable position.",
    "straightPath": "Clean straight path maintained within guide borders.",
    "relaxGrip": "Relax your grip slightly to prevent hand fatigue.",
    "evenSpacing": "Consistent spacing maintained across intervals.",
    "smoothTransition": "Smooth transition between movement cycles.",
    "steadyCadence": "Cadence is steady and in optimal range.",
    "adjustAngle": "Adjust your tool angle to match surface perpendicular.",
    "maintainTension": "Maintain balanced tension across working strands.",
    "watchEdges": "Watch boundary margins to prevent overrunning edges.",
    "tooDark": "Lighting is too dark or washed out. Adjust room light so your hands are clearly visible.",
    "keepHandsInFrame": "Keep both hands inside the camera frame.",
    "adjustCameraSubject": "Adjust the camera so your workspace is in view.",
    "workspaceReady": "Workspace is ready. Start practicing so I can observe your technique.",
    "keepPracticingAWhile": "Keep practicing for a few more seconds so I can evaluate your technique.",
    "observingTechnique": "Observing your technique... Keep your working pace consistent.",
    "handMovementConsistent": "Your hand movement appears consistent. Continue your practice rhythm.",
    "braidHandMovement": "Hands and hair are in frame. Start the braiding motion so I can observe your technique.",
    "braidMoreSeconds": "Keep braiding for a few more seconds. I need more movement to evaluate your technique.",
    "braidAlternating": "Your hand movement appears consistent. Continue with the alternating crossing pattern.",
    "braidSteadyTension": "Observing your hand position. Maintain steady tension across the three strands.",
    "solidCoverage": "Solid uniform coverage across surface.",
    "goodMPattern": "Good continuous pattern pass without line marks.",
    "stayWithinTape": "Stayed within baseboard tape margin.",
    "backrollLighter": "Backroll lighter on final pass to level surface sheen.",
    "goodFingerPlacement": "Good finger placement keeping clearance from working edge.",
    "evenLayer": "Even layer with no cuticle or border pooling."
  },
  "results": {
    "sessionSummary": "Practice Complete!",
    "practiceComplete": "Practice Complete",
    "techniqueSummary": "Technique Summary",
    "incompleteObservation": "Incomplete Observation",
    "visualEvidenceRecorded": "Visual Evidence Recorded",
    "formScore": "Technique Evaluation Score",
    "techniqueScore": "Overall Technique Score",
    "metricsTitle": "Performance Breakdown",
    "strengthsTitle": "Form Strengths",
    "improvementsTitle": "Technique Adjustments",
    "safetyTitle": "Safety & Form Notes",
    "practiceAgain": "Practice Again",
    "viewProgress": "View Full Progress",
    "home": "Back to Home",
    "savedLocally": "Session saved to your device",
    "noSessionFound": "No Practice Session Found",
    "noSessionFoundDesc": "Complete a practice technique session with your camera to see your evaluation.",
    "browseSkills": "Browse Skills",
    "whyNoScore": "Why is there no score?",
    "whyNoScoreDesc": "SkillLens only evaluates technique when your hands and work area are continuously visible and active during the exercise. Practice for at least 4–5 continuous seconds with your camera pointed at your hands to generate a verified technique score.",
    "observedFor": "Observed for {{seconds}} seconds · Saved to your device",
    "consistentTechnique": "Consistent technique observed across steps",
    "practiceCompletedKeepGoing": "Practice completed — keep practicing to build rhythm",
    "notEnoughVisualData": "Not enough visual data to evaluate technique"
  },
  "progress": {
    "title": "My Progress",
    "subtitle": "Track your completed lessons, practice consistency, and craft mastery.",
    "skillsLearning": "Skills Learning",
    "skillsCompleted": "Skills Completed",
    "practiceSessions": "Practice Sessions",
    "currentStreak": "Day Streak",
    "averageScore": "Average Score",
    "progressionTrend": "Score Progression",
    "recentSessions": "Recent Practice History",
    "noSessionsYet": "No practice sessions recorded yet.",
    "categoriesProgress": "Category Coverage",
    "earnedBadges": "Skill Badges & Milestones",
    "activeCourses": "Active courses",
    "passedBenchmarks": "Passed benchmarks",
    "recordedSessions": "Recorded sessions",
    "activeStreak": "Active streak",
    "categoryCoverage": "Category Practice Coverage",
    "practiceASkill": "Practice a Skill",
    "unlocked": "Unlocked",
    "locked": "Locked",
    "badges": {
      "firstDrillTitle": "First Practice Drill",
      "firstDrillDesc": "Completed your first hands-on technique session",
      "steadyStreakTitle": "Consistent Learner",
      "steadyStreakDesc": "Maintained an active 3+ day practice streak",
      "craftVirtuosoTitle": "Form Master",
      "craftVirtuosoDesc": "Achieved an overall evaluation score above 85%",
      "versatileMakerTitle": "Multi-Skill Explorer",
      "versatileMakerDesc": "Practiced drills in at least 3 categories"
    }
  },
  "profile": {
    "title": "Learner Profile & Settings",
    "subtitle": "Manage your craft preferences, camera coaching, and language.",
    "learnerLevel": "Apprentice Craftsman",
    "selectLanguage": "Language / भाषा / భాష",
    "appSettings": "AI Coaching Preferences",
    "feedbackFrequency": "Feedback Frequency",
    "continuous": "Continuous (High)",
    "periodic": "Periodic (Every 15s)",
    "low": "Summary Only",
    "visionSensitivity": "Tracking Sensitivity",
    "normal": "Balanced",
    "high": "High Precision",
    "relaxed": "Relaxed / Casual",
    "audioCoaching": "Audio Voice Guidance",
    "audioCoachingDesc": "Plays spoken cues for hand-eye alignment (UI simulation)",
    "dataManagement": "Data Management",
    "resetData": "Reset All Local Data",
    "resetConfirm": "Are you sure you want to reset your practice history and scores?",
    "dataResetSuccess": "All local data has been reset to defaults.",
    "version": "SkillLens v1.0.0 (iQOO Hackathon Edition)",
    "accountDetails": "Account Details",
    "email": "Email",
    "memberSince": "Member Since",
    "practiceOverview": "Practice Overview",
    "craftVirtuoso": "Form Master",
    "appearance": "Appearance",
    "themeMode": "Dark Mode"
  },
  "categories": {
    "cat-1": {
      "name": "Painting & Decoration",
      "description": "Master wall coverage, roller stroke consistency, edge cutting, and decorative artwork."
    },
    "cat-2": {
      "name": "Tailoring & Fashion",
      "description": "Learn needle alignment, seam allowance consistency, stitch spacing, and garment repair."
    },
    "cat-3": {
      "name": "Crochet & Handmade Crafts",
      "description": "Perfect loop tension, stitch cadence, hook angle, and intricate handmade pattern geometry."
    },
    "cat-4": {
      "name": "Pottery & Ceramics",
      "description": "Practice wheel centering, hand pressure symmetry, rim shaping, and clay surface control."
    },
    "cat-5": {
      "name": "Beauty, Skincare & Makeup",
      "description": "Refine product distribution, brush blending angles, wing symmetry, and nail coating precision."
    },
    "cat-6": {
      "name": "Hair & Styling",
      "description": "Sectioning precision, braid tension, curling iron angles, and heat tool gliding technique."
    },
    "cat-7": {
      "name": "Gardening & Plants",
      "description": "Proper soil tamping, seedling spacing, root depth, pruning angle, and staking methods."
    },
    "cat-8": {
      "name": "Cooking & Food Decoration",
      "description": "Chef knife claw grip, slicing cadence, pastry rolling pressure, and culinary presentation."
    },
    "cat-9": {
      "name": "DIY & Home Improvement",
      "description": "Perpendicular drill alignment, screw torque control, square marking, and level mounting."
    },
    "cat-10": {
      "name": "Creative & Decorative Crafts",
      "description": "Precise paper creasing, corner folding, resin pouring layers, and holiday adornments."
    }
  },
  "skillsData": {
    "skill-wall-painting": {
      "name": "Wall Painting",
      "description": "Establish consistent roller coverage, minimize lap marks, and keep even pressure across dry drywall."
    },
    "skill-roller-painting": {
      "name": "Roller Painting",
      "description": "Flagship drill: Perfect roller stroke consistency, overlap ratio, and edge boundary accuracy without dripping."
    },
    "skill-edge-painting": {
      "name": "Edge Painting",
      "description": "Cut clean borders along ceiling lines, baseboards, and window trim with steady brush bristle control."
    },
    "skill-crack-filling": {
      "name": "Crack Filling",
      "description": "Apply spackle or joint compound smoothly with a putty knife, feathering edges flush with the drywall."
    },
    "skill-mandala-painting": {
      "name": "Mandala Painting",
      "description": "Dot and radial symmetry painting technique using dotting styluses and acrylics on stones or canvas."
    },
    "skill-canvas-painting": {
      "name": "Canvas Painting",
      "description": "Practice wet-on-wet acrylic blending and brush pressure transitions for smooth gradient backdrops."
    },
    "skill-diy-home-decoration": {
      "name": "DIY Home Decoration",
      "description": "Stenciling and sponge dabbing geometric patterns onto decorative accent surfaces."
    },
    "skill-straight-stitching": {
      "name": "Straight Stitching",
      "description": "Flagship drill: Guide fabric with hand alignment, maintaining seam allowance and steady stitch length."
    },
    "skill-hemming": {
      "name": "Hemming",
      "description": "Execute invisible blind-hem or uniform folded hem stitches along garment bottom edges."
    },
    "skill-seam-alignment": {
      "name": "Seam Alignment",
      "description": "Pin and match intersecting cross-seams and patterned plaids before machine stitching."
    },
    "skill-button-stitching": {
      "name": "Button Stitching",
      "description": "Sew secure 2-hole and 4-hole buttons with thread shank spacer for clean buttoning clearance."
    },
    "skill-hand-embroidery": {
      "name": "Hand Embroidery",
      "description": "Master satin stitch and French knots with balanced floss tension and clean petal coverage."
    },
    "skill-basic-clothing-repair": {
      "name": "Basic Clothing Repair",
      "description": "Mend popped side seams and small fabric tears using reinforced ladder stitch techniques."
    },
    "skill-crochet-chain": {
      "name": "Crochet Chain",
      "description": "Flagship drill: Establish uniform loop tension, consistent hook rotation, and steady hand rhythm."
    },
    "skill-single-crochet": {
      "name": "Single Crochet",
      "description": "Insert hook into chain loops, yarn over, pull through, and finish with balanced dual loop closure."
    },
    "skill-double-crochet": {
      "name": "Double Crochet",
      "description": "Build tall openwork stitches with initial yarn-over, step-wise two-by-two loop releases."
    },
    "skill-granny-square": {
      "name": "Granny Square",
      "description": "Construct concentric modular crochet squares with distinct 3-dc clusters and corner chain turns."
    },
    "skill-crochet-flower": {
      "name": "Crochet Flower",
      "description": "Create multi-petal decorative floral motifs transitioning from sc to hdc to dc in a single petal."
    },
    "skill-crochet-bag": {
      "name": "Crochet Bag",
      "description": "Learn spiral circular base shaping and sturdy continuous ribbing for mesh market totes."
    },
    "skill-basic-amigurumi": {
      "name": "Basic Amigurumi",
      "description": "3D stuffed toy crochet with invisible decreases and seamless continuous rounds."
    },
    "skill-clay-kneading": {
      "name": "Clay Kneading",
      "description": "Wedge clay in a ram’s head or spiral pattern to eliminate air bubbles and homogenize moisture."
    },
    "skill-clay-centering": {
      "name": "Clay Centering",
      "description": "Anchor clay on the pottery wheel head using coning up and pressing down with anchored arms."
    },
    "skill-pot-shaping": {
      "name": "Pot Shaping",
      "description": "Pull vertical cylinder walls with coordinated inside and outside finger pads."
    },
    "skill-rim-shaping": {
      "name": "Rim Shaping",
      "description": "Compress and round the upper lip of a pot with chamois leather or soft sponge to prevent chipping."
    },
    "skill-surface-smoothing": {
      "name": "Surface Smoothing",
      "description": "Burnish and rib leather-hard clay surfaces to remove throwing rings and create a silky sheen."
    },
    "skill-handle-making": {
      "name": "Handle Making",
      "description": "Pull smooth, ergonomic clay handles directly from a carrot lump and attach securely with score and slip."
    },
    "skill-ceramic-painting": {
      "name": "Ceramic Painting",
      "description": "Underglaze brushwork on bisque ware with controlled brush moisture and steady line linework."
    },
    "skill-face-cleansing": {
      "name": "Face Cleansing Technique",
      "description": "Technique drill: Practice gentle upward circular hand strokes and optimal pressure distribution without pulling skin."
    },
    "skill-moisturizer-application": {
      "name": "Moisturizer Application",
      "description": "Learn upward press-and-pat distribution technique for uniform hydration coverage across face and neck."
    },
    "skill-sunscreen-application": {
      "name": "Sunscreen Application",
      "description": "Master the two-finger measurement and comprehensive boundary application including hairline and ears."
    },
    "skill-face-mask-application": {
      "name": "Face Mask Application",
      "description": "Use a silicone spatula brush to lay an even, boundary-accurate clay or gel mask layer."
    },
    "skill-foundation-application": {
      "name": "Foundation Application",
      "description": "Stipple and blend liquid foundation seamlessly into the hairline and jawline with a damp beauty sponge."
    },
    "skill-concealer-application": {
      "name": "Concealer Application",
      "description": "Targeted spot placement and outer-edge tapping to brighten under-eyes without creasing."
    },
    "skill-eyeliner-application": {
      "name": "Eyeliner Application",
      "description": "Practice winged liquid liner angle alignment, resting pinky anchor, and symmetrical wing elevation."
    },
    "skill-nail-polish-application": {
      "name": "Nail Polish Application",
      "description": "Flagship drill: The classic 3-stroke lacquer method, cuticle gap control, and smooth capping of free edges."
    },
    "skill-basic-nail-art": {
      "name": "Basic Nail Art",
      "description": "French tip smile-line curvature and clean accent line drawing using striping tape or detailer brushes."
    },
    "skill-hair-sectioning": {
      "name": "Hair Sectioning",
      "description": "Part clean 4-quadrant grids using a tail comb for organized, snag-free styling and treatments."
    },
    "skill-hair-braiding": {
      "name": "Hair Braiding",
      "description": "Three-strand traditional braid: maintain equal strand thickness and uniform cross-over finger tension."
    },
    "skill-blow-drying": {
      "name": "Blow-Drying",
      "description": "Round-brush blowout technique: direct nozzle airflow down the hair shaft for salon smoothness and volume."
    },
    "skill-basic-hair-styling": {
      "name": "Basic Hair Styling",
      "description": "Construct a sleek high ponytail or bun with smoothed crown bumps and anchored bobby pins."
    },
    "skill-hair-curling": {
      "name": "Hair Curling",
      "description": "Curling wand wrapping: wrap ribbon hair flat without bunching, maintain 8-10 second dwell time."
    },
    "skill-hair-straightening": {
      "name": "Hair Straightening",
      "description": "Comb-chase flat iron technique: glide iron right behind fine-toothed comb for glass hair finish."
    },
    "skill-potting": {
      "name": "Potting",
      "description": "Planting container preparation: center root ball, maintain proper soil line, and eliminate air gaps."
    },
    "skill-seed-planting": {
      "name": "Seed Planting",
      "description": "Seed depth and spacing in seed starting trays according to seed size ratios."
    },
    "skill-soil-preparation": {
      "name": "Soil Preparation",
      "description": "Blend compost, perlite, and base soil into an airy, nutrient-dense potting substrate."
    },
    "skill-pruning": {
      "name": "Pruning",
      "description": "Execute clean 45-degree angle branch cuts 6mm above an outward-facing leaf bud."
    },
    "skill-repotting": {
      "name": "Repotting",
      "description": "Unpot rootbound houseplants, tease encircling root girdles, and transition up 1-2 pot sizes."
    },
    "skill-plant-propagation": {
      "name": "Plant Propagation",
      "description": "Take healthy node stem cuttings and prepare water or perlite rooting propagation setups."
    },
    "skill-plant-support": {
      "name": "Plant Support",
      "description": "Stake climbing monsteras and tomatoes with moss poles and figure-8 soft plant ties."
    },
    "skill-knife-handling": {
      "name": "Knife Handling",
      "description": "Master the classic culinary pinch grip on the knife bolster and curling non-dominant fingers into the safe claw."
    },
    "skill-vegetable-chopping": {
      "name": "Vegetable Chopping",
      "description": "Rock-chop cadence: maintain continuous board contact with tip while slicing celery or carrots into even batons."
    },
    "skill-dough-kneading": {
      "name": "Dough Kneading",
      "description": "Develop gluten matrix using heel-push, 90-degree fold, and rhythmic quarter-turn technique."
    },
    "skill-dough-rolling": {
      "name": "Dough Rolling",
      "description": "Roll circular tart and pie crusts from center outward with equal pressure and regular quarter rotations."
    },
    "skill-cake-decoration": {
      "name": "Cake Decoration",
      "description": "Piping bag control: 90-degree rosette stars and continuous shell border piping along cake tiers."
    },
    "skill-food-plating": {
      "name": "Food Plating",
      "description": "Culinary architecture: saucing swooshes, protein positioning, and microgreen tweezers garnishing."
    },
    "skill-measuring-marking": {
      "name": "Measuring & Marking",
      "description": "Crow’s foot pencil marks, tape measure hook compensation, and true square alignment."
    },
    "skill-screw-fitting": {
      "name": "Screw Fitting",
      "description": "Driver bit alignment: maintain in-line axial downforce to drive wood screws flush without stripping heads."
    },
    "skill-furniture-assembly": {
      "name": "Furniture Assembly",
      "description": "Cam-lock and dowel joinery: square panel alignment, torque tightening, and diagonal squareness verification."
    },
    "skill-sanding": {
      "name": "Sanding",
      "description": "Hand sanding progression: sand strictly with wood grain, maintain even pad pressure, step grits from 80 to 220."
    },
    "skill-wall-hanging": {
      "name": "Wall Hanging",
      "description": "Anchor drywall fixings, level heavy frames, and align dual wall bracket points accurately."
    },
    "skill-cable-organization": {
      "name": "Cable Organization",
      "description": "Cable routing: grouping by signal type, bundle strain relief, velcro wrap intervals, and sleek under-desk channels."
    },
    "skill-gift-wrapping": {
      "name": "Gift Wrapping",
      "description": "Crisp box corner creases, clean double-sided tape concealment, and seamless Japanese parcel folding."
    },
    "skill-paper-flower-making": {
      "name": "Paper Flower Making",
      "description": "Crepe paper petal shaping: stretching grain for realistic petal cupping and floral tape stem wrapping."
    },
    "skill-origami": {
      "name": "Origami",
      "description": "Precise Japanese paper folding: corner-to-corner accuracy, valley folds, mountain folds, and petal folds."
    },
    "skill-candle-decoration": {
      "name": "Candle Decoration",
      "description": "Decoupage botanical flora onto pillar candles using heated spoons or low-temp heat embossing tools."
    },
    "skill-resin-craft": {
      "name": "Resin/Decorative Craft",
      "description": "Epoxy mixing, bubble torching, slow stream pouring, and pigment swirl suspension in silicone molds."
    },
    "skill-festive-decoration": {
      "name": "Festive Decoration",
      "description": "Construct lush holiday wreaths using wire binding, layered evergreen sprigs, and balanced ribbon bow anchor."
    }
  }
},
  hi: {
  "common": {
    "appName": "SkillLens",
    "tagline": "हस्त-कौशल के लिए AI कोच",
    "offlineNotice": "ऑफ़लाइन मोड — आपका अभ्यास डेटा इसी डिवाइस पर सुरक्षित है।",
    "home": "होम",
    "skills": "कौशल",
    "practice": "अभ्यास",
    "progress": "प्रगति",
    "profile": "प्रोफ़ाइल",
    "learn": "सीखें",
    "startPractice": "अभ्यास शुरू करें",
    "continuePractice": "अभ्यास जारी रखें",
    "continueLearning": "सीखना जारी रखें",
    "resumeDrill": "तकनीक ड्रिल शुरू करें",
    "back": "पीछे",
    "next": "आगे",
    "finish": "पूरा करें",
    "skip": "छोड़ें",
    "save": "सहेजें",
    "cancel": "रद्द करें",
    "loading": "लोड हो रहा है...",
    "error": "त्रुटि",
    "success": "सफल",
    "retry": "पुनः प्रयास करें",
    "viewAll": "सभी देखें",
    "search": "खोजें",
    "filter": "फ़िल्टर",
    "difficulty": "कठिनाई",
    "duration": "समय",
    "minutes": "मिनट",
    "all": "सभी",
    "beginner": "शुरुआती",
    "intermediate": "मध्यम",
    "advanced": "उन्नत",
    "signOut": "साइन आउट",
    "signIn": "साइन इन",
    "signUp": "साइन अप",
    "days": "दिन",
    "streak": "स्ट्रीक",
    "sessions": "सत्र",
    "mastery": "महारत",
    "activeCourses": "सक्रिय पाठ्यक्रम",
    "points": "अंक",
    "featured": "विशेष",
    "drills": "अभ्यास",
    "allSkills": "सभी कौशल",
    "allCategories": "सभी श्रेणियां",
    "skillsFound": "कौशल उपलब्ध",
    "noSkillsMatch": "कोई कौशल नहीं मिला।",
    "tools": "उपकरण",
    "materials": "सामग्री",
    "steps": "चरण",
    "safety": "सुरक्षा",
    "tips": "सुझाव",
    "close": "बंद करें",
    "done": "संपन्न",
    "confirm": "पुष्टि करें",
    "delete": "हटाएं",
    "edit": "संपादित करें",
    "seconds": "सेकंड"
  },
  "nav": {
    "home": "होम",
    "skills": "कौशल",
    "practice": "अभ्यास",
    "progress": "प्रगति",
    "profile": "प्रोफ़ाइल",
    "learn": "सीखें",
    "signOut": "साइन आउट"
  },
  "auth": {
    "signIn": "साइन इन",
    "signUp": "साइन अप",
    "email": "ईमेल",
    "password": "पासवर्ड",
    "confirmPassword": "पासवर्ड की पुष्टि करें",
    "forgotPassword": "पासवर्ड भूल गए?",
    "createAccount": "खाता बनाएं",
    "alreadyHaveAccount": "क्या आपके पास पहले से खाता है?",
    "dontHaveAccount": "क्या आपके पास खाता नहीं है?",
    "invalidEmail": "कृपया एक वैध ईमेल पता दर्ज करें।",
    "passwordRequired": "कृपया अपना पासवर्ड दर्ज करें।",
    "passwordMismatch": "पासवर्ड मेल नहीं खाते हैं।",
    "loginSuccess": "साइन इन सफल! आगे बढ़ रहे हैं...",
    "accountCreated": "खाता सफलतापूर्वक बनाया गया! आगे बढ़ रहे हैं...",
    "logout": "साइन आउट",
    "sessionMessages": "सफलतापूर्वक साइन इन किया गया।",
    "welcomeBack": "वापसी पर स्वागत है",
    "signInSubtitle": "सीखना और अपने कौशल में सुधार करना जारी रखें।",
    "createAccountSubtitle": "रीयल-टाइम AI मार्गदर्शन के साथ व्यावहारिक कौशल सीखने के लिए SkillLens से जुड़ें।",
    "fullName": "पूरा नाम",
    "fullNamePlaceholder": "उदा. एलेक्स वेंस",
    "emailPlaceholder": "you@example.com",
    "passwordPlaceholder": "••••••••",
    "confirmPasswordPlaceholder": "••••••••",
    "quickDemo": "त्वरित डेमो: एलेक्स वेंस के रूप में भरें",
    "resetPassword": "पासवर्ड रीसेट करें",
    "resetPasswordSubtitle": "पासवर्ड रीसेट निर्देश प्राप्त करने के लिए अपना ईमेल दर्ज करें।",
    "sendResetLink": "रीसेट निर्देश भेजें",
    "backToSignIn": "साइन इन पर वापस जाएं",
    "resetSuccessMessage": "इस डेमो खाते के लिए पासवर्ड रीसेट निर्देश भेज दिए गए हैं।",
    "passwordMinLength": "पासवर्ड कम से कम 6 अक्षरों का होना चाहिए।",
    "fillAllFields": "कृपया सभी आवश्यक फ़ील्ड भरें।",
    "loginFailed": "ईमेल या पासवर्ड गलत है।",
    "registerFailed": "खाता बनाने में विफल। कृपया पुन: प्रयास करें।"
  },
  "landing": {
    "tagline": "व्यावहारिक शिक्षा ऐप",
    "badge": "इंटरैक्टिव अभ्यास कोच",
    "headline": "वास्तविक समय AI मार्गदर्शन के साथ अपने हाथों के कौशल को निखारें",
    "subheadline": "अपने फोन का कैमरा सेट करें। SkillLens आपके कोण, गति और तकनीक का विश्लेषण करके तुरंत सुधार बताता है।",
    "getStarted": "मुफ़्त शुरू करें",
    "viewSkills": "67 कौशल देखें",
    "whyTitle": "व्यावहारिक शिक्षा के लिए निर्मित",
    "whyDesc": "पेंटिंग, सिलाई, क्रोशिया से लेकर मेकअप तक - गलतियों को आदत बनने से पहले ठीक करें।",
    "previewTitle": "प्रमुख शिल्पों का अन्वेषण करें",
    "previewSubtitle": "AI विज़न विश्लेषण और चरण-दर-चरण मार्गदर्शन के साथ व्यावहारिक अभ्यास मॉड्यूल।",
    "features": {
      "watch": "फोन कैमरा सहायता",
      "watchDesc": "हैंड्स-फ्री ट्रैकिंग के लिए फोन को कार्यक्षेत्र के सामने रखें।",
      "correct": "त्वरित मार्गदर्शन",
      "correctDesc": "कोण और गति के लिए तुरंत सुझाव देखें।",
      "track": "मापने योग्य सुधार",
      "trackDesc": "हर अभ्यास के साथ अपने तकनीक स्कोर को बढ़ते हुए देखें।"
    }
  },
  "onboarding": {
    "step1Title": "1. कोई भी कौशल चुनें",
    "step1Desc": "पेंटिंग, सिलाई, शिल्प, खाना पकाने और सौंदर्य में से 67 कौशलों में से चुनें।",
    "step2Title": "2. फोन का कैमरा सेट करें",
    "step2Desc": "अपने फोन को स्टैंड या टेबल पर रखें ताकि हाथ और उपकरण गाइड बॉक्स में रहें।",
    "step3Title": "3. अभ्यास करें और सुझाव पाएं",
    "step3Desc": "SkillLens आपकी गति, कोण और सटीकता को ट्रैक करके मार्गदर्शन देता है।",
    "next": "आगे",
    "back": "पीछे",
    "finish": "कोचिंग शुरू करें",
    "skip": "होम पर जाएं"
  },
  "home": {
    "greetingMorning": "शुभ प्रभात, {{name}}",
    "greetingDay": "नमस्ते, {{name}}",
    "greetingEvening": "शुभ संध्या, {{name}}",
    "whatToLearn": "आज आप क्या सीखना चाहेंगे?",
    "streakLabel": "दैनिक स्ट्रीक",
    "daysStreak": "दिन सक्रिय",
    "daysActive": "दिन",
    "readinessScore": "समग्र तकनीक स्कोर",
    "overallReadiness": "समग्र तत्परता स्कोर",
    "scoreSubtitle": "कैमरा तकनीक जांच के आधार पर",
    "continuePractice": "अभ्यास जारी रखें",
    "continueLearning": "सीखना जारी रखें",
    "resumeCta": "तकनीक ड्रिल शुरू करें",
    "recommendedSkills": "अनुशंसित अभ्यास ड्रिल",
    "recommendedSubtitle": "मांसपेशियों की स्मृति विकसित करने के लिए आवश्यक अभ्यास",
    "recentFeedback": "हालिया कोच सुझाव",
    "latestInsights": "नवीनतम AI सुझाव",
    "noRecentFeedback": "अभी कोई सत्र पूरा नहीं हुआ। शुरू करने के लिए कौशल चुनें!",
    "exploreCategories": "शिल्प श्रेणियों का अन्वेषण करें",
    "exploreCategoriesSubtitle": "10 श्रेणियों में व्यापक शिक्षण",
    "viewAll": "सभी 67 कौशल देखें",
    "quickSummary": "सत्र सारांश",
    "viewFullHistory": "पूरा इतिहास देखें →",
    "score": "स्कोर",
    "sessionsRecorded": "सत्र",
    "skillsCount": "कौशल",
    "mastery": "महारत"
  },
  "skills": {
    "title": "कौशल पुस्तकालय",
    "subtitle": "चरण-दर-चरण मास्टरक्लास और कैमरा तकनीक अभ्यासों का अन्वेषण करें।",
    "searchPlaceholder": "कौशल, उपकरण या तकनीक खोजें...",
    "allCategories": "सभी श्रेणियां",
    "allSkillsCount": "सभी कौशल ({{count}})",
    "skillsFound": "कौशल उपलब्ध",
    "noSkillsMatch": "कोई कौशल आपकी खोज से मेल नहीं खाता।",
    "difficulty": "कठिनाई",
    "duration": "अनुमानित समय",
    "filterBy": "फ़िल्टर",
    "featured": "विशेष",
    "browseCatalog": "67 व्यावहारिक अभ्यास ट्यूटोरियल देखें",
    "all": "सभी"
  },
  "skillDetail": {
    "difficulty": "कठिनाई स्तर",
    "duration": "अभ्यास समय",
    "toolsNeeded": "आवश्यक उपकरण व सामग्री",
    "stepByStep": "तकनीक के चरण",
    "safetyFirst": "सुरक्षा और मुद्रा निर्देश",
    "cameraTips": "कैमरा स्थिति के सुझाव",
    "observableMetrics": "मूल्यांकन किए जाने वाले मेट्रिक्स",
    "personalBest": "व्यक्तिगत रिकॉर्ड",
    "noScoreYet": "अभी कोई अभ्यास दर्ज नहीं है",
    "startPractice": "अभ्यास शुरू करें",
    "learnStepByStep": "चरण-दर-चरण सीखें",
    "skincareDisclaimer": "नोट: SkillLens केवल लगाने की तकनीक का मार्गदर्शन देता है। यह कोई चिकित्सा सलाह नहीं है।",
    "videoAvailable": "अनुदेशात्मक वीडियो उपलब्ध है",
    "videoAvailableDesc": "इसमें वास्तविक तकनीक का विवरण और चरण शामिल हैं",
    "readyToTest": "क्या आप अपनी तकनीक का परीक्षण करने के लिए तैयार हैं?",
    "readyToTestDesc": "रीयल-टाइम फॉर्म जांच और फीडबैक के लिए अपने कैमरे का उपयोग करें।",
    "mastery": "महारत",
    "whatYouNeed": "आवश्यक वस्तुएं",
    "overview": "कौशल अवलोकन"
  },
  "learning": {
    "lesson": "पाठ",
    "tutorial": "कौशल ट्यूटोरियल",
    "stepProgress": "प्रगति: चरण {{current}} / {{total}}",
    "step": "चरण {{current}}",
    "techniqueNote": "तकनीक नोट",
    "whatYouNeed": "आपको क्या चाहिए",
    "commonMistakes": "बचने योग्य सामान्य गलतियां",
    "safetyAndWorkspace": "सुरक्षा और कार्यक्षेत्र",
    "previousStep": "पिछला चरण",
    "nextStep": "अगला चरण",
    "startPractice": "अभ्यास शुरू करें",
    "readyToTest": "क्या आप तकनीक का परीक्षण करने के लिए तैयार हैं?",
    "readyToTestDesc": "रीयल-टाइम तकनीक जांच और फीडबैक के लिए कैमरे का उपयोग करें।",
    "openStudio": "प्रैक्टिस स्टूडियो खोलें"
  },
  "video": {
    "lessonTitle": "अनुदेशात्मक वीडियो पाठ",
    "watchVideo": "वीडियो देखें",
    "videoUnavailable": "वीडियो अनुपलब्ध है",
    "videoLoading": "वीडियो लोड हो रहा है...",
    "videoCompleted": "वीडियो पूर्ण हुआ",
    "continue": "जारी रखें",
    "previous": "पिछला",
    "next": "अगला",
    "markAsComplete": "पूर्ण चिह्नित करें",
    "startPractice": "अभ्यास शुरू करें",
    "markAsWatched": "वीडियो देखा हुआ चिह्नित करें",
    "openInYouTube": "यूट्यूब पर सीधे देखें",
    "fallbackMessage": "वीडियो लोड नहीं हो सका। कृपया नीचे दिए गए चरण-दर-चरण दृश्य निर्देशों का पालन करें।",
    "demonstration": "वीडियो प्रदर्शन",
    "noticeEn": "अंग्रेजी अनुदेशात्मक वीडियो",
    "noticeHi": "अंग्रेजी वीडियो • नीचे हिंदी में निर्देश",
    "noticeTe": "अंग्रेजी वीडियो • नीचे तेलुगु में निर्देश"
  },
  "practice": {
    "simulatedBadge": "सिम्युलेटेड AI विज़न सक्रिय",
    "simulatedNotice": "सिम्युलेशन डेमो: MockVisionAnalyzer द्वारा तकनीक का पूर्वावलोकन प्रस्तुत किया गया है।",
    "connectingCamera": "डिवाइस कैमरे से कनेक्ट हो रहा है...",
    "cameraAccessDenied": "कैमरा उपलब्ध नहीं है या अनुमति अस्वीकार कर दी गई है।",
    "enableCameraFallback": "सिम्युलेटेड कैमरा वर्कस्पेस सक्रिय है।",
    "useSimulatedCamera": "सिम्युलेटेड कैमरे पर जाएं",
    "liveTechniqueGuidance": "लाइव AI मार्गदर्शन",
    "trackingActive": "हाथ और उपकरण ट्रैकिंग सक्रिय",
    "start": "शुरू करें",
    "pause": "रोकें",
    "resume": "पुनः शुरू करें",
    "finishSession": "अभ्यास पूरा करें",
    "elapsed": "बीता समय",
    "sessionPaused": "सत्र रुका हुआ है — तैयार होने पर पुनः शुरू करें",
    "cameraTips": "कैमरा स्थिति और सेटअप",
    "targetMetrics": "मूल्यांकन किए जाने वाले मेट्रिक्स",
    "coachNotes": "कोच सुझाव",
    "visionStatus": "विज़न स्थिति",
    "requestingCamera": "कैमरा अनुमति मांगी जा रही है...",
    "grantCameraPrompt": "कैमरा अनुमति दें ताकि SkillLens आपकी तकनीक का विश्लेषण कर सके।",
    "switchSimulated": "इसके बजाय सिम्युलेटेड फीड का उपयोग करें",
    "retryCamera": "कैमरा पुनः आज़माएं",
    "keepHandsInFrame": "दोनों हाथों को कैमरे के फ्रेम में रखें।",
    "adjustLighting": "कमरे की रोशनी समायोजित करें ताकि हाथ स्पष्ट दिखें।",
    "sufficientEvidence": "दृश्य साक्ष्य दर्ज किया गया",
    "incompleteObservation": "अपूर्ण अवलोकन"
  },
  "feedback": {
    "moveSlower": "समान रूप बनाए रखने के लिए अपने हाथ की गति धीमी करें।",
    "consistentPressure": "स्ट्रोक के दौरान संतुलित दबाव बना रहा।",
    "firmFooting": "स्थिरता बनाए रखने के लिए दोनों पैरों को मजबूती से जमाए रखें।",
    "goodAnchor": "हाथ की स्थिर पकड़ से एक संतुलित स्थिति बनी।",
    "straightPath": "गाइड सीमाओं के भीतर साफ सीधी रेखा बनी रही।",
    "relaxGrip": "हाथ की थकान से बचने के लिए अपनी पकड़ को थोड़ा ढीला करें।",
    "evenSpacing": "अंतरालों के बीच समान दूरी बनी रही।",
    "smoothTransition": "गति चक्रों के बीच सहज बदलाव।",
    "steadyCadence": "गति स्थिर और इष्टतम सीमा में है।",
    "adjustAngle": "उपकरण के कोण को सतह के लंबवत समायोजित करें।",
    "maintainTension": "लटों या धागों पर संतुलित तनाव बनाए रखें।",
    "watchEdges": "किनारों से बाहर फैलने से रोकने के लिए सीमाओं का ध्यान रखें।",
    "tooDark": "रोशनी बहुत कम या धुंधली है। कमरे की रोशनी ठीक करें ताकि हाथ साफ दिखें।",
    "keepHandsInFrame": "दोनों हाथों को कैमरे के फ्रेम में रखें।",
    "adjustCameraSubject": "कैमरे को समायोजित करें ताकि आपका कार्यक्षेत्र दिखाई दे।",
    "workspaceReady": "कार्यक्षेत्र तैयार है। अभ्यास शुरू करें ताकि मैं तकनीक का विश्लेषण कर सकूं।",
    "keepPracticingAWhile": "कुछ और सेकंड अभ्यास जारी रखें ताकि मैं तकनीक का मूल्यांकन कर सकूं।",
    "observingTechnique": "तकनीक का अवलोकन किया जा रहा है... गति स्थिर रखें।",
    "handMovementConsistent": "हाथों की गति सुसंगत लग रही है। अभ्यास की लय जारी रखें।",
    "braidHandMovement": "हाथ और बाल फ्रेम में हैं। चोटी गूंथना शुरू करें ताकि तकनीक देखी जा सके।",
    "braidMoreSeconds": "कुछ सेकंड और गूंथते रहें। मूल्यांकन के लिए और गतिविधि की आवश्यकता है।",
    "braidAlternating": "हाथ की गति सुसंगत है। बारी-बारी से लटें बदलने का क्रम जारी रखें।",
    "braidSteadyTension": "हाथ की स्थिति का अवलोकन। तीनों लटों पर समान तनाव बनाए रखें।",
    "solidCoverage": "सतह पर एकसमान ठोस कवरेज।",
    "goodMPattern": "बिना रेखाओं के अच्छा निरंतर पैटर्न।",
    "stayWithinTape": "टेप की सीमा के भीतर कार्य संपन्न हुआ।",
    "backrollLighter": "अंतिम रोल हल्के हाथ से चलाएं ताकि चमक एकसमान रहे।",
    "goodFingerPlacement": "कार्यशील किनारे से उंगलियों की सुरक्षित दूरी।",
    "evenLayer": "किनारों पर जमाव के बिना एकसमान चिकनी परत।"
  },
  "results": {
    "sessionSummary": "अभ्यास संपन्न!",
    "practiceComplete": "अभ्यास पूर्ण हुआ",
    "techniqueSummary": "तकनीक सारांश",
    "incompleteObservation": "अपूर्ण अवलोकन",
    "visualEvidenceRecorded": "दृश्य साक्ष्य दर्ज किया गया",
    "formScore": "तकनीक मूल्यांकन स्कोर",
    "techniqueScore": "समग्र तकनीक स्कोर",
    "metricsTitle": "प्रदर्शन विवरण",
    "strengthsTitle": "उत्कृष्ट पहलू",
    "improvementsTitle": "तकनीक सुधार के बिंदु",
    "safetyTitle": "सुरक्षा और मुद्रा निर्देश",
    "practiceAgain": "पुनः अभ्यास करें",
    "viewProgress": "पूरी प्रगति देखें",
    "home": "होम पर वापस जाएं",
    "savedLocally": "सत्र आपके डिवाइस पर सहेजा गया",
    "noSessionFound": "कोई अभ्यास सत्र नहीं मिला",
    "noSessionFoundDesc": "अपना मूल्यांकन देखने के लिए कैमरे के साथ अभ्यास सत्र पूरा करें।",
    "browseSkills": "कौशल ब्राउज़ करें",
    "whyNoScore": "कोई स्कोर क्यों नहीं है?",
    "whyNoScoreDesc": "SkillLens तकनीक का मूल्यांकन केवल तभी करता है जब आपके हाथ और कार्यक्षेत्र लगातार दिखाई दें और सक्रिय हों। सत्यापित स्कोर प्राप्त करने के लिए कम से कम 4-5 सेकंड तक कैमरे के सामने अभ्यास करें।",
    "observedFor": "{{seconds}} सेकंड तक देखा गया · डिवाइस पर सहेजा गया",
    "consistentTechnique": "चरणों में सुसंगत तकनीक देखी गई",
    "practiceCompletedKeepGoing": "अभ्यास पूरा हुआ — लय बनाने के लिए अभ्यास जारी रखें",
    "notEnoughVisualData": "तकनीक का मूल्यांकन करने के लिए पर्याप्त दृश्य डेटा नहीं है"
  },
  "progress": {
    "title": "मेरी प्रगति",
    "subtitle": "अपने पूरे किए गए पाठ, अभ्यास की निरंतरता और शिल्प में महारत को ट्रैक करें।",
    "skillsLearning": "सीखे जा रहे कौशल",
    "skillsCompleted": "पूर्ण किए गए कौशल",
    "practiceSessions": "अभ्यास सत्र",
    "currentStreak": "दिनों की स्ट्रीक",
    "averageScore": "औसत स्कोर",
    "progressionTrend": "स्कोर रुझान",
    "recentSessions": "हालिया अभ्यास इतिहास",
    "noSessionsYet": "अभी कोई अभ्यास सत्र दर्ज नहीं है।",
    "categoriesProgress": "श्रेणी कवरेज",
    "earnedBadges": "कौशल बैज और मील के पत्थर",
    "activeCourses": "सक्रिय पाठ्यक्रम",
    "passedBenchmarks": "उत्तीर्ण मानक",
    "recordedSessions": "दर्ज सत्र",
    "activeStreak": "सक्रिय स्ट्रीक",
    "categoryCoverage": "श्रेणीवार अभ्यास कवरेज",
    "practiceASkill": "कौशल का अभ्यास करें",
    "unlocked": "अनलॉक",
    "locked": "लॉक",
    "badges": {
      "firstDrillTitle": "पहला अभ्यास ड्रिल",
      "firstDrillDesc": "पहला व्यावहारिक तकनीक सत्र पूरा किया",
      "steadyStreakTitle": "निरंतर शिक्षार्थी",
      "steadyStreakDesc": "लगातार 3+ दिन की अभ्यास स्ट्रीक बनाए रखी",
      "craftVirtuosoTitle": "फॉर्म मास्टर",
      "craftVirtuosoDesc": "85% से अधिक समग्र मूल्यांकन स्कोर प्राप्त किया",
      "versatileMakerTitle": "बहु-कौशल अन्वेषक",
      "versatileMakerDesc": "कम से कम 3 श्रेणियों में अभ्यास किया"
    }
  },
  "profile": {
    "title": "शिक्षार्थी प्रोफ़ाइल और सेटिंग्स",
    "subtitle": "अपनी शिल्प प्राथमिकताएं, कैमरा कोचिंग और भाषा प्रबंधित करें।",
    "learnerLevel": "शिक्षार्थी कारीगर",
    "selectLanguage": "भाषा / Language / భాష",
    "appSettings": "AI कोचिंग प्राथमिकताएं",
    "feedbackFrequency": "सुझाव आवृत्ति",
    "continuous": "निरंतर (उच्च)",
    "periodic": "नियमित (हर 15 सेकंड)",
    "low": "केवल सारांश",
    "visionSensitivity": "ट्रैकिंग संवेदनशीलता",
    "normal": "संतुलित",
    "high": "उच्च परिशुद्धता",
    "relaxed": "सहज / सामान्य",
    "audioCoaching": "ध्वनि मार्गदर्शन",
    "audioCoachingDesc": "हाथ के संरेखण के लिए ध्वनि निर्देश (UI सिमुलेशन)",
    "dataManagement": "डेटा प्रबंधन",
    "resetData": "स्थानीय डेटा रीसेट करें",
    "resetConfirm": "क्या आप वाकई अपना अभ्यास इतिहास और स्कोर मिटाना चाहते हैं?",
    "dataResetSuccess": "सभी स्थानीय डेटा को डिफ़ॉल्ट पर रीसेट कर दिया गया है।",
    "version": "SkillLens v1.0.0 (iQOO हैकाथॉन संस्करण)",
    "accountDetails": "खाता विवरण",
    "email": "ईमेल",
    "memberSince": "सदस्यता तिथि",
    "practiceOverview": "अभ्यास अवलोकन",
    "craftVirtuoso": "फॉर्म मास्टर",
    "appearance": "दिखावट (थीम)",
    "themeMode": "डार्क मोड"
  },
  "categories": {
    "cat-1": {
      "name": "पेंटिंग और सजावट",
      "description": "दीवार की पुताई, रोलर स्ट्रोक की निरंतरता, किनारों की कटिंग और सजावटी कला में महारत हासिल करें।"
    },
    "cat-2": {
      "name": "सिलाई और फैशन",
      "description": "सुई का संरेखण, सीम की निरंतरता, सिलाई की दूरी और कपड़ों की मरम्मत सीखें।"
    },
    "cat-3": {
      "name": "क्रोशिया और हस्तशिल्प",
      "description": "लूप तनाव, सिलाई की गति, हुक कोण और जटिल हस्तनिर्मित पैटर्न में निपुणता पाएं।"
    },
    "cat-4": {
      "name": "मिट्टी के बर्तन और सिरेमिक",
      "description": "चाक पर मिट्टी को केंद्रित करना, हाथ का दबाव, किनारे का आकार और चिकनाई का अभ्यास करें।"
    },
    "cat-5": {
      "name": "सौंदर्य, त्वचा की देखभाल और मेकअप",
      "description": "उत्पाद का सही फैलाव, ब्रश ब्लेंडिंग कोण, विंग समरूपता और नेल कोटिंग में सुधार करें।"
    },
    "cat-6": {
      "name": "हेयर और स्टाइलिंग",
      "description": "बालों के सेक्शन बनाना, चोटी का खिंचाव, कर्लिंग आयरन कोण और हीटिंग टूल्स का उपयोग सीखें।"
    },
    "cat-7": {
      "name": "बागवानी और पौधे",
      "description": "मिट्टी तैयार करना, पौधों की दूरी, जड़ की गहराई, छंटाई के कोण और सहारा देने के तरीके सीखें।"
    },
    "cat-8": {
      "name": "कुकिंग और फूड सजावट",
      "description": "चाकू की क्लॉ ग्रिप, काटने की गति, पेस्ट्री बेलने का दबाव और व्यंजनों की प्रस्तुति सीखें।"
    },
    "cat-9": {
      "name": "DIY और घरेलू सुधार",
      "description": "ड्रिल का सही कोण, स्क्रू कसने का नियंत्रण, लेवल मापना और सही फिटिंग सीखें।"
    },
    "cat-10": {
      "name": "रचनात्मक और सजावटी शिल्प",
      "description": "कागज मोड़ने की कला, कोनों की तह, रेजिन ढलाई और उत्सव की सजावट सीखें।"
    }
  },
  "skillsData": {
    "skill-wall-painting": {
      "name": "दीवार की पेंटिंग",
      "description": "रोलर की एकसमान कवरेज बनाएं, जोड़ों के निशान कम करें और सूखी दीवार पर संतुलित दबाव रखें।"
    },
    "skill-roller-painting": {
      "name": "रोलर पेंटिंग",
      "description": "प्रमुख अभ्यास: रोलर स्ट्रोक की निरंतरता, ओवरलैप अनुपात और बिना टपकाए किनारे की सटीकता।"
    },
    "skill-edge-painting": {
      "name": "किनारों की पेंटिंग (एज कटिंग)",
      "description": "छत की लाइनों, बेसबोर्ड और खिड़कियों के ट्रिम के साथ ब्रश नियंत्रण से साफ बॉर्डर काटें।"
    },
    "skill-crack-filling": {
      "name": "दरारें भरना (पुट्टी)",
      "description": "पुट्टी चाकू से दरारों में भराव भरें और पेंटिंग से पहले चिकनी सपाट सतह बनाएं।"
    },
    "skill-mandala-painting": {
      "name": "मंडला पेंटिंग",
      "description": "बिंदु लगाने के औजारों से सममित रेडियल पैटर्न और समान दूरी वाले मंडल बनाएं।"
    },
    "skill-canvas-painting": {
      "name": "कैनवास पेंटिंग",
      "description": "कैनवास पर ब्रश स्ट्रोक, रंगों का सम्मिश्रण और परतों की तकनीक का अभ्यास करें।"
    },
    "skill-diy-home-decoration": {
      "name": "घरेलू सजावट कला",
      "description": "दीवार पर ज्यामितीय आकृतियां और स्टेंसिल से सुंदर सजावटी पैटर्न तैयार करें।"
    },
    "skill-straight-stitching": {
      "name": "सीधी सिलाई",
      "description": "कपड़े को बिना खींचे सीधी रेखा में सुई चलाते हुए 5/8 इंच सीम बनाए रखें।"
    },
    "skill-hemming": {
      "name": "हेमिंग (कपड़े मोड़ना)",
      "description": "कपड़े के निचले किनारे को समान दूरी पर मोड़कर अदृश्य हेमिंग सिलाई करें।"
    },
    "skill-seam-alignment": {
      "name": "सीम संरेखण",
      "description": "कपड़ों के टुकड़ों को आपस में जोड़ते समय सीम को बिल्कुल सीध में रखें।"
    },
    "skill-button-stitching": {
      "name": "बटन टांकना",
      "description": "क्रॉस-स्टिच और थ्रेड शैंक बनाकर बटन को मजबूती से कपड़े पर टांकें।"
    },
    "skill-hand-embroidery": {
      "name": "हाथ की कढ़ाई",
      "description": "फ्रेंच नॉट, सैटिन स्टिच और स्टेम स्टिच से सुंदर हाथ की कढ़ाई करें।"
    },
    "skill-basic-clothing-repair": {
      "name": "कपड़ों की बुनियादी मरम्मत",
      "description": "फटे हुए सीम की मरम्मत करें और बिना निशान छोड़े रफू करना सीखें।"
    },
    "skill-crochet-chain": {
      "name": "क्रोशिया फाउंडेशन चेन",
      "description": "समान तनाव के साथ शुरुआत के लिए बुनियादी क्रोशिया चेन बनाना सीखें।"
    },
    "skill-single-crochet": {
      "name": "सिंगल क्रोशिया",
      "description": "मजबूत और घने पैटर्न के लिए सिंगल क्रोशिया टांके का सही अभ्यास करें।"
    },
    "skill-double-crochet": {
      "name": "डबल क्रोशिया",
      "description": "यार्न ओवर, लूप खींचना और ऊंचाई वाले टांके बनाने की लयबद्ध गति।"
    },
    "skill-granny-square": {
      "name": "ग्रैनी स्क्वायर",
      "description": "कोने बनाने, क्लस्टर स्टिच और चौकोर पैटर्न तैयार करने की तकनीक।"
    },
    "skill-crochet-flower": {
      "name": "क्रोशिया फूल",
      "description": "परतदार पंखुड़ियां और सजावटी 3D क्रोशिया फूल तैयार करें।"
    },
    "skill-crochet-bag": {
      "name": "क्रोशिया बैग",
      "description": "मजबूत हैंडल, आधार और किनारे जोड़कर टिकाऊ टोट बैग बनाएं।"
    },
    "skill-basic-amigurumi": {
      "name": "अमीगुरुमी (खिलौने बनाना)",
      "description": "मैजिक रिंग, गोल घेरे में बुनाई और खिलौनों के अंगों को जोड़ना सीखें।"
    },
    "skill-clay-kneading": {
      "name": "मिट्टी गूंथना (वेडिंग)",
      "description": "हवा के बुलबुले हटाने और मिट्टी को समान बनाने के लिए स्पाइरल वेजिंग करें।"
    },
    "skill-clay-centering": {
      "name": "चाक पर मिट्टी केंद्रित करना",
      "description": "घूमते चाक के केंद्र में मिट्टी को स्थिर और संतुलित करना सीखें।"
    },
    "skill-pot-shaping": {
      "name": "बर्तन का आकार देना",
      "description": "हाथ के दबाव से मिट्टी की दीवार को ऊपर उठाना और समान मोटाई देना।"
    },
    "skill-rim-shaping": {
      "name": "किनारे (रिम) का निर्माण",
      "description": "बर्तन के ऊपरी किनारे को स्पंज या चमड़े से गोल और मजबूत बनाएं।"
    },
    "skill-surface-smoothing": {
      "name": "सतह को चिकना करना",
      "description": "मिट्टी के सूखने से पहले रिब टूल से बाहरी सतह को बिल्कुल चिकना करें।"
    },
    "skill-handle-making": {
      "name": "हैंडल बनाना और जोड़ना",
      "description": "कप या जग के लिए मिट्टी का हैंडल खींचना और मजबूती से जोड़ना।"
    },
    "skill-ceramic-painting": {
      "name": "सिरेमिक पेंटिंग और ग्लेज़िंग",
      "description": "पके हुए बर्तनों पर अंडरग्लेज़ ब्रश से सुंदर डिज़ाइन बनाना।"
    },
    "skill-face-cleansing": {
      "name": "चेहरा सफाई तकनीक",
      "description": "गोलाकार गति और ऊपर की ओर हल्के स्ट्रोक से चेहरे की गहरी सफाई।"
    },
    "skill-moisturizer-application": {
      "name": "मॉइस्चराइज़र लगाना",
      "description": "हल्के दबाव से ऊपर की ओर मालिश करते हुए त्वचा में नमी बनाए रखें।"
    },
    "skill-sunscreen-application": {
      "name": "सनस्क्रीन लगाना",
      "description": "दो-उंगली के नियम के अनुसार चेहरे और गर्दन पर सनस्क्रीन की समान परत।"
    },
    "skill-face-mask-application": {
      "name": "फेस मास्क लगाना",
      "description": "ब्रश की मदद से चेहरे पर आंखों को छोड़कर फेस मास्क की समान परत लगाना।"
    },
    "skill-foundation-application": {
      "name": "फाउंडेशन लगाना और ब्लेंड करना",
      "description": "डैम्प स्पंज से थपथपाते हुए प्राकृतिक और एकसमान फिनिश पाना।"
    },
    "skill-concealer-application": {
      "name": "कंसीलर लगाना",
      "description": "आंखों के नीचे और दाग-धब्बों पर सटीकता से कंसीलर की परत बैठाना।"
    },
    "skill-eyeliner-application": {
      "name": "आईलाइनर लगाना (विंग्ड)",
      "description": "आंख के बाहरी कोने से स्थिर हाथ से दोनों तरफ एकसमान विंग बनाना।"
    },
    "skill-nail-polish-application": {
      "name": "नेल पॉलिश लगाना",
      "description": "तीन-स्ट्रोक नियम: बीच में एक स्ट्रोक और दोनों तरफ एक-एक स्ट्रोक।"
    },
    "skill-basic-nail-art": {
      "name": "बुनियादी नेल आर्ट",
      "description": "डॉटिंग टूल से फूल और फ्रेंच टिप डिज़ाइन बनाना।"
    },
    "skill-hair-sectioning": {
      "name": "बालों का सेक्शनिंग (भाग करना)",
      "description": "क्लिप और कंघी की सहायता से 4-क्वाड्रेंट में साफ भाग अलग करना।"
    },
    "skill-hair-braiding": {
      "name": "बालों की चोटी गूंथना (3-स्ट्रैंड)",
      "description": "तीन समान लटें बनाकर एकसमान खिंचाव के साथ सुंदर चोटी गूंथना।"
    },
    "skill-blow-drying": {
      "name": "ब्लो-ड्राइंग तकनीक",
      "description": "राउंड ब्रश और हेयर ड्रायर को नीचे की ओर ग्लाइड करते हुए चिकनाई देना।"
    },
    "skill-basic-hair-styling": {
      "name": "बुनियादी हेयर स्टाइलिंग (बन/पोनीटेल)",
      "description": "चिकनी पोनीटेल और साफ हेयर बन बनाने की तकनीक।"
    },
    "skill-hair-curling": {
      "name": "बालों को कर्ल करना",
      "description": "कर्लिंग आयरन से चेहरे से दूर घुमाते हुए प्राकृतिक वेव्स बनाना।"
    },
    "skill-hair-straightening": {
      "name": "बालों को सीधा करना (स्ट्रेटनिंग)",
      "description": "समान गति से 1 इंच सेक्शन पर स्ट्रेटनर ग्लाइड करना।"
    },
    "skill-potting": {
      "name": "गमले में पौधा लगाना",
      "description": "जल निकासी छेद सुरक्षित करना और जड़ों के चारों ओर मिट्टी दबाना।"
    },
    "skill-seed-planting": {
      "name": "बीज बोना",
      "description": "बीज के आकार से दोगुनी गहराई पर बोना और हल्की नमी बनाए रखना।"
    },
    "skill-soil-preparation": {
      "name": "मिट्टी तैयार करना",
      "description": "कंपोस्ट और कोकोपीट मिलाकर भुरभुरी पोषक मिट्टी बनाना।"
    },
    "skill-pruning": {
      "name": "पौधों की छंटाई (प्रूनिंग)",
      "description": "नोड के ऊपर 45 डिग्री के कोण पर सूखी टहनियों की सफाई करना।"
    },
    "skill-repotting": {
      "name": "बड़े गमले में बदलना (रीपॉटिंग)",
      "description": "जड़ों को नुकसान पहुंचाए बिना 2 इंच बड़े गमले में पौधा शिफ्ट करना।"
    },
    "skill-plant-propagation": {
      "name": "कटिंग से नए पौधे तैयार करना",
      "description": "नोड के नीचे साफ कट लगाकर पानी या मिट्टी में जड़ें उगाना।"
    },
    "skill-plant-support": {
      "name": "पौधों को सहारा देना (स्टेकिंग)",
      "description": "तने को नुकसान पहुंचाए बिना बांस की खपच्ची से सीधा सहारा देना।"
    },
    "skill-knife-handling": {
      "name": "चाकू पकड़ने की तकनीक (क्लॉ ग्रिप)",
      "description": "उंगलियों को मोड़कर सुरक्षित क्लॉ ग्रिप और ब्लेड पर नियंत्रण रखें।"
    },
    "skill-vegetable-chopping": {
      "name": "सब्जियां काटना (जूलिएन और डाइस)",
      "description": "रॉकिंग मोशन के साथ एकसमान चौकोर टुकड़े और स्लाइस काटना।"
    },
    "skill-dough-kneading": {
      "name": "आटा गूंथना",
      "description": "हथेलियों के दबाव से आटे को मोड़ना और चिकना लचीला डो बनाना।"
    },
    "skill-dough-rolling": {
      "name": "रोटी या पेस्ट्री बेलना",
      "description": "बेलन से केंद्र से बाहर की ओर समान मोटाई में बेलना।"
    },
    "skill-cake-decoration": {
      "name": "केक सजावट (पाइपिंग)",
      "description": "पाइपिंग बैग से रोसेट और सजावटी बॉर्डर बनाने का अभ्यास।"
    },
    "skill-food-plating": {
      "name": "भोजन की सजावट और प्लेटिंग",
      "description": "रंगों का संतुलन, ऊंचाई और सॉस की ड्रिजल से रेस्तरां जैसी प्लेटिंग।"
    },
    "skill-measuring-marking": {
      "name": "मापना और निशान लगाना",
      "description": "टेप और ट्राई-स्क्वायर से 90 डिग्री का सटीक निशान लगाना।"
    },
    "skill-screw-fitting": {
      "name": "स्क्रू फिटिंग",
      "description": "स्क्रू ड्राइवर को सीध में रखकर बिना फिसले सही टॉर्क से कसना।"
    },
    "skill-furniture-assembly": {
      "name": "फर्नीचर असेंबली",
      "description": "कैम-लॉक और लकड़ी के डॉवेल्स को सही क्रम में जोड़ना।"
    },
    "skill-sanding": {
      "name": "रेगमाल रगड़ना (सैंडिंग)",
      "description": "लकड़ी के रेशों की दिशा में रेगमाल चलाकर चिकनी सतह बनाना।"
    },
    "skill-wall-hanging": {
      "name": "दीवार पर फ्रेम लगाना",
      "description": "स्पिरिट लेवल से सीधा नापकर एंकर और हुक लगाना।"
    },
    "skill-cable-organization": {
      "name": "केबल प्रबंधन",
      "description": "वेल्क्रो और केबल क्लिप से तारों को साफ और व्यवस्थित करना।"
    },
    "skill-gift-wrapping": {
      "name": "उपहार पैकिंग (गिफ्ट रैपिंग)",
      "description": "कागज के कोनों को सलीके से मोड़कर सुंदर रिबन बो लगाना।"
    },
    "skill-paper-flower-making": {
      "name": "कागज के फूल बनाना",
      "description": "क्रेप पेपर की पंखुड़ियों को मोड़कर यथार्थवादी गुलाब बनाना।"
    },
    "skill-origami": {
      "name": "ओरिगामी (कागज कला)",
      "description": "सटीक क्रीज और फोल्ड से क्रेन और ज्यामितीय आकृतियां बनाना।"
    },
    "skill-candle-decoration": {
      "name": "मोमबत्ती सजावट",
      "description": "मोमबत्ती पर सूखे फूल चिपकाकर सुंदर कलात्मक रूप देना।"
    },
    "skill-resin-craft": {
      "name": "रेजिन शिल्प",
      "description": "एपॉक्सी रेजिन मिलाना, बुलबुले हटाना और कोस्टर सांचों में ढालना।"
    },
    "skill-festive-decoration": {
      "name": "उत्सव सजावट (रीथ मेकिंग)",
      "description": "तार के फ्रेम पर पत्तियों और रिबन से उत्सव की सुंदर रीथ बनाना।"
    }
  }
},
  te: {
  "common": {
    "appName": "SkillLens",
    "tagline": "చేతి నైపుణ్యాల కోసం AI కోచ్",
    "offlineNotice": "ఆఫ్‌లైన్ మోడ్ — మీ సాధన డేటా ఈ పరికరంలోనే భద్రపరచబడింది.",
    "home": "హోమ్",
    "skills": "నైపుణ్యాలు",
    "practice": "సాధన",
    "progress": "పురోగతి",
    "profile": "ప్రొఫైల్",
    "learn": "నేర్చుకోండి",
    "startPractice": "సాధన ప్రారంభించండి",
    "continuePractice": "సాధన కొనసాగించండి",
    "continueLearning": "నేర్చుకోవడం కొనసాగించండి",
    "resumeDrill": "డ్రిల్ కొనసాగించండి",
    "back": "వెనుకకు",
    "next": "తరువాత",
    "finish": "ముగించండి",
    "skip": "దాటవేయి",
    "save": "భద్రపరచు",
    "cancel": "రద్దు చేయి",
    "loading": "లోడ్ అవుతోంది...",
    "error": "లోపం",
    "success": "విజయం",
    "retry": "మళ్ళీ ప్రయత్నించండి",
    "viewAll": "అన్నీ చూడండి",
    "search": "వెతకండి",
    "filter": "ఫిల్టర్",
    "difficulty": "స్థాయి",
    "duration": "వ్యవధి",
    "minutes": "నిమిషాలు",
    "all": "అన్నీ",
    "beginner": "ప్రారంభ స్థాయి",
    "intermediate": "మధ్యస్థ స్థాయి",
    "advanced": "ఉన్నత స్థాయి",
    "signOut": "సైన్ అవుట్",
    "signIn": "సైన్ ఇన్",
    "signUp": "సైన్ అప్",
    "days": "రోజులు",
    "streak": "స్ట్రీక్",
    "sessions": "సెషన్లు",
    "mastery": "ప్రావీణ్యం",
    "activeCourses": "యాక్టివ్ కోర్సులు",
    "points": "పాయింట్లు",
    "featured": "ప్రత్యేకమైనవి",
    "drills": "సాధనలు",
    "allSkills": "అన్ని నైపుణ్యాలు",
    "allCategories": "అన్ని వర్గాలు",
    "skillsFound": "నైపుణ్యాలు అందుబాటులో ఉన్నాయి",
    "noSkillsMatch": "ఏ నైపుణ్యం కనిపించలేదు.",
    "tools": "పరికరాలు",
    "materials": "వస్తువులు",
    "steps": "దశలు",
    "safety": "భద్రత",
    "tips": "సూచనలు",
    "close": "మూసివేయి",
    "done": "పూర్తయింది",
    "confirm": "ధృవీకరించండి",
    "delete": "తొలగించు",
    "edit": "సవరించు",
    "seconds": "సెకన్లు"
  },
  "nav": {
    "home": "హోమ్",
    "skills": "నైపుణ్యాలు",
    "practice": "సాధన",
    "progress": "పురోగతి",
    "profile": "ప్రొఫైల్",
    "learn": "నేర్చుకోండి",
    "signOut": "సైన్ అవుట్"
  },
  "auth": {
    "signIn": "సైన్ ఇన్",
    "signUp": "సైన్ అప్",
    "email": "ఈమెయిల్",
    "password": "పాస్‌వర్డ్",
    "confirmPassword": "పాస్‌వర్డ్‌ను నిర్ధారించండి",
    "forgotPassword": "పాస్‌వర్డ్ మర్చిపోయారా?",
    "createAccount": "ఖాతాను సృష్టించండి",
    "alreadyHaveAccount": "ఇప్పటికే ఖాతా ఉందా?",
    "dontHaveAccount": "ఖాతా లేదా?",
    "invalidEmail": "దయచేసి సరైన ఈమెయిల్ చిరునామాను నమోదు చేయండి.",
    "passwordRequired": "దయచేసి మీ పాస్‌వర్డ్‌ను నమోదు చేయండి.",
    "passwordMismatch": "పాస్‌వర్డ్‌లు సరిపోలడం లేదు.",
    "loginSuccess": "సైన్ ఇన్ విజయవంతమైంది! దారిమళ్లిస్తోంది...",
    "accountCreated": "ఖాతా విజయవంతంగా సృష్టించబడింది! దారిమళ్లిస్తోంది...",
    "logout": "సైన్ అవుట్",
    "sessionMessages": "విజయవంతంగా సైన్ ఇన్ అయ్యారు.",
    "welcomeBack": "పునఃస్వాగతం",
    "signInSubtitle": "నేర్చుకోవడం మరియు మీ నైपुణ్యాలను మెరుగుపరచడం కొనసాగించండి.",
    "createAccountSubtitle": "నిజ-సమయ AI మార్గదర్శకత్వంతో చేతి నైపుణ్యాలను నేర్చుకోవడానికి SkillLens లో చేరండి.",
    "fullName": "పూర్తి పేరు",
    "fullNamePlaceholder": "ఉదా. అలెక్స్ వాన్స్",
    "emailPlaceholder": "you@example.com",
    "passwordPlaceholder": "••••••••",
    "confirmPasswordPlaceholder": "••••••••",
    "quickDemo": "త్వరిత డెమో: అలెక్స్ వాన్స్ వివరాలు నింపండి",
    "resetPassword": "పాస్‌వర్డ్ రీసెట్ చేయండి",
    "resetPasswordSubtitle": "పాస్‌వర్డ్ రీసెట్ సూచనలను పొందడానికి మీ ఈమెయిల్ నమోదు చేయండి.",
    "sendResetLink": "రీసెట్ సూచనలను పంపండి",
    "backToSignIn": "సైన్ ఇన్ కు తిరిగి వెళ్ళండి",
    "resetSuccessMessage": "ఈ డెమో ఖాతా కోసం పాస్‌వర్డ్ రీసెట్ సూచనలు పంపబడ్డాయి.",
    "passwordMinLength": "పాస్‌వర్డ్ కనీసం 6 అక్షరాలు ఉండాలి.",
    "fillAllFields": "దయచేసి అన్ని వివరాలను పూరించండి.",
    "loginFailed": "ఈమెయిల్ లేదా పాస్‌వర్డ్ తప్పు.",
    "registerFailed": "ఖాతా సృష్టించడం విఫలమైంది. దయచేసి మళ్ళీ ప్రయత్నించండి."
  },
  "landing": {
    "tagline": "చేతి నైపుణ్యాల అభ్యాస యాప్",
    "badge": "ఇంటరాక్టివ్ సాధన కోచ్",
    "headline": "రియల్-టైమ్ AI సూచనలతో చేతి పనులలో ప్రావీణ్యం సాధించండి",
    "subheadline": "ఫోన్ కెమెరాను అమర్చండి. SkillLens మీ చేతి కోణాలు, కదలికలు మరియు పద్ధతిని విశ్లేషించి తక్షణ మార్గదర్శకత్వం అందిస్తుంది.",
    "getStarted": "ఉచితంగా ప్రారంభించండి",
    "viewSkills": "67 నైపుణ్యాలను చూడండి",
    "whyTitle": "నిజమైన నైపుణ్యాల కోసం రూపొందించబడింది",
    "whyDesc": "పెయింటింగ్, కుట్టుపని, క్రాఫ్ట్స్, మరియు మేకప్ వరకు - పొరపాట్లు అలవాటుగా మారకముందే సరిచేసుకోండి.",
    "previewTitle": "ముఖ్యమైన చేతిపనులను అన్వేషించండి",
    "previewSubtitle": "AI విజన్ విశ్లేషణ మరియు దశల వారీ మార్గదర్శకత్వంతో కూడిన సాధన మాడ్యూల్స్.",
    "features": {
      "watch": "ఫోన్ కెమెరా గైడెన్స్",
      "watchDesc": "చేతులు ఫ్రేమ్‌లో ఉండేలా ఫోన్‌ను స్థిరంగా ఉంచండి.",
      "correct": "మైక్రో ఫీడ్‌బ్యాక్",
      "correctDesc": "కోణం మరియు పద్ధతిపై తక్షణమే సలహాలు పొందండి.",
      "track": "స్పష్టమైన పురోగతి",
      "trackDesc": "ప్రతి సాధనతో మీ టెక్నిక్ స్కోరును మెరుగుపరచుకోండి."
    }
  },
  "onboarding": {
    "step1Title": "1. ఏదైనా నైపుణ్యాన్ని ఎంచుకోండి",
    "step1Desc": "పెయింటింగ్, కుట్టుపని, కుండల తయారీ, వంట మరియు క్రాఫ్ట్స్ వంటి 67 నైపుణ్యాల నుండి ఎంచుకోండి.",
    "step2Title": "2. ఫోన్ కెమెరాను అమర్చండి",
    "step2Desc": "మీ చేతులు మరియు పనిముట్లు గైడ్ బాక్స్‌లో కనిపించేలా ఫోన్ అమర్చండి.",
    "step3Title": "3. సాధన చేయండి & సలహాలు పొందండి",
    "step3Desc": "SkillLens మీ కదలికలు మరియు ఖచ్చితత్వాన్ని గమనించి శిక్షణ ఇస్తుంది.",
    "next": "తరువాత",
    "back": "వెనుకకు",
    "finish": "కోచింగ్ ప్రారంభించండి",
    "skip": "హోమ్‌కు వెళ్లండి"
  },
  "home": {
    "greetingMorning": "శుభోదయం, {{name}}",
    "greetingDay": "నమస్కారం, {{name}}",
    "greetingEvening": "శుభ సాయంత్రం, {{name}}",
    "whatToLearn": "ఈరోజు మీరు ఏమి నేర్చుకోవాలనుకుంటున్నారు?",
    "streakLabel": "రోజువారీ స్ట్రీక్",
    "daysStreak": "రోజులు యాక్టివ్",
    "daysActive": "రోజులు",
    "readinessScore": "మొత్తం టెక్నిక్ స్కోరు",
    "overallReadiness": "మొత్తం సన్నద్ధత స్కోరు",
    "scoreSubtitle": "కెమెరా టెక్నిక్ పరిశీలనల ఆధారంగా",
    "continuePractice": "సాధన కొనసాగించండి",
    "continueLearning": "నేర్చుకోవడం కొనసాగించండి",
    "resumeCta": "టెక్నిక్ డ్రిల్ ప్రారంభించండి",
    "recommendedSkills": "సిఫార్సు చేయబడిన సాధనలు",
    "recommendedSubtitle": "కండరాల నియంత్రణ కోసం ముఖ్యమైన సాధన డ్రిల్స్",
    "recentFeedback": "ఇటీవలి కోచ్ సూచనలు",
    "latestInsights": "ఇటీవలి AI సలహాలు",
    "noRecentFeedback": "ఇంకా సాధన చేయలేదు. ప్రారంభించడానికి నైपुణ్యాన్ని ఎంచుకోండి!",
    "exploreCategories": "వర్గాలను అన్వేషించండి",
    "exploreCategoriesSubtitle": "10 రంగాలలో విస్తృతమైన అభ్యాసం",
    "viewAll": "అన్ని 67 నైపుణ్యాలు చూడండి",
    "quickSummary": "సెషన్ వివరాలు",
    "viewFullHistory": "పూర్తి చరిత్ర చూడండి →",
    "score": "స్కోరు",
    "sessionsRecorded": "సెషన్లు",
    "skillsCount": "నైపుణ్యాలు",
    "mastery": "ప్రావీణ్యం"
  },
  "skills": {
    "title": "నైపుణ్యాల లైబ్రరీ",
    "subtitle": "దశల వారీ మాస్టర్‌క్లాస్‌లు మరియు కెమెరా టెక్నిక్ డ్రిల్స్‌ను అన్వేషించండి.",
    "searchPlaceholder": "నైపుణ్యాలు, పనిముట్లు లేదా పద్ధతులను వెతకండి...",
    "allCategories": "అన్ని వర్గాలు",
    "allSkillsCount": "అన్ని నైపుణ్యాలు ({{count}})",
    "skillsFound": "నైపుణ్యాలు అందుబాటులో ఉన్నాయి",
    "noSkillsMatch": "మీ శోధనకు తగిన నైపుణ్యాలు కనిపించలేదు.",
    "difficulty": "స్థాయి",
    "duration": "సమయం",
    "filterBy": "ఫిల్టర్",
    "featured": "ప్రత్యేకమైనవి",
    "browseCatalog": "67 సాధన ట్యుటోరియల్స్ చూడండి",
    "all": "అన్నీ"
  },
  "skillDetail": {
    "difficulty": "స్థాయి",
    "duration": "వ్యవధి",
    "toolsNeeded": "అవసరమైన పరికరాలు & వస్తువులు",
    "stepByStep": "పద్ధతి దశలు",
    "safetyFirst": "భద్రతా సూచనలు",
    "cameraTips": "కెమెరా అమరిక సూచనలు",
    "observableMetrics": "పరిశీలించే ప్రమాణాలు",
    "personalBest": "వ్యక్తిగత రికార్డు",
    "noScoreYet": "ఇంకా సాధన వివరాలు నమోదు కాలేదు",
    "startPractice": "సాధన ప్రారంభించండి",
    "learnStepByStep": "దశల వారీగా నేర్చుకోండి",
    "skincareDisclaimer": "గమనిక: SkillLens అప్లికేషన్ టెక్నిక్‌ను మాత్రమే విశ్లేషిస్తుంది. ఇది ఎలాంటి వైద్య సలహా కాదు.",
    "videoAvailable": "బోధనా వీడియో అందుబాటులో ఉంది",
    "videoAvailableDesc": "నిజమైన టెక్నిక్ వివరణ మరియు దశలు కలిగి ఉంటుంది",
    "readyToTest": "మీ టెక్నిక్‌ని పరీక్షించడానికి సిద్ధంగా ఉన్నారా?",
    "readyToTestDesc": "రియల్-టైమ్ పరిశీలన మరియు ఫీడ్‌బ్యాక్ కోసం మీ కెమెరాను ఉపయోగించండి.",
    "mastery": "ప్రావీణ్యం",
    "whatYouNeed": "మీకు అవసరమైనవి",
    "overview": "నైపుణ్య వివరాలు"
  },
  "learning": {
    "lesson": "పాఠం",
    "tutorial": "నైపుణ్య ట్యుటోరియల్",
    "stepProgress": "పురోగతి: దశ {{current}} / {{total}}",
    "step": "దశ {{current}}",
    "techniqueNote": "టెక్నిక్ సూచన",
    "whatYouNeed": "మీకు కావలసినవి",
    "commonMistakes": "నివారించాల్సిన సాధారణ తప్పులు",
    "safetyAndWorkspace": "భద్రత & పని ప్రదేశం",
    "previousStep": "మునుపటి దశ",
    "nextStep": "తదుపరి దశ",
    "startPractice": "సాధన ప్రారంభించండి",
    "readyToTest": "మీ టెక్నిక్‌ను పరీక్షించడానికి సిద్ధంగా ఉన్నారా?",
    "readyToTestDesc": "రియల్-టైమ్ పరిశీలన మరియు ఫీడ్‌బ్యాక్ కోసం కెమెరాను ఉపయోగించండి.",
    "openStudio": "ప్రాక్టీస్ స్టూడియో తెరవండి"
  },
  "video": {
    "lessonTitle": "బోధనా వీడియో పాఠం",
    "watchVideo": "వీడియో చూడండి",
    "videoUnavailable": "వీడియో అందుబాటులో లేదు",
    "videoLoading": "వీడియో లోడ్ అవుతోంది...",
    "videoCompleted": "వీడియో పూర్తయింది",
    "continue": "కొనసాగించండి",
    "previous": "మునుపటి",
    "next": "తరువాత",
    "markAsComplete": "పూర్తయినట్లు గుర్తించండి",
    "startPractice": "సాధన ప్రారంభించండి",
    "markAsWatched": "వీడియో చూసినట్లు గుర్తించండి",
    "openInYouTube": "యూట్యూబ్‌లో నేరుగా చూడండి",
    "fallbackMessage": "వీడియో లోడ్ కాలేదు. దయచేసి క్రింది దశల వారీ సూచనలను అనుసరించండి.",
    "demonstration": "వీడియో ప్రదర్శన",
    "noticeEn": "ఇంగ్లీష్ బోధనా వీడియో",
    "noticeHi": "ఇంగ్లీష్ వీడియో • క్రింద హిందీ సూచనలు",
    "noticeTe": "ఇంగ్లీష్ వీడియో • క్రింద తెలుగు సూచనలు"
  },
  "practice": {
    "simulatedBadge": "సిమ్యులేటెడ్ AI విజన్ యాక్టివ్",
    "simulatedNotice": "సిమ్యులేషన్ డెమో: MockVisionAnalyzer ద్వారా టెక్నిక్ ఫీడ్‌బ్యాక్ ప్రదర్శించబడుతుంది.",
    "connectingCamera": "కెమెరాకు కనెక్ట్ అవుతోంది...",
    "cameraAccessDenied": "కెమెరా అనుమతి లభించలేదు లేదా అందుబాటులో లేదు.",
    "enableCameraFallback": "సిమ్యులేటెడ్ కెమెరా ప్రారంభించబడింది.",
    "useSimulatedCamera": "సిమ్యులేటెడ్ కెమెరాను ఎంచుకోండి",
    "liveTechniqueGuidance": "ప్రత్యక్ష AI సూచనలు",
    "trackingActive": "చేతి & సాధనాల గుర్తింపు సక్రియం",
    "start": "ప్రారంభించండి",
    "pause": "ఆపండి",
    "resume": "కొనసాగించండి",
    "finishSession": "ముగించండి",
    "elapsed": "గడిచిన సమయం",
    "sessionPaused": "సాధన తాత్కాలికంగా ఆపబడింది",
    "cameraTips": "కెమెరా అమరిక సూచనలు",
    "targetMetrics": "పరిశీలించే ప్రమాణాలు",
    "coachNotes": "కోచ్ సూచనలు",
    "visionStatus": "విజన్ స్థితి",
    "requestingCamera": "కెమెరా అనుమతి కోరబడుతోంది...",
    "grantCameraPrompt": "SkillLens మీ టెక్నిక్‌ను విశ్లేషించడానికి కెమెరా యాక్సెస్ ఇవ్వండి.",
    "switchSimulated": "సిమ్యులేటెడ్ ఫీడ్‌ను ఉపయోగించండి",
    "retryCamera": "కెమెరాను మళ్ళీ ప్రయత్నించండి",
    "keepHandsInFrame": "రెండు చేతులను కెమెరా ఫ్రేమ్‌లోనే ఉంచండి.",
    "adjustLighting": "చేతులు స్పష్టంగా కనిపించేలా కాంతిని సరిచేయండి.",
    "sufficientEvidence": "విజువల్ ఆధారాలు నమోదు చేయబడ్డాయి",
    "incompleteObservation": "అసంపూర్ణ పరిశీలన"
  },
  "feedback": {
    "moveSlower": "స్థిరమైన ఆకృతి కోసం మీ చేతి కదలికను కొద్దిగా నెమ్మది చేయండి.",
    "consistentPressure": "స్ట్రోక్స్ వెంట సమానమైన ఒత్తిడి కొనసాగించబడింది.",
    "firmFooting": "స్థిరత్వం కోసం రెండు పాదాలను నేలపై దృఢంగా ఉంచండి.",
    "goodAnchor": "చేతి స్థిరమైన పట్టు చక్కటి ఫలితాన్ని ఇచ్చింది.",
    "straightPath": "గైడ్ మార్క్ లోపలే చక్కటి సరళరేఖ కొనసాగింది.",
    "relaxGrip": "చేతి అలసట రాకుండా పట్టును కొద్దిగా వదులు చేయండి.",
    "evenSpacing": "కుట్ల మధ్య సమానమైన దూరం కొనసాగింది.",
    "smoothTransition": "కదలికల మధ్య మృదువైన మార్పు కనిపించింది.",
    "steadyCadence": "కదలికల లయ సరిగ్గా సరైన పరిధిలో ఉంది.",
    "adjustAngle": "ఉపరితలానికి తగినట్లుగా పరికరం కోణాన్ని సరిచేయండి.",
    "maintainTension": "దారాలు లేదా పాయలపై సమతుల్య బిగుతును ఉంచండి.",
    "watchEdges": "అంచులు దాటిపోకుండా సరిహద్దులను గమనించండి.",
    "tooDark": "వెలుతురు చాలా తక్కువగా ఉంది. చేతులు కనిపించేలా కాంతిని సరిచేయండి.",
    "keepHandsInFrame": "రెండు చేతులను కెమెరా ఫ్రేమ్‌లోనే ఉంచండి.",
    "adjustCameraSubject": "పని ప్రదేశం కనిపించేలా కెమెరాను అమర్చండి.",
    "workspaceReady": "పని ప్రదేశం సిద్ధంగా ఉంది. టెక్నిక్ పరిశీలించడానికి సాధన ప్రారంభించండి.",
    "keepPracticingAWhile": "టెక్నిక్ విశ్లేషించడానికి మరికొన్ని సెకన్ల పాటు సాధన కొనసాగించండి.",
    "observingTechnique": "మీ టెక్నిక్ పరిశీలించబడుతోంది... స్థిరమైన వేగాన్ని కొనసాగించండి.",
    "handMovementConsistent": "చేతి కదలికలు స్థిరంగా ఉన్నాయి. సాధన లయను కొనసాగించండి.",
    "braidHandMovement": "చేతులు మరియు జుట్టు ఫ్రేమ్‌లో ఉన్నాయి. జడ అల్లడం ప్రారంభించండి.",
    "braidMoreSeconds": "మరికొన్ని సెకన్లు అల్లడం కొనసాగించండి.",
    "braidAlternating": "చేతి కదలికలు నిలకడగా ఉన్నాయి. పాయలను మార్చే విధానాన్ని కొనసాగించండి.",
    "braidSteadyTension": "చేతి స్థానం పరిశీలించబడుతోంది. మూడు పాయలపై సమాన బిగుతు ఉంచండి.",
    "solidCoverage": "ఉపరితలంపై ఏకరీతి రంగు పూత వచ్చింది.",
    "goodMPattern": "గీతలు లేకుండా చక్కటి నిరంతర ప్యాటర్న్ వచ్చింది.",
    "stayWithinTape": "టేప్ మార్జిన్ లోపలే పని పూర్తయింది.",
    "backrollLighter": "మెరుపు సమానంగా ఉండటానికి చివరి పాస్ తేలికగా వేయండి.",
    "goodFingerPlacement": "అంచులకు తగినంత దూరంలో చేతి వేళ్ళ అమరిక బాగుంది.",
    "evenLayer": "అంచుల వద్ద పేరుకుపోకుండా ఏకరీతి పొర ఏర్పడింది."
  },
  "results": {
    "sessionSummary": "సాధన పూర్తయింది!",
    "practiceComplete": "సాధన పూర్తయింది",
    "techniqueSummary": "టెక్నిక్ సారాంశం",
    "incompleteObservation": "అసంపూర్ణ పరిశీలన",
    "visualEvidenceRecorded": "విజువల్ ఆధారాలు నమోదు చేయబడ్డాయి",
    "formScore": "టెక్నిక్ మూల్యాంకన స్కోరు",
    "techniqueScore": "మొత్తం టెక్నిక్ స్కోరు",
    "metricsTitle": "పనితీరు విశ్లేషణ",
    "strengthsTitle": "బాగా చేసిన అంశాలు",
    "improvementsTitle": "మెరుగుపరచుకోవాల్సిన అంశాలు",
    "safetyTitle": "భద్రత & భంగిమ సూచనలు",
    "practiceAgain": "మళ్ళీ సాధన చేయండి",
    "viewProgress": "పూర్తి పురోగతి చూడండి",
    "home": "హోమ్‌కు వెళ్లండి",
    "savedLocally": "సెషన్ మీ పరికరంలో భద్రపరచబడింది",
    "noSessionFound": "సాధన సెషన్ ఏదీ కనిపించలేదు",
    "noSessionFoundDesc": "మీ పనితీరు విశ్లేషణను చూడటానికి కెమెరాతో సాధన సెషన్‌ను పూర్తి చేయండి.",
    "browseSkills": "నైపుణ్యాలను చూడండి",
    "whyNoScore": "స్కోరు ఎందుకు రాలేదు?",
    "whyNoScoreDesc": "సాధన సమయంలో మీ చేతులు మరియు పని ప్రదేశం నిరంతరం కెమెరాకు కనిపించినప్పుడు మాత్రమే SkillLens స్కోరును లెక్కిస్తుంది. స్కోరు పొందడానికి కనీసం 4-5 సెకన్ల పాటు సాధన చేయండి.",
    "observedFor": "{{seconds}} సెకన్ల పాటు పరిశీలించబడింది · పరికరంలో భద్రపరచబడింది",
    "consistentTechnique": "దశల అంతటా స్థిరమైన టెక్నిక్ పరిశీలించబడింది",
    "practiceCompletedKeepGoing": "సాధన పూర్తయింది — లయ కోసం సాధన కొనసాగించండి",
    "notEnoughVisualData": "టెక్నిక్‌ను విశ్లేషించడానికి తగినంత విజువల్ డేటా లేదు"
  },
  "progress": {
    "title": "నా పురోగతి",
    "subtitle": "మీరు పూర్తి చేసిన పాఠాలు, సాధన స్థిరత్వం మరియు ప్రావీణ్యాన్ని ట్రాక్ చేయండి.",
    "skillsLearning": "నేర్చుకుంటున్న నైపుణ్యాలు",
    "skillsCompleted": "పూర్తయిన నైపుణ్యాలు",
    "practiceSessions": "సాధన సెషన్లు",
    "currentStreak": "రోజుల స్ట్రీక్",
    "averageScore": "సగటు స్కోరు",
    "progressionTrend": "స్కోరు పురోగతి",
    "recentSessions": "ఇటీవలి సాధన చరిత్ర",
    "noSessionsYet": "ఇంతవరకు సాధన చరిత్ర లేదు.",
    "categoriesProgress": "వర్గాల పరిధి",
    "earnedBadges": "నైపుణ్య బ్యాడ్జ్‌లు",
    "activeCourses": "యాక్టివ్ కోర్సులు",
    "passedBenchmarks": "పూర్తయిన మైలురాళ్ళు",
    "recordedSessions": "నమోదైన సెషన్లు",
    "activeStreak": "యాక్టివ్ స్ట్రీక్",
    "categoryCoverage": "వర్గాల వారీగా సాధన పరిధి",
    "practiceASkill": "సాధన ప్రారంభించండి",
    "unlocked": "అన్‌లాక్ అయింది",
    "locked": "లాక్ అయింది",
    "badges": {
      "firstDrillTitle": "మొదటి సాధన డ్రిల్",
      "firstDrillDesc": "మీ మొదటి ప్రాక్టికల్ సెషన్‌ను పూర్తి చేశారు",
      "steadyStreakTitle": "స్థిరమైన అభ్యాసకుడు",
      "steadyStreakDesc": "వరుసగా 3+ రోజుల సాధన స్ట్రీక్‌ను కొనసాగించారు",
      "craftVirtuosoTitle": "ఫారమ్ మాస్టర్",
      "craftVirtuosoDesc": "85% కంటే ఎక్కువ టెక్నిక్ స్కోరు సాధించారు",
      "versatileMakerTitle": "బహుళ-నైపుణ్య అన్వేషకుడు",
      "versatileMakerDesc": "కనీసం 3 వర్గాలలో సాధన చేశారు"
    }
  },
  "profile": {
    "title": "ప్రొఫైల్ మరియు సెట్టింగ్స్",
    "subtitle": "మీ ప్రాధాన్యతలు, కెమెరా కోచింగ్ మరియు భాషను నిర్వహించండి.",
    "learnerLevel": "నైపుణ్య సాధకుడు",
    "selectLanguage": "భాష / Language / भाषा",
    "appSettings": "AI కోచింగ్ ఎంపికలు",
    "feedbackFrequency": "సూచనల ఫ్రీక్వెన్సీ",
    "continuous": "నిరంతరం (ఎక్కువ)",
    "periodic": "నిర్దిష్ట వ్యవధిలో (ప్రతి 15 సె.)",
    "low": "చివర్లో మాత్రమే",
    "visionSensitivity": "ట్రాకింగ్ సెన్సిటివిటీ",
    "normal": "సహజం",
    "high": "అధిక ఖచ్చితత్వం",
    "relaxed": "సాధారణం",
    "audioCoaching": "ఆడియో మార్గదర్శకత్వం",
    "audioCoachingDesc": "చేతి అమరిక కోసం వాయిస్ సూచనలు (UI సిమ్యులేషన్)",
    "dataManagement": "డేటా నిర్వహణ",
    "resetData": "స్థానిక డేటాను రీసెట్ చేయండి",
    "resetConfirm": "మీ సాధన చరిత్ర మరియు స్కోర్‌లను ఖచ్చితంగా తొలగించాలనుకుంటున్నారా?",
    "dataResetSuccess": "డేటా విజయవంతంగా రీసెట్ చేయబడింది.",
    "version": "SkillLens v1.0.0 (iQOO హ్యాకథాన్ ఎడిషన్)",
    "accountDetails": "ఖాతా వివరాలు",
    "email": "ఈమెయిల్",
    "memberSince": "చేరిన తేదీ",
    "practiceOverview": "సాధన అవలోకనం",
    "craftVirtuoso": "ఫారమ్ మాస్టర్",
    "appearance": "థీమ్ ఎంపిక",
    "themeMode": "డార్క్ మోడ్"
  },
  "categories": {
    "cat-1": {
      "name": "పెయింటింగ్ & అలంకరణ",
      "description": "గోడల రంగు పూత, రోలర్ స్ట్రోక్ సమతుల్యత, అంచుల కటింగ్ మరియు అలంకరణ కళలో ప్రావీణ్యం పొందండి."
    },
    "cat-2": {
      "name": "టైలరింగ్ & ఫ్యాషన్",
      "description": "సూది అమరిక, కుట్టు స్థిరత్వం, కుట్టు దూరం మరియు దుస్తుల మరమ్మత్తు నేర్చుకోండి."
    },
    "cat-3": {
      "name": "క్రోచెట్ & చేతిపనులు",
      "description": "లూప్ బిగుతు, కుట్టు లయ, హుక్ కోణం మరియు అందమైన చేతిపనుల నమూనాలను నేర్చుకోండి."
    },
    "cat-4": {
      "name": "కుండల తయారీ & సిరామిక్స్",
      "description": "చక్రంపై మట్టిని సరిచేయడం, చేతి ఒత్తిడి సమతుల్యత, అంచుల ఆకృతి మరియు మట్టి నియంత్రణను సాధన చేయండి."
    },
    "cat-5": {
      "name": "సౌందర్యం, చర్మ సంరక్షణ & మేకప్",
      "description": "క్రీములను సరిగ్గా పూయడం, బ్రష్ బ్లెండింగ్, వింగ్ సమరూపత మరియు నెయిల్ పాలిష్ పద్ధతులను మెరుగుపరచండి."
    },
    "cat-6": {
      "name": "కేశాలంకరణ & స్టైలింగ్",
      "description": "జుట్టు విభజన ఖచ్చితత్వం, జడ బిగుతు, కర్లింగ్ ఐరన్ కోణాలు మరియు స్టైలింగ్ పద్ధతులు నేర్చుకోండి."
    },
    "cat-7": {
      "name": "తోటపని & మొక్కల పెంపకం",
      "description": "సరైన మట్టిని సిద్ధం చేయడం, మొక్కల మధ్య దూరం, వేర్ల లోతు మరియు కత్తిరింపు పద్ధతులు నేర్చుకోండి."
    },
    "cat-8": {
      "name": "వంట & ఆహార అలంకరణ",
      "description": "చెఫ్ నైఫ్ గ్రిప్, కూరగాయలు తరిగే లయ, పిండి పిసికే ఒత్తిడి మరియు వంటల అలంకరణ నేర్చుకోండి."
    },
    "cat-9": {
      "name": "స్వయంకృషి & గృహ మరమ్మతులు",
      "description": "డ్రిల్ సరైన కోణం, స్క్రూ బిగించే నియంత్రణ, కొలతలు గుర్తించడం మరియు లెవల్ మౌంటింగ్ నేర్చుకోండి."
    },
    "cat-10": {
      "name": "సృజనాత్మక & అలంకరణ చేతిపనులు",
      "description": "కాగితం మడతలు, మూలల మడత, రెసిన్ పోయడం మరియు పండుగ అలంకరణలు నేర్చుకోండి."
    }
  },
  "skillsData": {
    "skill-wall-painting": {
      "name": "గోడ పెయింటింగ్",
      "description": "రోలర్ ద్వారా ఏకరీతి రంగు పూతను అందించడం మరియు అసమాన గుర్తులు లేకుండా సమాన ఒత్తిడిని ఉంచడం."
    },
    "skill-roller-painting": {
      "name": "రోలర్ పెయింటింగ్",
      "description": "ముఖ్య సాధన: రోలర్ స్ట్రోక్ సమతుల్యత, సరైన ఓవర్‌లాప్ మరియు రంగు కారకుండా అంచుల ఖచ్చితత్వం."
    },
    "skill-edge-painting": {
      "name": "అంచుల పెయింటింగ్",
      "description": "సీలింగ్ లైన్లు మరియు బోర్డర్ల వెంబడి బ్రష్ నియంత్రణతో స్పష్టమైన అంచులను గీయండి."
    },
    "skill-crack-filling": {
      "name": "పగుళ్లు పూడ్చడం",
      "description": "పుట్టీ నైఫ్‌తో పగుళ్లను పూడ్చి, పెయింటింగ్ కోసం ఉపరితలాన్ని నునుపుగా సిద్ధం చేయండి."
    },
    "skill-mandala-painting": {
      "name": "మండల పెయింటింగ్",
      "description": "డాటింగ్ టూల్స్‌తో ఖచ్చితమైన వృత్తాకార నమూనాలు మరియు చుక్కల అమరికను సాధన చేయండి."
    },
    "skill-canvas-painting": {
      "name": "కాన్వాస్ పెయింటింగ్",
      "description": "కాన్వాస్ బోర్డుపై బ్రష్ స్ట్రోక్స్ మరియు రంగుల కలయిక ద్వారా చిత్రకళను నేర్చుకోండి."
    },
    "skill-diy-home-decoration": {
      "name": "గృహ అలంకరణ కళ",
      "description": "గోడలపై స్టెన్సిల్స్ మరియు టేప్ ఉపయోగించి రేఖాగణిత డిజైన్లను రూపొందించండి."
    },
    "skill-straight-stitching": {
      "name": "స్ట్రెయిట్ స్టిచింగ్ (నేరు కుట్టు)",
      "description": "ఫ్యాబ్రిక్ లాగకుండా మార్జిన్ మార్క్ ప్రకారం సూదితో సరళరేఖలో కుట్టండి."
    },
    "skill-hemming": {
      "name": "హెమ్మింగ్ (అంచుల మడత)",
      "description": "దుస్తుల క్రింది అంచులను సమానంగా మడిచి సున్నితంగా కుట్టడం నేర్చుకోండి."
    },
    "skill-seam-alignment": {
      "name": "సీమ్ అమరిక",
      "description": "రెండు వస్త్ర భాగాలను కలిపి కుట్టేటప్పుడు అంచులు సరిగ్గా సమానంగా ఉండేలా చూడండి."
    },
    "skill-button-stitching": {
      "name": "బటన్ కుట్టడం",
      "description": "బటన్‌ను వస్త్రానికి గట్టిగా ఉండేలా క్రాస్-స్టిచ్ పద్ధతిలో కుట్టడం."
    },
    "skill-hand-embroidery": {
      "name": "చేతి ఎంబ్రాయిడరీ",
      "description": "ఫ్రెంచ్ నాట్, శాటిన్ స్టిచ్ మరియు కాండం కుట్టులతో వస్త్రాలపై డిజైన్లు చేయడం."
    },
    "skill-basic-clothing-repair": {
      "name": "దుస్తుల ప్రాథమిక మరమ్మత్తు",
      "description": "చిరిగిన కుట్లు సరిచేయడం మరియు అదృశ్య కుట్టుతో వస్త్రాలను బాగు చేయడం."
    },
    "skill-crochet-chain": {
      "name": "క్రోచెట్ ఫౌండేషన్ చైన్",
      "description": "సమాన బిగుతుతో ప్రాథమిక క్రోచెట్ చైన్ వేయడం నేర్చుకోండి."
    },
    "skill-single-crochet": {
      "name": "సింగిల్ క్రోచెట్",
      "description": "దట్టమైన మరియు బలమైన నేత కోసం సింగిల్ క్రోచెట్ పద్ధతిని సాధన చేయండి."
    },
    "skill-double-crochet": {
      "name": "డబుల్ క్రోచెట్",
      "description": "ఎత్తు కలిగిన కుట్లు వేయడానికి యార్న్ ఓవర్ మరియు లూప్ నియంత్రణ."
    },
    "skill-granny-square": {
      "name": "గ్రానీ స్క్వేర్",
      "description": "మూలల నిర్మాణం, క్లస్టర్ స్టిచెస్ మరియు చతురస్రాకార క్రోచెట్ నమూనా."
    },
    "skill-crochet-flower": {
      "name": "క్రోచెట్ పువ్వు",
      "description": "రేకులు మరియు అందమైన 3D క్రోచెట్ పువ్వుల రూపకల్పన."
    },
    "skill-crochet-bag": {
      "name": "క్రోచెట్ బ్యాగ్",
      "description": "బలమైన హ్యాండిల్స్ మరియు బేస్ కలిగిన క్రోచెట్ బ్యాగ్ తయారు చేయడం."
    },
    "skill-basic-amigurumi": {
      "name": "అమిగురుమి (బొమ్మల తయారీ)",
      "description": "మ్యాజిక్ రింగ్ మరియు గుండ్రటి క్రోచెట్ అల్లికతో బొమ్మలు చేయడం."
    },
    "skill-clay-kneading": {
      "name": "మట్టి పిసకడం (వెడ్జింగ్)",
      "description": "గాలి బుడగలు తొలగించి మట్టిని మెత్తగా సమానంగా మార్చే ప్రక్రియ."
    },
    "skill-clay-centering": {
      "name": "చక్రంపై మట్టిని సెంటర్ చేయడం",
      "description": "తిరిగే చక్రం మధ్యలో మట్టిని కదలకుండా సమతుల్యం చేయడం."
    },
    "skill-pot-shaping": {
      "name": "కుండ ఆకృతిని తీర్చిదిద్దడం",
      "description": "చేతి వేళ్ళ ఒత్తిడితో మట్టి గోడలను పైకి లేపి సమాన మందాన్ని ఇవ్వడం."
    },
    "skill-rim-shaping": {
      "name": "రిమ్ ఆకృతి",
      "description": "కుండ పైభాగాన్ని లేదా అంచును నునుపుగా సమానంగా చేయడం."
    },
    "skill-surface-smoothing": {
      "name": "ఉపరితలం నునుపు చేయడం",
      "description": "రిబ్ టూల్ సహాయంతో మట్టి ఉపరితలాన్ని నునుపుగా మార్చడం."
    },
    "skill-handle-making": {
      "name": "హ్యాండిల్ తయారీ",
      "description": "కప్పులకు లేదా పాత్రలకు పట్టుకునే పిడి తయారు చేసి గట్టిగా అతికించడం."
    },
    "skill-ceramic-painting": {
      "name": "సిరామిక్ పెయింటింగ్",
      "description": "మట్టి పాత్రలపై రంగులు మరియు మెరిసే గ్లేజ్ డిజైన్లు వేయడం."
    },
    "skill-face-cleansing": {
      "name": "ఫేస్ క్లెన్సింగ్ పద్ధతి",
      "description": "గుండ్రటి కదలికలతో ముఖాన్ని సున్నితంగా శుభ్రపరిచే సరైన పద్ధతి."
    },
    "skill-moisturizer-application": {
      "name": "మాయిశ్చరైజర్ రాయడం",
      "description": "పై దిశగా సున్నితంగా మర్దన చేస్తూ చర్మానికి తేమను అందించడం."
    },
    "skill-sunscreen-application": {
      "name": "సన్‌స్క్రీన్ అప్లికేషన్",
      "description": "రెండు వేళ్ళ కొలతతో ముఖం మరియు మెడపై సన్‌స్క్రీన్ సమంగా పూయడం."
    },
    "skill-face-mask-application": {
      "name": "ఫేస్ మాస్క్ వేయడం",
      "description": "బ్రష్‌తో కళ్ళ చుట్టూ కాకుండా ముఖంపై ఫేస్ ప్యాక్ సమంగా వేయడం."
    },
    "skill-foundation-application": {
      "name": "ఫౌండేషన్ బ్లెండింగ్",
      "description": "స్పాంజితో ముఖంపై ఫౌండేషన్‌ను సహజసిద్ధంగా బ్లెండ్ చేయడం."
    },
    "skill-concealer-application": {
      "name": "కన్సీలర్ అప్లికేషన్",
      "description": "కళ్ళ క్రింద నల్లటి వలయాలు మరియు మచ్చలను కవర్ చేసే ఖచ్చితమైన పద్ధతి."
    },
    "skill-eyeliner-application": {
      "name": "ఐలైనర్ అప్లికేషన్",
      "description": "స్థిరమైన చేతితో కళ్ళ అంచులకు సమానమైన వింగ్డ్ ఐలైనర్ వేయడం."
    },
    "skill-nail-polish-application": {
      "name": "నెయిల్ పాలిష్ అప్లికేషన్",
      "description": "మూడు స్ట్రోక్స్ పద్ధతితో గోళ్ళపై అందంగా నెయిల్ పాలిష్ వేయడం."
    },
    "skill-basic-nail-art": {
      "name": "ప్రాథమిక నెయిల్ ఆర్ట్",
      "description": "డాటింగ్ టూల్ మరియు బ్రష్‌తో గోళ్ళపై నమూనాలు మరియు పువ్వులు వేయడం."
    },
    "skill-hair-sectioning": {
      "name": "జుట్టు విభజన (సెక్షనింగ్)",
      "description": "దువ్వెన మరియు క్లిప్పులతో జుట్టును నాలుగు భాగాలుగా సమానంగా విభజించడం."
    },
    "skill-hair-braiding": {
      "name": "జడ అల్లడం (3-పాయల జడ)",
      "description": "మూడు సమాన పాయలుగా విభజించి సమాన బిగుతుతో అందంగా జడ అల్లడం."
    },
    "skill-blow-drying": {
      "name": "బ్లో-డ్రైయింగ్ పద్ధతి",
      "description": "రౌండ్ బ్రష్ మరియు డ్రైయర్‌తో జుట్టును చిక్కులు లేకుండా ఎండబెట్టడం."
    },
    "skill-basic-hair-styling": {
      "name": "ప్రాథమిక హెయిర్ స్టైలింగ్ (పోనీటైల్/ముడి)",
      "description": "నునుపైన పోనీటైల్ మరియు అందమైన ముడి వేసే పద్ధతి."
    },
    "skill-hair-curling": {
      "name": "జుట్టు కర్లింగ్",
      "description": "కర్లింగ్ ఐరన్‌తో ముఖానికి దూరంగా కర్ల్స్ చేస్తూ అందమైన వేవ్స్ చేయడం."
    },
    "skill-hair-straightening": {
      "name": "హెయిర్ స్ట్రెయిటెనింగ్",
      "description": "స్ట్రెయిట్‌నర్ సహాయంతో జుట్టును నిదానంగా స్ట్రెయిట్ చేయడం."
    },
    "skill-potting": {
      "name": "కుండీలో మొక్క నాటడం",
      "description": "డ్రైనేజీ రంధ్రాలు చూసుకుని వేర్ల చుట్టూ మట్టిని సరిగ్గా నింపడం."
    },
    "skill-seed-planting": {
      "name": "విత్తనాలు నాటడం",
      "description": "సరైన లోతులో విత్తనాలు నాటి నేలలో తేమను కాపాడటం."
    },
    "skill-soil-preparation": {
      "name": "మట్టి మిశ్రమం తయారీ",
      "description": "ఎరువు మరియు కోకోపీట్ కలిపి మొక్కల పెరుగుదలకు పోషక మట్టి సిద్ధం చేయడం."
    },
    "skill-pruning": {
      "name": "మొక్కల కత్తిరింపు (ప్రూనింగ్)",
      "description": "ఎండిన కొమ్మలను 45 డిగ్రీల కోణంలో కత్తిరించి కొత్త చిగుళ్ళను ప్రోత్సహించడం."
    },
    "skill-repotting": {
      "name": "మొక్కను పెద్ద కుండీలోకి మార్చడం",
      "description": "వేర్లను పాడుచేయకుండా పెద్ద కుండీలోకి మార్చే సురక్షిత పద్ధతి."
    },
    "skill-plant-propagation": {
      "name": "కొమ్మల ద్వారా మొక్కల ఉత్పత్తి",
      "description": "నోడ్ క్రింద కొమ్మను కత్తిరించి నీటిలో లేదా మట్టిలో వేర్లు రప్పించడం."
    },
    "skill-plant-support": {
      "name": "మొక్కలకు ఆధారం ఇవ్వడం",
      "description": "కాండం వంగిపోకుండా కర్రలతో సున్నితంగా కట్టి ఆధారం కల్పించడం."
    },
    "skill-knife-handling": {
      "name": "కత్తిని పట్టుకునే పద్ధతి",
      "description": "చేతి వేళ్ళు కోసుకోకుండా క్లా గ్రిప్ ద్వారా సురక్షితంగా కూరగాయలు కోయడం."
    },
    "skill-vegetable-chopping": {
      "name": "కూరగాయలు తరగడం",
      "description": "రాకింగ్ మోషన్ ద్వారా కూరగాయలను సమాన పరిమాణంలో ముక్కలుగా తరగడం."
    },
    "skill-dough-kneading": {
      "name": "పిండి పిసకడం",
      "description": "చేతి మడమలతో పిండిని సాగదీస్తూ మెత్తటి ముద్దగా సిద్ధం చేయడం."
    },
    "skill-dough-rolling": {
      "name": "చపాతీ లేదా పిండి రుద్దడం",
      "description": "రోలింగ్ పిన్‌తో మధ్య నుండి అంచుల వరకు సమానంగా గుండ్రంగా రుద్దడం."
    },
    "skill-cake-decoration": {
      "name": "కేక్ అలంకరణ",
      "description": "పైపింగ్ బ్యాగ్‌తో కేక్ మీద పువ్వులు మరియు అందమైన డిజైన్లు వేయడం."
    },
    "skill-food-plating": {
      "name": "ఆహార ప్లేటింగ్ & ప్రెజెంటేషన్",
      "description": "రెస్టారెంట్ శైలిలో రంగులు మరియు సాస్‌లతో ఆహారాన్ని అందంగా అమర్చడం."
    },
    "skill-measuring-marking": {
      "name": "కొలవడం మరియు మార్కింగ్ చేయడం",
      "description": "కొలత టేప్ మరియు రూలర్‌తో ఖచ్చితమైన 90 డిగ్రీల కోణంలో కొలతలు గుర్తించడం."
    },
    "skill-screw-fitting": {
      "name": "స్క్రూ బిగించడం",
      "description": "స్క్రూడ్రైవర్ జారకుండా సమాంతరంగా పెట్టి గట్టిగా బిగించడం."
    },
    "skill-furniture-assembly": {
      "name": "ఫర్నిచర్ అమరిక (అసెంబ్లీ)",
      "description": "సూచనల ప్రకారం ఫర్నిచర్ భాగాలను సరైన వరుసలో బిగించడం."
    },
    "skill-sanding": {
      "name": "శాండింగ్ (నునుపు చేయడం)",
      "description": "శాండ్‌పేపర్‌తో చెక్క ఉపరితలాన్ని పొరలు లేకుండా నునుపుగా రుద్దడం."
    },
    "skill-wall-hanging": {
      "name": "గోడకు ఫ్రేములు తగిలించడం",
      "description": "స్పిరిట్ లెవెల్ చూసుకుని గోడకు ఫోటో ఫ్రేములు సమాంతరంగా అమర్చడం."
    },
    "skill-cable-organization": {
      "name": "కేబుల్ నిర్వహణ",
      "description": "వైర్లను క్లిప్పులతో చిక్కులు లేకుండా క్రమపద్ధతిలో అమర్చడం."
    },
    "skill-gift-wrapping": {
      "name": "గిఫ్ట్ ప్యాకింగ్",
      "description": "కాగితపు అంచులను శుభ్రంగా మడిచి అందమైన రిబ్బన్‌తో ప్యాక్ చేయడం."
    },
    "skill-paper-flower-making": {
      "name": "కాగితపు పువ్వుల తయారీ",
      "description": "క్రేప్ పేపర్‌తో అందమైన గులాబీ మరియు అలంకరణ పువ్వులను రూపొందించడం."
    },
    "skill-origami": {
      "name": "ఒరిగామి (కాగితం మడత కళ)",
      "description": "ఖచ్చితమైన మడతల ద్వారా పక్షులు మరియు వివిధ ఆకృతులను చేయడం."
    },
    "skill-candle-decoration": {
      "name": "కొవ్వొత్తి అలంకరణ",
      "description": "ఎండిన పూలతో కొవ్వొత్తులను అందంగా అలంకరించే కళ."
    },
    "skill-resin-craft": {
      "name": "రెసిన్ క్రాఫ్ట్",
      "description": "రెసిన్ మిశ్రమాన్ని సిద్ధం చేసి బుడగలు లేకుండా కోస్టర్స్ తయారు చేయడం."
    },
    "skill-festive-decoration": {
      "name": "పండుగ అలంకరణ",
      "description": "తీగ ఫ్రేమ్‌పై ఆకులు మరియు పూలతో అందమైన అలంకరణ దండలు చేయడం."
    }
  }
},
  kn: {
  "common": {
    "appName": "SkillLens",
    "tagline": "ಕೈ ಕೌಶಲ್ಯಗಳಿಗೆ AI ತರಬೇತುದಾರ",
    "offlineNotice": "ಆಫ್‌ಲೈನ್ ಮೋಡ್ — ನಿಮ್ಮ ಸಾಧನಾ ಡೇಟಾ ಈ ಸಾಧನದಲ್ಲೇ ಉಳಿಯುತ್ತದೆ.",
    "home": "ಮುಖಪುಟ",
    "skills": "ಕೌಶಲ್ಯಗಳು",
    "practice": "ಸಾಧನೆ",
    "progress": "ಪ್ರಗತಿ",
    "profile": "ಪ್ರೊಫೈಲ್",
    "learn": "ಕಲಿಯಿರಿ",
    "startPractice": "ಸಾಧನೆ ಪ್ರಾರಂಭಿಸಿ",
    "continuePractice": "ಸಾಧನೆ ಮುಂದುವರಿಸಿ",
    "continueLearning": "ಕಲಿಯುವುದನ್ನು ಮುಂದುವರಿಸಿ",
    "resumeDrill": "ಡ್ರಿಲ್ ಪುನರಾರಂಭಿಸಿ",
    "back": "ಹಿಂದೆ",
    "next": "ಮುಂದೆ",
    "finish": "ಮುಗಿಸಿ",
    "skip": "ಬಿಟ್ಟುಬಿಡಿ",
    "save": "ಉಳಿಸಿ",
    "cancel": "ರದ್ದುಮಾಡಿ",
    "loading": "ಲೋಡ್ ಆಗುತ್ತಿದೆ...",
    "error": "ದೋಷ",
    "success": "ಯಶಸ್ವಿ",
    "retry": "ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ",
    "viewAll": "ಎಲ್ಲವನ್ನೂ ನೋಡಿ",
    "search": "ಹುಡುಕಿ",
    "filter": "ಫಿಲ್ಟರ್",
    "difficulty": "ಹಂತ",
    "duration": "ಅವಧಿ",
    "minutes": "ನಿಮಿಷಗಳು",
    "all": "ಎಲ್ಲಾ",
    "beginner": "ಆರಂಭಿಕ",
    "intermediate": "ಮಧ್ಯಮ",
    "advanced": "ಮುಂದುವರಿದ",
    "signOut": "ಸೈನ್ ಔಟ್",
    "signIn": "ಸೈನ್ ಇನ್",
    "signUp": "ಸೈನ್ ಅಪ್",
    "days": "ದಿನಗಳು",
    "streak": "ಸ್ಟ್ರೀಕ್",
    "sessions": "ಸೆಷನ್‌ಗಳು",
    "mastery": "ಪ್ರಾವೀಣ್ಯತೆ",
    "activeCourses": "ಸಕ್ರಿಯ ಕೋರ್ಸ್‌ಗಳು",
    "points": "ಅಂಕಗಳು",
    "featured": "ವಿಶೇಷ",
    "drills": "ಡ್ರಿಲ್ಸ್",
    "allSkills": "ಎಲ್ಲಾ ಕೌಶಲ್ಯಗಳು",
    "allCategories": "ಎಲ್ಲಾ ವರ್ಗಗಳು",
    "skillsFound": "ಕೌಶಲ್ಯಗಳು ಲಭ್ಯವಿವೆ",
    "noSkillsMatch": "ಯಾವುದೇ ಕೌಶಲ್ಯ ಹೊಂದಾಣಿಕೆಯಾಗಲಿಲ್ಲ.",
    "tools": "ಉಪಕರಣಗಳು",
    "materials": "ಸಾಮಗ್ರಿಗಳು",
    "steps": "ಹಂತಗಳು",
    "safety": "ಸುರಕ್ಷತೆ",
    "tips": "ಸಲಹೆಗಳು",
    "close": "ಮುಚ್ಚಿ",
    "done": "ಆಯಿತು",
    "confirm": "ಖಚಿತಪಡಿಸಿ",
    "delete": "ಅಳಿಸಿ",
    "edit": "ತಿದ್ದಿ",
    "seconds": "ಸೆಕೆಂಡುಗಳು"
  },
  "nav": {
    "home": "ಮುಖಪುಟ",
    "skills": "ಕೌಶಲ್ಯಗಳು",
    "practice": "ಸಾಧನೆ",
    "progress": "ಪ್ರಗತಿ",
    "profile": "ಪ್ರೊಫೈಲ್",
    "learn": "ಕಲಿಯಿರಿ",
    "signOut": "ಸೈನ್ ಔಟ್"
  },
  "auth": {
    "signIn": "ಸೈನ್ ಇನ್",
    "signUp": "ಸೈನ್ ಅಪ್",
    "email": "ಇಮೇಲ್",
    "password": "ಪಾಸ್‌ವರ್ಡ್",
    "confirmPassword": "ಪಾಸ್‌ವರ್ಡ್ ದೃಢೀಕರಿಸಿ",
    "forgotPassword": "ಪಾಸ್‌ವರ್ಡ್ ಮರೆತಿರಾ?",
    "createAccount": "ಖಾತೆ ರಚಿಸಿ",
    "alreadyHaveAccount": "ಈಗಾಗಲೇ ಖಾತೆ ಇದೆಯೇ?",
    "dontHaveAccount": "ಖಾತೆ ಇಲ್ಲವೇ?",
    "invalidEmail": "ದಯವಿಟ್ಟು ಮಾನ್ಯವಾದ ಇಮೇಲ್ ವಿಳಾಸವನ್ನು ನಮೂದಿಸಿ.",
    "passwordRequired": "ದಯವಿಟ್ಟು ನಿಮ್ಮ ಪಾಸ್‌ವರ್ಡ್ ನಮೂದಿಸಿ.",
    "passwordMismatch": "ಪಾಸ್‌ವರ್ಡ್‌ಗಳು ಹೊಂದಿಕೆಯಾಗುತ್ತಿಲ್ಲ.",
    "loginSuccess": "ಸೈನ್ ಇನ್ ಯಶಸ್ವಿಯಾಗಿದೆ!",
    "accountCreated": "ಖಾತೆ ಯಶಸ್ವಿಯಾಗಿ ರಚನೆಯಾಗಿದೆ!",
    "logout": "ಸೈನ್ ಔಟ್",
    "sessionMessages": "ಯಶಸ್ವಿಯಾಗಿ ಸೈನ್ ಇನ್ ಆಗಿದೆ.",
    "welcomeBack": "ಮತ್ತೆ ಸ್ವಾಗತ",
    "signInSubtitle": "ನಿಮ್ಮ ಕೌಶಲ್ಯಗಳನ್ನು ಕಲಿಯಲು ಮತ್ತು ಸುಧಾರಿಸಲು ಮುಂದುವರಿಯಿರಿ.",
    "createAccountSubtitle": "ನೈಜ-ಸಮಯದ AI ಮಾರ್ಗದರ್ಶನದೊಂದಿಗೆ ಪ್ರಾಯೋಗಿಕ ಕೌಶಲ್ಯಗಳನ್ನು ಕಲಿಯಲು SkillLens ಗೆ ಸೇರಿ.",
    "fullName": "ಪೂರ್ಣ ಹೆಸರು",
    "fullNamePlaceholder": "ಉದಾ. ಅಲೆಕ್ಸ್ ವ್ಯಾನ್ಸ್",
    "emailPlaceholder": "you@example.com",
    "passwordPlaceholder": "••••••••",
    "confirmPasswordPlaceholder": "••••••••",
    "quickDemo": "ಡೆಮೊ ಲಾಗಿನ್",
    "resetPassword": "ಪಾಸ್‌ವರ್ಡ್ ಮರುಹೊಂದಿಸಿ",
    "resetPasswordSubtitle": "ಪಾಸ್‌ವರ್ಡ್ ಮರುಹೊಂದಿಸುವ ಸೂಚನೆಗಳನ್ನು ಸ್ವೀಕರಿಸಲು ಇಮೇಲ್ ನಮೂದಿಸಿ.",
    "sendResetLink": "ಸೂಚನೆಗಳನ್ನು ಕಳುಹಿಸಿ",
    "backToSignIn": "ಸೈನ್ ಇನ್‌ಗೆ ಹಿಂತಿರುಗಿ",
    "resetSuccessMessage": "ಪಾಸ್‌ವರ್ಡ್ ಮರುಹೊಂದಿಸುವ ಸೂಚನೆಗಳನ್ನು ಕಳುಹಿಸಲಾಗಿದೆ.",
    "passwordMinLength": "ಪಾಸ್‌ವರ್ಡ್ ಕನಿಷ್ಠ 6 ಅಕ್ಷರಗಳನ್ನು ಹೊಂದಿರಬೇಕು.",
    "fillAllFields": "ದಯವಿಟ್ಟು ಎಲ್ಲಾ ಅಗತ್ಯ ವಿವರಗಳನ್ನು ಭರ್ತಿ ಮಾಡಿ.",
    "loginFailed": "ಇಮೇಲ್ ಅಥವಾ ಪಾಸ್‌ವರ್ಡ್ ತಪ್ಪಾಗಿದೆ.",
    "registerFailed": "ಖಾತೆ ರಚಿಸಲು ವಿಫಲವಾಗಿದೆ. ದಯವಿಟ್ಟು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ."
  },
  "landing": {
    "tagline": "ಕೈ ಕೌಶಲ್ಯಗಳ ಕಲಿಕಾ ಅಪ್ಲಿಕೇಶನ್",
    "badge": "ಇಂಟರಾಕ್ಟಿವ್ ಸಾಧನಾ ಕೋಚ್",
    "headline": "ನೈಜ-ಸಮಯದ AI ಮಾರ್ಗದರ್ಶನದೊಂದಿಗೆ ಕೈ ಕೌಶಲ್ಯಗಳಲ್ಲಿ ಪರಿಣತಿ ಪಡೆಯಿರಿ",
    "subheadline": "ಫೋನ್ ಕ್ಯಾಮೆರಾ ಹೊಂದಿಸಿ. SkillLens ನಿಮ್ಮ ಕೋನಗಳು, ಚಲನೆಗಳು ಮತ್ತು ತಂತ್ರಗಳನ್ನು ವಿಶ್ಲೇಷಿಸಿ ತಕ್ಷಣ ಮಾರ್ಗದರ್ಶನ ನೀಡುತ್ತದೆ.",
    "getStarted": "ಉಚಿತವಾಗಿ ಪ್ರಾರಂಭಿಸಿ",
    "viewSkills": "67 ಕೌಶಲ್ಯಗಳನ್ನು ಅನ್ವೇಷಿಸಿ",
    "whyTitle": "ನೈಜ ಕೌಶಲ್ಯಗಳಿಗಾಗಿ ವಿನ್ಯಾಸಗೊಳಿಸಲಾಗಿದೆ",
    "whyDesc": "ಪೇಂಟಿಂಗ್, ಟೈಲರಿಂಗ್, ಕರಕುಶಲ ಮತ್ತು ಮೇಕಪ್ ವರೆಗೆ - ತಪ್ಪುಗಳು ಅಭ್ಯಾಸವಾಗುವ ಮೊದಲೇ ಸರಿಪಡಿಸಿಕೊಳ್ಳಿ.",
    "previewTitle": "ಪ್ರಮುಖ ಕರಕುಶಲಗಳನ್ನು ಅನ್ವೇಷಿಸಿ",
    "previewSubtitle": "AI ದೃಷ್ಟಿ ವಿಶ್ಲೇಷಣೆ ಮತ್ತು ಹಂತ-ಹಂತದ ಮಾರ್ಗದರ್ಶನದೊಂದಿಗೆ ಪ್ರಾಯೋಗಿಕ ಮಾಡ್ಯೂಲ್‌ಗಳು.",
    "features": {
      "watch": "ಫೋನ್ ಕ್ಯಾಮೆರಾ ಮಾರ್ಗದರ್ಶನ",
      "watchDesc": "ಕೈಗಳು ಚೌಕಟ್ಟಿನಲ್ಲಿರುವಂತೆ ಫೋನ್ ಅನ್ನು ಸ್ಥಿರವಾಗಿ ಇರಿಸಿ.",
      "correct": "ತ್ವರಿತ ಸಲಹೆಗಳು",
      "correctDesc": "ಕೋನ ಮತ್ತು ತಂತ್ರದ ಮೇಲೆ ತಕ್ಷಣದ ತಿದ್ದುಪಡಿಗಳನ್ನು ಪಡೆಯಿರಿ.",
      "track": "ಸ್ಪಷ್ಟ ಪ್ರಗತಿ",
      "trackDesc": "ಪ್ರತಿ ಅಭ್ಯಾಸದೊಂದಿಗೆ ನಿಮ್ಮ ತಂತ್ರದ ಸ್ಕೋರ್ ಹೆಚ್ಚಿಸಿಕೊಳ್ಳಿ."
    }
  },
  "onboarding": {
    "step1Title": "1. ಯಾವುದೇ ಕರಕುಶಲ ಕೌಶಲ್ಯವನ್ನು ಆಯ್ಕೆಮಾಡಿ",
    "step1Desc": "ಪೇಂಟಿಂಗ್, ಟೈಲರಿಂಗ್, ಕುಂಬಾರಿಕೆ, ಅಡುಗೆ ಮತ್ತು ಕರಕುಶಲಗಳ 67 ಕೌಶಲ್ಯಗಳಿಂದ ಆರಿಸಿ.",
    "step2Title": "2. ಫೋನ್ ಕ್ಯಾಮೆರಾ ಹೊಂದಿಸಿ",
    "step2Desc": "ನಿಮ್ಮ ಕೈಗಳು ಮತ್ತು ಉಪಕರಣಗಳು ಚೌಕಟ್ಟಿನಲ್ಲಿರುವಂತೆ ಫೋನ್ ಅನ್ನು ಸ್ಟ್ಯಾಂಡ್‌ನಲ್ಲಿರಿಸಿ.",
    "step3Title": "3. ಅಭ್ಯಾಸ ಮಾಡಿ ಮತ್ತು ಸಲಹೆಗಳನ್ನು ಪಡೆಯಿರಿ",
    "step3Desc": "SkillLens ನಿಮ್ಮ ಚಲನೆ ಮತ್ತು ನಿಖರತೆಯನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಿ ತರಬೇತಿ ನೀಡುತ್ತದೆ.",
    "next": "ಮುಂದೆ",
    "back": "ಹಿಂದೆ",
    "finish": "ತರಬೇತಿ ಪ್ರಾರಂಭಿಸಿ",
    "skip": "ಮುಖಪುಟಕ್ಕೆ ಹೋಗಿ"
  },
  "home": {
    "greetingMorning": "ಶುಭೋದಯ, {{name}}",
    "greetingDay": "ನಮಸ್ಕಾರ, {{name}}",
    "greetingEvening": "ಶುಭ ಸಂಜೆ, {{name}}",
    "whatToLearn": "ಇಂದು ನೀವು ಏನನ್ನು ಕಲಿಯಲು ಬಯಸುತ್ತೀರಿ?",
    "streakLabel": "ದೈನಂದಿನ ಸ್ಟ್ರೀಕ್",
    "daysStreak": "ದಿನಗಳು ಸಕ್ರಿಯ",
    "daysActive": "ದಿನಗಳು",
    "readinessScore": "ಒಟ್ಟಾರೆ ತಂತ್ರದ ಸ್ಕೋರ್",
    "overallReadiness": "ಒಟ್ಟಾರೆ ಸಿದ್ಧತೆಯ ಸ್ಕೋರ್",
    "scoreSubtitle": "ಕ್ಯಾಮೆರಾ ತಂತ್ರದ ತಪಾಸಣೆಯ ಆಧಾರದ ಮೇಲೆ",
    "continuePractice": "ಸಾಧನೆ ಮುಂದುವರಿಸಿ",
    "continueLearning": "ಕಲಿಯುವುದನ್ನು ಮುಂದುವರಿಸಿ",
    "resumeCta": "ಡ್ರಿಲ್ ಪುನರಾರಂಭಿಸಿ",
    "recommendedSkills": "ಶಿಫಾರಸು ಮಾಡಲಾದ ಡ್ರಿಲ್‌ಗಳು",
    "recommendedSubtitle": "ಸ್ನಾಯು ಸ್ಮರಣೆಯನ್ನು ಬೆಳೆಸಲು ಅಗತ್ಯವಾದ ಕೈ ಕೌಶಲ್ಯಗಳು",
    "recentFeedback": "ಇತ್ತೀಚಿನ ಕೋಚ್ ಸಲಹೆಗಳು",
    "latestInsights": "ಇತ್ತೀಚಿನ AI ಒಳನೋಟಗಳು",
    "noRecentFeedback": "ಇನ್ನೂ ಯಾವುದೇ ಸೆಷನ್ ಪೂರ್ಣಗೊಂಡಿಲ್ಲ. ಕೌಶಲ್ಯವನ್ನು ಆಯ್ಕೆಮಾಡಿ!",
    "exploreCategories": "ವರ್ಗಗಳನ್ನು ಅನ್ವೇಷಿಸಿ",
    "exploreCategoriesSubtitle": "10 ವಿಭಾಗಗಳಲ್ಲಿ ಸಮಗ್ರ ಕಲಿಕೆ",
    "viewAll": "ಎಲ್ಲಾ 67 ಕೌಶಲ್ಯಗಳನ್ನು ವೀಕ್ಷಿಸಿ",
    "quickSummary": "ಸೆಷನ್ ಸಾರಾಂಶ",
    "viewFullHistory": "ಪೂರ್ಣ ಇತಿಹಾಸ ವೀಕ್ಷಿಸಿ →",
    "score": "ಸ್ಕೋರ್",
    "sessionsRecorded": "ಸೆಷನ್‌ಗಳು",
    "skillsCount": "ಕೌಶಲ್ಯಗಳು",
    "mastery": "ಪ್ರಾವೀಣ್ಯತೆ"
  },
  "skills": {
    "title": "ಕೌಶಲ್ಯ ಲೈಬ್ರರಿ",
    "subtitle": "ಹಂತ-ಹಂತದ ಮಾಸ್ಟರ್‌ಕ್ಲಾಸ್‌ಗಳು ಮತ್ತು ಕ್ಯಾಮೆರಾ ತಂತ್ರದ ಡ್ರಿಲ್‌ಗಳನ್ನು ಅನ್ವೇಷಿಸಿ.",
    "searchPlaceholder": "ಕೌಶಲ್ಯಗಳು, ಉಪಕರಣಗಳನ್ನು ಹುಡುಕಿ...",
    "allCategories": "ಎಲ್ಲಾ ವರ್ಗಗಳು",
    "allSkillsCount": "ಎಲ್ಲಾ ಕೌಶಲ್ಯಗಳು ({{count}})",
    "skillsFound": "ಕೌಶಲ್ಯಗಳು ಲಭ್ಯವಿವೆ",
    "noSkillsMatch": "ಯಾವುದೇ ಕೌಶಲ್ಯ ಹೊಂದಾಣಿಕೆಯಾಗಲಿಲ್ಲ.",
    "difficulty": "ಹಂತ",
    "duration": "ಅವಧಿ",
    "filterBy": "ಫಿಲ್ಟರ್",
    "featured": "ವಿಶೇಷ",
    "browseCatalog": "67 ಪ್ರಾಯೋಗಿಕ ಟ್ಯುಟೋರಿಯಲ್‌ಗಳನ್ನು ನೋಡಿ",
    "all": "ಎಲ್ಲಾ"
  },
  "skillDetail": {
    "difficulty": "ಹಂತದ ಮಟ್ಟ",
    "duration": "ಡ್ರಿಲ್ ಅವಧಿ",
    "toolsNeeded": "ಅಗತ್ಯ ಉಪಕರಣಗಳು & ಸಾಮಗ್ರಿಗಳು",
    "stepByStep": "ತಂತ್ರದ ಹಂತಗಳು",
    "safetyFirst": "ಸುರಕ್ಷತಾ ಸಲಹೆಗಳು",
    "cameraTips": "ಕ್ಯಾಮೆರಾ ನಿಯೋಜನೆ ಸಲಹೆಗಳು",
    "observableMetrics": "ಮೌಲ್ಯಮಾಪನ ಮಾನದಂಡಗಳು",
    "personalBest": "ವೈಯಕ್ತಿಕ ದಾಖಲೆ",
    "noScoreYet": "ಇನ್ನೂ ಯಾವುದೇ ಅಭ್ಯಾಸ ದಾಖಲಾಗಿಲ್ಲ",
    "startPractice": "ಸಾಧನೆ ಪ್ರಾರಂಭಿಸಿ",
    "learnStepByStep": "ಹಂತ-ಹಂತವಾಗಿ ಕಲಿಯಿರಿ",
    "skincareDisclaimer": "ಗಮನಿಸಿ: SkillLens ಅಪ್ಲಿಕೇಶನ್ ತಂತ್ರವನ್ನು ಮಾತ್ರ ತರಬೇತಿ ನೀಡುತ್ತದೆ. ಇದು ಯಾವುದೇ ವೈದ್ಯಕೀಯ ಸಲಹೆಯಲ್ಲ.",
    "videoAvailable": "ವಿಡಿಯೋ ಪಾಠ ಲಭ್ಯವಿದೆ",
    "videoAvailableDesc": "ನಿಜವಾದ ತಂತ್ರ ಮತ್ತು ಹಂತಗಳನ್ನು ಒಳಗೊಂಡಿದೆ",
    "readyToTest": "ನಿಮ್ಮ ತಂತ್ರವನ್ನು ಪರೀಕ್ಷಿಸಲು ಸಿದ್ಧರಿದ್ದೀರಾ?",
    "readyToTestDesc": "ನೈಜ-ಸಮಯದ ತಪಾಸಣೆಗಾಗಿ ನಿಮ್ಮ ಕ್ಯಾಮೆರಾವನ್ನು ಬಳಸಿ.",
    "mastery": "ಪ್ರಾವೀಣ್ಯತೆ",
    "whatYouNeed": "ನಿಮಗೆ ಬೇಕಾದುದು",
    "overview": "ಕೌಶಲ್ಯ ಅವಲೋಕನ"
  },
  "learning": {
    "lesson": "ಪಾಠ",
    "tutorial": "ಕೌಶಲ್ಯ ಟ್ಯುಟೋರಿಯಲ್",
    "stepProgress": "ಪ್ರಗತಿ: ಹಂತ {{current}} / {{total}}",
    "step": "ಹಂತ {{current}}",
    "techniqueNote": "ತಂತ್ರದ ಟಿಪ್ಪಣಿ",
    "whatYouNeed": "ನಿಮಗೆ ಬೇಕಾದುದು",
    "commonMistakes": "ಸಾಮಾನ್ಯ ತಪ್ಪುಗಳು",
    "safetyAndWorkspace": "ಸುರಕ್ಷತೆ & ಕಾರ್ಯಕ್ಷೇತ್ರ",
    "previousStep": "ಹಿಂದಿನ ಹಂತ",
    "nextStep": "ಮುಂದಿನ ಹಂತ",
    "startPractice": "ಸಾಧನೆ ಪ್ರಾರಂಭಿಸಿ",
    "readyToTest": "ತಂತ್ರವನ್ನು ಪರೀಕ್ಷಿಸಲು ಸಿದ್ಧರಿದ್ದೀರಾ?",
    "readyToTestDesc": "ನೈಜ-ಸಮಯದ ಪ್ರತಿಕ್ರಿಯೆಗಾಗಿ ಕ್ಯಾಮೆರಾ ಬಳಸಿ.",
    "openStudio": "ಸಾಧನಾ ಸ್ಟುಡಿಯೋ ತೆರೆಯಿರಿ"
  },
  "video": {
    "lessonTitle": "ವಿಡಿಯೋ ಪಾಠ",
    "watchVideo": "ವಿಡಿಯೋ ವೀಕ್ಷಿಸಿ",
    "videoUnavailable": "ವಿಡಿಯೋ ಲಭ್ಯವಿಲ್ಲ",
    "videoLoading": "ವಿಡಿಯೋ ಲೋಡ್ ಆಗುತ್ತಿದೆ...",
    "videoCompleted": "ವಿಡಿಯೋ ಮುಕ್ತಾಯಗೊಂಡಿದೆ",
    "continue": "ಮುಂದುವರಿಯಿರಿ",
    "previous": "ಹಿಂದಿನ",
    "next": "ಮುಂದಿನ",
    "markAsComplete": "ಪೂರ್ಣಗೊಂಡಿದೆ ಎಂದು ಗುರುತಿಸಿ",
    "startPractice": "ಸಾಧನೆ ಪ್ರಾರಂಭಿಸಿ",
    "markAsWatched": "ವೀಕ್ಷಿಸಲಾಗಿದೆ ಎಂದು ಗುರುತಿಸಿ",
    "openInYouTube": "ಯೂಟ್ಯೂಬ್‌ನಲ್ಲಿ ನೇರವಾಗಿ ವೀಕ್ಷಿಸಿ",
    "fallbackMessage": "ವಿಡಿಯೋ ಲೋಡ್ ಆಗಲಿಲ್ಲ. ದಯವಿಟ್ಟು ಕೆಳಗಿನ ಹಂತಗಳನ್ನು ಅನುಸರಿಸಿ.",
    "demonstration": "ವಿಡಿಯೋ ಪ್ರಾತ್ಯಕ್ಷಿಕೆ",
    "noticeEn": "ಇಂಗ್ಲಿಷ್ ವಿಡಿಯೋ",
    "noticeHi": "ಇಂಗ್ಲಿಷ್ ವಿಡಿಯೋ • ಕೆಳಗೆ ಕನ್ನಡ ಸೂಚನೆಗಳು",
    "noticeTe": "ಇಂಗ್ಲಿಷ್ ವಿಡಿಯೋ • ಕೆಳಗೆ ಕನ್ನಡ ಸೂಚನೆಗಳು"
  },
  "practice": {
    "simulatedBadge": "ಸಿಮ್ಯುಲೇಟೆಡ್ AI ವಿಷನ್ ಸಕ್ರಿಯ",
    "simulatedNotice": "ಸಿಮ್ಯುಲೇಶನ್ ಡೆಮೊ: MockVisionAnalyzer ಮೂಲಕ ತಂತ್ರದ ಪ್ರತಿಕ್ರಿಯೆಯನ್ನು ಪ್ರದರ್ಶಿಸಲಾಗಿದೆ.",
    "connectingCamera": "ಕ್ಯಾಮೆರಾಗೆ ಸಂಪರ್ಕಿಸಲಾಗುತ್ತಿದೆ...",
    "cameraAccessDenied": "ಕ್ಯಾಮೆರಾ ಲಭ್ಯವಿಲ್ಲ ಅಥವಾ ಅನುಮತಿ ನಿರಾಕರಿಸಲಾಗಿದೆ.",
    "enableCameraFallback": "ಸಿಮ್ಯುಲೇಟೆಡ್ ಕ್ಯಾಮೆರಾ ಸಕ್ರಿಯವಾಗಿದೆ.",
    "useSimulatedCamera": "ಸಿಮ್ಯುಲೇಟೆಡ್ ಕ್ಯಾಮೆರಾ ಬಳಸಿ",
    "liveTechniqueGuidance": "ಲೈವ್ AI ಮಾರ್ಗದರ್ಶನ",
    "trackingActive": "ಕೈ & ಉಪಕರಣಗಳ ಟ್ರ್ಯಾಕಿಂಗ್ ಸಕ್ರಿಯ",
    "start": "ಪ್ರಾರಂಭಿಸಿ",
    "pause": "ವಿರಾಮ",
    "resume": "ಪುನರಾರಂಭಿಸಿ",
    "finishSession": "ಸಾಧನೆ ಮುಗಿಸಿ",
    "elapsed": "ಕಳೆದ ಸಮಯ",
    "sessionPaused": "ಸಾಧನೆ ವಿರಾಮದಲ್ಲಿದೆ",
    "cameraTips": "ಕ್ಯಾಮೆರಾ ನಿಯೋಜನೆ ಸಲಹೆಗಳು",
    "targetMetrics": "ಮೌಲ್ಯಮಾಪನ ಮಾನದಂಡಗಳು",
    "coachNotes": "ಕೋಚ್ ಸಲಹೆಗಳು",
    "visionStatus": "ವಿಷನ್ ಸ್ಥಿತಿ",
    "requestingCamera": "ಕ್ಯಾಮೆರಾ ಅನುಮತಿ ಕೇಳಲಾಗುತ್ತಿದೆ...",
    "grantCameraPrompt": "SkillLens ನಿಮ್ಮ ತಂತ್ರವನ್ನು ವಿಶ್ಲೇಷಿಸಲು ಕ್ಯಾಮೆರಾ ಅನುಮತಿ ನೀಡಿ.",
    "switchSimulated": "ಸಿಮ್ಯುಲೇಟೆಡ್ ಫೀಡ್ ಬಳಸಿ",
    "retryCamera": "ಕ್ಯಾಮೆರಾವನ್ನು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ",
    "keepHandsInFrame": "ಎರಡೂ ಕೈಗಳನ್ನು ಕ್ಯಾಮೆರಾ ಚೌಕಟ್ಟಿನಲ್ಲಿಯೇ ಇರಿಸಿ.",
    "adjustLighting": "ಕೈಗಳು ಸ್ಪಷ್ಟವಾಗಿ ಕಾಣುವಂತೆ ಬೆಳಕನ್ನು ಸರಿಹೊಂದಿಸಿ.",
    "sufficientEvidence": "ದೃಶ್ಯ ಪುರಾವೆ ದಾಖಲಾಗಿದೆ",
    "incompleteObservation": "ಅಪೂರ್ಣ ವೀಕ್ಷಣೆ"
  },
  "feedback": {
    "moveSlower": "ಸ್ಥಿರವಾದ ಆಕಾರಕ್ಕಾಗಿ ನಿಮ್ಮ ಕೈ ಚಲನೆಯನ್ನು ನಿಧಾನಗೊಳಿಸಿ.",
    "consistentPressure": "ಸ್ಟ್ರೋಕ್‌ಗಳ ಉದ್ದಕ್ಕೂ ಸಮಾನ ಒತ್ತಡವನ್ನು ಕಾಪಾಡಿಕೊಳ್ಳಲಾಗಿದೆ.",
    "firmFooting": "ಸ್ಥಿರತೆಗಾಗಿ ಎರಡೂ ಪಾದಗಳನ್ನು ದೃಢವಾಗಿ ನೆಲದಲ್ಲಿರಿಸಿ.",
    "goodAnchor": "ಕೈಯ ಸ್ಥಿರ ಹಿಡಿತ ಉತ್ತಮ ಸ್ಥಾನವನ್ನು ಸೃಷ್ಟಿಸಿದೆ.",
    "straightPath": "ಮಾರ್ಗದರ್ಶಿ ರೇಖೆಯೊಳಗೆ ಸ್ವಚ್ಛವಾದ ನೇರ ರೇಖೆ.",
    "relaxGrip": "ಕೈ ಆಯಾಸ ತಡೆಯಲು ಹಿಡಿತವನ್ನು ಸ್ವಲ್ಪ ಸಡಿಲಗೊಳಿಸಿ.",
    "evenSpacing": "ಅಂತರಗಳ ನಡುವೆ ಸಮಾನ ಅಂತರ ಕಾಯ್ದುಕೊಳ್ಳಲಾಗಿದೆ.",
    "smoothTransition": "ಚಲನೆಗಳ ನಡುವೆ ಮೃದುವಾದ ಬದಲಾವಣೆ.",
    "steadyCadence": "ಲಯಬದ್ಧತೆ ಸ್ಥಿರವಾಗಿದೆ ಮತ್ತು ಉತ್ತಮ ವ್ಯಾಪ್ತಿಯಲ್ಲಿದೆ.",
    "adjustAngle": "ಮೇಲ್ಮೈಗೆ ಲಂಬವಾಗಿರುವಂತೆ ಉಪಕರಣದ ಕೋನವನ್ನು ಹೊಂದಿಸಿ.",
    "maintainTension": "ಎಳೆಗಳ ಮೇಲೆ ಸಮತೋಲಿತ ಬಿಗಿತವನ್ನು ಕಾಪಾಡಿಕೊಳ್ಳಿ.",
    "watchEdges": "ಅಂಚುಗಳು ಮೀರಿ ಹೋಗದಂತೆ ಗಡಿಗಳನ್ನು ಗಮನಿಸಿ.",
    "tooDark": "ಬೆಳಕು ತುಂಬಾ ಕಡಿಮೆಯಾಗಿದೆ. ಕೈಗಳು ಕಾಣುವಂತೆ ಕೊಠಡಿಯ ಬೆಳಕನ್ನು ಸರಿಹೊಂದಿಸಿ.",
    "keepHandsInFrame": "ಎರಡೂ ಕೈಗಳನ್ನು ಕ್ಯಾಮೆರಾ ಚೌಕಟ್ಟಿನಲ್ಲಿಯೇ ಇರಿಸಿ.",
    "adjustCameraSubject": "ಕೆಲಸದ ಪ್ರದೇಶ ಕಾಣುವಂತೆ ಕ್ಯಾಮೆರಾ ಹೊಂದಿಸಿ.",
    "workspaceReady": "ಕೆಲಸದ ಸ್ಥಳ ಸಿದ್ಧವಾಗಿದೆ. ತಂತ್ರ ವೀಕ್ಷಿಸಲು ಸಾಧನೆ ಪ್ರಾರಂಭಿಸಿ.",
    "keepPracticingAWhile": "ಮೌಲ್ಯಮಾಪನ ಮಾಡಲು ಇನ್ನೂ ಕೆಲವು ಸೆಕೆಂಡುಗಳ ಕಾಲ ಸಾಧನೆ ಮುಂದುವರಿಸಿ.",
    "observingTechnique": "ನಿಮ್ಮ ತಂತ್ರವನ್ನು ಗಮನಿಸಲಾಗುತ್ತಿದೆ... ಸ್ಥಿರ ವೇಗವನ್ನು ಕಾಪಾಡಿಕೊಳ್ಳಿ.",
    "handMovementConsistent": "ಕೈ ಚಲನೆಗಳು ಸ್ಥಿರವಾಗಿವೆ. ಅಭ್ಯಾಸದ ಲಯವನ್ನು ಮುಂದುವರಿಸಿ.",
    "braidHandMovement": "ಕೈಗಳು ಮತ್ತು ಕೂದಲು ಚೌಕಟ್ಟಿನಲ್ಲಿವೆ. ಜಡೆ ಹೆಣೆಯುವುದನ್ನು ಪ್ರಾರಂಭಿಸಿ.",
    "braidMoreSeconds": "ಇನ್ನೂ ಕೆಲವು ಸೆಕೆಂಡುಗಳ ಕಾಲ ಜಡೆ ಹೆಣೆಯಿರಿ.",
    "braidAlternating": "ಕೈ ಚಲನೆಗಳು ಸ್ಥಿರವಾಗಿವೆ. ಪರ್ಯಾಯ ಮಾದರಿಯನ್ನು ಮುಂದುವರಿಸಿ.",
    "braidSteadyTension": "ಕೈ ಸ್ಥಾನ ವೀಕ್ಷಿಸಲಾಗುತ್ತಿದೆ. ಮೂರು ಎಳೆಗಳಲ್ಲಿ ಸಮಾನ ಬಿಗಿತವನ್ನು ಕಾಪಾಡಿಕೊಳ್ಳಿ.",
    "solidCoverage": "ಮೇಲ್ಮೈ ಮೇಲೆ ಏಕರೂಪದ ಬಣ್ಣದ ವ್ಯಾಪ್ತಿ.",
    "goodMPattern": "ಗೆರೆಗಳಿಲ್ಲದೆ ಉತ್ತಮ ನಿರಂತರ ಮಾದರಿ.",
    "stayWithinTape": "ಟೇಪ್ ಗಡಿಯೊಳಗೆ ಸರಿಯಾಗಿ ಕೆಲಸ ಮಾಡಲಾಗಿದೆ.",
    "backrollLighter": "ಹೊಳಪು ಸಮತಟ್ಟಾಗಿಸಲು ಕೊನೆಯ ರೋಲ್ ಅನ್ನು ಹಗುರವಾಗಿ ಚಲಾಯಿಸಿ.",
    "goodFingerPlacement": "ಕೆಲಸದ ಅಂಚಿನಿಂದ ಬೆರಳುಗಳ ಸುರಕ್ಷಿತ ಅಂತರ.",
    "evenLayer": "ಅಂಚುಗಳಲ್ಲಿ ಶೇಖರಣೆಯಾಗದೆ ಸಮಾನವಾದ ಪದರ."
  },
  "results": {
    "sessionSummary": "ಸಾಧನೆ ಪೂರ್ಣಗೊಂಡಿದೆ!",
    "practiceComplete": "ಸಾಧನೆ ಮುಕ್ತಾಯ",
    "techniqueSummary": "ತಂತ್ರದ ಸಾರಾಂಶ",
    "incompleteObservation": "ಅಪೂರ್ಣ ವೀಕ್ಷಣೆ",
    "visualEvidenceRecorded": "ದೃಶ್ಯ ಪುರಾವೆ ದಾಖಲಾಗಿದೆ",
    "formScore": "ತಂತ್ರದ ಮೌಲ್ಯಮಾಪನ ಸ್ಕೋರ್",
    "techniqueScore": "ಒಟ್ಟಾರೆ ತಂತ್ರದ ಸ್ಕೋರ್",
    "metricsTitle": "ಕಾರ್ಯಕ್ಷಮತೆಯ ವಿವರಣೆ",
    "strengthsTitle": "ಉತ್ತಮ ಅಂಶಗಳು",
    "improvementsTitle": "ಸುಧಾರಿಸಬೇಕಾದ ಅಂಶಗಳು",
    "safetyTitle": "ಸುರಕ್ಷತೆ & ಭಂಗಿ ಸಲಹೆಗಳು",
    "practiceAgain": "ಮತ್ತೆ ಸಾಧನೆ ಮಾಡಿ",
    "viewProgress": "ಪೂರ್ಣ ಪ್ರಗತಿ ನೋಡಿ",
    "home": "ಮುಖಪುಟಕ್ಕೆ ಹಿಂತಿರುಗಿ",
    "savedLocally": "ಸೆಷನ್ ನಿಮ್ಮ ಸಾಧನದಲ್ಲಿ ಉಳಿಸಲಾಗಿದೆ",
    "noSessionFound": "ಯಾವುದೇ ಸಾಧನಾ ಸೆಷನ್ ಕಂಡುಬಂದಿಲ್ಲ",
    "noSessionFoundDesc": "ನಿಮ್ಮ ಮೌಲ್ಯಮಾಪನವನ್ನು ನೋಡಲು ಕ್ಯಾಮೆರಾದೊಂದಿಗೆ ಸಾಧನಾ ಸೆಷನ್ ಪೂರ್ಣಗೊಳಿಸಿ.",
    "browseSkills": "ಕೌಶಲ್ಯಗಳನ್ನು ಬ್ರೌಸ್ ಮಾಡಿ",
    "whyNoScore": "ಯಾಕೆ ಸ್ಕೋರ್ ಇಲ್ಲ?",
    "whyNoScoreDesc": "ಸಾಧನೆಯ ಸಮಯದಲ್ಲಿ ನಿಮ್ಮ ಕೈಗಳು ಮತ್ತು ಕೆಲಸದ ಪ್ರದೇಶವು ನಿರಂತರವಾಗಿ ಕ್ಯಾಮೆರಾಕ್ಕೆ ಗೋಚರಿಸಿದಾಗ ಮಾತ್ರ SkillLens ಸ್ಕೋರ್ ಲೆಕ್ಕಹಾಕುತ್ತದೆ.",
    "observedFor": "{{seconds}} ಸೆಕೆಂಡುಗಳ ಕಾಲ ಗಮನಿಸಲಾಗಿದೆ · ಸಾಧನದಲ್ಲಿ ಉಳಿಸಲಾಗಿದೆ",
    "consistentTechnique": "ಹಂತಗಳಾದ್ಯಂತ ಸ್ಥಿರವಾದ ತಂತ್ರ ಕಂಡುಬಂದಿದೆ",
    "practiceCompletedKeepGoing": "ಸಾಧನೆ ಮುಗಿದಿದೆ — ಲಯಕ್ಕಾಗಿ ಅಭ್ಯಾಸ ಮುಂದುವರಿಸಿ",
    "notEnoughVisualData": "ತಂತ್ರವನ್ನು ಮೌಲ್ಯಮಾಪನ ಮಾಡಲು ಸಾಕಷ್ಟು ದೃಶ್ಯ ಡೇಟಾ ಇಲ್ಲ"
  },
  "progress": {
    "title": "ನನ್ನ ಪ್ರಗತಿ",
    "subtitle": "ನಿಮ್ಮ ಪೂರ್ಣಗೊಂಡ ಪಾಠಗಳು, ಸಾಧನೆಯ ಸ್ಥಿರತೆ ಮತ್ತು ಪ್ರಾವೀಣ್ಯತೆಯನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಿ.",
    "skillsLearning": "ಕಲಿಯುತ್ತಿರುವ ಕೌಶಲ್ಯಗಳು",
    "skillsCompleted": "ಪೂರ್ಣಗೊಂಡ ಕೌಶಲ್ಯಗಳು",
    "practiceSessions": "ಸಾಧನಾ ಸೆಷನ್‌ಗಳು",
    "currentStreak": "ದಿನಗಳ ಸ್ಟ್ರೀಕ್",
    "averageScore": "ಸರಾಸರಿ ಸ್ಕೋರ್",
    "progressionTrend": "ಸ್ಕೋರ್ ಪ್ರವೃತ್ತಿ",
    "recentSessions": "ಇತ್ತೀಚಿನ ಸಾಧನಾ ಇತಿಹಾಸ",
    "noSessionsYet": "ಇನ್ನೂ ಯಾವುದೇ ಸಾಧನೆ ದಾಖಲಾಗಿಲ್ಲ.",
    "categoriesProgress": "ವರ್ಗ ವ್ಯಾಪ್ತಿ",
    "earnedBadges": "ಕೌಶಲ್ಯ ಬ್ಯಾಡ್ಜ್‌ಗಳು",
    "activeCourses": "ಸಕ್ರಿಯ ಕೋರ್ಸ್‌ಗಳು",
    "passedBenchmarks": "ಉತ್ತೀರ್ಣ ಮಾನದಂಡಗಳು",
    "recordedSessions": "ದಾಖಲಾದ ಸೆಷನ್‌ಗಳು",
    "activeStreak": "ಸಕ್ರಿಯ ಸ್ಟ್ರೀಕ್",
    "categoryCoverage": "ವರ್ಗವಾರು ಸಾಧನಾ ವ್ಯಾಪ್ತಿ",
    "practiceASkill": "ಕೌಶಲ್ಯ ಸಾಧನೆ ಮಾಡಿ",
    "unlocked": "ಅನ್‌ಲಾಕ್ ಆಗಿದೆ",
    "locked": "ಲಾಕ್ ಆಗಿದೆ",
    "badges": {
      "firstDrillTitle": "ಮೊದಲ ಸಾಧನಾ ಡ್ರಿಲ್",
      "firstDrillDesc": "ನಿಮ್ಮ ಮೊದಲ ಪ್ರಾಯೋಗಿಕ ಸೆಷನ್ ಪೂರ್ಣಗೊಳಿಸಿದ್ದೀರಿ",
      "steadyStreakTitle": "ಸ್ಥಿರ ಕಲಿಯುವವ",
      "steadyStreakDesc": "ಸತತ 3+ ದಿನಗಳ ಸಾಧನಾ ಸ್ಟ್ರೀಕ್ ಉಳಿಸಿಕೊಂಡಿದ್ದೀರಿ",
      "craftVirtuosoTitle": "ಫಾರ್ಮ್ ಮಾಸ್ಟರ್",
      "craftVirtuosoDesc": "85% ಗಿಂತ ಹೆಚ್ಚಿನ ಒಟ್ಟಾರೆ ಸ್ಕೋರ್ ಸಾಧಿಸಿದ್ದೀರಿ",
      "versatileMakerTitle": "ಬಹು-ಕೌಶಲ್ಯ ಅನ್ವೇಷಕ",
      "versatileMakerDesc": "ಕನಿಷ್ಠ 3 ವಿಭಾಗಗಳಲ್ಲಿ ಅಭ್ಯಾಸ ಮಾಡಿದ್ದೀರಿ"
    }
  },
  "profile": {
    "title": "ಪ್ರೊಫೈಲ್ ಮತ್ತು ಸೆಟ್ಟಿಂಗ್‌ಗಳು",
    "subtitle": "ನಿಮ್ಮ ಆದ್ಯತೆಗಳು, ಕ್ಯಾಮೆರಾ ತರಬೇತಿ ಮತ್ತು ಭಾಷೆಯನ್ನು ನಿರ್ವಹಿಸಿ.",
    "learnerLevel": "ಕೌಶಲ್ಯ ಸಾಧಕ",
    "selectLanguage": "ಭಾಷೆ / Language / भाषा",
    "appSettings": "AI ತರಬೇತಿ ಆದ್ಯತೆಗಳು",
    "feedbackFrequency": "ಸಲಹೆ ಆವರ್ತನ",
    "continuous": "ನಿರಂತರ (ಹೆಚ್ಚು)",
    "periodic": "ನಿಯಮಿತ (ಪ್ರತಿ 15 ಸೆ.)",
    "low": "ಕೊನೆಯಲ್ಲಿ ಮಾತ್ರ",
    "visionSensitivity": "ಟ್ರ್ಯಾಕಿಂಗ್ ಸಂವೇದನೆ",
    "normal": "ಸಮತೋಲಿತ",
    "high": "ಹೆಚ್ಚಿನ ನಿಖರತೆ",
    "relaxed": "ಸಾಮಾನ್ಯ",
    "audioCoaching": "ಧ್ವನಿ ಮಾರ್ಗದರ್ಶನ",
    "audioCoachingDesc": "ಕೈ ಜೋಡಣೆಗೆ ಧ್ವನಿ ಸೂಚನೆಗಳು (UI ಸಿಮ್ಯುಲೇಶನ್)",
    "dataManagement": "ಡೇಟಾ ನಿರ್ವಹಣೆ",
    "resetData": "ಸ್ಥಳೀಯ ಡೇಟಾ ಮರುಹೊಂದಿಸಿ",
    "resetConfirm": "ನಿಮ್ಮ ಸಾಧನಾ ಇತಿಹಾಸ ಮತ್ತು ಸ್ಕೋರ್‌ಗಳನ್ನು ಅಳಿಸಲು ನೀವು ಖಚಿತವಾಗಿ ಬಯಸುವಿರಾ?",
    "dataResetSuccess": "ಎಲ್ಲಾ ಡೇಟಾವನ್ನು ಮರುಹೊಂದಿಸಲಾಗಿದೆ.",
    "version": "SkillLens v1.0.0 (iQOO Hackathon Edition)",
    "accountDetails": "ಖಾತೆ ವಿವರಗಳು",
    "email": "ಇಮೇಲ್",
    "memberSince": "ಸೇರ್ಪಡೆ ದಿನಾಂಕ",
    "practiceOverview": "ಸಾಧನಾ ಅವಲೋಕನ",
    "craftVirtuoso": "ಫಾರ್ಮ್ ಮಾಸ್ಟರ್",
    "appearance": "ಗೋಚರತೆ",
    "themeMode": "ಡಾರ್ಕ್ ಮೋಡ್"
  },
  "categories": {
    "cat-1": {
      "name": "ಪೇಂಟಿಂಗ್ ಮತ್ತು ಅಲಂಕಾರ",
      "description": "ಗೋಡೆ ಬಣ್ಣ ಬಳಿಯುವುದು, ರೋಲರ್ ಸ್ಟ್ರೋಕ್ ಸ್ಥಿರತೆ ಮತ್ತು ಅಲಂಕಾರಿಕ ಕಲೆ ಕಲಿಯಿರಿ."
    },
    "cat-2": {
      "name": "ಟೈಲರಿಂಗ್ ಮತ್ತು ಫ್ಯಾಷನ್",
      "description": "ಸೂಜಿ ಜೋಡಣೆ, ಸೀಮ್ ಅಂತರ, ಹೊಲಿಗೆ ನಿಯಂತ್ರಣ ಮತ್ತು ಉಡುಪು ದುರಸ್ತಿ ಕಲಿಯಿರಿ."
    },
    "cat-3": {
      "name": "ಕ್ರೋಶೆ ಮತ್ತು ಕರಕುಶಲ",
      "description": "ಲೂಪ್ ಬಿಗಿತ, ಹೊಲಿಗೆ ಲಯ, ಹುಕ್ ಕೋನ ಮತ್ತು ಸುಂದರ ಕರಕುಶಲ ವಿನ್ಯಾಸಗಳನ್ನು ಕಲಿಯಿರಿ."
    },
    "cat-4": {
      "name": "ಮಡಕೆ ತಯಾರಿಕೆ ಮತ್ತು ಸೆರಾಮಿಕ್ಸ್",
      "description": "ಚಕ್ರದ ಮೇಲೆ ಜೇಡಿಮಣ್ಣು ಸಮತೋಲನ, ಕೈ ಒತ್ತಡ ಮತ್ತು ಮಡಕೆ ಆಕಾರ ತರಬೇತಿ."
    },
    "cat-5": {
      "name": "ಸೌಂದರ್ಯ, ಚರ್ಮದ ಆರೈಕೆ ಮತ್ತು ಮೇಕಪ್",
      "description": "ಕ್ರೀಮ್ ಹಚ್ಚುವುದು, ಬ್ಲೆಂಡಿಂಗ್ ಕೋನಗಳು ಮತ್ತು ನೇಲ್ ಪಾಲಿಷ್ ತಂತ್ರಗಳನ್ನು ಕಲಿಯಿರಿ."
    },
    "cat-6": {
      "name": "ಕೇಶವಿನ್ಯಾಸ ಮತ್ತು ಸ್ಟೈಲಿಂಗ್",
      "description": "ಕೂದಲು ವಿಭಾಗಿಸುವುದು, ಜಡೆ ಹೆಣೆಯುವುದು ಮತ್ತು ಸ್ಟೈಲಿಂಗ್ ಅಭ್ಯಾಸ ಮಾಡಿ."
    },
    "cat-7": {
      "name": "ತೋಟಗಾರಿಕೆ ಮತ್ತು ಸಸ್ಯಗಳು",
      "description": "ಮಣ್ಣು ಹದಗೊಳಿಸುವುದು, ಬೀಜ ಬಿತ್ತುವುದು, ಗಿಡ ಕತ್ತರಿಸುವುದು ಮತ್ತು ಪೋಷಣೆ."
    },
    "cat-8": {
      "name": "ಅಡುಗೆ ಮತ್ತು ಆಹಾರ ಅಲಂಕಾರ",
      "description": "ಚಾಕು ಹಿಡಿಯುವ ವಿಧಾನ, ತರಕಾರಿ ಕತ್ತರಿಸುವುದು ಮತ್ತು ಅಡುಗೆ ಪ್ರಸ್ತುತಿ."
    },
    "cat-9": {
      "name": "ಸ್ವಯಂ ದುರಸ್ತಿ ಮತ್ತು ಗೃಹ ಸುಧಾರಣೆ",
      "description": "ಡ್ರಿಲ್ಲಿಂಗ್ ಕೋನ, ಸ್ಕ್ರೂ ಬಿಗಿಗೊಳಿಸುವಿಕೆ ಮತ್ತು ಅಳತೆ ಗುರುತುಗಳನ್ನು ಕಲಿಯಿರಿ."
    },
    "cat-10": {
      "name": "ಸೃಜನಶೀಲ ಮತ್ತು ಅಲಂಕಾರಿಕ ಕರಕುಶಲ",
      "description": "ಕಾಗದ ಮಡಿಸುವ ಕಲೆ, ರೆಸಿನ್ ಕಲೆ ಮತ್ತು ಹಬ್ಬದ ಸುಂದರ ಅಲಂಕಾರಗಳು."
    }
  },
  "skillsData": {
    "skill-wall-painting": {
      "name": "ಗೋಡೆ ಪೇಂಟಿಂಗ್",
      "description": "ರೋಲರ್ ಮೂಲಕ ಸಮಾನ ಬಣ್ಣ ಬಳಿಯುವುದು ಮತ್ತು ಅಂಚುಗಳನ್ನು ಸ್ವಚ್ಛವಾಗಿಡುವುದು."
    },
    "skill-roller-painting": {
      "name": "ರೋಲರ್ ಪೇಂಟಿಂಗ್",
      "description": "ಪ್ರಮುಖ ಡ್ರಿಲ್: ರೋಲರ್ ಸ್ಟ್ರೋಕ್ ಸ್ಥಿರತೆ, ಅತಿಕ್ರಮಣ ಅನುಪಾತ ಮತ್ತು ಹನಿಗಳಿಲ್ಲದ ಅಂಚಿನ ನಿಖರತೆ."
    },
    "skill-edge-painting": {
      "name": "అంచుల పెయింటింగ్",
      "description": "సీలింగ్ లైన్లు మరియు బోర్డర్ల వెంబడి బ్రష్ నియంత్రణతో స్పష్టమైన అంచులను గీయండి."
    },
    "skill-crack-filling": {
      "name": "పగుళ్లు పూడ్చడం",
      "description": "పుట్టీ నైఫ్‌తో పగుళ్లను పూడ్చి, పెయింటింగ్ కోసం ఉపరితలాన్ని నునుపుగా సిద్ధం చేయండి."
    },
    "skill-mandala-painting": {
      "name": "మండల పెయింటింగ్",
      "description": "డాటింగ్ టూల్స్‌తో ఖచ్చితమైన వృత్తాకార నమూనాలు మరియు చుక్కల అమరికను సాధన చేయండి."
    },
    "skill-canvas-painting": {
      "name": "కాన్వాస్ పెయింటింగ్",
      "description": "కాన్వాస్ బోర్డుపై బ్రష్ స్ట్రోక్స్ మరియు రంగుల కలయిక ద్వారా చిత్రకళను నేర్చుకోండి."
    },
    "skill-diy-home-decoration": {
      "name": "గృహ అలంకరణ కళ",
      "description": "గోడలపై స్టెన్సిల్స్ మరియు టేప్ ఉపయోగించి రేఖాగణిత డిజైన్లను రూపొందించండి."
    },
    "skill-straight-stitching": {
      "name": "ನೇರ ಹೊಲಿಗೆ",
      "description": "ಬಟ್ಟೆಯನ್ನು ಎಳೆಯದೆ ಸೂಜಿಯ ಮಾರ್ಗದಲ್ಲಿ ನೇರವಾಗಿ ಹೊಲಿಯುವುದನ್ನು ಕಲಿಯಿರಿ."
    },
    "skill-hemming": {
      "name": "హెమ్మింగ్ (అంచుల మడత)",
      "description": "దుస్తుల క్రింది అంచులను సమానంగా మడిచి సున్నితంగా కుట్టడం నేర్చుకోండి."
    },
    "skill-seam-alignment": {
      "name": "సీమ్ అమరిక",
      "description": "రెండు వస్త్ర భాగాలను కలిపి కుట్టేటప్పుడు అంచులు సరిగ్గా సమానంగా ఉండేలా చూడండి."
    },
    "skill-button-stitching": {
      "name": "బటన్ కుట్టడం",
      "description": "బటన్‌ను వస్త్రానికి గట్టిగా ఉండేలా క్రాస్-స్టిచ్ పద్ధతిలో కుట్టడం."
    },
    "skill-hand-embroidery": {
      "name": "చేతి ఎంబ్రాయిడరీ",
      "description": "ఫ్రెంచ్ నాట్, శాటిన్ స్టిచ్ మరియు కాండం కుట్టులతో వస్త్రాలపై డిజైన్లు చేయడం."
    },
    "skill-basic-clothing-repair": {
      "name": "దుస్తుల ప్రాథమిక మరమ్మత్తు",
      "description": "చిరిగిన కుట్లు సరిచేయడం మరియు అదృశ్య కుట్టుతో వస్త్రాలను బాగు చేయడం."
    },
    "skill-crochet-chain": {
      "name": "క్రోచెట్ ఫౌండేషన్ చైన్",
      "description": "సమాన బిగుతుతో ప్రాథమిక క్రోచెట్ చైన్ వేయడం నేర్చుకోండి."
    },
    "skill-single-crochet": {
      "name": "సింగిల్ క్రోచెట్",
      "description": "దట్టమైన మరియు బలమైన నేత కోసం సింగిల్ క్రోచెట్ పద్ధతిని సాధన చేయండి."
    },
    "skill-double-crochet": {
      "name": "డబుల్ క్రోచెట్",
      "description": "ఎత్తు కలిగిన కుట్లు వేయడానికి యార్న్ ఓవర్ మరియు లూప్ నియంత్రణ."
    },
    "skill-granny-square": {
      "name": "గ్రానీ స్క్వేర్",
      "description": "మూలల నిర్మాణం, క్లస్టర్ స్టిచెస్ మరియు చతురస్రాకార క్రోచెట్ నమూనా."
    },
    "skill-crochet-flower": {
      "name": "క్రోచెట్ పువ్వు",
      "description": "రేకులు మరియు అందమైన 3D క్రోచెట్ పువ్వుల రూపకల్పన."
    },
    "skill-crochet-bag": {
      "name": "క్రోచెట్ బ్యాగ్",
      "description": "బలమైన హ్యాండిల్స్ మరియు బేస్ కలిగిన క్రోచెట్ బ్యాగ్ తయారు చేయడం."
    },
    "skill-basic-amigurumi": {
      "name": "అమిగురుమి (బొమ్మల తయారీ)",
      "description": "మ్యాజిక్ రింగ్ మరియు గుండ్రటి క్రోచెట్ అల్లికతో బొమ్మలు చేయడం."
    },
    "skill-clay-kneading": {
      "name": "మట్టి పిసకడం (వెడ్జింగ్)",
      "description": "గాలి బుడగలు తొలగించి మట్టిని మెత్తగా సమానంగా మార్చే ప్రక్రియ."
    },
    "skill-clay-centering": {
      "name": "చక్రంపై మట్టిని సెంటర్ చేయడం",
      "description": "తిరిగే చక్రం మధ్యలో మట్టిని కదలకుండా సమతుల్యం చేయడం."
    },
    "skill-pot-shaping": {
      "name": "ಮಡಕೆ ಆಕಾರ ನೀಡುವುದು",
      "description": "ಕೈ ಬೆರಳುಗಳ ಒತ್ತಡದಿಂದ ಜೇಡಿಮಣ್ಣಿನ ಗೋಡೆಗಳನ್ನು ಎತ್ತಿ ಸಮಾನ ದಪ್ಪ ನೀಡಿ."
    },
    "skill-rim-shaping": {
      "name": "రిమ్ ఆకృతి",
      "description": "కుండ పైభాగాన్ని లేదా అంచును నునుపుగా సమానంగా చేయడం."
    },
    "skill-surface-smoothing": {
      "name": "ఉపరితలం నునుపు చేయడం",
      "description": "రిబ్ టూల్ సహాయంతో మట్టి ఉపరితలాన్ని నునుపుగా మార్చడం."
    },
    "skill-handle-making": {
      "name": "హ్యాండిల్ తయారీ",
      "description": "కప్పులకు లేదా పాత్రలకు పట్టుకునే పిడి తయారు చేసి గట్టిగా అతికించడం."
    },
    "skill-ceramic-painting": {
      "name": "సిరామిక్ పెయింటింగ్",
      "description": "మట్టి పాత్రలపై రంగులు మరియు మెరిసే గ్లేజ్ డిజైన్లు వేయడం."
    },
    "skill-face-cleansing": {
      "name": "ఫేస్ క్లెన్సింగ్ పద్ధతి",
      "description": "గుండ్రటి కదలికలతో ముఖాన్ని సున్నితంగా శుభ్రపరిచే సరైన పద్ధతి."
    },
    "skill-moisturizer-application": {
      "name": "మాయిశ్చరైజర్ రాయడం",
      "description": "పై దిశగా సున్నితంగా మర్దన చేస్తూ చర్మానికి తేమను అందించడం."
    },
    "skill-sunscreen-application": {
      "name": "సన్‌స్క్రీన్ అప్లికేషన్",
      "description": "రెండు వేళ్ళ కొలతతో ముఖం మరియు మెడపై సన్‌స్క్రీన్ సమంగా పూయడం."
    },
    "skill-face-mask-application": {
      "name": "ఫేస్ మాస్క్ వేయడం",
      "description": "బ్రష్‌తో కళ్ళ చుట్టూ కాకుండా ముఖంపై ఫేస్ ప్యాక్ సమంగా వేయడం."
    },
    "skill-foundation-application": {
      "name": "ఫౌండేషన్ బ్లెండింగ్",
      "description": "స్పాంజితో ముఖంపై ఫౌండేషన్‌ను సహజసిద్ధంగా బ్లెండ్ చేయడం."
    },
    "skill-concealer-application": {
      "name": "కన్సీలర్ అప్లికేషన్",
      "description": "కళ్ళ క్రింద నల్లటి వలయాలు మరియు మచ్చలను కవర్ చేసే ఖచ్చితమైన పద్ధతి."
    },
    "skill-eyeliner-application": {
      "name": "ఐలైనర్ అప్లికేషన్",
      "description": "స్థిరమైన చేతితో కళ్ళ అంచులకు సమానమైన వింగ్డ్ ఐలైనర్ వేయడం."
    },
    "skill-nail-polish-application": {
      "name": "ನೇಲ್ ಪಾಲಿಷ್ ಹಚ್ಚುವುದು",
      "description": "ಮೂರು ಸ್ಟ್ರೋಕ್ ನಿಯಮದೊಂದಿಗೆ ಉಗುರುಗಳ ಮೇಲೆ ಸುಂದರವಾಗಿ ನೇಲ್ ಪಾಲಿಷ್ ಹಚ್ಚಿ."
    },
    "skill-basic-nail-art": {
      "name": "ప్రాథమిక నెయిల్ ఆర్ట్",
      "description": "డాటింగ్ టూల్ మరియు బ్రష్‌తో గోళ్ళపై నమూనాలు మరియు పువ్వులు వేయడం."
    },
    "skill-hair-sectioning": {
      "name": "జుట్టు విభజన (సెక్షనింగ్)",
      "description": "దువ్వెన మరియు క్లిప్పులతో జుట్టును నాలుగు భాగాలుగా సమానంగా విభజించడం."
    },
    "skill-hair-braiding": {
      "name": "ಜಡೆ ಹೆಣೆಯುವುದು (3-ಎಳೆ)",
      "description": "ಕೂದಲನ್ನು ಮೂರು ಸಮಾನ ಭಾಗಗಳಾಗಿ ಮಾಡಿ ಸಮಾನ ಬಿಗಿತದಿಂದ ಜಡೆ ಹೆಣೆಯಿರಿ."
    },
    "skill-blow-drying": {
      "name": "బ్లో-డ్రైయింగ్ పద్ధతి",
      "description": "రౌండ్ బ్రష్ మరియు డ్రైయర్‌తో జుట్టును చిక్కులు లేకుండా ఎండబెట్టడం."
    },
    "skill-basic-hair-styling": {
      "name": "ప్రాథమిక హెయిర్ స్టైలింగ్ (పోనీటైల్/ముడి)",
      "description": "నునుపైన పోనీటైల్ మరియు అందమైన ముడి వేసే పద్ధతి."
    },
    "skill-hair-curling": {
      "name": "జుట్టు కర్లింగ్",
      "description": "కర్లింగ్ ఐరన్‌తో ముఖానికి దూరంగా కర్ల్స్ చేస్తూ అందమైన వేవ్స్ చేయడం."
    },
    "skill-hair-straightening": {
      "name": "హెయిర్ స్ట్రెయిటెనింగ్",
      "description": "స్ట్రెయిట్‌నర్ సహాయంతో జుట్టును నిదానంగా స్ట్రెయిట్ చేయడం."
    },
    "skill-potting": {
      "name": "కుండీలో మొక్క నాటడం",
      "description": "డ్రైనేజీ రంధ్రాలు చూసుకుని వేర్ల చుట్టూ మట్టిని సరిగ్గా నింపడం."
    },
    "skill-seed-planting": {
      "name": "విత్తనాలు నాటడం",
      "description": "సరైన లోతులో విత్తనాలు నాటి నేలలో తేమను కాపాడటం."
    },
    "skill-soil-preparation": {
      "name": "మట్టి మిశ్రమం తయారీ",
      "description": "ఎరువు మరియు కోకోపీట్ కలిపి మొక్కల పెరుగుదలకు పోషక మట్టి సిద్ధం చేయడం."
    },
    "skill-pruning": {
      "name": "మొక్కల కత్తిరింపు (ప్రూనింగ్)",
      "description": "ఎండిన కొమ్మలను 45 డిగ్రీల కోణంలో కత్తిరించి కొత్త చిగుళ్ళను ప్రోత్సహించడం."
    },
    "skill-repotting": {
      "name": "మొక్కను పెద్ద కుండీలోకి మార్చడం",
      "description": "వేర్లను పాడుచేయకుండా పెద్ద కుండీలోకి మార్చే సురక్షిత పద్ధతి."
    },
    "skill-plant-propagation": {
      "name": "కొమ్మల ద్వారా మొక్కల ఉత్పత్తి",
      "description": "నోడ్ క్రింద కొమ్మను కత్తిరించి నీటిలో లేదా మట్టిలో వేర్లు రప్పించడం."
    },
    "skill-plant-support": {
      "name": "మొక్కలకు ఆధారం ఇవ్వడం",
      "description": "కాండం వంగిపోకుండా కర్రలతో సున్నితంగా కట్టి ఆధారం కల్పించడం."
    },
    "skill-knife-handling": {
      "name": "కత్తిని పట్టుకునే పద్ధతి",
      "description": "చేతి వేళ్ళు కోసుకోకుండా క్లా గ్రిప్ ద్వారా సురక్షితంగా కూరగాయలు కోయడం."
    },
    "skill-vegetable-chopping": {
      "name": "ತರಕಾರಿ ಕತ್ತರಿಸುವುದು",
      "description": "ರಾಕಿಂಗ್ ಚಲನೆಯೊಂದಿಗೆ ತರಕಾರಿಗಳನ್ನು ಸಮಾನ ಗಾತ್ರದಲ್ಲಿ ಕತ್ತರಿಸಿ."
    },
    "skill-dough-kneading": {
      "name": "పిండి పిసకడం",
      "description": "చేతి మడమలతో పిండిని సాగదీస్తూ మెత్తటి ముద్దగా సిద్ధం చేయడం."
    },
    "skill-dough-rolling": {
      "name": "చపాతీ లేదా పిండి రుద్దడం",
      "description": "రోలింగ్ పిన్‌తో మధ్య నుండి అంచుల వరకు సమానంగా గుండ్రంగా రుద్దడం."
    },
    "skill-cake-decoration": {
      "name": "కేక్ అలంకరణ",
      "description": "పైపింగ్ బ్యాగ్‌తో కేక్ మీద పువ్వులు మరియు అందమైన డిజైన్లు వేయడం."
    },
    "skill-food-plating": {
      "name": "ఆహార ప్లేటింగ్ & ప్రెజెంటేషన్",
      "description": "రెస్టారెంట్ శైలిలో రంగులు మరియు సాస్‌లతో ఆహారాన్ని అందంగా అమర్చడం."
    },
    "skill-measuring-marking": {
      "name": "కొలవడం మరియు మార్కింగ్ చేయడం",
      "description": "కొలత టేప్ మరియు రూలర్‌తో ఖచ్చితమైన 90 డిగ్రీల కోణంలో కొలతలు గుర్తించడం."
    },
    "skill-screw-fitting": {
      "name": "స్క్రూ బిగించడం",
      "description": "స్క్రూడ్రైవర్ జారకుండా సమాంతరంగా పెట్టి గట్టిగా బిగించడం."
    },
    "skill-furniture-assembly": {
      "name": "ఫర్నిచర్ అమరిక (అసెంబ్లీ)",
      "description": "సూచనల ప్రకారం ఫర్నిచర్ భాగాలను సరైన వరుసలో బిగించడం."
    },
    "skill-sanding": {
      "name": "శాండింగ్ (నునుపు చేయడం)",
      "description": "శాండ్‌పేపర్‌తో చెక్క ఉపరితలాన్ని పొరలు లేకుండా నునుపుగా రుద్దడం."
    },
    "skill-wall-hanging": {
      "name": "గోడకు ఫ్రేములు తగిలించడం",
      "description": "స్పిరిట్ లెవెల్ చూసుకుని గోడకు ఫోటో ఫ్రేములు సమాంతరంగా అమర్చడం."
    },
    "skill-cable-organization": {
      "name": "కేబుల్ నిర్వహణ",
      "description": "వైర్లను క్లిప్పులతో చిక్కులు లేకుండా క్రమపద్ధతిలో అమర్చడం."
    },
    "skill-gift-wrapping": {
      "name": "గిఫ్ట్ ప్యాకింగ్",
      "description": "కాగితపు అంచులను శుభ్రంగా మడిచి అందమైన రిబ్బన్‌తో ప్యాక్ చేయడం."
    },
    "skill-paper-flower-making": {
      "name": "కాగితపు పువ్వుల తయారీ",
      "description": "క్రేప్ పేపర్‌తో అందమైన గులాబీ మరియు అలంకరణ పువ్వులను రూపొందించడం."
    },
    "skill-origami": {
      "name": "ఒరిగామి (కాగితం మడత కళ)",
      "description": "ఖచ్చితమైన మడతల ద్వారా పక్షులు మరియు వివిధ ఆకృతులను చేయడం."
    },
    "skill-candle-decoration": {
      "name": "కొవ్వొత్తి అలంకరణ",
      "description": "ఎండిన పూలతో కొవ్వొత్తులను అందంగా అలంకరించే కళ."
    },
    "skill-resin-craft": {
      "name": "రెసిన్ క్రాఫ్ట్",
      "description": "రెసిన్ మిశ్రమాన్ని సిద్ధం చేసి బుడగలు లేకుండా కోస్టర్స్ తయారు చేయడం."
    },
    "skill-festive-decoration": {
      "name": "పండుగ అలంకరణ",
      "description": "తీగ ఫ్రేమ్‌పై ఆకులు మరియు పూలతో అందమైన అలంకరణ దండలు చేయడం."
    }
  }
},
  ta: {
  "common": {
    "appName": "SkillLens",
    "tagline": "கைவினைத் திறன்களுக்கான AI பயிற்சியாளர்",
    "offlineNotice": "ஆஃப்லைன் முறை — உங்கள் பயிற்சி தரவு இந்த சாதனத்தில் சேமிக்கப்படுகிறது.",
    "home": "முகப்பு",
    "skills": "திறன்கள்",
    "practice": "பயிற்சி",
    "progress": "முன்னேற்றம்",
    "profile": "சுயவிவரம்",
    "learn": "கற்க",
    "startPractice": "பயிற்சியைத் தொடங்குங்கள்",
    "continuePractice": "பயிற்சியைத் தொடருங்கள்",
    "continueLearning": "கற்றலைத் தொடருங்கள்",
    "resumeDrill": "பயிற்சியை மீண்டும் தொடங்கு",
    "back": "பின்செல்",
    "next": "அடுத்து",
    "finish": "முடிக்கவும்",
    "skip": "தவிர்",
    "save": "சேமி",
    "cancel": "ரத்துசெய்",
    "loading": "ஏற்றுகிறது...",
    "error": "பிழை",
    "success": "வெற்றி",
    "retry": "மீண்டும் முயற்சி",
    "viewAll": "அனைத்தும் பார்",
    "search": "தேடு",
    "filter": "வடிகட்டு",
    "difficulty": "நிலை",
    "duration": "கால அளவு",
    "minutes": "நிமிடங்கள்",
    "all": "அனைத்தும்",
    "beginner": "தொடக்க நிலை",
    "intermediate": "நடுத்தர நிலை",
    "advanced": "மேம்பட்ட நிலை",
    "signOut": "வெளியேறு",
    "signIn": "உள்நுழைக",
    "signUp": "பதிவுசெய்க",
    "days": "நாட்கள்",
    "streak": "தொடர் நாட்கள்",
    "sessions": "அமர்வுகள்",
    "mastery": "தேர்ச்சி",
    "activeCourses": "செயலில் உள்ள படிப்புகள்",
    "points": "புள்ளிகள்",
    "featured": "சிறப்பானது",
    "drills": "பயிற்சிகள்",
    "allSkills": "அனைத்து திறன்கள்",
    "allCategories": "அனைத்து பிரிவுகள்",
    "skillsFound": "திறன்கள் உள்ளன",
    "noSkillsMatch": "எந்த திறனும் பொருந்தவில்லை.",
    "tools": "கருவிகள்",
    "materials": "பொருட்கள்",
    "steps": "படிகள்",
    "safety": "பாதுகாப்பு",
    "tips": "குறிப்புகள்",
    "close": "மூடு",
    "done": "முடிந்தது",
    "confirm": "உறுதிப்படுத்து",
    "delete": "நீக்கு",
    "edit": "திருத்து",
    "seconds": "வினாடிகள்"
  },
  "nav": {
    "home": "முகப்பு",
    "skills": "திறன்கள்",
    "practice": "பயிற்சி",
    "progress": "முன்னேற்றம்",
    "profile": "சுயவிவரம்",
    "learn": "கற்க",
    "signOut": "வெளியேறு"
  },
  "auth": {
    "signIn": "உள்நுழைக",
    "signUp": "பதிவுசெய்க",
    "email": "மின்னஞ்சல்",
    "password": "கடவுச்சொல்",
    "confirmPassword": "கடவுச்சொல்லை உறுதிப்படுத்துக",
    "forgotPassword": "கடவுச்சொல் மறந்துவிட்டதா?",
    "createAccount": "கணக்கை உருவாக்குக",
    "alreadyHaveAccount": "ஏற்கனவே கணக்கு உள்ளதா?",
    "dontHaveAccount": "கணக்கு இல்லையா?",
    "invalidEmail": "சரியான மின்னஞ்சல் முகவரியை உள்ளிடவும்.",
    "passwordRequired": "கடவுச்சொல்லை உள்ளிடவும்.",
    "passwordMismatch": "கடவுச்சொற்கள் பொருந்தவில்லை.",
    "loginSuccess": "உள்நுழைவு வெற்றிகரமானது!",
    "accountCreated": "கணக்கு வெற்றிகரமாக உருவாக்கப்பட்டது!",
    "logout": "வெளியேறு",
    "sessionMessages": "வெற்றிகரமாக உள்நுழைந்துள்ளீர்கள்.",
    "welcomeBack": "மீண்டும் வருக",
    "signInSubtitle": "உங்கள் திறன்களைக் கற்கவும் மேம்படுத்தவும் தொடருங்கள்.",
    "createAccountSubtitle": "நிகழ்நேர AI வழிகாட்டுதலுடன் நடைமுறைத் திறன்களைக் கற்க SkillLens-ல் இணையுங்கள்.",
    "fullName": "முழுப் பெயர்",
    "fullNamePlaceholder": "எ.கா. அலெக்ஸ் வான்ஸ்",
    "emailPlaceholder": "you@example.com",
    "passwordPlaceholder": "••••••••",
    "confirmPasswordPlaceholder": "••••••••",
    "quickDemo": "டெமோ உள்நுழைவு",
    "resetPassword": "கடவுச்சொல்லை மீட்டமைக்கவும்",
    "resetPasswordSubtitle": "கடவுச்சொல் மீட்டமைப்பு வழிமுறைகளைப் பெற மின்னஞ்சலை உள்ளிடவும்.",
    "sendResetLink": "வழிமுறைகளை அனுப்பு",
    "backToSignIn": "உள்நுழைவுக்குத் திரும்பு",
    "resetSuccessMessage": "கடவுச்சொல் மீட்டமைப்பு வழிமுறைகள் அனுப்பப்பட்டன.",
    "passwordMinLength": "கடவுச்சொல் குறைந்தது 6 எழுத்துகள் இருக்க வேண்டும்.",
    "fillAllFields": "அனைத்து விவரங்களையும் நிரப்பவும்.",
    "loginFailed": "மின்னஞ்சல் அல்லது கடவுச்சொல் தவறானது.",
    "registerFailed": "கணக்கை உருவாக்குவதில் தோல்வி. மீண்டும் முயற்சிக்கவும்."
  },
  "landing": {
    "tagline": "நடைமுறைத் திறன் கற்றல் செயலி",
    "badge": "ஊடாடும் பயிற்சி பயிற்சியாளர்",
    "headline": "நிகழ்நேர AI வழிகாட்டுதலுடன் நடைமுறைத் திறன்களில் தேர்ச்சி பெறுங்கள்",
    "subheadline": "தொலைபேசி கேமராவை நிலைநிறுத்துங்கள். SkillLens உங்கள் கோணம், அசைவு மற்றும் நுட்பத்தை பகுப்பாய்வு செய்து உடனடி வழிகாட்டுதலை வழங்குகிறது.",
    "getStarted": "இலவசமாகத் தொடங்குங்கள்",
    "viewSkills": "67 திறன்களை ஆராயுங்கள்",
    "whyTitle": "உண்மையான கற்றலுக்காக வடிவமைக்கப்பட்டது",
    "whyDesc": "பெயிண்டிங், தையல், பின்னல் முதல் மேக்கப் வரை - தவறுகள் பழக்கமாக மாறுவதற்கு முன்பே திருத்திக் கொள்ளுங்கள்.",
    "previewTitle": "முக்கிய கலைகளை ஆராயுங்கள்",
    "previewSubtitle": "AI பார்வை பகுப்பாய்வு மற்றும் படிப்படியான வழிகாட்டுதலுடன் கூடிய பயிற்சி தொகுதிகள்.",
    "features": {
      "watch": "கேமரா வழிகாட்டுதல்",
      "watchDesc": "கைகள் திரையில் தெரியும்படி சாதனத்தை உறுதியாக வைக்கவும்.",
      "correct": "உடனடி கருத்து",
      "correctDesc": "கோணம் மற்றும் நுட்பம் குறித்த உடனடி ஆலோசனைகளைப் பெறுங்கள்.",
      "track": "அளவிடக்கூடிய தேர்ச்சி",
      "trackDesc": "ஒவ்வொரு பயிற்சியிலும் உங்கள் மதிப்பெண் உயர்வதைக் காணுங்கள்."
    }
  },
  "onboarding": {
    "step1Title": "1. ஏதேனும் ஒரு திறனைத் தேர்ந்தெடுக்கவும்",
    "step1Desc": "பெயிண்டிங், தையல், மட்பாண்டம், சமையல் உள்ளிட்ட 67 திறன்களிலிருந்து தேர்வு செய்யுங்கள்.",
    "step2Title": "2. கேமராவை நிலைநிறுத்துங்கள்",
    "step2Desc": "உங்கள் கைகளும் கருவிகளும் திரையில் தெரியும்படி தொலைபேசியை வைக்கவும்.",
    "step3Title": "3. பயிற்சி செய்து ஆலோசனைகளைப் பெறுங்கள்",
    "step3Desc": "SkillLens உங்கள் அசைவுகளையும் துல்லியத்தையும் கண்காணித்து வழிகாட்டுகிறது.",
    "next": "அடுத்து",
    "back": "பின்செல்",
    "finish": "பயிற்சியைத் தொடங்கு",
    "skip": "முகப்புக்குச் செல்"
  },
  "home": {
    "greetingMorning": "காலை வணக்கம், {{name}}",
    "greetingDay": "வணக்கம், {{name}}",
    "greetingEvening": "மாலை வணக்கம், {{name}}",
    "whatToLearn": "இன்று நீங்கள் என்ன கற்க விரும்புகிறீர்கள்?",
    "streakLabel": "தினசரி தொடர்",
    "daysStreak": "நாட்கள் செயலில்",
    "daysActive": "நாட்கள்",
    "readinessScore": "ஒட்டுமொத்த நுட்ப மதிப்பெண்",
    "overallReadiness": "ஒட்டுமொத்த தயார்நிலை மதிப்பெண்",
    "scoreSubtitle": "கேமரா நுட்ப மதிப்பீட்டின் அடிப்படையில்",
    "continuePractice": "பயிற்சியைத் தொடரவும்",
    "continueLearning": "கற்றலைத் தொடரவும்",
    "resumeCta": "பயிற்சியை மீண்டும் தொடங்கு",
    "recommendedSkills": "பரிந்துரைக்கப்பட்ட பயிற்சிகள்",
    "recommendedSubtitle": "நடைமுறைத் திறன்களை வளர்ப்பதற்கான அத்தியாவசியப் பயிற்சிகள்",
    "recentFeedback": "சமீபத்திய பயிற்சியாளர் குறிப்புகள்",
    "latestInsights": "சமீபத்திய AI ஆலோசனைகள்",
    "noRecentFeedback": "இன்னும் எந்த அமர்வும் முடியவில்லை. ஒரு திறனைத் தேர்வுசெய்யவும்!",
    "exploreCategories": "பிரிவுகளை ஆராயுங்கள்",
    "exploreCategoriesSubtitle": "10 துறைகளில் விரிவான கற்றல்",
    "viewAll": "அனைத்து 67 திறன்களையும் பார்",
    "quickSummary": "அமர்வு சுருக்கம்",
    "viewFullHistory": "முழு வரலாற்றைப் பார் →",
    "score": "மதிப்பெண்",
    "sessionsRecorded": "அமர்வுகள்",
    "skillsCount": "திறன்கள்",
    "mastery": "தேர்ச்சி"
  },
  "skills": {
    "title": "திறன்கள் நூலகம்",
    "subtitle": "படிப்படியான பயிற்சிகள் மற்றும் கேமரா நுட்பப் பயிற்சிகளை ஆராயுங்கள்.",
    "searchPlaceholder": "திறன்கள், கருவிகளைத் தேடுங்கள்...",
    "allCategories": "அனைத்து பிரிவுகள்",
    "allSkillsCount": "அனைத்து திறன்கள் ({{count}})",
    "skillsFound": "திறன்கள் உள்ளன",
    "noSkillsMatch": "எந்த திறனும் பொருந்தவில்லை.",
    "difficulty": "நிலை",
    "duration": "நேரம்",
    "filterBy": "வடிகட்டு",
    "featured": "சிறப்பானது",
    "browseCatalog": "67 நேரடி பயிற்சிகளைப் பாருங்கள்",
    "all": "அனைத்தும்"
  },
  "skillDetail": {
    "difficulty": "கடினத்தன்மை",
    "duration": "பயிற்சி நேரம்",
    "toolsNeeded": "தேவையான கருவிகள் & பொருட்கள்",
    "stepByStep": "நுட்பத்தின் படிகள்",
    "safetyFirst": "பாதுகாப்பு குறிப்புகள்",
    "cameraTips": "கேமரா பொருத்தும் குறிப்புகள்",
    "observableMetrics": "மதிப்பீட்டு அளவீடுகள்",
    "personalBest": "தனிப்பட்ட சிறந்த பதிவு",
    "noScoreYet": "இன்னும் பயிற்சி பதிவு செய்யப்படவில்லை",
    "startPractice": "பயிற்சியைத் தொடங்குங்கள்",
    "learnStepByStep": "படிப்படியாகக் கற்றுக்கொள்ளுங்கள்",
    "skincareDisclaimer": "குறிப்பு: SkillLens பயன்பாட்டு நுட்பப் பயிற்சியை மட்டுமே வழங்குகிறது. இது மருத்துவ ஆலோசனை அல்ல.",
    "videoAvailable": "வீடியோ பாடம் உள்ளது",
    "videoAvailableDesc": "உண்மையான நுட்ப விளக்கம் மற்றும் படிகள் அடங்கும்",
    "readyToTest": "உங்கள் நுட்பத்தை சோதிக்கத் தயாரா?",
    "readyToTestDesc": "நேரடி பகுப்பாய்விற்கு உங்கள் கேமராவைப் பயன்படுத்துங்கள்.",
    "mastery": "தேர்ச்சி",
    "whatYouNeed": "உங்களுக்குத் தேவையானவை",
    "overview": "திறன் விவரம்"
  },
  "learning": {
    "lesson": "பாடம்",
    "tutorial": "திறன் பயிற்சி",
    "stepProgress": "முன்னேற்றம்: படி {{current}} / {{total}}",
    "step": "படி {{current}}",
    "techniqueNote": "நுட்பக் குறிப்பு",
    "whatYouNeed": "உங்களுக்குத் தேவையானவை",
    "commonMistakes": "தவிர்க்க வேண்டிய பொதுவான தவறுகள்",
    "safetyAndWorkspace": "பாதுகாப்பு & பணியிடம்",
    "previousStep": "முந்தைய படி",
    "nextStep": "அடுத்த படி",
    "startPractice": "பயிற்சியைத் தொடங்கு",
    "readyToTest": "நுட்பத்தை சோதிக்கத் தயாரா?",
    "readyToTestDesc": "நேரடி வழிகாட்டுதலுக்கு கேமராவைப் பயன்படுத்துங்கள்.",
    "openStudio": "பயிற்சி ஸ்டுடியோவைத் திற"
  },
  "video": {
    "lessonTitle": "வீடியோ பாடம்",
    "watchVideo": "வீடியோவைப் பார்",
    "videoUnavailable": "வீடியோ கிடைக்கவில்லை",
    "videoLoading": "வீடியோ ஏற்றப்படுகிறது...",
    "videoCompleted": "வீடியோ முடிந்தது",
    "continue": "தொடரவும்",
    "previous": "முந்தைய",
    "next": "அடுத்து",
    "markAsComplete": "முடிந்ததாகக் குறிக்கவும்",
    "startPractice": "பயிற்சியைத் தொடங்கு",
    "markAsWatched": "பார்த்ததாகக் குறிக்கவும்",
    "openInYouTube": "யூடியூபில் பார்க்கவும்",
    "fallbackMessage": "வீடியோவை ஏற்ற முடியவில்லை. கீழேயுள்ள வழிமுறைகளைப் பின்பற்றவும்.",
    "demonstration": "வீடியோ செயல்முறை",
    "noticeEn": "ஆங்கில வீடியோ",
    "noticeHi": "ஆங்கில வீடியோ • கீழே தமிழ் வழிமுறைகள்",
    "noticeTe": "ஆங்கில வீடியோ • கீழே தமிழ் வழிமுறைகள்"
  },
  "practice": {
    "simulatedBadge": "செயற்கை AI பார்வை செயலில் உள்ளது",
    "simulatedNotice": "மாதிரி காட்சி: MockVisionAnalyzer மூலம் நுட்ப கருத்து விளக்கப்படுகிறது.",
    "connectingCamera": "கேமராவுடன் இணைகிறது...",
    "cameraAccessDenied": "கேமரா கிடைக்கவில்லை அல்லது அனுமதி மறுக்கப்பட்டது.",
    "enableCameraFallback": "மாதிரி கேமரா ஊட்டத்தைப் பயன்படுத்துகிறது.",
    "useSimulatedCamera": "மாதிரி கேமராவுக்கு மாறு",
    "liveTechniqueGuidance": "நேரடி AI வழிகாட்டுதல்",
    "trackingActive": "கை & கருவி கண்காணிப்பு செயலில் உள்ளது",
    "start": "தொடங்கு",
    "pause": "இடைநிறுத்து",
    "resume": "மீண்டும் தொடங்கு",
    "finishSession": "பயிற்சியை முடி",
    "elapsed": "கடந்த நேரம்",
    "sessionPaused": "பயிற்சி இடைநிறுத்தப்பட்டுள்ளது",
    "cameraTips": "கேமரா அமைவு குறிப்புகள்",
    "targetMetrics": "மதிப்பீட்டு அளவீடுகள்",
    "coachNotes": "பயிற்சியாளர் குறிப்புகள்",
    "visionStatus": "பார்வை நிலை",
    "requestingCamera": "கேமரா அனுமதி கோரப்படுகிறது...",
    "grantCameraPrompt": "SkillLens உங்கள் நுட்பத்தை பகுப்பாய்வு செய்ய கேமரா அனுமதியை வழங்கவும்.",
    "switchSimulated": "மாதிரி ஊட்டத்தைப் பயன்படுத்து",
    "retryCamera": "கேமராவை மீண்டும் முயற்சி செய்",
    "keepHandsInFrame": "இரு கைகளையும் கேமரா திரையிலேயே வைத்திருங்கள்.",
    "adjustLighting": "கைகள் தெரியும்படி வெளிச்சத்தை சரிசெய்யவும்.",
    "sufficientEvidence": "காட்சி ஆதாரம் பதிவு செய்யப்பட்டது",
    "incompleteObservation": "முழுமையற்ற கவனிப்பு"
  },
  "feedback": {
    "moveSlower": "நிலையான வடிவத்திற்கு உங்கள் கை அசைவை சற்று மெதுவாக்குங்கள்.",
    "consistentPressure": "ஸ்ட்ரோக்குகளின் போது சீரான அழுத்தம் பராமரிக்கப்பட்டது.",
    "firmFooting": "நிலைத்தன்மைக்காக இரு கால்களையும் தரையில் உறுதியாக வைக்கவும்.",
    "goodAnchor": "கையின் நிலையான பிடிப்பு நல்ல நிலையை உருவாக்கியுள்ளது.",
    "straightPath": "வழிகாட்டி எல்லைக்குள் தெளிவான நேர்கோடு பராமரிக்கப்பட்டது.",
    "relaxGrip": "கை சோர்வைத் தடுக்க பிடியை சற்று தளர்த்தவும்.",
    "evenSpacing": "சீரான இடைவெளி பராமரிக்கப்பட்டது.",
    "smoothTransition": "அசைவுகளுக்கு இடையே மென்மையான மாற்றம்.",
    "steadyCadence": "வேகம் சீராகவும் சிறந்த வரம்பிலும் உள்ளது.",
    "adjustAngle": "மேற்பரப்புக்கு செங்குத்தாக கருவியின் கோணத்தை சரிசெய்யவும்.",
    "maintainTension": "இழைகளில் சமநிலையான பதற்றத்தை பராமரிக்கவும்.",
    "watchEdges": "விளிம்புகளைத் தாண்டிவிடாமல் எல்லைகளைக் கவனியுங்கள்.",
    "tooDark": "வெளிச்சம் குறைவாக உள்ளது. கைகள் தெரியும்படி வெளிச்சத்தை சரிசெய்யவும்.",
    "keepHandsInFrame": "இரு கைகளையும் கேமரா திரையிலேயே வைத்திருங்கள்.",
    "adjustCameraSubject": "பணியிடம் தெரியும்படி கேமராவை சரிசெய்யவும்.",
    "workspaceReady": "பணியிடம் தயாராக உள்ளது. பயிற்சியைத் தொடங்குங்கள்.",
    "keepPracticingAWhile": "மதிப்பாய்வு செய்ய இன்னும் சில வினாடிகள் பயிற்சியைத் தொடருங்கள்.",
    "observingTechnique": "உங்கள் நுட்பம் கவனிக்கப்படுகிறது... வேகத்தை சீராக வைத்திருங்கள்.",
    "handMovementConsistent": "கை அசைவுகள் சீராக உள்ளன. பயிற்சியைத் தொடருங்கள்.",
    "braidHandMovement": "கைகளும் கூந்தலும் திரையில் உள்ளன. பின்னலைத் தொடங்குங்கள்.",
    "braidMoreSeconds": "இன்னும் சில வினாடிகள் பின்னலைத் தொடருங்கள்.",
    "braidAlternating": "கை அசைவு சீரானது. மாற்று முறையைத் தொடருங்கள்.",
    "braidSteadyTension": "கை நிலை கவனிக்கப்படுகிறது. மூன்று இழைகளிலும் சமமான பதற்றத்தை வைத்திருங்கள்.",
    "solidCoverage": "மேற்பரப்பில் சீரான வண்ணப் பூச்சு.",
    "goodMPattern": "கோடுகள் இல்லாமல் நல்ல தொடர்ச்சியான முறை.",
    "stayWithinTape": "டேப் எல்லைக்குள் சரியாக முடிக்கப்பட்டது.",
    "backrollLighter": "பளபளப்பை சமன் செய்ய கடைசி பூச்சை மென்மையாக உருட்டவும்.",
    "goodFingerPlacement": "விளிம்பிலிருந்து விரல்களின் பாதுகாப்பான இடைவெளி.",
    "evenLayer": "விளிம்புகளில் தேங்காமல் சீரான அடுக்கு."
  },
  "results": {
    "sessionSummary": "பயிற்சி முடிந்தது!",
    "practiceComplete": "பயிற்சி முடிந்தது",
    "techniqueSummary": "நுட்ப சுருக்கம்",
    "incompleteObservation": "முழுமையற்ற கவனிப்பு",
    "visualEvidenceRecorded": "காட்சி ஆதாரம் பதிவு செய்யப்பட்டது",
    "formScore": "நுட்ப மதிப்பீட்டு மதிப்பெண்",
    "techniqueScore": "ஒட்டுமொத்த நுட்ப மதிப்பெண்",
    "metricsTitle": "செயல்திறன் முறிவு",
    "strengthsTitle": "சிறப்பான அம்சங்கள்",
    "improvementsTitle": "மேம்படுத்த வேண்டியவை",
    "safetyTitle": "பாதுகாப்பு & தோரணை குறிப்புகள்",
    "practiceAgain": "மீண்டும் பயிற்சி செய்",
    "viewProgress": "முழு முன்னேற்றத்தைப் பார்",
    "home": "முகப்புக்குச் செல்",
    "savedLocally": "அமர்வு உங்கள் சாதனத்தில் சேமிக்கப்பட்டது",
    "noSessionFound": "பயிற்சி அமர்வு எதுவும் கிடைக்கவில்லை",
    "noSessionFoundDesc": "உங்கள் மதிப்பீட்டைக் காண கேமராவுடன் ஒரு பயிற்சி அமர்வை முடிக்கவும்.",
    "browseSkills": "திறன்களைப் பார்",
    "whyNoScore": "மதிப்பெண் ஏன் இல்லை?",
    "whyNoScoreDesc": "பயிற்சியின் போது உங்கள் கைகளும் பணியிடமும் தொடர்ந்து தெரியும் போது மட்டுமே SkillLens நுட்பத்தை மதிப்பிடுகிறது.",
    "observedFor": "{{seconds}} வினாடிகள் கவனிக்கப்பட்டது · சாதனத்தில் சேமிக்கப்பட்டது",
    "consistentTechnique": "படிகள் முழுவதும் நிலையான நுட்பம் கவனிக்கப்பட்டது",
    "practiceCompletedKeepGoing": "பயிற்சி முடிந்தது — தொடர்ந்து பயிற்சி செய்யுங்கள்",
    "notEnoughVisualData": "நுட்பத்தை மதிப்பிட போதுமான காட்சித் தரவு இல்லை"
  },
  "progress": {
    "title": "எனது முன்னேற்றம்",
    "subtitle": "முடிக்கப்பட்ட பாடங்கள், பயிற்சி தொடர்ச்சி மற்றும் தேர்ச்சியைக் கண்காணியுங்கள்.",
    "skillsLearning": "கற்கும் திறன்கள்",
    "skillsCompleted": "முடித்த திறன்கள்",
    "practiceSessions": "பயிற்சி அமர்வுகள்",
    "currentStreak": "தொடர் நாட்கள்",
    "averageScore": "சராசரி மதிப்பெண்",
    "progressionTrend": "மதிப்பெண் முன்னேற்றம்",
    "recentSessions": "சமீபத்திய பயிற்சி வரலாறு",
    "noSessionsYet": "பயிற்சி வரலாறு எதுவும் இல்லை.",
    "categoriesProgress": "பிரிவு வரம்பு",
    "earnedBadges": "திறன் பேட்ஜ்கள்",
    "activeCourses": "செயலில் உள்ள படிப்புகள்",
    "passedBenchmarks": "தேர்ச்சி பெற்ற மைல்கற்கள்",
    "recordedSessions": "பதிவான அமர்வுகள்",
    "activeStreak": "செயலில் உள்ள தொடர்",
    "categoryCoverage": "பிரிவு வாரியான பயிற்சி வரம்பு",
    "practiceASkill": "ஒரு திறனைப் பயிற்சி செய்",
    "unlocked": "திறக்கப்பட்டது",
    "locked": "பூட்டப்பட்டது",
    "badges": {
      "firstDrillTitle": "முதல் பயிற்சி",
      "firstDrillDesc": "உங்கள் முதல் நேரடி அமர்வை முடித்துவிட்டீர்கள்",
      "steadyStreakTitle": "நிலையான கற்றல்",
      "steadyStreakDesc": "தொடர்ந்து 3+ நாட்கள் பயிற்சி தொடரைப் பராமரித்தீர்கள்",
      "craftVirtuosoTitle": "வடிவமைப்பில் தேர்ச்சி",
      "craftVirtuosoDesc": "85% க்கும் அதிகமான ஒட்டுமொத்த மதிப்பெண் பெற்றீர்கள்",
      "versatileMakerTitle": "பன்முகத் திறன் ஆய்வாளர்",
      "versatileMakerDesc": "குறைந்தது 3 பிரிவுகளில் பயிற்சி செய்துள்ளீர்கள்"
    }
  },
  "profile": {
    "title": "சுயவிவரம் & அமைப்புகள்",
    "subtitle": "விருப்பத்தேர்வுகள், கேமரா பயிற்சி மற்றும் மொழியை நிர்வகிக்கவும்.",
    "learnerLevel": "திறன் பயிற்சியாளர்",
    "selectLanguage": "மொழி / Language / भाषा",
    "appSettings": "AI பயிற்சி விருப்பத்தேர்வுகள்",
    "feedbackFrequency": "கருத்து அதிர்வெண்",
    "continuous": "தொடர்ச்சியானது (அதிகம்)",
    "periodic": "குறிப்பிட்ட இடைவெளியில் (15 வினாடிகள்)",
    "low": "முடிவில் மட்டும்",
    "visionSensitivity": "கண்காணிப்பு உணர்திறன்",
    "normal": "சீரானது",
    "high": "அதிக துல்லியம்",
    "relaxed": "இயல்பானது",
    "audioCoaching": "குரல் வழிகாட்டுதல்",
    "audioCoachingDesc": "கை சீரமைப்புக்கான குரல் குறிப்புகள் (UI மாதிரி)",
    "dataManagement": "தரவு மேலாண்மை",
    "resetData": "உள்ளூர் தரவை மீட்டமை",
    "resetConfirm": "உங்கள் பயிற்சி வரலாற்றை நிச்சயமாக அழிக்க விரும்புகிறீர்களா?",
    "dataResetSuccess": "அனைத்து உள்ளூர் தரவுகளும் மீட்டமைக்கப்பட்டன.",
    "version": "SkillLens v1.0.0 (iQOO Hackathon Edition)",
    "accountDetails": "கணக்கு விவரங்கள்",
    "email": "மின்னஞ்சல்",
    "memberSince": "சேர்ந்த நாள்",
    "practiceOverview": "பயிற்சி கண்ணோட்டம்",
    "craftVirtuoso": "வடிவமைப்பில் தேர்ச்சி",
    "appearance": "தோற்றம்",
    "themeMode": "டார்க் மோட்"
  },
  "categories": {
    "cat-1": {
      "name": "பெயிண்டிங் & அலங்காரம்",
      "description": "சுவர் பூச்சு, ரோலர் ஸ்ட்ரோக் நிலைத்தன்மை மற்றும் அலங்கார கலைகளைக் கற்றுக்கொள்ளுங்கள்."
    },
    "cat-2": {
      "name": "தையல் & ஃபேஷன்",
      "description": "ஊசி சீரமைப்பு, தையல் இடைவெளி மற்றும் ஆடை பழுதுபார்ப்பில் தேர்ச்சி பெறுங்கள்."
    },
    "cat-3": {
      "name": "குரோஷே & கைவினைப் பொருட்கள்",
      "description": "லூப் பதற்றம், தையல் தாளம் மற்றும் கைவினைப் பின்னல் முறைகளைக் கற்றுக்கொள்ளுங்கள்."
    },
    "cat-4": {
      "name": "மட்பாண்டக் கலை & செராமிக்ஸ்",
      "description": "சக்கர சீரமைப்பு, கை அழுத்த சமநிலை மற்றும் களிமண் வடிவமைப்பு பயிற்சி."
    },
    "cat-5": {
      "name": "அழகு, சருமப் பராமரிப்பு & மேக்கப்",
      "description": "கிரீம் பயன்பாடு, பிரஷ் பிளெண்டிங் மற்றும் நெயில் பாலிஷ் துல்லியத்தைக் கற்றுக்கொள்ளுங்கள்."
    },
    "cat-6": {
      "name": "கூந்தல் & ஸ்டைலிங்",
      "description": "முடி பிரித்தல் துல்லியம், ஜடை பின்னுதல் மற்றும் கர்லிங் நுட்பங்கள்."
    },
    "cat-7": {
      "name": "தோட்டக்கலை & தாவரங்கள்",
      "description": "மண் தயாரித்தல், விதை நடுதல், கவாத்து மற்றும் செடி பராமரிப்பு முறைகள்."
    },
    "cat-8": {
      "name": "சமையல் & உணவு அலங்காரம்",
      "description": "கத்தி பிடிப்பு முறை, காய்கறி நறுக்குதல் மற்றும் உணவு அலங்கரிப்பு நுட்பங்கள்."
    },
    "cat-9": {
      "name": "சுய பராமரிப்பு & வீட்டு மேம்பாடு",
      "description": "துளையிடும் கோணம், ஸ்க்ரூ பொருத்துதல் மற்றும் மட்ட அளவீடு முறைகள்."
    },
    "cat-10": {
      "name": "படைப்பாற்றல் & அலங்கார கைவினை",
      "description": "காகித மடிப்பு கலை, ரெசின் ஊற்றுதல் மற்றும் பண்டிகை அலங்காரங்கள்."
    }
  },
  "skillsData": {
    "skill-wall-painting": {
      "name": "சுவர் பெயிண்டிங்",
      "description": "ரோலர் மூலம் சீரான வண்ணம் பூசுதல் மற்றும் விளிம்பு துல்லியம்."
    },
    "skill-roller-painting": {
      "name": "ரோலர் பெயிண்டிங்",
      "description": "முக்கிய பயிற்சி: ரோலர் ஸ்ட்ரோக் நிலைத்தன்மை, சரியான ஒன்றுடன் ஒன்று சேர்தல் மற்றும் விளிம்பு துல்லியம்."
    },
    "skill-edge-painting": {
      "name": "అంచుల పెయింటింగ్",
      "description": "సీలింగ్ లైన్లు మరియు బోర్డర్ల వెంబడి బ్రష్ నియంత్రణతో స్పష్టమైన అంచులను గీయండి."
    },
    "skill-crack-filling": {
      "name": "పగుళ్లు పూడ్చడం",
      "description": "పుట్టీ నైఫ్‌తో పగుళ్లను పూడ్చి, పెయింటింగ్ కోసం ఉపరితలాన్ని నునుపుగా సిద్ధం చేయండి."
    },
    "skill-mandala-painting": {
      "name": "మండల పెయింటింగ్",
      "description": "డాటింగ్ టూల్స్‌తో ఖచ్చితమైన వృత్తాకార నమూనాలు మరియు చుక్కల అమరికను సాధన చేయండి."
    },
    "skill-canvas-painting": {
      "name": "కాన్వాస్ పెయింటింగ్",
      "description": "కాన్వాస్ బోర్డుపై బ్రష్ స్ట్రోక్స్ మరియు రంగుల కలయిక ద్వారా చిత్రకళను నేర్చుకోండి."
    },
    "skill-diy-home-decoration": {
      "name": "గృహ అలంకరణ కళ",
      "description": "గోడలపై స్టెన్సిల్స్ మరియు టేప్ ఉపయోగించి రేఖాగణిత డిజైన్లను రూపొందించండి."
    },
    "skill-straight-stitching": {
      "name": "நேர் தையல்",
      "description": "துணியை இழுக்காமல் நேர்கோட்டில் சீராகத் தைக்கும் முறை."
    },
    "skill-hemming": {
      "name": "హెమ్మింగ్ (అంచుల మడత)",
      "description": "దుస్తుల క్రింది అంచులను సమానంగా మడిచి సున్నితంగా కుట్టడం నేర్చుకోండి."
    },
    "skill-seam-alignment": {
      "name": "సీమ్ అమరిక",
      "description": "రెండు వస్త్ర భాగాలను కలిపి కుట్టేటప్పుడు అంచులు సరిగ్గా సమానంగా ఉండేలా చూడండి."
    },
    "skill-button-stitching": {
      "name": "బటన్ కుట్టడం",
      "description": "బటన్‌ను వస్త్రానికి గట్టిగా ఉండేలా క్రాస్-స్టిచ్ పద్ధతిలో కుట్టడం."
    },
    "skill-hand-embroidery": {
      "name": "చేతి ఎంబ్రాయిడరీ",
      "description": "ఫ్రెంచ్ నాట్, శాటిన్ స్టిచ్ మరియు కాండం కుట్టులతో వస్త్రాలపై డిజైన్లు చేయడం."
    },
    "skill-basic-clothing-repair": {
      "name": "దుస్తుల ప్రాథమిక మరమ్మత్తు",
      "description": "చిరిగిన కుట్లు సరిచేయడం మరియు అదృశ్య కుట్టుతో వస్త్రాలను బాగు చేయడం."
    },
    "skill-crochet-chain": {
      "name": "క్రోచెట్ ఫౌండేషన్ చైన్",
      "description": "సమాన బిగుతుతో ప్రాథమిక క్రోచెట్ చైన్ వేయడం నేర్చుకోండి."
    },
    "skill-single-crochet": {
      "name": "సింగిల్ క్రోచెట్",
      "description": "దట్టమైన మరియు బలమైన నేత కోసం సింగిల్ క్రోచెట్ పద్ధతిని సాధన చేయండి."
    },
    "skill-double-crochet": {
      "name": "డబుల్ క్రోచెట్",
      "description": "ఎత్తు కలిగిన కుట్లు వేయడానికి యార్న్ ఓవర్ మరియు లూప్ నియంత్రణ."
    },
    "skill-granny-square": {
      "name": "గ్రానీ స్క్వేర్",
      "description": "మూలల నిర్మాణం, క్లస్టర్ స్టిచెస్ మరియు చతురస్రాకార క్రోచెట్ నమూనా."
    },
    "skill-crochet-flower": {
      "name": "క్రోచెట్ పువ్వు",
      "description": "రేకులు మరియు అందమైన 3D క్రోచెట్ పువ్వుల రూపకల్పన."
    },
    "skill-crochet-bag": {
      "name": "క్రోచెట్ బ్యాగ్",
      "description": "బలమైన హ్యాండిల్స్ మరియు బేస్ కలిగిన క్రోచెట్ బ్యాగ్ తయారు చేయడం."
    },
    "skill-basic-amigurumi": {
      "name": "అమిగురుమి (బొమ్మల తయారీ)",
      "description": "మ్యాజిక్ రింగ్ మరియు గుండ్రటి క్రోచెట్ అల్లికతో బొమ్మలు చేయడం."
    },
    "skill-clay-kneading": {
      "name": "మట్టి పిసకడం (వెడ్జింగ్)",
      "description": "గాలి బుడగలు తొలగించి మట్టిని మెత్తగా సమానంగా మార్చే ప్రక్రియ."
    },
    "skill-clay-centering": {
      "name": "చక్రంపై మట్టిని సెంటర్ చేయడం",
      "description": "తిరిగే చక్రం మధ్యలో మట్టిని కదలకుండా సమతుల్యం చేయడం."
    },
    "skill-pot-shaping": {
      "name": "மண்பானை வடிவமைத்தல்",
      "description": "கை விரல்களின் அழுத்தத்தால் களிமண் சுவர்களை உயர்த்தி வடிவம் கொடுங்கள்."
    },
    "skill-rim-shaping": {
      "name": "రిమ్ ఆకృతి",
      "description": "కుండ పైభాగాన్ని లేదా అంచును నునుపుగా సమానంగా చేయడం."
    },
    "skill-surface-smoothing": {
      "name": "ఉపరితలం నునుపు చేయడం",
      "description": "రిబ్ టూల్ సహాయంతో మట్టి ఉపరితలాన్ని నునుపుగా మార్చడం."
    },
    "skill-handle-making": {
      "name": "హ్యాండిల్ తయారీ",
      "description": "కప్పులకు లేదా పాత్రలకు పట్టుకునే పిడి తయారు చేసి గట్టిగా అతికించడం."
    },
    "skill-ceramic-painting": {
      "name": "సిరామిక్ పెయింటింగ్",
      "description": "మట్టి పాత్రలపై రంగులు మరియు మెరిసే గ్లేజ్ డిజైన్లు వేయడం."
    },
    "skill-face-cleansing": {
      "name": "ఫేస్ క్లెన్సింగ్ పద్ధతి",
      "description": "గుండ్రటి కదలికలతో ముఖాన్ని సున్నితంగా శుభ్రపరిచే సరైన పద్ధతి."
    },
    "skill-moisturizer-application": {
      "name": "మాయిశ్చరైజర్ రాయడం",
      "description": "పై దిశగా సున్నితంగా మర్దన చేస్తూ చర్మానికి తేమను అందించడం."
    },
    "skill-sunscreen-application": {
      "name": "సన్‌స్క్రీన్ అప్లికేషన్",
      "description": "రెండు వేళ్ళ కొలతతో ముఖం మరియు మెడపై సన్‌స్క్రీన్ సమంగా పూయడం."
    },
    "skill-face-mask-application": {
      "name": "ఫేస్ మాస్క్ వేయడం",
      "description": "బ్రష్‌తో కళ్ళ చుట్టూ కాకుండా ముఖంపై ఫేస్ ప్యాక్ సమంగా వేయడం."
    },
    "skill-foundation-application": {
      "name": "ఫౌండేషన్ బ్లెండింగ్",
      "description": "స్పాంజితో ముఖంపై ఫౌండేషన్‌ను సహజసిద్ధంగా బ్లెండ్ చేయడం."
    },
    "skill-concealer-application": {
      "name": "కన్సీలర్ అప్లికేషన్",
      "description": "కళ్ళ క్రింద నల్లటి వలయాలు మరియు మచ్చలను కవర్ చేసే ఖచ్చితమైన పద్ధతి."
    },
    "skill-eyeliner-application": {
      "name": "ఐలైనర్ అప్లికేషన్",
      "description": "స్థిరమైన చేతితో కళ్ళ అంచులకు సమానమైన వింగ్డ్ ఐలైనర్ వేయడం."
    },
    "skill-nail-polish-application": {
      "name": "நெயில் பாலிஷ் பூசுதல்",
      "description": "மூன்று ஸ்ட்ரோக் விதி மூலம் நகங்களில் சீராக பாலிஷ் பூசுங்கள்."
    },
    "skill-basic-nail-art": {
      "name": "ప్రాథమిక నెయిల్ ఆర్ట్",
      "description": "డాటింగ్ టూల్ మరియు బ్రష్‌తో గోళ్ళపై నమూనాలు మరియు పువ్వులు వేయడం."
    },
    "skill-hair-sectioning": {
      "name": "జుట్టు విభజన (సెక్షనింగ్)",
      "description": "దువ్వెన మరియు క్లిప్పులతో జుట్టును నాలుగు భాగాలుగా సమానంగా విభజించడం."
    },
    "skill-hair-braiding": {
      "name": "ஜடை பின்னுதல் (3-பிரிவு)",
      "description": "முடியை மூன்று சம பாகங்களாகப் பிரித்து சீரான பதற்றத்துடன் பின்னவும்."
    },
    "skill-blow-drying": {
      "name": "బ్లో-డ్రైయింగ్ పద్ధతి",
      "description": "రౌండ్ బ్రష్ మరియు డ్రైయర్‌తో జుట్టును చిక్కులు లేకుండా ఎండబెట్టడం."
    },
    "skill-basic-hair-styling": {
      "name": "ప్రాథమిక హెయిర్ స్టైలింగ్ (పోనీటైల్/ముడి)",
      "description": "నునుపైన పోనీటైల్ మరియు అందమైన ముడి వేసే పద్ధతి."
    },
    "skill-hair-curling": {
      "name": "జుట్టు కర్లింగ్",
      "description": "కర్లింగ్ ఐరన్‌తో ముఖానికి దూరంగా కర్ల్స్ చేస్తూ అందమైన వేవ్స్ చేయడం."
    },
    "skill-hair-straightening": {
      "name": "హెయిర్ స్ట్రెయిటెనింగ్",
      "description": "స్ట్రెయిట్‌నర్ సహాయంతో జుట్టును నిదానంగా స్ట్రెయిట్ చేయడం."
    },
    "skill-potting": {
      "name": "కుండీలో మొక్క నాటడం",
      "description": "డ్రైనేజీ రంధ్రాలు చూసుకుని వేర్ల చుట్టూ మట్టిని సరిగ్గా నింపడం."
    },
    "skill-seed-planting": {
      "name": "విత్తనాలు నాటడం",
      "description": "సరైన లోతులో విత్తనాలు నాటి నేలలో తేమను కాపాడటం."
    },
    "skill-soil-preparation": {
      "name": "మట్టి మిశ్రమం తయారీ",
      "description": "ఎరువు మరియు కోకోపీట్ కలిపి మొక్కల పెరుగుదలకు పోషక మట్టి సిద్ధం చేయడం."
    },
    "skill-pruning": {
      "name": "మొక్కల కత్తిరింపు (ప్రూనింగ్)",
      "description": "ఎండిన కొమ్మలను 45 డిగ్రీల కోణంలో కత్తిరించి కొత్త చిగుళ్ళను ప్రోత్సహించడం."
    },
    "skill-repotting": {
      "name": "మొక్కను పెద్ద కుండీలోకి మార్చడం",
      "description": "వేర్లను పాడుచేయకుండా పెద్ద కుండీలోకి మార్చే సురక్షిత పద్ధతి."
    },
    "skill-plant-propagation": {
      "name": "కొమ్మల ద్వారా మొక్కల ఉత్పత్తి",
      "description": "నోడ్ క్రింద కొమ్మను కత్తిరించి నీటిలో లేదా మట్టిలో వేర్లు రప్పించడం."
    },
    "skill-plant-support": {
      "name": "మొక్కలకు ఆధారం ఇవ్వడం",
      "description": "కాండం వంగిపోకుండా కర్రలతో సున్నితంగా కట్టి ఆధారం కల్పించడం."
    },
    "skill-knife-handling": {
      "name": "కత్తిని పట్టుకునే పద్ధతి",
      "description": "చేతి వేళ్ళు కోసుకోకుండా క్లా గ్రిప్ ద్వారా సురక్షితంగా కూరగాయలు కోయడం."
    },
    "skill-vegetable-chopping": {
      "name": "காய்கறி நறுக்குதல்",
      "description": "பாதுகாப்பான கைப்பிடியுடன் காய்கறிகளை சீரான அளவில் நறுக்குங்கள்."
    },
    "skill-dough-kneading": {
      "name": "పిండి పిసకడం",
      "description": "చేతి మడమలతో పిండిని సాగదీస్తూ మెత్తటి ముద్దగా సిద్ధం చేయడం."
    },
    "skill-dough-rolling": {
      "name": "చపాతీ లేదా పిండి రుద్దడం",
      "description": "రోలింగ్ పిన్‌తో మధ్య నుండి అంచుల వరకు సమానంగా గుండ్రంగా రుద్దడం."
    },
    "skill-cake-decoration": {
      "name": "కేక్ అలంకరణ",
      "description": "పైపింగ్ బ్యాగ్‌తో కేక్ మీద పువ్వులు మరియు అందమైన డిజైన్లు వేయడం."
    },
    "skill-food-plating": {
      "name": "ఆహార ప్లేటింగ్ & ప్రెజెంటేషన్",
      "description": "రెస్టారెంట్ శైలిలో రంగులు మరియు సాస్‌లతో ఆహారాన్ని అందంగా అమర్చడం."
    },
    "skill-measuring-marking": {
      "name": "కొలవడం మరియు మార్కింగ్ చేయడం",
      "description": "కొలత టేప్ మరియు రూలర్‌తో ఖచ్చితమైన 90 డిగ్రీల కోణంలో కొలతలు గుర్తించడం."
    },
    "skill-screw-fitting": {
      "name": "స్క్రూ బిగించడం",
      "description": "స్క్రూడ్రైవర్ జారకుండా సమాంతరంగా పెట్టి గట్టిగా బిగించడం."
    },
    "skill-furniture-assembly": {
      "name": "ఫర్నిచర్ అమరిక (అసెంబ్లీ)",
      "description": "సూచనల ప్రకారం ఫర్నిచర్ భాగాలను సరైన వరుసలో బిగించడం."
    },
    "skill-sanding": {
      "name": "శాండింగ్ (నునుపు చేయడం)",
      "description": "శాండ్‌పేపర్‌తో చెక్క ఉపరితలాన్ని పొరలు లేకుండా నునుపుగా రుద్దడం."
    },
    "skill-wall-hanging": {
      "name": "గోడకు ఫ్రేములు తగిలించడం",
      "description": "స్పిరిట్ లెవెల్ చూసుకుని గోడకు ఫోటో ఫ్రేములు సమాంతరంగా అమర్చడం."
    },
    "skill-cable-organization": {
      "name": "కేబుల్ నిర్వహణ",
      "description": "వైర్లను క్లిప్పులతో చిక్కులు లేకుండా క్రమపద్ధతిలో అమర్చడం."
    },
    "skill-gift-wrapping": {
      "name": "గిఫ్ట్ ప్యాకింగ్",
      "description": "కాగితపు అంచులను శుభ్రంగా మడిచి అందమైన రిబ్బన్‌తో ప్యాక్ చేయడం."
    },
    "skill-paper-flower-making": {
      "name": "కాగితపు పువ్వుల తయారీ",
      "description": "క్రేప్ పేపర్‌తో అందమైన గులాబీ మరియు అలంకరణ పువ్వులను రూపొందించడం."
    },
    "skill-origami": {
      "name": "ఒరిగామి (కాగితం మడత కళ)",
      "description": "ఖచ్చితమైన మడతల ద్వారా పక్షులు మరియు వివిధ ఆకృతులను చేయడం."
    },
    "skill-candle-decoration": {
      "name": "కొవ్వొత్తి అలంకరణ",
      "description": "ఎండిన పూలతో కొవ్వొత్తులను అందంగా అలంకరించే కళ."
    },
    "skill-resin-craft": {
      "name": "రెసిన్ క్రాఫ్ట్",
      "description": "రెసిన్ మిశ్రమాన్ని సిద్ధం చేసి బుడగలు లేకుండా కోస్టర్స్ తయారు చేయడం."
    },
    "skill-festive-decoration": {
      "name": "పండుగ అలంకరణ",
      "description": "తీగ ఫ్రేమ్‌పై ఆకులు మరియు పూలతో అందమైన అలంకరణ దండలు చేయడం."
    }
  }
},
  ml: {
  "common": {
    "appName": "SkillLens",
    "tagline": "കൈത്തൊഴിൽ നൈപുണ്യങ്ങൾക്കുള്ള AI പരിശീലകൻ",
    "offlineNotice": "ഓഫ്‌ലൈൻ മോഡ് — നിങ്ങളുടെ പരിശീലന ഡാറ്റ ഈ ഉപകരണത്തിൽ സുരക്ഷിതമാണ്.",
    "home": "ഹോം",
    "skills": "നൈപുണ്യങ്ങൾ",
    "practice": "പരിശീലനം",
    "progress": "പുരോഗതി",
    "profile": "പ്രൊഫൈൽ",
    "learn": "പഠിക്കുക",
    "startPractice": "പരിശീലനം തുടങ്ങുക",
    "continuePractice": "പരിശീലനം തുടരുക",
    "continueLearning": "പഠനം തുടരുക",
    "resumeDrill": "പരിശീലനം പുനരാരംഭിക്കുക",
    "back": "പിന്നോട്ട്",
    "next": "അടുത്തത്",
    "finish": "പൂർത്തിയാക്കുക",
    "skip": "ഒഴിവാക്കുക",
    "save": "സേവ് ചെയ്യുക",
    "cancel": "റദ്ദാക്കുക",
    "loading": "ലോഡുചെയ്യുന്നു...",
    "error": "പിശക്",
    "success": "വിജയം",
    "retry": "വീണ്ടും ശ്രമിക്കുക",
    "viewAll": "എല്ലാം കാണുക",
    "search": "തിരയുക",
    "filter": "ഫിൽട്ടർ",
    "difficulty": "തലം",
    "duration": "സമയം",
    "minutes": "മിനിറ്റ്",
    "all": "എല്ലാം",
    "beginner": "തുടക്കക്കാരൻ",
    "intermediate": "ഇടത്തരം",
    "advanced": "വിദഗ്ദ്ധൻ",
    "signOut": "സൈൻ ഔട്ട്",
    "signIn": "സൈൻ ഇൻ",
    "signUp": "സൈൻ അപ്പ്",
    "days": "ദിവസങ്ങൾ",
    "streak": "സ്ട്രീക്ക്",
    "sessions": "സെഷനുകൾ",
    "mastery": "പ്രാവീണ്യം",
    "activeCourses": "സജീവ കോഴ്സുകൾ",
    "points": "പോയിന്റുകൾ",
    "featured": "പ്രത്യേകമായവ",
    "drills": "പരിശീലനങ്ങൾ",
    "allSkills": "എല്ലാ നൈപുണ്യങ്ങളും",
    "allCategories": "എല്ലാ വിഭാഗങ്ങളും",
    "skillsFound": "നൈപുണ്യങ്ങൾ ലഭ്യമാണ്",
    "noSkillsMatch": "നൈപുണ്യങ്ങൾ ഒന്നും കണ്ടെത്തിയില്ല.",
    "tools": "ഉപകരണങ്ങൾ",
    "materials": "സാമഗ്രികൾ",
    "steps": "ഘട്ടങ്ങൾ",
    "safety": "സുരക്ഷ",
    "tips": "സൂചനകൾ",
    "close": "അടയ്ക്കുക",
    "done": "പൂർത്തിയായി",
    "confirm": "സ്ഥിരീകരിക്കുക",
    "delete": "മായ്ക്കുക",
    "edit": "മാറ്റം വരുത്തുക",
    "seconds": "സെക്കൻഡുകൾ"
  },
  "nav": {
    "home": "ഹോം",
    "skills": "നൈപുണ്യങ്ങൾ",
    "practice": "പരിശീലനം",
    "progress": "പുരോഗതി",
    "profile": "പ്രൊഫൈൽ",
    "learn": "പഠിക്കുക",
    "signOut": "സൈൻ ഔട്ട്"
  },
  "auth": {
    "signIn": "സൈൻ ഇൻ",
    "signUp": "സൈൻ അപ്പ്",
    "email": "ഇമെയിൽ",
    "password": "പാസ്‌വേഡ്",
    "confirmPassword": "പാസ്‌വേഡ് സ്ഥിരീകരിക്കുക",
    "forgotPassword": "പാസ്‌വേഡ് മറന്നോ?",
    "createAccount": "അക്കൗണ്ട് നിർമ്മിക്കുക",
    "alreadyHaveAccount": "ഇതിനകം അക്കൗണ്ടുണ്ടോ?",
    "dontHaveAccount": "അക്കൗണ്ട് ഇല്ലേ?",
    "invalidEmail": "സാധുവായ ഇമെയിൽ വിലാസം നൽകുക.",
    "passwordRequired": "പാസ്‌വേഡ് നൽകുക.",
    "passwordMismatch": "പാസ്‌വേഡുകൾ പൊരുത്തപ്പെടുന്നില്ല.",
    "loginSuccess": "സൈൻ ഇൻ വിജയകരം!",
    "accountCreated": "അക്കൗണ്ട് വിജയകരമായി നിർമ്മിച്ചു!",
    "logout": "സൈൻ ഔട്ട്",
    "sessionMessages": "വിജയകരമായി സൈൻ ഇൻ ചെയ്തു.",
    "welcomeBack": "സ്വാഗതം",
    "signInSubtitle": "പഠനവും നൈപുണ്യ വികസനവും തുടരുക.",
    "createAccountSubtitle": "തത്സമയ AI മാർഗ്ഗനിർദ്ദേശത്തോടെ പ്രായോഗിക നൈപുണ്യങ്ങൾ പഠിക്കാൻ SkillLens-ൽ ചേരുക.",
    "fullName": "പൂർണ്ണമായ പേര്",
    "fullNamePlaceholder": "ഉദാ. അലക്സ് വാൻസ്",
    "emailPlaceholder": "you@example.com",
    "passwordPlaceholder": "••••••••",
    "confirmPasswordPlaceholder": "••••••••",
    "quickDemo": "ഡെമോ ലോഗിൻ",
    "resetPassword": "പാസ്‌വേഡ് റീസെറ്റ് ചെയ്യുക",
    "resetPasswordSubtitle": "പാസ്‌വേഡ് റീസെറ്റ് നിർദ്ദേശങ്ങൾ ലഭിക്കാൻ ഇമെയിൽ നൽകുക.",
    "sendResetLink": "നിർദ്ദേശങ്ങൾ അയയ്ക്കുക",
    "backToSignIn": "സൈൻ ഇന്നിലേക്ക് മടങ്ങുക",
    "resetSuccessMessage": "പാസ്‌വേഡ് റീസെറ്റ് നിർദ്ദേശങ്ങൾ അയച്ചു.",
    "passwordMinLength": "പാസ്‌വേഡിൽ കുറഞ്ഞത് 6 അക്ഷരങ്ങൾ ഉണ്ടായിരിക്കണം.",
    "fillAllFields": "എല്ലാ വിവരങ്ങളും പൂരിപ്പിക്കുക.",
    "loginFailed": "ഇമെയിലോ പാസ്‌വേഡോ തെറ്റാണ്.",
    "registerFailed": "അക്കൗണ്ട് നിർമ്മിക്കാൻ കഴിഞ്ഞില്ല. വീണ്ടും ശ്രമിക്കുക."
  },
  "landing": {
    "tagline": "പ്രായോഗിക നൈപുണ്യ പഠന ആപ്പ്",
    "badge": "ഇന്ററാക്ടീവ് പ്രാക്ടീസ് കോച്ച്",
    "headline": "തത്സമയ AI മാർഗ്ഗനിർദ്ദേശത്തോടെ പ്രായോഗിക നൈപുണ്യങ്ങളിൽ പ്രാവീണ്യം നേടുക",
    "subheadline": "ഫോൺ ക്യാമറ സജ്ജീകരിക്കുക. SkillLens നിങ്ങളുടെ ചലനങ്ങളും വിദ്യകളും വിശകലനം ചെയ്ത് തത്സമയ മാർഗ്ഗനിർദ്ദേശം നൽകുന്നു.",
    "getStarted": "സൗജന്യമായി ആരംഭിക്കുക",
    "viewSkills": "67 നൈപുണ്യങ്ങൾ കാണുക",
    "whyTitle": "യഥാർത്ഥ പഠനത്തിനായി രൂപകൽപ്പന ചെയ്തത്",
    "whyDesc": "പെയിന്റിംഗ്, തയ്യൽ, ക്രോഷെ മുതൽ മേക്കപ്പ് വരെ - തെറ്റുകൾ ശീലമാകുന്നതിന് മുൻപ് തിരുത്തുക.",
    "previewTitle": "പ്രധാന നൈപുണ്യങ്ങൾ കണ്ടെത്തുക",
    "previewSubtitle": "AI വിഷൻ വിശകലനവും ഘട്ടങ്ങളായുള്ള മാർഗ്ഗനിർദ്ദേശവും അടങ്ങിയ പരിശീലന മൊഡ്യൂളുകൾ.",
    "features": {
      "watch": "ക്യാമറ മാർഗ്ഗനിർദ്ദേശം",
      "watchDesc": "കൈകൾ വ്യക്തമായി കാണാവുന്ന തരത്തിൽ ഫോൺ ഉറപ്പിച്ചു വയ്ക്കുക.",
      "correct": "തത്സമയ നിർദ്ദേശങ്ങൾ",
      "correctDesc": "ചലനങ്ങളിലും കോണുകളിലും തത്സമയ തിരുത്തലുകൾ നേടുക.",
      "track": "വ്യക്തമായ പുരോഗതി",
      "trackDesc": "ഓരോ പരിശീലനത്തിലും നിങ്ങളുടെ സാങ്കേതിക സ്കോർ ഉയരുന്നത് കാണുക."
    }
  },
  "onboarding": {
    "step1Title": "1. ഒരു നൈപുണ്യം തിരഞ്ഞെടുക്കുക",
    "step1Desc": "പെയിന്റിംഗ്, തയ്യൽ, മൺപാത്ര നിർമ്മാണം, പാചകം എന്നിവയുൾപ്പെടെ 67 നൈപുണ്യങ്ങളിൽ നിന്ന് തിരഞ്ഞെടുക്കുക.",
    "step2Title": "2. ഫോൺ ക്യാമറ സജ്ജീകരിക്കുക",
    "step2Desc": "കൈകളും ഉപകരണങ്ങളും ഫ്രെയിമിൽ വരുന്ന തരത്തിൽ ഫോൺ ഉറപ്പിച്ചു വയ്ക്കുക.",
    "step3Title": "3. പരിശീലിക്കുക, നിർദ്ദേശങ്ങൾ നേടുക",
    "step3Desc": "SkillLens നിങ്ങളുടെ ചലനങ്ങളും കൃത്യതയും നിരീക്ഷിച്ച് പരിശീലനം നൽകുന്നു.",
    "next": "അടുത്തത്",
    "back": "പിന്നോട്ട്",
    "finish": "പരിശീലനം തുടങ്ങുക",
    "skip": "ഹോമിലേക്ക് പോകുക"
  },
  "home": {
    "greetingMorning": "സുപ്രഭാതം, {{name}}",
    "greetingDay": "നമസ്കാരം, {{name}}",
    "greetingEvening": "ശുഭസായാഹ്നം, {{name}}",
    "whatToLearn": "ഇന്ന് നിങ്ങൾ എന്താണ് പഠിക്കാൻ ആഗ്രഹിക്കുന്നത്?",
    "streakLabel": "പ്രതിദിന സ്ട്രീക്ക്",
    "daysStreak": "ദിവസങ്ങൾ സജീവം",
    "daysActive": "ദിവസങ്ങൾ",
    "readinessScore": "മൊത്തം സാങ്കേതിക സ്കോർ",
    "overallReadiness": "മൊത്തത്തിലുള്ള സന്നദ്ധത സ്കോർ",
    "scoreSubtitle": "ക്യാമറ പരിശോധനകളുടെ അടിസ്ഥാനത്തിൽ",
    "continuePractice": "പരിശീലനം തുടരുക",
    "continueLearning": "പഠനം തുടരുക",
    "resumeCta": "പരിശീലനം പുനരാരംഭിക്കുക",
    "recommendedSkills": "ശുപാർശ ചെയ്യുന്ന പരിശീലനങ്ങൾ",
    "recommendedSubtitle": "കൈത്തഴക്കം വർദ്ധിപ്പിക്കാനുള്ള പ്രധാന പരിശീലനങ്ങൾ",
    "recentFeedback": "സമീപകാല നിർദ്ദേശങ്ങൾ",
    "latestInsights": "ഏറ്റവും പുതിയ AI വിവരങ്ങൾ",
    "noRecentFeedback": "പരിശീലനങ്ങളൊന്നും പൂർത്തിയായിട്ടില്ല. ഒരു നൈപുണ്യം തിരഞ്ഞെടുക്കുക!",
    "exploreCategories": "വിഭാഗങ്ങൾ കണ്ടെത്തുക",
    "exploreCategoriesSubtitle": "10 ശാഖകളിലായി വിപുലമായ പഠനം",
    "viewAll": "എല്ലാ 67 നൈപുണ്യങ്ങളും കാണുക",
    "quickSummary": "സെഷൻ സംഗ്രഹം",
    "viewFullHistory": "പൂർണ്ണ ചരിത്രം കാണുക →",
    "score": "സ്കോർ",
    "sessionsRecorded": "സെഷനുകൾ",
    "skillsCount": "നൈപുണ്യങ്ങൾ",
    "mastery": "പ്രാവീണ്യം"
  },
  "skills": {
    "title": "നൈപുണ്യ ലൈബ്രറി",
    "subtitle": "ഘട്ടങ്ങളായുള്ള ക്ലാസുകളും ക്യാമറ പരിശീലനങ്ങളും കണ്ടെത്തുക.",
    "searchPlaceholder": "നൈപുണ്യങ്ങൾ, ഉപകരണങ്ങൾ തിരയുക...",
    "allCategories": "എല്ലാ വിഭാഗങ്ങളും",
    "allSkillsCount": "എല്ലാ നൈപുണ്യങ്ങളും ({{count}})",
    "skillsFound": "നൈപുണ്യങ്ങൾ ലഭ്യമാണ്",
    "noSkillsMatch": "നൈപുണ്യങ്ങൾ ഒന്നും കണ്ടെത്തിയില്ല.",
    "difficulty": "തലം",
    "duration": "സമയം",
    "filterBy": "ഫിൽട്ടർ",
    "featured": "പ്രത്യേകമായവ",
    "browseCatalog": "67 പ്രായോഗിക പാഠങ്ങൾ കാണുക",
    "all": "എല്ലാം"
  },
  "skillDetail": {
    "difficulty": "കാഠിന്യ നില",
    "duration": "പരിശീലന സമയം",
    "toolsNeeded": "ആവശ്യമായ ഉപകരണങ്ങളും സാമഗ്രികളും",
    "stepByStep": "ഘട്ടങ്ങൾ",
    "safetyFirst": "സുരക്ഷാ നിർദ്ദേശങ്ങൾ",
    "cameraTips": "ക്യാമറ സ്ഥാപിക്കൽ നിർദ്ദേശങ്ങൾ",
    "observableMetrics": "പരിശോധനാ മാനദണ്ഡങ്ങൾ",
    "personalBest": "മികച്ച റെക്കോർഡ്",
    "noScoreYet": "പരിശീലനം ഒന്നും രേഖപ്പെടുത്തിയിട്ടില്ല",
    "startPractice": "പരിശീലനം തുടങ്ങുക",
    "learnStepByStep": "ഘട്ടങ്ങളായി പഠിക്കുക",
    "skincareDisclaimer": "ശ്രദ്ധിക്കുക: SkillLens സാങ്കേതിക പരിശീലനം മാത്രമാണ് നൽകുന്നത്. ഇത് വൈദ്യോപദേശമല്ല.",
    "videoAvailable": "വീഡിയോ ലഭ്യമാണ്",
    "videoAvailableDesc": "യഥാർത്ഥ രീതികളും ഘട്ടങ്ങളും അടങ്ങിയിരിക്കുന്നു",
    "readyToTest": "നിങ്ങളുടെ രീതി പരിശോധിക്കാൻ തയ്യാറാണോ?",
    "readyToTestDesc": "തത്സമയ പരിശോധനയ്ക്കായി ക്യാമറ ഉപയോഗിക്കുക.",
    "mastery": "പ്രാവീണ്യം",
    "whatYouNeed": "ആവശ്യമായവ",
    "overview": "നൈപുണ്യ അവലോകനം"
  },
  "learning": {
    "lesson": "പാഠം",
    "tutorial": "നൈപുണ്യ ട്യൂട്ടോറിയൽ",
    "stepProgress": "പുരോഗതി: ഘട്ടം {{current}} / {{total}}",
    "step": "ഘട്ടം {{current}}",
    "techniqueNote": "പ്രത്യേക നിർദ്ദേശം",
    "whatYouNeed": "ആവശ്യമായവ",
    "commonMistakes": "ഒഴിവാക്കേണ്ട തെറ്റുകൾ",
    "safetyAndWorkspace": "സുരക്ഷയും ജോലിസ്ഥലവും",
    "previousStep": "മുൻപത്തെ ഘട്ടം",
    "nextStep": "അടുത്ത ഘട്ടം",
    "startPractice": "പരിശീലനം തുടങ്ങുക",
    "readyToTest": "രീതി പരിശോധിക്കാൻ തയ്യാറാണോ?",
    "readyToTestDesc": "തത്സമയ നിർദ്ദേശങ്ങൾക്കായി ക്യാമറ ഉപയോഗിക്കുക.",
    "openStudio": "പ്രാക്ടീസ് സ്റ്റുഡിയോ തുറക്കുക"
  },
  "video": {
    "lessonTitle": "വീഡിയോ പാഠം",
    "watchVideo": "വീഡിയോ കാണുക",
    "videoUnavailable": "വീഡിയോ ലഭ്യമല്ല",
    "videoLoading": "വീഡിയോ ലോഡുചെയ്യുന്നു...",
    "videoCompleted": "വീഡിയോ പൂർത്തിയായി",
    "continue": "തുടരുക",
    "previous": "മുൻപത്തെ",
    "next": "അടുത്തത്",
    "markAsComplete": "പൂർത്തിയായതായി അടയാളപ്പെടുത്തുക",
    "startPractice": "പരിശീലനം തുടങ്ങുക",
    "markAsWatched": "കണ്ടതായി അടയാളപ്പെടുത്തുക",
    "openInYouTube": "യൂട്യൂബിൽ കാണുക",
    "fallbackMessage": "വീഡിയോ ലോഡ് ചെയ്യാനായില്ല. താഴെയുള്ള നിർദ്ദേശങ്ങൾ പാലിക്കുക.",
    "demonstration": "വീഡിയോ പ്രദർശനം",
    "noticeEn": "ഇംഗ്ലീഷ് വീഡിയോ",
    "noticeHi": "ഇംഗ്ലീഷ് വീഡിയോ • താഴെ മലയാളം നിർദ്ദേശങ്ങൾ",
    "noticeTe": "ഇംഗ്ലീഷ് വീഡിയോ • താഴെ മലയാളം നിർദ്ദേശങ്ങൾ"
  },
  "practice": {
    "simulatedBadge": "സിമുലേറ്റഡ് AI വിഷൻ സജീവം",
    "simulatedNotice": "സിമുലേഷൻ ഡെമോ: MockVisionAnalyzer വഴി സാങ്കേതിക ഫീഡ്‌ബാക്ക് നൽകുന്നു.",
    "connectingCamera": "ക്യാമറ കണക്റ്റുചെയ്യുന്നു...",
    "cameraAccessDenied": "ക്യാമറ ലഭ്യമല്ല അല്ലെങ്കിൽ അനുമതി നിരസിച്ചു.",
    "enableCameraFallback": "സിമുലേറ്റഡ് ക്യാമറ സജീവമാക്കി.",
    "useSimulatedCamera": "സിമുലേറ്റഡ് ക്യാമറ തിരഞ്ഞെടുക്കുക",
    "liveTechniqueGuidance": "തത്സമയ AI മാർഗ്ഗനിർദ്ദേശം",
    "trackingActive": "കൈകളുടെയും ഉപകരണങ്ങളുടെയും ചലനം നിരീക്ഷിക്കുന്നു",
    "start": "ആരംഭിക്കുക",
    "pause": "താൽക്കാലികമായി നിർത്തുക",
    "resume": "പുനരാരംഭിക്കുക",
    "finishSession": "പരിശീലനം പൂർത്തിയാക്കുക",
    "elapsed": "കഴിഞ്ഞ സമയം",
    "sessionPaused": "പരിശീലനം നിർത്തിവച്ചിരിക്കുന്നു",
    "cameraTips": "ക്യാമറ നിർദ്ദേശങ്ങൾ",
    "targetMetrics": "പരിശോധനാ മാനദണ്ഡങ്ങൾ",
    "coachNotes": "കോച്ച് നിർദ്ദേശങ്ങൾ",
    "visionStatus": "വിഷൻ നില",
    "requestingCamera": "ക്യാമറ അനുമതി ചോദിക്കുന്നു...",
    "grantCameraPrompt": "SkillLens-ന് നിങ്ങളുടെ രീതി പരിശോധിക്കാൻ ക്യാമറ അനുമതി നൽകുക.",
    "switchSimulated": "സിമുലേറ്റഡ് ഫീഡ് ഉപയോഗിക്കുക",
    "retryCamera": "ക്യാമറ വീണ്ടും ശ്രമിക്കുക",
    "keepHandsInFrame": "രണ്ട് കൈകളും ഫ്രെയിമിൽ സൂക്ഷിക്കുക.",
    "adjustLighting": "കൈകൾ വ്യക്തമായി കാണാൻ വെളിച്ചം ക്രമീകരിക്കുക.",
    "sufficientEvidence": "വിഷ്വൽ തെളിവ് രേഖപ്പെടുത്തി",
    "incompleteObservation": "അപൂർണ്ണമായ നിരീക്ഷണം"
  },
  "feedback": {
    "moveSlower": "സ്ഥിരമായ രൂപത്തിനായി കൈകളുടെ ചലനം അല്പം പതുക്കെയാക്കുക.",
    "consistentPressure": "സ്ട്രോക്കുകളിലുടനീളം തുല്യമായ മർദ്ദം നിലനിർത്തി.",
    "firmFooting": "സ്ഥിരതയ്ക്കായി രണ്ട് കാലുകളും ഉറപ്പിച്ചു നിർത്തുക.",
    "goodAnchor": "കൈയുടെ സ്ഥിരമായ പിടി നല്ലൊരു സ്ഥാനമുണ്ടാക്കി.",
    "straightPath": "ഗൈഡ് ലൈനിനുള്ളിൽ തന്നെ നേർരേഖ നിലനിർത്തി.",
    "relaxGrip": "കൈ തളരാതിരിക്കാൻ പിടി അല്പം അയക്കുക.",
    "evenSpacing": "തുന്നലുകൾക്കിടയിൽ തുല്യമായ അകലം നിലനിർത്തി.",
    "smoothTransition": "ചലനങ്ങൾക്കിടയിൽ സുഗമമായ മാറ്റം.",
    "steadyCadence": "ചലനങ്ങളുടെ താളം മികച്ച പരിധിയിലാണ്.",
    "adjustAngle": "ഉപരിതലത്തിന് ലംബമായി ഉപകരണത്തിന്റെ കോൺ ക്രമീകരിക്കുക.",
    "maintainTension": "നൂലുകളിൽ തുല്യമായ മുറുക്കം നിലനിർത്തുക.",
    "watchEdges": "അതിരുകൾ കടക്കാതിരിക്കാൻ അരികുകൾ ശ്രദ്ധിക്കുക.",
    "tooDark": "വെളിച്ചം വളരെ കുറവാണ്. കൈകൾ വ്യക്തമായി കാണാൻ വെളിച്ചം കൂട്ടുക.",
    "keepHandsInFrame": "രണ്ട് കൈകളും ക്യാമറ ഫ്രെയിമിൽ സൂക്ഷിക്കുക.",
    "adjustCameraSubject": "ജോലിസ്ഥലം കാണാവുന്ന രീതിയിൽ ക്യാമറ മാറ്റുക.",
    "workspaceReady": "ജോലിസ്ഥലം തയ്യാറാണ്. രീതി നിരീക്ഷിക്കാൻ പരിശീലനം തുടങ്ങുക.",
    "keepPracticingAWhile": "വിലയിരുത്താനായി കുറച്ച് സെക്കൻഡുകൾ കൂടി പരിശീലനം തുടരുക.",
    "observingTechnique": "നിങ്ങളുടെ രീതി നിരീക്ഷിക്കുന്നു... ഒരേ വേഗത നിലനിർത്തുക.",
    "handMovementConsistent": "കൈകളുടെ ചലനം സ്ഥിരതയുള്ളതാണ്. പരിശീലനം തുടരുക.",
    "braidHandMovement": "കൈകളും മുടിയും ഫ്രെയിമിലുണ്ട്. മുടി മെടയാൻ തുടങ്ങുക.",
    "braidMoreSeconds": "കുറച്ച് സെക്കൻഡുകൾ കൂടി മുടി മെടയുന്നത് തുടരുക.",
    "braidAlternating": "കൈകളുടെ ചലനം സ്ഥിരതയുള്ളതാണ്. മെടച്ചിൽ തുടരുക.",
    "braidSteadyTension": "കൈകളുടെ സ്ഥാനം നിരീക്ഷിക്കുന്നു. മൂന്ന് ഭാഗങ്ങളിലും തുല്യമായ മുറുക്കം നൽകുക.",
    "solidCoverage": "ഉപരിതലത്തിൽ തുല്യമായ പെയിന്റ് കവറേജ്.",
    "goodMPattern": "വരകളില്ലാതെ നല്ല തുടർച്ചയായ പാറ്റേൺ.",
    "stayWithinTape": "ടേപ്പ് അതിർത്തിക്കുള്ളിൽ തന്നെ ജോലി പൂർത്തിയാക്കി.",
    "backrollLighter": "തിളക്കം തുല്യമാക്കാൻ അവസാന റോൾ മൃദുവായി ചെയ്യുക.",
    "goodFingerPlacement": "അരികുകളിൽ നിന്ന് വിരലുകൾക്ക് സുരക്ഷിതമായ അകലമുണ്ട്.",
    "evenLayer": "അരികുകളിൽ കട്ടപിടിക്കാതെ തുല്യമായ പാളി."
  },
  "results": {
    "sessionSummary": "പരിശീലനം പൂർത്തിയായി!",
    "practiceComplete": "പരിശീലനം പൂർത്തിയായി",
    "techniqueSummary": "സാങ്കേതിക സംഗ്രഹം",
    "incompleteObservation": "അപൂർണ്ണമായ നിരീക്ഷണം",
    "visualEvidenceRecorded": "വിഷ്വൽ തെളിവ് രേഖപ്പെടുത്തി",
    "formScore": "സാങ്കേതിക മൂല്യനിർണ്ണയ സ്കോർ",
    "techniqueScore": "മൊത്തം സാങ്കേതിക സ്കോർ",
    "metricsTitle": "പ്രകടന വിശകലനം",
    "strengthsTitle": "മികച്ച വശങ്ങൾ",
    "improvementsTitle": "മെച്ചപ്പെടുത്തേണ്ടവ",
    "safetyTitle": "സുരക്ഷാ നിർദ്ദേശങ്ങൾ",
    "practiceAgain": "വീണ്ടും പരിശീലിക്കുക",
    "viewProgress": "മുഴുവൻ പുരോഗതിയും കാണുക",
    "home": "ഹോമിലേക്ക് മടങ്ങുക",
    "savedLocally": "സെഷൻ ഉപകരണത്തിൽ സൂക്ഷിച്ചു",
    "noSessionFound": "പരിശീലന സെഷനുകളൊന്നും കണ്ടെത്തിയില്ല",
    "noSessionFoundDesc": "നിങ്ങളുടെ പ്രകടനം കാണാൻ ക്യാമറയുമായി ഒരു പരിശീലന സെഷൻ പൂർത്തിയാക്കുക.",
    "browseSkills": "നൈപുണ്യങ്ങൾ കാണുക",
    "whyNoScore": "എന്തുകൊണ്ട് സ്കോറില്ല?",
    "whyNoScoreDesc": "പരിശീലന വേളയിൽ കൈകളും ജോലിസ്ഥലവും ക്യാമറയിൽ വ്യക്തമായി കാണുമ്പോൾ മാത്രമേ SkillLens സ്കോർ കണക്കാക്കൂ.",
    "observedFor": "{{seconds}} സെക്കൻഡ് നിരീക്ഷിച്ചു · ഉപകരണത്തിൽ സൂക്ഷിച്ചു",
    "consistentTechnique": "എല്ലാ ഘട്ടങ്ങളിലും സ്ഥിരതയുള്ള സാങ്കേതികത പ്രകടമായി",
    "practiceCompletedKeepGoing": "പരിശീലനം കഴിഞ്ഞു — താളം നിലനിർത്താൻ കൂടുതൽ പരിശീലിക്കുക",
    "notEnoughVisualData": "വിലയിരുത്താൻ ആവശ്യമായ വിഷ്വൽ ഡാറ്റ ലഭിച്ചില്ല"
  },
  "progress": {
    "title": "എന്റെ പുരോഗതി",
    "subtitle": "നിങ്ങൾ പൂർത്തിയാക്കിയ പാഠങ്ങളും പ്രാവീണ്യവും ട്രാക്ക് ചെയ്യുക.",
    "skillsLearning": "പഠിക്കുന്ന നൈപുണ്യങ്ങൾ",
    "skillsCompleted": "പൂർത്തിയാക്കിയ നൈപുണ്യങ്ങൾ",
    "practiceSessions": "പരിശീലന സെഷനുകൾ",
    "currentStreak": "ദിവസങ്ങളുടെ സ്ട്രീക്ക്",
    "averageScore": "ശരാശരി സ്കോർ",
    "progressionTrend": "സ്കോർ പുരോഗതി",
    "recentSessions": "സമീപകാല ചരിത്രം",
    "noSessionsYet": "പരിശീലന വിവരങ്ങൾ ഒന്നും ലഭ്യമല്ല.",
    "categoriesProgress": "വിഭാഗങ്ങളുടെ വ്യാപ്തി",
    "earnedBadges": "ബാഡ്ജുകൾ",
    "activeCourses": "സജീവ കോഴ്സുകൾ",
    "passedBenchmarks": "വിജയിച്ച നാഴികക്കല്ലുകൾ",
    "recordedSessions": "രേഖപ്പെടുത്തിയ സെഷനുകൾ",
    "activeStreak": "സജീവ സ്ട്രീക്ക്",
    "categoryCoverage": "വിഭാഗം തിരിച്ചുള്ള കവറേജ്",
    "practiceASkill": "പരിശീലനം തുടങ്ങുക",
    "unlocked": "തുറന്നു",
    "locked": "പൂട്ടിയിരിക്കുന്നു",
    "badges": {
      "firstDrillTitle": "ആദ്യ പരിശീലനം",
      "firstDrillDesc": "ആദ്യത്തെ പ്രായോഗിക സെഷൻ പൂർത്തിയാക്കി",
      "steadyStreakTitle": "സ്ഥിരതയുള്ള പഠിതാവ്",
      "steadyStreakDesc": "തുടർച്ചയായി 3+ ദിവസം സ്ട്രീക്ക് നിലനിർത്തി",
      "craftVirtuosoTitle": "ഫോം മാസ്റ്റർ",
      "craftVirtuosoDesc": "85%-ൽ കൂടുതൽ മൊത്തത്തിലുള്ള സ്കോർ നേടി",
      "versatileMakerTitle": "ബഹുമുഖ പഠിതാവ്",
      "versatileMakerDesc": "കുറഞ്ഞത് 3 വിഭാഗങ്ങളിലെങ്കിലും പരിശീലനം നടത്തി"
    }
  },
  "profile": {
    "title": "പ്രൊഫൈലും ക്രമീകരണങ്ങളും",
    "subtitle": "നിങ്ങളുടെ മുൻഗണനകളും ക്യാമറ പരിശീലനവും ഭാഷയും ക്രമീകരിക്കുക.",
    "learnerLevel": "നൈപുണ്യ പഠിതാവ്",
    "selectLanguage": "ഭാഷ / Language / भाषा",
    "appSettings": "AI കോച്ചിംഗ് മുൻഗണനകൾ",
    "feedbackFrequency": "ഫീഡ്‌ബാക്ക് ആവൃത്തി",
    "continuous": "തുടർച്ചയായി (ഉയർന്നത്)",
    "periodic": "നിശ്ചിത ഇടവേളയിൽ (15 സെ.)",
    "low": "അവസാനം മാത്രം",
    "visionSensitivity": "ട്രാക്കിംഗ് സെൻസിറ്റിവിറ്റി",
    "normal": "സാധാരണ",
    "high": "ഉയർന്ന കൃത്യത",
    "relaxed": "ലളിതമായത്",
    "audioCoaching": "വോയ്സ് നിർദ്ദേശങ്ങൾ",
    "audioCoachingDesc": "കൈകളുടെ ചലനത്തിനുള്ള വോയ്സ് നിർദ്ദേശങ്ങൾ (UI സിമുലേഷൻ)",
    "dataManagement": "ഡാറ്റ മാനേജ്മെന്റ്",
    "resetData": "ഡാറ്റ റീസെറ്റ് ചെയ്യുക",
    "resetConfirm": "പരിശീലന ചരിത്രവും സ്കോറുകളും മായ്ക്കണമെന്ന് ഉറപ്പാണോ?",
    "dataResetSuccess": "എല്ലാ വിവരങ്ങളും റീസെറ്റ് ചെയ്തു.",
    "version": "SkillLens v1.0.0 (iQOO Hackathon Edition)",
    "accountDetails": "അക്കൗണ്ട് വിവരങ്ങൾ",
    "email": "ഇമെയിൽ",
    "memberSince": "ചേർന്ന തീയതി",
    "practiceOverview": "പരിശീലന അവലോകനം",
    "craftVirtuoso": "ഫോം മാസ്റ്റർ",
    "appearance": "തീം തെരഞ്ഞെടുക്കൽ",
    "themeMode": "ഡാർക്ക് മോഡ്"
  },
  "categories": {
    "cat-1": {
      "name": "പെയിന്റിംഗും അലങ്കാരവും",
      "description": "ചുവർ പെയിന്റിംഗ്, റോളർ സ്ട്രോക്ക് നിയന്ത്രണം, അലങ്കാര ചിത്രകല എന്നിവ പരിശീലിക്കുക."
    },
    "cat-2": {
      "name": "തയ്യലും ഫാഷനും",
      "description": "സൂചി ക്രമീകരണം, തയ്യൽ അകലം, വസ്ത്രം നന്നാക്കൽ എന്നിവയിൽ പ്രാവീണ്യം നേടുക."
    },
    "cat-3": {
      "name": "ക്രോഷെ & കരകൗശലങ്ങൾ",
      "description": "ലൂപ്പ് നിയന്ത്രണം, തുന്നൽ താളം, ക്രോഷെ ഡിസൈനുകൾ എന്നിവ പരിശീലിക്കുക."
    },
    "cat-4": {
      "name": "മൺപാത്ര നിർമ്മാണം & സെറാമിക്സ്",
      "description": "ചക്രത്തിൽ മണ്ണ് കേന്ദ്രീകരിക്കൽ, കൈത്തഴക്കം, പാത്രങ്ങളുടെ രൂപകൽപ്പന."
    },
    "cat-5": {
      "name": "സൗന്ദര്യ സംരക്ഷണം & മേക്കപ്പ്",
      "description": "ക്രീം ഉപയോഗം, ബ്രഷ് ബ്ലെൻഡിംഗ്, നെയിൽ പോളിഷ് കൃത്യത എന്നിവ പഠിക്കുക."
    },
    "cat-6": {
      "name": "കേശാലങ്കാരവും സ്റ്റൈലിംഗും",
      "description": "മുടി ഭാഗങ്ങളാക്കൽ, മെടച്ചിൽ, ഹെയർ സ്റ്റൈലിംഗ് വിദ്യകൾ."
    },
    "cat-7": {
      "name": "തോട്ടപ്പണിയും ചെടികളും",
      "description": "മണ്ണ് ഒരുക്കൽ, വിത്ത് നടീൽ, കമ്പുകൾ വെട്ടിയൊതുക്കൽ, ചെടി പരിപാലനം."
    },
    "cat-8": {
      "name": "പാചകവും ഭക്ഷണ അലങ്കാരവും",
      "description": "കത്തി ഉപയോഗം, പച്ചക്കറി അരിയൽ, ഭക്ഷണാവതരണ രീതികൾ എന്നിവ പരിശീലിക്കുക."
    },
    "cat-9": {
      "name": "DIY & ഗൃഹ നവീകരണം",
      "description": "ഡ്രില്ലിംഗ് കൃത്യത, സ്ക്രൂ ഘടിപ്പിക്കൽ, ലെവൽ അളവുകൾ എന്നിവ പഠിക്കുക."
    },
    "cat-10": {
      "name": "സൃഷ്ടിപരമായ കരകൗശലവിദ്യകൾ",
      "description": "പേപ്പർ മടക്കൽ, റെസിൻ ക്രാഫ്റ്റ്, ഉത്സവ അലങ്കാരങ്ങൾ എന്നിവ നിർമ്മിക്കുക."
    }
  },
  "skillsData": {
    "skill-wall-painting": {
      "name": "ചുവർ പെയിന്റിംഗ്",
      "description": "റോളർ ഉപയോഗിച്ച് തുല്യമായ പെയിന്റിംഗും അരികുകളുടെ കൃത്യതയും."
    },
    "skill-roller-painting": {
      "name": "റോളർ പെയിന്റിംഗ്",
      "description": "പ്രധാന പരിശീലനം: റോളർ സ്ട്രോക്ക് നിയന്ത്രണം, തുല്യമായ കവറേജ്, കൃത്യമായ അരികുകൾ."
    },
    "skill-edge-painting": {
      "name": "అంచుల పెయింటింగ్",
      "description": "సీలింగ్ లైన్లు మరియు బోర్డర్ల వెంబడి బ్రష్ నియంత్రణతో స్పష్టమైన అంచులను గీయండి."
    },
    "skill-crack-filling": {
      "name": "పగుళ్లు పూడ్చడం",
      "description": "పుట్టీ నైఫ్‌తో పగుళ్లను పూడ్చి, పెయింటింగ్ కోసం ఉపరితలాన్ని నునుపుగా సిద్ధం చేయండి."
    },
    "skill-mandala-painting": {
      "name": "మండల పెయింటింగ్",
      "description": "డాటింగ్ టూల్స్‌తో ఖచ్చితమైన వృత్తాకార నమూనాలు మరియు చుక్కల అమరికను సాధన చేయండి."
    },
    "skill-canvas-painting": {
      "name": "కాన్వాస్ పెయింటింగ్",
      "description": "కాన్వాస్ బోర్డుపై బ్రష్ స్ట్రోక్స్ మరియు రంగుల కలయిక ద్వారా చిత్రకళను నేర్చుకోండి."
    },
    "skill-diy-home-decoration": {
      "name": "గృహ అలంకరణ కళ",
      "description": "గోడలపై స్టెన్సిల్స్ మరియు టేప్ ఉపయోగించి రేఖాగణిత డిజైన్లను రూపొందించండి."
    },
    "skill-straight-stitching": {
      "name": "നേർരേഖാ തയ്യൽ",
      "description": "തുണി വലിച്ചുപിടിക്കാതെ സൂചിയിലൂടെ നേർരേഖയിൽ തുന്നുക."
    },
    "skill-hemming": {
      "name": "హెమ్మింగ్ (అంచుల మడత)",
      "description": "దుస్తుల క్రింది అంచులను సమానంగా మడిచి సున్నితంగా కుట్టడం నేర్చుకోండి."
    },
    "skill-seam-alignment": {
      "name": "సీమ్ అమరిక",
      "description": "రెండు వస్త్ర భాగాలను కలిపి కుట్టేటప్పుడు అంచులు సరిగ్గా సమానంగా ఉండేలా చూడండి."
    },
    "skill-button-stitching": {
      "name": "బటన్ కుట్టడం",
      "description": "బటన్‌ను వస్త్రానికి గట్టిగా ఉండేలా క్రాస్-స్టిచ్ పద్ధతిలో కుట్టడం."
    },
    "skill-hand-embroidery": {
      "name": "చేతి ఎంబ్రాయిడరీ",
      "description": "ఫ్రెంచ్ నాట్, శాటిన్ స్టిచ్ మరియు కాండం కుట్టులతో వస్త్రాలపై డిజైన్లు చేయడం."
    },
    "skill-basic-clothing-repair": {
      "name": "దుస్తుల ప్రాథమిక మరమ్మత్తు",
      "description": "చిరిగిన కుట్లు సరిచేయడం మరియు అదృశ్య కుట్టుతో వస్త్రాలను బాగు చేయడం."
    },
    "skill-crochet-chain": {
      "name": "క్రోచెట్ ఫౌండేషన్ చైన్",
      "description": "సమాన బిగుతుతో ప్రాథమిక క్రోచెట్ చైన్ వేయడం నేర్చుకోండి."
    },
    "skill-single-crochet": {
      "name": "సింగిల్ క్రోచెట్",
      "description": "దట్టమైన మరియు బలమైన నేత కోసం సింగిల్ క్రోచెట్ పద్ధతిని సాధన చేయండి."
    },
    "skill-double-crochet": {
      "name": "డబుల్ క్రోచెట్",
      "description": "ఎత్తు కలిగిన కుట్లు వేయడానికి యార్న్ ఓవర్ మరియు లూప్ నియంత్రణ."
    },
    "skill-granny-square": {
      "name": "గ్రానీ స్క్వేర్",
      "description": "మూలల నిర్మాణం, క్లస్టర్ స్టిచెస్ మరియు చతురస్రాకార క్రోచెట్ నమూనా."
    },
    "skill-crochet-flower": {
      "name": "క్రోచెట్ పువ్వు",
      "description": "రేకులు మరియు అందమైన 3D క్రోచెట్ పువ్వుల రూపకల్పన."
    },
    "skill-crochet-bag": {
      "name": "క్రోచెట్ బ్యాగ్",
      "description": "బలమైన హ్యాండిల్స్ మరియు బేస్ కలిగిన క్రోచెట్ బ్యాగ్ తయారు చేయడం."
    },
    "skill-basic-amigurumi": {
      "name": "అమిగురుమి (బొమ్మల తయారీ)",
      "description": "మ్యాజిక్ రింగ్ మరియు గుండ్రటి క్రోచెట్ అల్లికతో బొమ్మలు చేయడం."
    },
    "skill-clay-kneading": {
      "name": "మట్టి పిసకడం (వెడ్జింగ్)",
      "description": "గాలి బుడగలు తొలగించి మట్టిని మెత్తగా సమానంగా మార్చే ప్రక్రియ."
    },
    "skill-clay-centering": {
      "name": "చక్రంపై మట్టిని సెంటర్ చేయడం",
      "description": "తిరిగే చక్రం మధ్యలో మట్టిని కదలకుండా సమతుల్యం చేయడం."
    },
    "skill-pot-shaping": {
      "name": "പാത്രം രൂപപ്പെടുത്തൽ",
      "description": "വിരലുകളുടെ സമ്മർദ്ദത്താൽ കളിമൺ പാത്രത്തിന് രൂപം നൽകുക."
    },
    "skill-rim-shaping": {
      "name": "రిమ్ ఆకృతి",
      "description": "కుండ పైభాగాన్ని లేదా అంచును నునుపుగా సమానంగా చేయడం."
    },
    "skill-surface-smoothing": {
      "name": "ఉపరితలం నునుపు చేయడం",
      "description": "రిబ్ టూల్ సహాయంతో మట్టి ఉపరితలాన్ని నునుపుగా మార్చడం."
    },
    "skill-handle-making": {
      "name": "హ్యాండిల్ తయారీ",
      "description": "కప్పులకు లేదా పాత్రలకు పట్టుకునే పిడి తయారు చేసి గట్టిగా అతికించడం."
    },
    "skill-ceramic-painting": {
      "name": "సిరామిక్ పెయింటింగ్",
      "description": "మట్టి పాత్రలపై రంగులు మరియు మెరిసే గ్లేజ్ డిజైన్లు వేయడం."
    },
    "skill-face-cleansing": {
      "name": "ఫేస్ క్లెన్సింగ్ పద్ధతి",
      "description": "గుండ్రటి కదలికలతో ముఖాన్ని సున్నితంగా శుభ్రపరిచే సరైన పద్ధతి."
    },
    "skill-moisturizer-application": {
      "name": "మాయిశ్చరైజర్ రాయడం",
      "description": "పై దిశగా సున్నితంగా మర్దన చేస్తూ చర్మానికి తేమను అందించడం."
    },
    "skill-sunscreen-application": {
      "name": "సన్‌స్క్రీన్ అప్లికేషన్",
      "description": "రెండు వేళ్ళ కొలతతో ముఖం మరియు మెడపై సన్‌స్క్రీన్ సమంగా పూయడం."
    },
    "skill-face-mask-application": {
      "name": "ఫేస్ మాస్క్ వేయడం",
      "description": "బ్రష్‌తో కళ్ళ చుట్టూ కాకుండా ముఖంపై ఫేస్ ప్యాక్ సమంగా వేయడం."
    },
    "skill-foundation-application": {
      "name": "ఫౌండేషన్ బ్లెండింగ్",
      "description": "స్పాంజితో ముఖంపై ఫౌండేషన్‌ను సహజసిద్ధంగా బ్లెండ్ చేయడం."
    },
    "skill-concealer-application": {
      "name": "కన్సీలర్ అప్లికేషన్",
      "description": "కళ్ళ క్రింద నల్లటి వలయాలు మరియు మచ్చలను కవర్ చేసే ఖచ్చితమైన పద్ధతి."
    },
    "skill-eyeliner-application": {
      "name": "ఐలైనర్ అప్లికేషన్",
      "description": "స్థిరమైన చేతితో కళ్ళ అంచులకు సమానమైన వింగ్డ్ ఐలైనర్ వేయడం."
    },
    "skill-nail-polish-application": {
      "name": "നെയിൽ പോളിഷ് ഇടൽ",
      "description": "മൂന്ന് സ്ട്രോക്ക് രീതിയിൽ നഖങ്ങളിൽ ഭംഗിയായി പോളിഷ് ചെയ്യുക."
    },
    "skill-basic-nail-art": {
      "name": "ప్రాథమిక నెయిల్ ఆర్ట్",
      "description": "డాటింగ్ టూల్ మరియు బ్రష్‌తో గోళ్ళపై నమూనాలు మరియు పువ్వులు వేయడం."
    },
    "skill-hair-sectioning": {
      "name": "జుట్టు విభజన (సెక్షనింగ్)",
      "description": "దువ్వెన మరియు క్లిప్పులతో జుట్టును నాలుగు భాగాలుగా సమానంగా విభజించడం."
    },
    "skill-hair-braiding": {
      "name": "മുടി മെടയൽ (3-വരി)",
      "description": "മുടി മൂന്ന് തുല്യ ഭാഗങ്ങളാക്കി കൃത്യമായ മുറുക്കത്തോടെ മെടയുക."
    },
    "skill-blow-drying": {
      "name": "బ్లో-డ్రైయింగ్ పద్ధతి",
      "description": "రౌండ్ బ్రష్ మరియు డ్రైయర్‌తో జుట్టును చిక్కులు లేకుండా ఎండబెట్టడం."
    },
    "skill-basic-hair-styling": {
      "name": "ప్రాథమిక హెయిర్ స్టైలింగ్ (పోనీటైల్/ముడి)",
      "description": "నునుపైన పోనీటైల్ మరియు అందమైన ముడి వేసే పద్ధతి."
    },
    "skill-hair-curling": {
      "name": "జుట్టు కర్లింగ్",
      "description": "కర్లింగ్ ఐరన్‌తో ముఖానికి దూరంగా కర్ల్స్ చేస్తూ అందమైన వేవ్స్ చేయడం."
    },
    "skill-hair-straightening": {
      "name": "హెయిర్ స్ట్రెయిటెనింగ్",
      "description": "స్ట్రెయిట్‌నర్ సహాయంతో జుట్టును నిదానంగా స్ట్రెయిట్ చేయడం."
    },
    "skill-potting": {
      "name": "కుండీలో మొక్క నాటడం",
      "description": "డ్రైనేజీ రంధ్రాలు చూసుకుని వేర్ల చుట్టూ మట్టిని సరిగ్గా నింపడం."
    },
    "skill-seed-planting": {
      "name": "విత్తనాలు నాటడం",
      "description": "సరైన లోతులో విత్తనాలు నాటి నేలలో తేమను కాపాడటం."
    },
    "skill-soil-preparation": {
      "name": "మట్టి మిశ్రమం తయారీ",
      "description": "ఎరువు మరియు కోకోపీట్ కలిపి మొక్కల పెరుగుదలకు పోషక మట్టి సిద్ధం చేయడం."
    },
    "skill-pruning": {
      "name": "మొక్కల కత్తిరింపు (ప్రూనింగ్)",
      "description": "ఎండిన కొమ్మలను 45 డిగ్రీల కోణంలో కత్తిరించి కొత్త చిగుళ్ళను ప్రోత్సహించడం."
    },
    "skill-repotting": {
      "name": "మొక్కను పెద్ద కుండీలోకి మార్చడం",
      "description": "వేర్లను పాడుచేయకుండా పెద్ద కుండీలోకి మార్చే సురక్షిత పద్ధతి."
    },
    "skill-plant-propagation": {
      "name": "కొమ్మల ద్వారా మొక్కల ఉత్పత్తి",
      "description": "నోడ్ క్రింద కొమ్మను కత్తిరించి నీటిలో లేదా మట్టిలో వేర్లు రప్పించడం."
    },
    "skill-plant-support": {
      "name": "మొక్కలకు ఆధారం ఇవ్వడం",
      "description": "కాండం వంగిపోకుండా కర్రలతో సున్నితంగా కట్టి ఆధారం కల్పించడం."
    },
    "skill-knife-handling": {
      "name": "కత్తిని పట్టుకునే పద్ధతి",
      "description": "చేతి వేళ్ళు కోసుకోకుండా క్లా గ్రిప్ ద్వారా సురక్షితంగా కూరగాయలు కోయడం."
    },
    "skill-vegetable-chopping": {
      "name": "പച്ചക്കറി അരിയൽ",
      "description": "സുരക്ഷിതമായ പിടിയിലൂടെ പച്ചക്കറികൾ ഒരേ അളവിൽ അരിയുക."
    },
    "skill-dough-kneading": {
      "name": "పిండి పిసకడం",
      "description": "చేతి మడమలతో పిండిని సాగదీస్తూ మెత్తటి ముద్దగా సిద్ధం చేయడం."
    },
    "skill-dough-rolling": {
      "name": "చపాతీ లేదా పిండి రుద్దడం",
      "description": "రోలింగ్ పిన్‌తో మధ్య నుండి అంచుల వరకు సమానంగా గుండ్రంగా రుద్దడం."
    },
    "skill-cake-decoration": {
      "name": "కేక్ అలంకరణ",
      "description": "పైపింగ్ బ్యాగ్‌తో కేక్ మీద పువ్వులు మరియు అందమైన డిజైన్లు వేయడం."
    },
    "skill-food-plating": {
      "name": "ఆహార ప్లేటింగ్ & ప్రెజెంటేషన్",
      "description": "రెస్టారెంట్ శైలిలో రంగులు మరియు సాస్‌లతో ఆహారాన్ని అందంగా అమర్చడం."
    },
    "skill-measuring-marking": {
      "name": "కొలవడం మరియు మార్కింగ్ చేయడం",
      "description": "కొలత టేప్ మరియు రూలర్‌తో ఖచ్చితమైన 90 డిగ్రీల కోణంలో కొలతలు గుర్తించడం."
    },
    "skill-screw-fitting": {
      "name": "స్క్రూ బిగించడం",
      "description": "స్క్రూడ్రైవర్ జారకుండా సమాంతరంగా పెట్టి గట్టిగా బిగించడం."
    },
    "skill-furniture-assembly": {
      "name": "ఫర్నిచర్ అమరిక (అసెంబ్లీ)",
      "description": "సూచనల ప్రకారం ఫర్నిచర్ భాగాలను సరైన వరుసలో బిగించడం."
    },
    "skill-sanding": {
      "name": "శాండింగ్ (నునుపు చేయడం)",
      "description": "శాండ్‌పేపర్‌తో చెక్క ఉపరితలాన్ని పొరలు లేకుండా నునుపుగా రుద్దడం."
    },
    "skill-wall-hanging": {
      "name": "గోడకు ఫ్రేములు తగిలించడం",
      "description": "స్పిరిట్ లెవెల్ చూసుకుని గోడకు ఫోటో ఫ్రేములు సమాంతరంగా అమర్చడం."
    },
    "skill-cable-organization": {
      "name": "కేబుల్ నిర్వహణ",
      "description": "వైర్లను క్లిప్పులతో చిక్కులు లేకుండా క్రమపద్ధతిలో అమర్చడం."
    },
    "skill-gift-wrapping": {
      "name": "గిఫ్ట్ ప్యాకింగ్",
      "description": "కాగితపు అంచులను శుభ్రంగా మడిచి అందమైన రిబ్బన్‌తో ప్యాక్ చేయడం."
    },
    "skill-paper-flower-making": {
      "name": "కాగితపు పువ్వుల తయారీ",
      "description": "క్రేప్ పేపర్‌తో అందమైన గులాబీ మరియు అలంకరణ పువ్వులను రూపొందించడం."
    },
    "skill-origami": {
      "name": "ఒరిగామి (కాగితం మడత కళ)",
      "description": "ఖచ్చితమైన మడతల ద్వారా పక్షులు మరియు వివిధ ఆకృతులను చేయడం."
    },
    "skill-candle-decoration": {
      "name": "కొవ్వొత్తి అలంకరణ",
      "description": "ఎండిన పూలతో కొవ్వొత్తులను అందంగా అలంకరించే కళ."
    },
    "skill-resin-craft": {
      "name": "రెసిన్ క్రాఫ్ట్",
      "description": "రెసిన్ మిశ్రమాన్ని సిద్ధం చేసి బుడగలు లేకుండా కోస్టర్స్ తయారు చేయడం."
    },
    "skill-festive-decoration": {
      "name": "పండుగ అలంకరణ",
      "description": "తీగ ఫ్రేమ్‌పై ఆకులు మరియు పూలతో అందమైన అలంకరణ దండలు చేయడం."
    }
  }
},
};
