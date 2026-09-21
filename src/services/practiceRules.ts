import type { Skill } from '../types';
import type { SkillPracticeRule, PracticeStepDefinition } from '../types/practice';

// Specialized Rules for Flagship Crafts
const FLAGSHIP_PRACTICE_RULES: Record<string, SkillPracticeRule> = {
  'skill-hair-braiding': {
    skillId: 'skill-hair-braiding',
    skillName: 'Hair Braiding',
    requiredSubject: 'Hair and Head Area',
    requiredBodyParts: ['Both Hands', 'Hair / Crown Area'],
    requiredTools: [], // Strictly NO unnecessary tools!
    optionalTools: ['Detangling Comb / Brush'],
    requiredMaterials: ['Natural or Synthetic Hair'],
    optionalMaterials: ['Snag-free Hair Tie / Elastic'],
    minimumObservationSeconds: 4,
    initialCoachGuidance: 'Separate hair into three equal sections and bring both hands up to begin.',
    steps: [
      {
        stepNumber: 1,
        title: 'Sectioning',
        instruction: 'Separate the hair into three equal sections (Left, Center, Right).',
        expectedMotion: 'fine',
        requiredTools: [],
        requiredMaterials: ['Hair'],
      },
      {
        stepNumber: 2,
        title: 'Initial Hand Grip',
        instruction: 'Hold the three sections firmly between your index fingers and thumbs.',
        expectedMotion: 'stationary',
        requiredTools: [],
        requiredMaterials: ['Hair'],
      },
      {
        stepNumber: 3,
        title: 'First Outer Cross',
        instruction: 'Cross the left outer section over the center section.',
        expectedMotion: 'alternating',
        requiredTools: [],
        requiredMaterials: ['Hair'],
      },
      {
        stepNumber: 4,
        title: 'Opposite Side Cross',
        instruction: 'Cross the right outer section over the new center section.',
        expectedMotion: 'alternating',
        requiredTools: [],
        requiredMaterials: ['Hair'],
      },
      {
        stepNumber: 5,
        title: 'Rhythmic Braid Progression',
        instruction: 'Continue alternating left and right outer strands with consistent tension.',
        expectedMotion: 'alternating',
        requiredTools: [],
        requiredMaterials: ['Hair'],
      },
    ],
    observableSignals: [
      {
        id: 'hair_visible',
        label: 'Hair / Practice Area',
        description: 'Hair region framed with sufficient contrast in upper view',
        reliable: true,
      },
      {
        id: 'hands_visible',
        label: 'Both Hands Visible',
        description: 'Both left and right hands positioned within the active tracking frame',
        reliable: true,
      },
      {
        id: 'hands_near_hair',
        label: 'Hand-to-Hair Proximity',
        description: 'Hands actively positioned near and touching the hair zone',
        reliable: true,
      },
      {
        id: 'active_movement',
        label: 'Hand Movement',
        description: 'Active finger and wrist manipulation detected above idle baseline',
        reliable: true,
      },
      {
        id: 'alternating_pattern',
        label: 'Alternating Crossing Rhythm',
        description: 'Periodic left-to-right alternating hand shift characteristic of 3-strand plaiting',
        reliable: true,
      },
      {
        id: 'braid_progression',
        label: 'Braid Length Progression',
        description: 'Downward growth of woven plait structure',
        reliable: false, // Honestly labeled unreliable for browser-only webcam
      },
      {
        id: 'strand_separation_micro',
        label: 'Individual Strand Thickness',
        description: 'Micro-millimeter strand boundary measurement',
        reliable: false, // Honestly labeled unreliable for standard webcam
      },
    ],
  },

  'skill-straight-stitching': {
    skillId: 'skill-straight-stitching',
    skillName: 'Straight Stitching',
    requiredSubject: 'Sewing Machine / Fabric Surface',
    requiredBodyParts: ['Hands (Steering Position)'],
    requiredTools: ['Sewing Machine or Needle'],
    optionalTools: ['Fabric Pins', 'Thread Snips'],
    requiredMaterials: ['Fabric Swatch'],
    optionalMaterials: ['Thread'],
    minimumObservationSeconds: 4,
    initialCoachGuidance: 'Place hands on either side of the presser foot guide, keeping fingers 2 inches clear.',
    steps: [
      {
        stepNumber: 1,
        title: 'Fabric Alignment',
        instruction: 'Align the raw edge against the 5/8-inch throat plate guideline.',
        expectedMotion: 'stationary',
        requiredTools: ['Sewing Machine'],
        requiredMaterials: ['Fabric Swatch'],
      },
      {
        stepNumber: 2,
        title: 'Gentle Guide Position',
        instruction: 'Rest fingertips lightly on the fabric to guide direction without pushing.',
        expectedMotion: 'stationary',
        requiredTools: ['Sewing Machine'],
        requiredMaterials: ['Fabric Swatch'],
      },
      {
        stepNumber: 3,
        title: 'Steady Feeding Pass',
        instruction: 'Maintain a steady, rhythmic feed rate as fabric advances under the needle.',
        expectedMotion: 'fine',
        requiredTools: ['Sewing Machine'],
        requiredMaterials: ['Fabric Swatch'],
      },
      {
        stepNumber: 4,
        title: 'Seam Margin Check',
        instruction: 'Observe the seam distance staying parallel to the reference line.',
        expectedMotion: 'fine',
        requiredTools: ['Sewing Machine'],
        requiredMaterials: ['Fabric Swatch'],
      },
    ],
    observableSignals: [
      {
        id: 'workspace_visible',
        label: 'Sewing Surface Visible',
        description: 'Fabric and machine guide surface framed under camera',
        reliable: true,
      },
      {
        id: 'hands_visible',
        label: 'Guiding Hands Visible',
        description: 'Fingers visible on either side of the sewing line',
        reliable: true,
      },
      {
        id: 'finger_clearance',
        label: 'Safe Needle Clearance',
        description: 'Buffer zone maintained between hand positions and active needle point',
        reliable: true,
      },
      {
        id: 'feed_rhythm',
        label: 'Steady Feed Movement',
        description: 'Continuous linear fabric motion without erratic jerks',
        reliable: true,
      },
      {
        id: 'micro_stitch_pitch',
        label: 'Sub-Millimeter Stitch Pitch',
        description: 'Individual thread knot interval measurement',
        reliable: false, // Standard webcam cannot measure sub-millimeter thread stitches
      },
    ],
  },

  'skill-nail-polish-application': {
    skillId: 'skill-nail-polish-application',
    skillName: 'Nail Polish Application',
    requiredSubject: 'Hand & Nail Plate',
    requiredBodyParts: ['Receiving Hand (Anchored)', 'Applying Hand'],
    requiredTools: ['Nail Polish Bottle & Brush'],
    optionalTools: ['Cleanup Brush'],
    requiredMaterials: ['Nail Polish'],
    optionalMaterials: ['Cotton Pads'],
    minimumObservationSeconds: 4,
    initialCoachGuidance: 'Anchor your receiving hand flat on the table, with pinky tripod anchor on the brush hand.',
    steps: [
      {
        stepNumber: 1,
        title: 'Anchor Position',
        instruction: 'Rest hand flat on the surface and anchor your pinky finger for stability.',
        expectedMotion: 'stationary',
        requiredTools: ['Nail Polish'],
        requiredMaterials: ['Nails'],
      },
      {
        stepNumber: 2,
        title: 'Center Bead Placement',
        instruction: 'Place the bead 1mm above the cuticle and glide smoothly down the center.',
        expectedMotion: 'fine',
        requiredTools: ['Nail Polish'],
        requiredMaterials: ['Nails'],
      },
      {
        stepNumber: 3,
        title: 'Lateral Curvature Passes',
        instruction: 'Fan the brush along the left contour, then the right contour.',
        expectedMotion: 'fine',
        requiredTools: ['Nail Polish'],
        requiredMaterials: ['Nails'],
      },
      {
        stepNumber: 4,
        title: 'Free Edge Cap',
        instruction: 'Lightly swipe across the tip edge with minimal bead volume to seal.',
        expectedMotion: 'fine',
        requiredTools: ['Nail Polish'],
        requiredMaterials: ['Nails'],
      },
    ],
    observableSignals: [
      {
        id: 'hands_anchored',
        label: 'Hand Stability & Anchor',
        description: 'Wrist or pinky grounded on surface with minimal high-frequency tremor',
        reliable: true,
      },
      {
        id: 'brush_movement',
        label: 'Smooth Longitudinal Strokes',
        description: 'Controlled downward linear brush pass across the nail region',
        reliable: true,
      },
      {
        id: 'cadence_control',
        label: 'Controlled Pass Cadence',
        description: 'Multi-pass sequence recognized without rushing',
        reliable: true,
      },
      {
        id: 'micro_cuticle_gap',
        label: 'Exact 1.0mm Cuticle Clearance',
        description: 'Optical measurement of micro-gap around the eponychium',
        reliable: false, // Standard webcam cannot verify exact 1mm margin
      },
    ],
  },

  'skill-crochet-basics': {
    skillId: 'skill-crochet-basics',
    skillName: 'Crochet Basics',
    requiredSubject: 'Hands, Hook & Yarn',
    requiredBodyParts: ['Both Hands (Hook Hand + Yarn Hand)'],
    requiredTools: ['Crochet Hook'],
    optionalTools: ['Scissors'],
    requiredMaterials: ['Yarn'],
    optionalMaterials: [],
    minimumObservationSeconds: 4,
    initialCoachGuidance: 'Hold hook in dominant hand and drape working yarn across index finger of non-dominant hand.',
    steps: [
      {
        stepNumber: 1,
        title: 'Slip Knot & Grip',
        instruction: 'Mount slip knot on hook and grip hook shaft with pencil or knife hold.',
        expectedMotion: 'fine',
        requiredTools: ['Crochet Hook'],
        requiredMaterials: ['Yarn'],
      },
      {
        stepNumber: 2,
        title: 'Yarn-Over Motion',
        instruction: 'Rotate hook under and over the working yarn strand.',
        expectedMotion: 'circular',
        requiredTools: ['Crochet Hook'],
        requiredMaterials: ['Yarn'],
      },
      {
        stepNumber: 3,
        title: 'Draw Through Loop',
        instruction: 'Pivot wrist and draw yarn bead through the active loop on hook.',
        expectedMotion: 'fine',
        requiredTools: ['Crochet Hook'],
        requiredMaterials: ['Yarn'],
      },
      {
        stepNumber: 4,
        title: 'Chain Sequence Rhythm',
        instruction: 'Repeat yarn-overs with consistent wrist rotation to build uniform chain.',
        expectedMotion: 'alternating',
        requiredTools: ['Crochet Hook'],
        requiredMaterials: ['Yarn'],
      },
    ],
    observableSignals: [
      {
        id: 'dual_hands',
        label: 'Both Hands in Working Zone',
        description: 'Non-dominant tension hand and dominant hook hand framed together',
        reliable: true,
      },
      {
        id: 'wrist_rotation',
        label: 'Wrist Rotation Motion',
        description: 'Repeated cyclic wrist pivot during hook loop draws',
        reliable: true,
      },
      {
        id: 'loop_cadence',
        label: 'Rhythmic Stitch Tempo',
        description: 'Predictable tempo across consecutive chain stitches',
        reliable: true,
      },
      {
        id: 'ply_strand_tension',
        label: 'Internal Yarn Fiber Tension (Grams)',
        description: 'Direct tensile force measurement of yarn fibers',
        reliable: false, // Optical webcam cannot measure tension force in grams
      },
    ],
  },

  'skill-roller-painting': {
    skillId: 'skill-roller-painting',
    skillName: 'Roller Painting',
    requiredSubject: 'Wall / Surface Area',
    requiredBodyParts: ['Upper Body & Working Arms'],
    requiredTools: ['Paint Roller & Frame'],
    optionalTools: ['Paint Tray', 'Painter Tape'],
    requiredMaterials: ['Latex/Acrylic Paint', 'Wall Surface'],
    optionalMaterials: [],
    minimumObservationSeconds: 4,
    initialCoachGuidance: 'Stand balanced with two feet planted, roller held at 45° angle to the surface.',
    steps: [
      {
        stepNumber: 1,
        title: 'Initial Deposit (M-Pattern)',
        instruction: 'Lay on paint in an upward diagonal stroke forming an M or W shape.',
        expectedMotion: 'sweeping',
        requiredTools: ['Paint Roller'],
        requiredMaterials: ['Paint'],
      },
      {
        stepNumber: 2,
        title: 'Cross-Fill Strokes',
        instruction: 'Fill in the pattern without lifting the roller completely from the wall.',
        expectedMotion: 'sweeping',
        requiredTools: ['Paint Roller'],
        requiredMaterials: ['Paint'],
      },
      {
        stepNumber: 3,
        title: 'Light Upward Backroll',
        instruction: 'Smooth out wet edges with a light, uniform upward stroke in one direction.',
        expectedMotion: 'sweeping',
        requiredTools: ['Paint Roller'],
        requiredMaterials: ['Paint'],
      },
    ],
    observableSignals: [
      {
        id: 'sweeping_arm_motion',
        label: 'Vertical Roller Motion',
        description: 'Broad sweeping vertical movement over a large surface span',
        reliable: true,
      },
      {
        id: 'posture_balance',
        label: 'Body Stance Stability',
        description: 'Stable torso position without excessive leaning or overreaching',
        reliable: true,
      },
      {
        id: 'stroke_cadence',
        label: 'Even Stroke Velocity',
        description: 'Consistent velocity throughout upward and downward passes',
        reliable: true,
      },
      {
        id: 'paint_sheen_microns',
        label: 'Wet Film Thickness (Microns)',
        description: 'Liquid paint film depth measurement',
        reliable: false, // Standard webcam cannot measure liquid film microns
      },
    ],
  },
};

