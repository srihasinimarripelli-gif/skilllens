import type { SkillLearningContent, Skill, SkillVideo } from '../types';

// Bespoke flagship learning modules
export const FLAGSHIP_LEARNING: Record<string, SkillLearningContent> = {
  'skill-wall-painting': {
    objective: [
      'Master wall preparation, surface inspection, and clean masking',
      'Learn proper cutting-in technique along ceilings and baseboards',
      'Execute continuous roller stroke application in overlapping sections',
      'Maintain a consistent wet edge to eliminate visible seam lap marks',
    ],
    introduction:
      'Wall painting transforms interior spaces. Learning proper brush cutting-in, roller loading, and methodical section blending ensures a smooth, durable, professional finish without streaks.',
    tools: [
      { name: '9-inch roller frame & 3/8" nap cover', detail: 'Ideal for drywall surfaces' },
      { name: '2.5-inch angled sash brush', detail: 'For clean border cut-ins' },
      { name: 'Deep-well paint tray & liner', detail: 'Even saturation without drips' },
      { name: 'Extension pole', detail: 'Smooth passes from floor to ceiling' },
    ],
    materials: [
      { name: 'Interior latex paint', detail: 'Eggshell or satin finish' },
      { name: 'Painter tape (blue/green)', detail: 'For crisp border protection' },
      { name: 'Canvas drop cloths', detail: 'Floor and furniture protection' },
    ],
    preparation: [
      'Clean wall surface thoroughly with a damp cloth to remove dust and oils',
      'Tape baseboards, electrical outlet plates, and door frames firmly',
      'Lay drop cloths flat along the wall base to guard flooring against spatter',
      'Mix paint thoroughly and fill paint tray reservoir halfway',
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Cut In Edges with Sash Brush',
        explanation:
          'Dip your 2.5" angled brush one-third into paint. Hold it like a pencil and paint a smooth 2-to-3-inch border along ceilings, corners, and baseboards.',
        visualHint: 'Angle brush at 45° along the tape line with steady hand pressure',
        coachTip: 'Keep your brush moving smoothly; feather the inside border edge to prevent thick ridges.',
      },
      {
        stepNumber: 2,
        title: 'Load the Roller Uniformly',
        explanation:
          'Dip the roller sleeve slightly into the tray well. Roll it up and down the tray grid 3–4 times until the entire sleeve is evenly coated without dripping.',
        visualHint: 'Roll along textured ramp until nap is evenly saturated',
        coachTip: 'If the roller drips when lifted, roll off excess paint on the upper ramp.',
      },
      {
        stepNumber: 3,
        title: 'Apply in a Dynamic "W" Pattern',
        explanation:
          'Start about one foot from the corner and roll upward at a slight angle. Roll a large 3x3 foot "W" or "N" shape to lay down paint across the section.',
        visualHint: 'Upward first stroke depositing bulk paint, followed by connected diagonals',
        coachTip: 'Do not press hard against the wall; let the roller nap release the paint smoothly.',
      },
      {
        stepNumber: 4,
        title: 'Fill and Cross-Roll Horizontally',
        explanation:
          'Without reloading the roller, sweep horizontally back and forth across the "W" pattern to distribute the paint into an even, consistent layer.',
        visualHint: 'Horizontal passes connecting the diagonal paint strokes',
        coachTip: 'Always overlap into the adjacent wet edge by 1–2 inches to prevent seam lines.',
      },
      {
        stepNumber: 5,
        title: 'Feather with Vertical Backrolling',
        explanation:
          'Lightly glide the roller from ceiling to floor in single, continuous vertical downward passes. This lays the paint nap uniformly in one direction.',
        visualHint: 'Gentle top-to-bottom smoothing stroke with virtually zero downward pressure',
        coachTip: 'Backroll immediately while paint is wet; never backroll drying or tacky paint.',
      },
    ],
    demonstration: {
      title: 'Full Room Wall Painting Technique',
      description:
        'Watch the complete sequence: cutting in ceiling borders, tray loading, 3x3 foot W-stroke application, horizontal blending, and vertical feathering.',
      keyFocusPoints: [
        'Roller stays parallel to the wall surface',
        'Consistent moderate arm speed (40–50 strokes/min)',
        'Wet edge overlap maintained continuously',
      ],
      visualType: 'roller',
    },
    commonMistakes: [
      {
        mistake: 'Pushing too hard on the roller frame',
        correction: 'Use moderate, even pressure. Pushing hard squeezes paint out of roller edges, leaving visible tramlines.',
      },
      {
        mistake: 'Allowing the cut-in border to dry completely before rolling',
        correction: 'Work wall by wall: cut in one wall section and roll it immediately to blend wet edges seamlessly.',
      },
      {
        mistake: 'Inconsistent roller coverage leaving thin patches',
        correction: 'Reload roller whenever paint distribution feels thin; maintain at least 50% overlap on every pass.',
      },
    ],
    tips: [
      'Paint ceiling and trim edges first before rolling large wall expanses.',
      'Maintain an extension pole even for low walls to keep your posture straight and avoid shoulder strain.',
      'Wrap your roller sleeve in airtight plastic wrap if taking a break to keep it moist.',
    ],
    safety: [
      'Ensure cross-ventilation by opening windows or running an exhaust fan.',
      'Wear safety glasses to shield eyes from microscopic roller spatter.',
      'Keep drop cloths securely flat to eliminate tripping hazards.',
    ],
    video: {
      url: 'https://www.youtube.com/watch?v=bLbUIevOxzY',
      embedUrl: 'https://www.youtube.com/embed/bLbUIevOxzY',
      videoUrl: 'https://www.youtube.com/embed/bLbUIevOxzY',
      thumbnail: 'https://img.youtube.com/vi/bLbUIevOxzY/hqdefault.jpg',
      title: 'How To Paint A Room | DIY For Beginners',
      duration: '15:20',
      description: 'Step-by-step masterclass covering room prep, cutting-in borders, tray loading, rolling technique, and streak-free finish.',
      source: 'YouTube • Home RenoVision DIY',
      language: 'English',
    },
  },

  'skill-roller-painting': {
    objective: [
      'Master balanced roller grip with two-hand control',
      'Learn even paint saturation without dripping or overloading',
      'Execute smooth W or N pattern stroke distribution',
      'Backroll lightly in one direction to eliminate tramlines',
    ],
    introduction:
      'Roller painting is the foundational technique for coating large wall and ceiling surfaces with a uniform, seamless finish without brush marks or lap lines.',
    tools: [
      { name: '9-inch roller frame & 3/8" nap sleeve', detail: 'Microfiber sleeve for smooth drywall' },
      { name: 'Heavy-duty paint tray with ramp grid', detail: 'Deep reservoir holds adequate paint' },
      { name: 'Extension pole', detail: 'Ergonomic reach from floor to ceiling' },
      { name: '2.5-inch angled sash brush', detail: 'For cutting in corner borders first' },
    ],
    materials: [
      { name: 'Interior latex paint', detail: 'Eggshell or satin sheen' },
      { name: 'Painter tape (low-tack)', detail: 'For baseboard and trim protection' },
      { name: 'Canvas drop cloth', detail: 'Non-slip floor protection' },
    ],
    preparation: [
      'Wipe wall clean of dust and cobwebs with a damp microfiber sponge',
      'Tape baseboards, window trim, and ceiling edges with clean painter tape',
      'Lay canvas drop cloths flat along the working base of the wall',
      'Pour paint into tray reservoir filling the bottom half without flooding the ramp',
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Load the Roller Evenly',
        explanation:
          'Dip the roller sleeve lightly into the reservoir. Roll it backward and forward across the textured tray ramp 3–4 times until the sleeve is saturated evenly without dripping.',
        visualHint: 'Tray ramp roll angle 30° with zero dripping',
        coachTip: 'Never submerge the entire roller axle into liquid paint.',
      },
      {
        stepNumber: 2,
        title: 'Initial Wall Deposit',
        explanation:
          'Touch the roller to the wall at a 45° angle about 12 inches above the baseboard. Roll upward first with medium pressure to deposit the heaviest paint without forming puddles.',
        visualHint: 'First upward pass on wall panel',
        coachTip: 'Let the roller nap carry the paint — do not press hard against drywall.',
      },
      {
        stepNumber: 3,
        title: 'Distribute in a W or N Pattern',
        explanation:
          'Work within an imaginary 3-foot by 3-foot section. Roll diagonally up and down to form a large "W" or "N" shape to distribute paint volume evenly across the square.',
        visualHint: 'Connecting diagonal W pattern',
        coachTip: 'Keep roller rolling continuously to avoid thick edge beads.',
      },
      {
        stepNumber: 4,
        title: 'Fill the Grid Horizontally',
        explanation:
          'Without reloading the roller, roll horizontally across the W strokes to fill in the open gaps and spread the coating into a smooth, even layer.',
        visualHint: 'Horizontal leveling passes',
        coachTip: 'Maintain a 1–2 inch overlap with the previous wet section.',
      },
      {
        stepNumber: 5,
        title: 'Feather & Backroll',
        explanation:
          'Using extremely light downward passes from top to bottom, glide the roller in one uniform direction to lay the nap flat and erase all roller lines.',
        visualHint: 'Gentle top-to-bottom smoothing stroke',
        coachTip: 'Only backroll while paint is wet; never backroll over tacky drying paint.',
      },
    ],
    demonstration: {
      title: 'Smooth W-Pattern Roller Technique',
      description:
        'Watch the complete sequence: reservoir dip, ramp roll, upward wall deposit, W-pattern spread, and gentle top-to-bottom backroll.',
      keyFocusPoints: [
        'Roller stays parallel to wall surface with zero tilt',
        'Uniform arm speed without wrist twisting',
        'Feathering passes overlap wet edge by 2 inches',
      ],
      visualType: 'roller',
    },
    commonMistakes: [
      {
        mistake: 'Overloading roller sleeve with wet paint',
        correction: 'Roll 4 times across the tray ramp until no liquid drips when lifted.',
      },
      {
        mistake: 'Pressing excessively hard against drywall',
        correction: 'Use gentle, consistent pressure. Heavy pressing squeezes paint out of roller edges creating thick tramlines.',
      },
      {
        mistake: 'Rolling in random chaotic directions',
        correction: 'Stick methodically to 3x3ft squares with vertical feathering in one consistent direction.',
      },
      {
        mistake: 'Letting edges dry before blending adjacent sections',
        correction: 'Always maintain a wet edge by overlapping each new section into wet paint within 2–3 minutes.',
      },
    ],
    tips: [
      'Keep roller handles wiped clean with a damp rag so your hands maintain a firm, non-slippery grip.',
      'Maintain an overlap of 2 inches when joining fresh sections to eliminate thin seam streaks.',
      'When pausing for more than 10 minutes, wrap the roller sleeve tightly in plastic wrap to prevent drying.',
    ],
    safety: [
      'Ensure windows or doors are cracked for cross-ventilation when using indoor paints.',
      'Wear protective goggles to guard against airborne paint spatter, especially when painting overhead.',
      'Never stand on the top step of a stepladder; use an extension pole instead for ceiling reach.',
    ],
    video: {
      url: 'https://www.youtube.com/watch?v=eofezT3QqRY',
      embedUrl: 'https://www.youtube.com/embed/eofezT3QqRY',
      videoUrl: 'https://www.youtube.com/embed/eofezT3QqRY',
      thumbnail: 'https://img.youtube.com/vi/eofezT3QqRY/hqdefault.jpg',
      title: 'How To Paint With a Roller to Avoid Roller Marks and Streaks',
      duration: '6:14',
      description: 'Master roller loading, W-pattern application, and feathering techniques to eliminate lap marks and tramlines.',
      source: 'YouTube • Benjamin Sahlstrom',
      language: 'English',
    },
  },

  'skill-straight-stitching': {
    objective: [
      'Learn correct fabric hand placement 3 inches from needle',
      'Align raw edge with machine throat plate guide marks',
      'Maintain smooth, steady foot pedal rhythm without rushing',
      'Feed fabric naturally without pushing, pulling, or bunching',
    ],
    introduction:
      'Straight stitching is the cornerstone of all sewing and tailoring, forming clean structural seams that hold garments and crafts together securely.',
    tools: [
      { name: 'Sewing machine or hand needle', detail: 'Size 80/12 universal needle' },
      { name: 'Fabric shears', detail: 'Sharp dedicated fabric scissors' },
      { name: 'Seam gauge ruler', detail: 'For verifying 5/8-inch allowance' },
    ],
    materials: [
      { name: 'Cotton fabric swatches', detail: 'Pre-washed practice strips' },
      { name: 'Polyester sewing thread', detail: 'Contrasting color for visibility' },
      { name: 'Fabric marking chalk', detail: 'For drawing target guide lines' },
    ],
    preparation: [
      'Thread machine spool and bobbin with matching thread weight',
      'Test stitch tension on a scrap fabric piece to verify balanced knots',
      'Press fabric swatch flat with an iron to eliminate wrinkles',
      'Draw a target chalk line 5/8 inch from the raw fabric edge',
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Position Fabric & Lower Presser Foot',
        explanation:
          'Place fabric under needle aligning the chalk line with the throat plate guide. Turn handwheel toward you to sink needle into fabric, then lower presser foot.',
        visualHint: 'Needle inserted with foot locked down',
        coachTip: 'Always turn the handwheel toward you, never away.',
      },
      {
        stepNumber: 2,
        title: 'Anchor with Backstitch',
        explanation:
          'Sew 3 forward stitches, press the reverse lever for 3 stitches to lock the knot, then release to begin sewing forward along the seam line.',
        visualHint: 'Lock knot 3 stitches forward and back',
        coachTip: 'Backstitching prevents the seam from unraveling under stress.',
      },
      {
        stepNumber: 3,
        title: 'Guide Gently with Open Hands',
        explanation:
          'Rest your left hand 3 inches to the side of the presser foot and right hand in front to steer. Let the feed dogs pull the fabric forward naturally.',
        visualHint: 'Hands flat guiding fabric without pushing',
        coachTip: 'Do not push or drag fabric; your fingers only steer alignment.',
      },
      {
        stepNumber: 4,
        title: 'Focus on the Throat Plate Guide',
        explanation:
          'Watch the edge of the fabric against the throat plate metal mark, not the bouncing needle. Keeping the edge flush ensures a laser-straight seam.',
        visualHint: 'Eyes focused on guide line 1 inch ahead',
        coachTip: 'Staring directly at the moving needle will make your line wobble.',
      },
      {
        stepNumber: 5,
        title: 'Lock & Finish Seam',
        explanation:
          'Sew to within 1/4 inch of the fabric end, backstitch 3 stitches to lock, raise presser foot, pull fabric back, and clip threads leaving a 2-inch tail.',
        visualHint: 'Finished knot and clipped tails',
        coachTip: 'Trim loose thread tails flush with sharp snips.',
      },
    ],
    demonstration: {
      title: 'Balanced Fabric Feeding & Alignment',
      description:
        'See how hands guide fabric parallel to the throat plate groove while feed dogs advance the fabric at a steady pace.',
      keyFocusPoints: [
        'Hands positioned 3 inches clear of the moving needle',
        'Eyes focused on guide plate line rather than needle eye',
        'Smooth pedal pressure maintaining steady stitch cadence',
      ],
      visualType: 'stitch',
    },
    commonMistakes: [
      {
        mistake: 'Pulling fabric from behind the needle',
        correction: 'Never tug fabric from the back. Pulling bends the needle and causes skipped stitches or needle breakage.',
      },
      {
        mistake: 'Staring at the reciprocating needle point',
        correction: 'Watch the fabric edge align with the throat plate marking 1 inch in front of needle.',
      },
      {
        mistake: 'Sewing over pins without removing them',
        correction: 'Always pull pins out right before they reach the presser foot to prevent needle strikes.',
      },
      {
        mistake: 'Jerky foot pedal pressure causing uneven stitch lengths',
        correction: 'Practice pressing the pedal gently with your big toe pad for a continuous slow pace.',
      },
    ],
    tips: [
      'Use blue painter tape on your sewing bed as an extended fence guide for long seam runs.',
      'Press every finished seam with an iron — pressing elevates homemade stitching to a professional finish.',
      'Maintain a clean lint trap under the bobbin case to ensure smooth mechanical stitch formation.',
    ],
    safety: [
      'Keep fingers at least 1 inch clear of the needle zone at all times.',
      'Turn off the sewing machine power switch before changing needles or threading.',
      'Dispose of bent or dull needles in a hard container, never directly in loose trash.',
    ],
    video: {
      url: 'https://www.youtube.com/watch?v=meVu_3Iv-3U',
      embedUrl: 'https://www.youtube.com/embed/meVu_3Iv-3U',
      videoUrl: 'https://www.youtube.com/embed/meVu_3Iv-3U',
      thumbnail: 'https://img.youtube.com/vi/meVu_3Iv-3U/hqdefault.jpg',
      title: 'How To: Sew in a Straight Line (Sewing for Beginners)',
      duration: '7:08',
      description: 'Learn needle alignment, seam allowance guides, steady foot pedal pressure, and smooth fabric guidance.',
      source: 'YouTube • Made to Sew',
      language: 'English',
    },
  },

  'skill-nail-polish-application': {
    objective: [
      'Learn the classic 3-stroke lacquer deposition sequence',
      'Maintain a crisp 1mm clean border from cuticles and sidewalls',
      'Cap the free nail edge to seal against premature chipping',
      'Control brush bead volume to prevent flooding the cuticle well',
    ],
    introduction:
      'Nail polish application is a precision grooming skill where controlled brush angle, bead volume, and steady hand anchors create salon-quality, streak-free color coats.',
    tools: [
      { name: 'Detail cleanup brush', detail: 'Flat angled bristles for edge cleanup' },
      { name: 'Glass nail file', detail: '240 grit for gentle free-edge shaping' },
      { name: 'Cuticle pusher tool', detail: 'Wood or silicone stick' },
    ],
    materials: [
      { name: 'Base coat lacquer', detail: 'Protects nail bed and promotes adhesion' },
      { name: 'Cream colored nail polish', detail: 'High-pigment polish' },
      { name: 'Glossy top coat', detail: 'Quick-dry chip-resistant sealant' },
      { name: 'Acetone remover', detail: 'For precision border cleanup' },
    ],
    preparation: [
      'File nails in one direction to desired shape without sawing back and forth',
      'Push cuticles back gently and wipe nail plate with alcohol to remove natural oils',
      'Rest your forearm and pinky finger flat on the desk surface for vibration-free anchoring',
      'Roll polish bottle between palms to mix without introducing air bubbles',
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Wipe Stem & Measure Bead',
        explanation:
          'Pull brush from bottle, wiping the back side of the stem completely clean on the bottle neck. Leave a single small bead on the front tip.',
        visualHint: 'Single sesame-sized bead on brush tip',
        coachTip: 'The bead should be about the size of a sesame seed for an average nail.',
      },
      {
        stepNumber: 2,
        title: 'Center Deposit & Push Back',
        explanation:
          'Touch brush to center of nail 2mm above cuticle. Push gently toward cuticle until a 1mm gap remains, then pull straight down to the tip in one fluid stroke.',
        visualHint: 'Center streak with 1mm cuticle gap',
        coachTip: 'Fanning the bristles lightly spreads paint across the central third.',
      },
      {
        stepNumber: 3,
        title: 'Left Curved Stroke',
        explanation:
          'Place brush back at the base of the left side. Follow the natural curve of the nail sidewall down to the tip in a single continuous glide.',
        visualHint: 'Curved left arc matching sidewall',
        coachTip: 'Keep a 1mm space from the skin fold to prevent peeling.',
      },
      {
        stepNumber: 4,
        title: 'Right Curved Stroke',
        explanation:
          'Repeat on the right side from base to tip, blending smoothly into the center layer without double-brushing over wet lacquer.',
        visualHint: 'Curved right arc completing color coat',
        coachTip: 'Light touch prevents dragging streaks through the center coat.',
      },
      {
        stepNumber: 5,
        title: 'Cap the Free Edge',
        explanation:
          'Turn the brush horizontally and lightly swipe the tip along the free edge of the nail to seal the front rim against water intrusion.',
        visualHint: 'Horizontal stroke sealing free tip',
        coachTip: 'Capping doubles the wear life of any manicure.',
      },
    ],
    demonstration: {
      title: 'Precision 3-Stroke Method & Edge Capping',
      description:
        'Observe the brush fan-out: center stroke downward, curved left contour, curved right contour, and the delicate free-edge horizontal seal.',
      keyFocusPoints: [
        'Resting pinky anchor on desk surface eliminates hand tremors',
        '1mm uniform boundary gap preserved around cuticle arc',
        'Zero flooding into lateral skin sidewalls',
      ],
      visualType: 'nail',
    },
    commonMistakes: [
      {
        mistake: 'Flooding the cuticle pocket with excess polish bead',
        correction: 'Wipe more polish off the brush stem; deposit the initial bead 2mm above the cuticle and nudge backward.',
      },
      {
        mistake: 'Applying thick heavy coats to cover in one pass',
        correction: 'Two thin translucent coats dry exponentially faster and harder than one thick gummy layer.',
      },
      {
        mistake: 'Shaking the bottle up and down before use',
        correction: 'Roll the bottle between your palms. Shaking traps air bubbles that leave micro-dimples on nails.',
      },
      {
        mistake: 'Touching wet polish before fully cured',
        correction: 'Allow 2 full minutes between thin coats, and apply quick-dry drops or topcoat.',
      },
    ],
    tips: [
      'Anchor your painting hand by resting its pinky finger on the table for zero tremors.',
      'Dip an angled makeup brush in acetone to instantly erase any accidental skin smudges before curing.',
      'Wait at least 90 seconds between coat 1 and coat 2 to prevent color dragging.',
    ],
    safety: [
      'Apply nail lacquers in a well-ventilated space to avoid inhaling concentrated solvent vapors.',
      'Keep acetone away from finished wood furniture and plastic surfaces.',
      'Do not aggressively scrape or cut living cuticle tissue to prevent nail bed infections.',
    ],
    video: {
      url: 'https://www.youtube.com/watch?v=4Aww5-0F1pk',
      embedUrl: 'https://www.youtube.com/embed/4Aww5-0F1pk',
      videoUrl: 'https://www.youtube.com/embed/4Aww5-0F1pk',
      thumbnail: 'https://img.youtube.com/vi/4Aww5-0F1pk/hqdefault.jpg',
      title: 'Olive University: How to Paint Your Nails',
      duration: '4:32',
      description: 'The classic 3-stroke polish method: center stripe first, left curve, right curve, and capping the free edge without cuticle flooding.',
      source: 'YouTube • Olive & June',
      language: 'English',
    },
  },

  'skill-crochet-chain': {
    objective: [
      'Master the foundational slip knot and hook throat grip',
      'Learn working yarn tensioning over the index finger',
      'Coordinate downward hook rotation with gentle loop draw-through',
      'Produce uniform chain loop widths and balanced elastic stretch',
    ],
    introduction:
      'The crochet chain is the foundation row for almost all crochet projects. Mastering uniform chain loop size and relaxed wrist cadence ensures all future stitches sit straight and even.',
    tools: [
      { name: 'Size 5.0mm (H-8) crochet hook', detail: 'Ergonomic silicone grip handle' },
      { name: 'Yarn needle / tapestry needle', detail: 'Blunt tip for weaving in yarn ends' },
      { name: 'Locking stitch markers', detail: 'For marking every 10th chain loop' },
    ],
    materials: [
      { name: 'Worsted weight acrylic/cotton yarn', detail: 'Smooth light color (cream or sky blue) for visibility' },
    ],
    preparation: [
      'Find a comfortable seated posture with elbows relaxed close to your ribs',
      'Unwind 3 yards of yarn from the skein center so there is no drag resistance',
      'Ensure your working hands are warm and flexible before starting loop drills',
      'Choose your preferred hook hold: pencil grip or knife grip',
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Tie the Foundation Slip Knot',
        explanation:
          'Cross working yarn into a loop, reach through with thumb and finger, pull working strand through to make an adjustable slip knot, and slide onto hook shaft.',
        visualHint: 'Adjustable loop resting on hook shaft',
        coachTip: 'The knot should slide freely on the hook without squeezing tight.',
      },
      {
        stepNumber: 2,
        title: 'Establish Yarn Tension',
        explanation:
          'Weave working yarn through non-dominant hand: over pinky, under middle fingers, and drape over index finger. Hold slip knot base with thumb and middle finger.',
        visualHint: 'Index finger elevated holding yarn taut',
        coachTip: 'Your index finger acts as the tension antenna.',
      },
      {
        stepNumber: 3,
        title: 'Yarn Over (YO)',
        explanation:
          'Bring hook under and behind the working yarn, wrapping from back to front so yarn catches inside the hook throat groove.',
        visualHint: 'Hook wraps under and behind yarn strand',
        coachTip: 'Always yarn over from back to front; front to back twists chain links.',
      },
      {
        stepNumber: 4,
        title: 'Rotate Hook & Draw Through',
        explanation:
          'Turn hook tip slightly downward toward the working loop. Glide hook smoothly through the loop on your hook, leaving one new loop remaining.',
        visualHint: 'Hook nose pointed down passing through loop',
        coachTip: 'Rotating hook downward prevents catching on the loop edges.',
      },
      {
        stepNumber: 5,
        title: 'Advance Grip & Repeat',
        explanation:
          'Move your thumb and middle finger up to pinch the base of the newest chain link. Yarn over and draw through again, repeating to create an even chain braid.',
        visualHint: 'Fingers pinching active base knot',
        coachTip: 'Moving fingers up every 2 stitches keeps tension uniform.',
      },
    ],
    demonstration: {
      title: 'Rhythmic Yarn-Over & Wrist Rotation',
      description:
        'Watch the fluid wrist motion: yarn over back-to-front, rotate hook downward 45 degrees, draw cleanly through loop, lift to shaft diameter.',
      keyFocusPoints: [
        'Loop rests on hook shaft to set diameter, not narrow neck',
        'Pinching fingers advance up the chain every 2 stitches',
        'Neutral wrist posture without stiff finger clenching',
      ],
      visualType: 'crochet',
    },
    commonMistakes: [
      {
        mistake: 'Pulling working yarn too tight (death grip)',
        correction: 'Relax your index finger. The loop on your hook should slide back and forth with zero friction.',
      },
      {
        mistake: 'Sizing loops on the narrow hook neck instead of shaft',
        correction: 'Always slide each newly drawn loop onto the uniform cylindrical hook shaft to gauge proper diameter.',
      },
      {
        mistake: 'Not advancing thumb and finger up the working chain',
        correction: 'Pinch right below the active stitch every 2-3 chains to maintain lever stability.',
      },
      {
        mistake: 'Catching or splitting yarn plies on the hook tip',
        correction: 'Rotate the hook nose downward toward the table as you pull through the loop.',
      },
    ],
    tips: [
      'Count your chain stitches by viewing the "V" shapes on the front face of the braid.',
      'If your chain curls tightly like a spiral telephone cord, your tension is too tight; switch to a 0.5mm larger hook.',
      'Practice 20 chain stitches, unravel, and repeat 3 times to build intuitive muscle memory.',
    ],
    safety: [
      'Take a 60-second wrist flex break every 15 minutes to prevent repetitive strain.',
      'Sit in an ergonomically supportive chair with feet flat on the floor and elbows supported.',
      'Store crochet hooks in a pouch or holder to prevent accidental puncture injuries.',
    ],
    video: {
      url: 'https://www.youtube.com/watch?v=ernCjOYRqAg',
      embedUrl: 'https://www.youtube.com/embed/ernCjOYRqAg',
      videoUrl: 'https://www.youtube.com/embed/ernCjOYRqAg',
      thumbnail: 'https://img.youtube.com/vi/ernCjOYRqAg/hqdefault.jpg',
      title: 'How to Start a Crochet Chain Stitch for Beginners',
      duration: '5:12',
      description: 'Learn slip knot creation, hook hold, yarn tension control, and forming uniform foundation chain stitches.',
      source: "YouTube • Annie's Attic Videos",
      language: 'English',
    },
  },
};

// Category contextual templates to generate full beginner-friendly learning content for all 67 skills
const CATEGORY_LEARNING_TEMPLATES: Record<
  string,
  {
    objectiveSuffix: string[];
    prepPrefix: string[];
    defaultTools: { name: string; detail?: string }[];
    defaultMaterials: { name: string; detail?: string }[];
    visualType: 'roller' | 'stitch' | 'nail' | 'crochet' | 'pottery' | 'knife' | 'generic';
  }
> = {
  'cat-1': {
    objectiveSuffix: ['Even surface application', 'Consistent boundary margins', 'Smooth texture transitions', 'Proper tool pressure control'],
    prepPrefix: ['Clean and dust work area thoroughly', 'Cover adjacent surfaces with protective tape or drop sheets', 'Prepare tools and check bristles/sleeves', 'Test application technique on sample board first'],
    defaultTools: [{ name: 'Application brush or tool', detail: 'Sized to target surface' }, { name: 'Mixing tray or palette', detail: 'Clean surface for loading pigment' }],
    defaultMaterials: [{ name: 'Coating or paint media', detail: 'Appropriate viscosity' }, { name: 'Surface substrate', detail: 'Drywall, canvas, or wood' }, { name: 'Clean rags / wipes', detail: 'For quick edge cleanups' }],
    visualType: 'roller',
  },
  'cat-2': {
    objectiveSuffix: ['Fabric edge alignment', 'Uniform stitch cadence', 'Tension balance without puckering', 'Clean anchor knotting'],
    prepPrefix: ['Press fabric flat with an iron to eliminate creases', 'Measure and mark guide lines with tailor chalk', 'Verify needle sharpness and matching thread tension', 'Organize pins in magnetic cushion for easy reach'],
    defaultTools: [{ name: 'Sewing needle or machine', detail: 'Appropriate size for fabric weight' }, { name: 'Fabric shears', detail: 'Sharp cutting edge' }, { name: 'Seam ruler', detail: 'For checking seam allowance' }],
    defaultMaterials: [{ name: 'Fabric swatch / garment', detail: 'Clean pressed cloth' }, { name: 'Sewing thread', detail: 'Matching weight and color' }, { name: 'Marking chalk', detail: 'Washable fabric marker' }],
    visualType: 'stitch',
  },
  'cat-3': {
    objectiveSuffix: ['Tension consistency across loops', 'Balanced hook rotation rhythm', 'Accurate stitch counting', 'Uniform edge geometry'],
    prepPrefix: ['Sit in supportive posture with forearms resting comfortably', 'Unwind working yarn to eliminate tension drag', 'Select ergonomic hook matching yarn weight', 'Count foundation stitches before proceeding'],
    defaultTools: [{ name: 'Crochet hook', detail: 'Size tailored to yarn gauge' }, { name: 'Tapestry needle', detail: 'For weaving yarn tails' }, { name: 'Stitch markers', detail: 'For marking pattern rounds' }],
    defaultMaterials: [{ name: 'Yarn ball', detail: 'Smooth ply in contrasting shade' }, { name: 'Pattern guide', detail: 'Reference diagram' }],
    visualType: 'crochet',
  },
  'cat-4': {
    objectiveSuffix: ['Clay centering and mass distribution', 'Wall thickness uniformity', 'Controlled hand pressure balance', 'Smooth surface and rim contouring'],
    prepPrefix: ['Knead clay to remove all trapped air bubbles', 'Clean wheel head or sculpting board thoroughly', 'Prepare water sponge and rib tools within arm reach', 'Lock elbows firmly into thighs for rigid stability'],
    defaultTools: [{ name: 'Pottery wheel or sculpting board', detail: 'Stable level platform' }, { name: 'Shaping rib & needle tool', detail: 'Metal or rubber' }, { name: 'Pottery sponge', detail: 'For water management' }],
    defaultMaterials: [{ name: 'Stoneware or earthenware clay', detail: 'Homogeneous moisture level' }, { name: 'Clean water container', detail: 'For lubricating clay contact' }],
    visualType: 'pottery',
  },
  'cat-5': {
    objectiveSuffix: ['Gentle upward product distribution', 'Safe boundary margins around eyes/mucosa', 'Seamless blending transitions', 'Skin-friendly light touch control'],
    prepPrefix: ['Clean hands thoroughly before touching facial skin', 'Ensure workspace is brightly illuminated with natural white light', 'Rest elbow or pinky finger on desk for micro-steadiness', 'Perform product patch test prior to application'],
    defaultTools: [{ name: 'Application brush or sponge', detail: 'Hygienically cleaned applicator' }, { name: 'Hand mirror', detail: 'Even magnification' }],
    defaultMaterials: [{ name: 'Product formulation', detail: 'Skin-compatible formula' }, { name: 'Cotton rounds / wipes', detail: 'For edge correction' }],
    visualType: 'nail',
  },
  'cat-6': {
    objectiveSuffix: ['Clean sectioning grid alignment', 'Uniform strand tension', 'Consistent heat tool angle', 'Frizz-free smooth finish'],
    prepPrefix: ['Detangle hair gently starting from ends toward roots', 'Apply heat protectant spray prior to thermal styling', 'Part hair into manageable quadrants with section clips', 'Adjust tool temperature to match hair density'],
    defaultTools: [{ name: 'Pintail comb & styling brush', detail: 'Anti-static bristles' }, { name: 'Styling clips', detail: 'For quadrant isolation' }, { name: 'Thermal or styling tool', detail: 'Iron, dryer, or wand' }],
    defaultMaterials: [{ name: 'Thermal protectant / spray', detail: 'Shields hair cuticle' }, { name: 'Snag-free elastics', detail: 'Secures finished styling' }],
    visualType: 'generic',
  },
  'cat-7': {
    objectiveSuffix: ['Root ball centering and depth control', 'Optimal soil aeration and tamping', 'Safe 45-degree angle cutting', 'Firm upright plant stabilization'],
    prepPrefix: ['Dampen potting mix slightly to prevent dust', 'Inspect plant roots and stems for health', 'Sterilize pruning tools with rubbing alcohol', 'Ensure containers have unobstructed drainage holes'],
    defaultTools: [{ name: 'Hand trowel & bypass pruners', detail: 'Clean sharp blades' }, { name: 'Watering vessel', detail: 'Controlled pour spout' }, { name: 'Gardening gloves', detail: 'Protects hand skin' }],
    defaultMaterials: [{ name: 'Potting mix / substrate', detail: 'Well-draining compost mix' }, { name: 'Planter pot or ground bed', detail: 'Adequate drainage holes' }, { name: 'Plant specimen', detail: 'Healthy cutting or nursery plant' }],
    visualType: 'generic',
  },
  'cat-8': {
    objectiveSuffix: ['Safe chef claw finger tucking', 'Firm bolster pinch grip control', 'Uniform slicing thickness', 'Rhythmic rocking blade cadence'],
    prepPrefix: ['Place damp towel underneath cutting board to prevent sliding', 'Hone knife blade on ceramic or steel rod for sharp edge', 'Wash and dry all produce before slicing', 'Clear prep station of loose bowls or clutter'],
    defaultTools: [{ name: '8-inch chef knife or tool', detail: 'Sharp clean blade' }, { name: 'Solid cutting board', detail: 'Wood or food-grade poly' }, { name: 'Prep containers', detail: 'For staging chopped items' }],
    defaultMaterials: [{ name: 'Fresh ingredients', detail: 'Produce, dough, or garnishes' }, { name: 'Non-slip towel', detail: 'Stabilizes board on counter' }],
    visualType: 'knife',
  },
  'cat-9': {
    objectiveSuffix: ['Axial tool alignment without tilt', 'Flush fastener seating depth', 'Precise measurement marking', 'Square 90-degree corner joints'],
    prepPrefix: ['Check workspace lighting directly above target workpiece', 'Double-check measurements twice before drilling or cutting', 'Select correct driver bit matching screw head exactly', 'Clamp workpiece firmly to workbench to eliminate slip'],
    defaultTools: [{ name: 'Driver, hammer, or hand tool', detail: 'Matching workpiece requirements' }, { name: 'Tape measure & speed square', detail: 'High accuracy markings' }, { name: 'Safety glasses', detail: 'Impact rated eye protection' }],
    defaultMaterials: [{ name: 'Workpiece material', detail: 'Timber, plasterboard, or hardware' }, { name: 'Fasteners / screws', detail: 'Correct gauge and length' }],
    visualType: 'generic',
  },
  'cat-10': {
    objectiveSuffix: ['Crisp corner crease sharpness', 'Symmetrical folding geometry', 'Controlled adhesive and layer application', 'Clean presentation aesthetics'],
    prepPrefix: ['Clear tabletop of dust, glue residue, and moisture', 'Measure template dimensions accurately with metal ruler', 'Score paper fold lines gently before creasing', 'Keep damp wipe ready for immediate adhesive spills'],
    defaultTools: [{ name: 'Bone folder or smoothing tool', detail: 'For razor-sharp crease lines' }, { name: 'Precision craft knife / scissors', detail: 'Clean sharp blade' }, { name: 'Metal ruler & cutting mat', detail: 'Guards tabletop' }],
    defaultMaterials: [{ name: 'Craft paper / resin / wax', detail: 'High quality craft medium' }, { name: 'Adhesive or binding wire', detail: 'Double-sided tape or craft glue' }],
    visualType: 'generic',
  },
};