/**
 * Generates honest, skill-specific practice rules for ANY skill in the database.
 * Derives tools, materials, and steps directly from the skill definition so no inappropriate
 * tools (like asking for scissors or rollers) are ever shown for unrelated crafts.
 */
export function getSkillPracticeRules(skill: Skill): SkillPracticeRule {
  if (FLAGSHIP_PRACTICE_RULES[skill.id]) {
    return FLAGSHIP_PRACTICE_RULES[skill.id];
  }

  // Derive steps from skill's teaching steps or learning content
  const steps: PracticeStepDefinition[] = (skill.learning?.steps || []).length > 0
    ? skill.learning.steps.map((st, i) => ({
        stepNumber: i + 1,
        title: st.title || `Step ${i + 1}`,
        instruction: st.explanation || st.title,
        expectedMotion: i === 0 ? 'stationary' : 'fine',
        requiredTools: skill.tools.slice(0, 1),
        requiredMaterials: (skill.learning.materials || []).map((m) => m.name).slice(0, 1),
      }))
    : (skill.steps || []).map((st, i) => ({
        stepNumber: i + 1,
        title: `Step ${i + 1}`,
        instruction: st,
        expectedMotion: i === 0 ? 'stationary' : 'fine',
        requiredTools: skill.tools.slice(0, 1),
        requiredMaterials: [],
      }));

  // Fallback if steps array is empty
  if (steps.length === 0) {
    steps.push({
      stepNumber: 1,
      title: 'Practice Setup',
      instruction: `Position yourself and your workspace for ${skill.name}.`,
      expectedMotion: 'stationary',
      requiredTools: skill.tools.slice(0, 1),
      requiredMaterials: [],
    });
    steps.push({
      stepNumber: 2,
      title: 'Technique Execution',
      instruction: `Perform the core technique movement with steady control.`,
      expectedMotion: 'fine',
      requiredTools: skill.tools.slice(0, 1),
      requiredMaterials: [],
    });
  }

  // Derive observable signals from metrics
  const observableSignals = [
    {
      id: 'workspace_framed',
      label: 'Workspace & Hands Visible',
      description: 'Hands and activity area positioned inside active camera frame',
      reliable: true,
    },
    {
      id: 'active_motion',
      label: 'Movement Detected',
      description: 'Active technique motion detected above baseline tremor',
      reliable: true,
    },
    {
      id: 'cadence_consistency',
      label: 'Movement Cadence',
      description: 'Consistent pace maintained across consecutive practice seconds',
      reliable: true,
    },
  ];

  // Add specific metric as an honest observable signal
  if (skill.metrics && skill.metrics[0]) {
    observableSignals.push({
      id: skill.metrics[0].id,
      label: skill.metrics[0].name,
      description: skill.metrics[0].description || `Target: ${skill.metrics[0].target}`,
      reliable: false, // Label non-flagship deep metrics as not reliably detected by browser camera
    });
  }

  return {
    skillId: skill.id,
    skillName: skill.name,
    requiredSubject: `${skill.name} Workspace`,
    requiredBodyParts: ['Hands'],
    requiredTools: skill.tools.slice(0, 2),
    optionalTools: skill.tools.slice(2),
    requiredMaterials: (skill.learning?.materials || []).map((m) => m.name),
    optionalMaterials: [],
    minimumObservationSeconds: 4,
    initialCoachGuidance: `Position your hands in the frame to practice ${skill.name}.`,
    steps,
    observableSignals,
  };
}