// Catalog of verified, beginner-friendly YouTube instructional videos
export const VERIFIED_SKILL_VIDEOS: Record<string, SkillVideo> = {
  'skill-wall-painting': {
    url: 'https://www.youtube.com/watch?v=bLbUIevOxzY',
    embedUrl: 'https://www.youtube.com/embed/bLbUIevOxzY',
    videoUrl: 'https://www.youtube.com/embed/bLbUIevOxzY',
    thumbnail: 'https://img.youtube.com/vi/bLbUIevOxzY/hqdefault.jpg',
    title: 'How To Paint A Room | DIY For Beginners',
    duration: '15:20',
    description: 'Step-by-step masterclass covering room prep, cutting-in borders, tray loading, rolling technique, and streak-free finish.',
    source: 'YouTube • Home RenoVision DIY',
    language: 'English',
  },
  'skill-roller-painting': {
    url: 'https://www.youtube.com/watch?v=eofezT3QqRY',
    embedUrl: 'https://www.youtube.com/embed/eofezT3QqRY',
    videoUrl: 'https://www.youtube.com/embed/eofezT3QqRY',
    thumbnail: 'https://img.youtube.com/vi/eofezT3QqRY/hqdefault.jpg',
    title: 'How To Paint With a Roller to Avoid Roller Marks and Streaks',
    duration: '6:14',
    description: 'Master roller loading, W-pattern application, and feathering techniques to eliminate lap marks and tramlines.',
    source: 'YouTube • Benjamin Sahlstrom',
    language: 'English',
  },
  'skill-edge-painting': {
    url: 'https://www.youtube.com/watch?v=-QpdW-l0FRg',
    embedUrl: 'https://www.youtube.com/embed/-QpdW-l0FRg',
    videoUrl: 'https://www.youtube.com/embed/-QpdW-l0FRg',
    thumbnail: 'https://img.youtube.com/vi/-QpdW-l0FRg/hqdefault.jpg',
    title: 'How to Cut in Paint Edges with a Brush | This Old House',
    duration: '4:45',
    description: 'Professional cutting-in technique for ceilings, corners, and baseboards without messy painter tape bleed.',
    source: 'YouTube • This Old House',
    language: 'English',
  },
  'skill-crack-filling': {
    url: 'https://www.youtube.com/watch?v=bT7TpOl-Wys',
    embedUrl: 'https://www.youtube.com/embed/bT7TpOl-Wys',
    videoUrl: 'https://www.youtube.com/embed/bT7TpOl-Wys',
    thumbnail: 'https://img.youtube.com/vi/bT7TpOl-Wys/hqdefault.jpg',
    title: 'How to Fix a Drywall Crack in Ceiling or Wall FOR EVER!!!',
    duration: '11:02',
    description: 'Step-by-step joint compound crack repair, taping, feathering, and sanding technique for seamless walls.',
    source: 'YouTube • Komar Project',
    language: 'English',
  },
  'skill-mandala-painting': {
    url: 'https://www.youtube.com/watch?v=yZkWqq0ZSgM',
    embedUrl: 'https://www.youtube.com/embed/yZkWqq0ZSgM',
    videoUrl: 'https://www.youtube.com/embed/yZkWqq0ZSgM',
    thumbnail: 'https://img.youtube.com/vi/yZkWqq0ZSgM/hqdefault.jpg',
    title: 'Step-By-Step Dot Mandala Tutorial For Beginners',
    duration: '14:30',
    description: 'Master dot sizing, symmetric radial grid spacing, tool pressure, and acrylic dot layer graduation.',
    source: 'YouTube • Thoughtful Dots',
    language: 'English',
  },
  'skill-canvas-painting': {
    url: 'https://www.youtube.com/watch?v=Wla7FB3Vrm0',
    embedUrl: 'https://www.youtube.com/embed/Wla7FB3Vrm0',
    videoUrl: 'https://www.youtube.com/embed/Wla7FB3Vrm0',
    thumbnail: 'https://img.youtube.com/vi/Wla7FB3Vrm0/hqdefault.jpg',
    title: 'Basic Acrylic Painting Techniques for Beginners',
    duration: '8:55',
    description: 'Learn essential canvas acrylic brushwork, paint blending, washes, wet-on-dry, and texture control.',
    source: 'YouTube • Jennifer Funnell Art',
    language: 'English',
  },
  'skill-straight-stitching': {
    url: 'https://www.youtube.com/watch?v=meVu_3Iv-3U',
    embedUrl: 'https://www.youtube.com/embed/meVu_3Iv-3U',
    videoUrl: 'https://www.youtube.com/embed/meVu_3Iv-3U',
    thumbnail: 'https://img.youtube.com/vi/meVu_3Iv-3U/hqdefault.jpg',
    title: 'How To: Sew in a Straight Line (Sewing for Beginners)',
    duration: '7:08',
    description: 'Learn needle alignment, seam allowance guides, steady foot pedal pressure, and smooth fabric guidance.',
    source: 'YouTube • Made to Sew',
    language: 'English',
  },
  'skill-hemming': {
    url: 'https://www.youtube.com/watch?v=S4riD5a_vKg',
    embedUrl: 'https://www.youtube.com/embed/S4riD5a_vKg',
    videoUrl: 'https://www.youtube.com/embed/S4riD5a_vKg',
    thumbnail: 'https://img.youtube.com/vi/S4riD5a_vKg/hqdefault.jpg',
    title: 'How to EASILY Hem Pants At Home | Beginner Sewing Tutorial',
    duration: '6:20',
    description: 'Step-by-step guide for measuring, chalking, pressing, and sewing clean top-stitched or blind hems.',
    source: 'YouTube • Good Housekeeping',
    language: 'English',
  },
  'skill-button-stitching': {
    url: 'https://www.youtube.com/watch?v=F0VN_y71J0I',
    embedUrl: 'https://www.youtube.com/embed/F0VN_y71J0I',
    videoUrl: 'https://www.youtube.com/embed/F0VN_y71J0I',
    thumbnail: 'https://img.youtube.com/vi/F0VN_y71J0I/hqdefault.jpg',
    title: 'How to Sew on a Button the RIGHT Way!',
    duration: '5:40',
    description: 'Learn to thread, anchor without knot bulk, wrap a sturdy thread shank, and tie off securely.',
    source: 'YouTube • Cutesy Crafts',
    language: 'English',
  },
  'skill-hand-embroidery': {
    url: 'https://www.youtube.com/watch?v=E4i9EM5ats0',
    embedUrl: 'https://www.youtube.com/embed/E4i9EM5ats0',
    videoUrl: 'https://www.youtube.com/embed/E4i9EM5ats0',
    thumbnail: 'https://img.youtube.com/vi/E4i9EM5ats0/hqdefault.jpg',
    title: 'Embroidery for beginners - Stitches, knots, needle threading & more',
    duration: '18:15',
    description: 'Foundational hoop mounting, strand separation, backstitch, satin stitch, and French knot mechanics.',
    source: 'YouTube • I Heart Stitch Art',
    language: 'English',
  },
  'skill-crochet-chain': {
    url: 'https://www.youtube.com/watch?v=ernCjOYRqAg',
    embedUrl: 'https://www.youtube.com/embed/ernCjOYRqAg',
    videoUrl: 'https://www.youtube.com/embed/ernCjOYRqAg',
    thumbnail: 'https://img.youtube.com/vi/ernCjOYRqAg/hqdefault.jpg',
    title: 'How to Start a Crochet Chain Stitch for Beginners',
    duration: '5:12',
    description: 'Learn slip knot creation, hook hold, yarn tension control, and forming uniform foundation chain stitches.',
    source: "YouTube • Annie's Attic Videos",
    language: 'English',
  },
  'skill-single-crochet': {
    url: 'https://www.youtube.com/watch?v=Ik-GSXWoSak',
    embedUrl: 'https://www.youtube.com/embed/Ik-GSXWoSak',
    videoUrl: 'https://www.youtube.com/embed/Ik-GSXWoSak',
    thumbnail: 'https://img.youtube.com/vi/Ik-GSXWoSak/hqdefault.jpg',
    title: 'How to Single Crochet - Beginner Crochet Lesson 1',
    duration: '9:48',
    description: 'Master the foundational single crochet stitch: hook insertion, yarn over, draw through, and straight edges.',
    source: 'YouTube • GoodKnitKisses',
    language: 'English',
  },
  'skill-double-crochet': {
    url: 'https://www.youtube.com/watch?v=SWZ1zajDOHE',
    embedUrl: 'https://www.youtube.com/embed/SWZ1zajDOHE',
    videoUrl: 'https://www.youtube.com/embed/SWZ1zajDOHE',
    thumbnail: 'https://img.youtube.com/vi/SWZ1zajDOHE/hqdefault.jpg',
    title: 'How to Double Crochet - Beginner Crochet Lesson 3',
    duration: '11:15',
    description: 'Learn yarn over, hook placement into foundation chain, 2-step draw through, and turning chain alignment.',
    source: 'YouTube • GoodKnitKisses',
    language: 'English',
  },
  'skill-clay-centering': {
    url: 'https://www.youtube.com/watch?v=HF5IAJ0x2g0',
    embedUrl: 'https://www.youtube.com/embed/HF5IAJ0x2g0',
    videoUrl: 'https://www.youtube.com/embed/HF5IAJ0x2g0',
    thumbnail: 'https://img.youtube.com/vi/HF5IAJ0x2g0/hqdefault.jpg',
    title: 'How to Open Up Centred Clay and Form the Base of a Pot',
    duration: '12:40',
    description: 'Master potter Florian Gadsby explains forearm bracing, wheel speed, hand posture, and centering mass.',
    source: 'YouTube • Florian Gadsby',
    language: 'English',
  },
  'skill-pot-shaping': {
    url: 'https://www.youtube.com/watch?v=HF5IAJ0x2g0',
    embedUrl: 'https://www.youtube.com/embed/HF5IAJ0x2g0',
    videoUrl: 'https://www.youtube.com/embed/HF5IAJ0x2g0',
    thumbnail: 'https://img.youtube.com/vi/HF5IAJ0x2g0/hqdefault.jpg',
    title: 'How to Open Up Centred Clay and Form the Base of a Pot',
    duration: '12:40',
    description: 'Master potter Florian Gadsby demonstrates cylinder pulling, base shaping, and wall thickness control.',
    source: 'YouTube • Florian Gadsby',
    language: 'English',
  },
  'skill-face-cleansing': {
    url: 'https://www.youtube.com/watch?v=oXloVFZ6r9s',
    embedUrl: 'https://www.youtube.com/embed/oXloVFZ6r9s',
    videoUrl: 'https://www.youtube.com/embed/oXloVFZ6r9s',
    thumbnail: 'https://img.youtube.com/vi/oXloVFZ6r9s/hqdefault.jpg',
    title: 'How To: Clean Your Face, Part 1',
    duration: '4:10',
    description: 'Learn gentle circular finger pad motion, T-zone focus, lukewarm water rinsing, and pat-drying technique.',
    source: 'YouTube • Into The Gloss',
    language: 'English',
  },
  'skill-nail-polish-application': {
    url: 'https://www.youtube.com/watch?v=4Aww5-0F1pk',
    embedUrl: 'https://www.youtube.com/embed/4Aww5-0F1pk',
    videoUrl: 'https://www.youtube.com/embed/4Aww5-0F1pk',
    thumbnail: 'https://img.youtube.com/vi/4Aww5-0F1pk/hqdefault.jpg',
    title: 'Olive University: How to Paint Your Nails',
    duration: '4:32',
    description: 'The classic 3-stroke polish method: center stripe first, left curve, right curve, and capping the free edge without cuticle flooding.',
    source: 'YouTube • Olive & June',
    language: 'English',
  },
  'skill-hair-braiding': {
    url: 'https://www.youtube.com/watch?v=8rOx_oS6rSo',
    embedUrl: 'https://www.youtube.com/embed/8rOx_oS6rSo',
    videoUrl: 'https://www.youtube.com/embed/8rOx_oS6rSo',
    thumbnail: 'https://img.youtube.com/vi/8rOx_oS6rSo/hqdefault.jpg',
    title: 'How To Braid Hair For Complete Beginners (With Hand Placement & More)',
    duration: '7:25',
    description: 'Learn 3-strand sectioning, index/thumb pinch hand transfers, consistent tension, and clean braiding cadence.',
    source: 'YouTube • EverydayHairInspiration',
    language: 'English',
  },
  'skill-potting': {
    url: 'https://www.youtube.com/watch?v=J2pZEgAB6h0',
    embedUrl: 'https://www.youtube.com/embed/J2pZEgAB6h0',
    videoUrl: 'https://www.youtube.com/embed/J2pZEgAB6h0',
    thumbnail: 'https://img.youtube.com/vi/J2pZEgAB6h0/hqdefault.jpg',
    title: 'How to Plant a Snake Plant in a Pot (Beginner Tips | Step-by-Step Guide!)',
    duration: '8:30',
    description: 'Container drainage preparation, soil mix filling, root ball positioning, tamping, and initial watering.',
    source: 'YouTube • The Girl with a Shovel',
    language: 'English',
  },
  'skill-repotting': {
    url: 'https://www.youtube.com/watch?v=J2pZEgAB6h0',
    embedUrl: 'https://www.youtube.com/embed/J2pZEgAB6h0',
    videoUrl: 'https://www.youtube.com/embed/J2pZEgAB6h0',
    thumbnail: 'https://img.youtube.com/vi/J2pZEgAB6h0/hqdefault.jpg',
    title: 'How to Plant a Snake Plant in a Pot (Beginner Tips | Step-by-Step Guide!)',
    duration: '8:30',
    description: 'Container drainage preparation, soil mix filling, root ball positioning, tamping, and initial watering.',
    source: 'YouTube • The Girl with a Shovel',
    language: 'English',
  },
  'skill-knife-handling': {
    url: 'https://www.youtube.com/watch?v=Ydc_SaQ_eRQ',
    embedUrl: 'https://www.youtube.com/embed/Ydc_SaQ_eRQ',
    videoUrl: 'https://www.youtube.com/embed/Ydc_SaQ_eRQ',
    thumbnail: 'https://img.youtube.com/vi/Ydc_SaQ_eRQ/hqdefault.jpg',
    title: 'Basic Knife Skills | Allrecipes',
    duration: '5:15',
    description: 'Professional chef pinch grip on blade bolster, non-dominant claw hand tuck, and rhythmic rocking slice.',
    source: 'YouTube • Allrecipes',
    language: 'English',
  },
  'skill-vegetable-chopping': {
    url: 'https://www.youtube.com/watch?v=Ydc_SaQ_eRQ',
    embedUrl: 'https://www.youtube.com/embed/Ydc_SaQ_eRQ',
    videoUrl: 'https://www.youtube.com/embed/Ydc_SaQ_eRQ',
    thumbnail: 'https://img.youtube.com/vi/Ydc_SaQ_eRQ/hqdefault.jpg',
    title: 'Basic Knife Skills | Allrecipes',
    duration: '5:15',
    description: 'Learn chef rocking cuts, diced cuts, batonnets, and secure non-slip board setup.',
    source: 'YouTube • Allrecipes',
    language: 'English',
  },
  'skill-cake-decoration': {
    url: 'https://www.youtube.com/watch?v=zk_OYb0NKKk',
    embedUrl: 'https://www.youtube.com/embed/zk_OYb0NKKk',
    videoUrl: 'https://www.youtube.com/embed/zk_OYb0NKKk',
    thumbnail: 'https://img.youtube.com/vi/zk_OYb0NKKk/hqdefault.jpg',
    title: 'Cake Decorating for Beginners | How to Frost a Cake',
    duration: '10:05',
    description: 'Crumb coating, turntable spinning, offset spatula smoothing, and achieving crisp sharp frosting edges.',
    source: 'YouTube • Baker Bettie',
    language: 'English',
  },
  'skill-sanding': {
    url: 'https://www.youtube.com/watch?v=l7DpWvK3fRM',
    embedUrl: 'https://www.youtube.com/embed/l7DpWvK3fRM',
    videoUrl: 'https://www.youtube.com/embed/l7DpWvK3fRM',
    thumbnail: 'https://img.youtube.com/vi/l7DpWvK3fRM/hqdefault.jpg',
    title: 'How to Sand Wood by Hand | Woodworking 101',
    duration: '7:40',
    description: 'Sanding block holding, grain direction alignment, 80 to 220 grit progression, and dust clearing between coats.',
    source: 'YouTube • Arden Cabinet MFG',
    language: 'English',
  },
  'skill-gift-wrapping': {
    url: 'https://www.youtube.com/watch?v=On9MD3YU1w0',
    embedUrl: 'https://www.youtube.com/embed/On9MD3YU1w0',
    videoUrl: 'https://www.youtube.com/embed/On9MD3YU1w0',
    thumbnail: 'https://img.youtube.com/vi/On9MD3YU1w0/hqdefault.jpg',
    title: 'How To Wrap A Present! | Simple Wrapping Paper Technique',
    duration: '4:50',
    description: 'Paper dimension sizing, crisp box creasing, triangle end folds, double-sided tape, and tidy ribbon finish.',
    source: 'YouTube • How Do You Do?',
    language: 'English',
  },
  'skill-origami': {
    url: 'https://www.youtube.com/watch?v=Ux1ECrNDZl4',
    embedUrl: 'https://www.youtube.com/embed/Ux1ECrNDZl4',
    videoUrl: 'https://www.youtube.com/embed/Ux1ECrNDZl4',
    thumbnail: 'https://img.youtube.com/vi/Ux1ECrNDZl4/hqdefault.jpg',
    title: 'Origami: Crane [tutorial]',
    duration: '9:12',
    description: 'Classic Japanese paper crane: precise square alignment, valley folds, petal folds, and wing expansion.',
    source: "YouTube • Tavin's Origami Instructions",
    language: 'English',
  },
};

/**
 * Builds complete learning content for any skill based on its core properties
 */
export function buildLearningContent(skill: Omit<Skill, 'learning'>): SkillLearningContent {
  // Return bespoke flagship content if available
  if (FLAGSHIP_LEARNING[skill.id]) {
    return FLAGSHIP_LEARNING[skill.id];
  }

  const template =
    CATEGORY_LEARNING_TEMPLATES[skill.categoryId] ||
    CATEGORY_LEARNING_TEMPLATES['cat-1'];

  const dynamicObjectives = [
    `Understand proper tool grip and hand orientation for ${skill.name}`,
    `Learn sequential technique execution without rushing`,
    ...template.objectiveSuffix.slice(0, 2),
  ];

  const dynamicPreparation = [
    ...template.prepPrefix.slice(0, 2),
    `Organize required materials: ${skill.tools.slice(0, 2).join(', ')}`,
    skill.cameraPlacementTips,
  ];

  // Generate 4-5 dynamic tutorial steps from the skill's steps
  const tutorialSteps = skill.steps.map((stepText, idx) => ({
    stepNumber: idx + 1,
    title: `Phase ${idx + 1}: ${stepText.split(' ').slice(0, 4).join(' ')}...`,
    explanation: stepText,
    visualHint: `Focus on hand-tool contact angle and steady movement during Phase ${idx + 1}`,
    coachTip:
      idx === 0
        ? 'Take your time during initial setup; form consistency starts with your initial grip.'
        : idx === skill.steps.length - 1
        ? 'Maintain smooth follow-through rather than stopping abruptly.'
        : 'Keep breathing relaxed and avoid tensing your shoulder muscles.',
  }));

  const commonMistakes = [
    {
      mistake: `Rushing the movement during ${skill.name}`,
      correction: 'Slow down your hand speed by 30% to build clean muscle memory first.',
    },
    {
      mistake: 'Applying uneven downward pressure',
      correction: 'Maintain balanced hand contact throughout the full range of motion.',
    },
    {
      mistake: 'Inconsistent tool angle relative to working surface',
      correction: 'Keep your wrist neutral and locked to preserve the optimal reference angle.',
    },
  ];

  const tips = [
    `Maintain the camera placement recommended: ${skill.cameraPlacementTips}`,
    'Practice in short 5-minute focused bursts rather than long fatiguing sessions.',
    'Review your form scores in the Practice simulator to pinpoint specific areas to calibrate.',
  ];

  const safety = [
    ...skill.safetyNotes,
    'Stop immediately if you experience sharp wrist, finger, or lower back strain.',
  ];

  const demonstration = {
    title: `Core Technique Drill: ${skill.name}`,
    description: `Watch the rhythm and sequence of ${skill.name}. Notice the hand anchoring, smooth cadence, and consistent tool angle.`,
    keyFocusPoints: [
      `Maintain optimal tool angle: ${skill.metrics[0]?.target || 'Controlled'}`,
      `Steady rhythm matching target: ${skill.metrics[1]?.name || 'Form stability'}`,
      'Smooth transition between strokes or steps',
    ],
    visualType: template.visualType,
  };

  const verifiedVideo = VERIFIED_SKILL_VIDEOS[skill.id] || null;

  return {
    objective: dynamicObjectives,
    introduction: `${skill.name} is an essential hands-on technique in ${skill.categoryId}. ${skill.description}`,
    tools: skill.tools.map((tool) => ({ name: tool })),
    materials: template.defaultMaterials,
    preparation: dynamicPreparation,
    steps: tutorialSteps,
    demonstration,
    commonMistakes,
    tips,
    safety,
    video: verifiedVideo,
  };
}
