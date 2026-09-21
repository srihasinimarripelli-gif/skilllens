import type { Category, Skill } from '../types';
import { buildLearningContent } from './learningData';

export const CATEGORIES: Category[] = [
  {
    id: 'cat-1',
    name: 'Painting & Decoration',
    description: 'Master wall coverage, roller stroke consistency, edge cutting, and decorative artwork.',
    iconName: 'Paintbrush',
    skillCount: 7,
    gradient: 'from-amber-500 to-rose-500',
  },
  {
    id: 'cat-2',
    name: 'Tailoring & Fashion',
    description: 'Learn needle alignment, seam allowance consistency, stitch spacing, and garment repair.',
    iconName: 'Scissors',
    skillCount: 6,
    gradient: 'from-violet-500 to-indigo-500',
  },
  {
    id: 'cat-3',
    name: 'Crochet & Handmade Crafts',
    description: 'Perfect loop tension, stitch cadence, hook angle, and intricate handmade pattern geometry.',
    iconName: 'Sparkles',
    skillCount: 7,
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    id: 'cat-4',
    name: 'Pottery & Ceramics',
    description: 'Practice wheel centering, hand pressure symmetry, rim shaping, and clay surface control.',
    iconName: 'CircleDot',
    skillCount: 7,
    gradient: 'from-orange-500 to-amber-700',
  },
  {
    id: 'cat-5',
    name: 'Beauty, Skincare & Makeup',
    description: 'Refine product distribution, brush blending angles, wing symmetry, and nail coating precision.',
    iconName: 'Heart',
    skillCount: 9,
    gradient: 'from-pink-500 to-rose-400',
  },
  {
    id: 'cat-6',
    name: 'Hair & Styling',
    description: 'Sectioning precision, braid tension, curling iron angles, and heat tool gliding technique.',
    iconName: 'Smile',
    skillCount: 6,
    gradient: 'from-fuchsia-500 to-purple-600',
  },
  {
    id: 'cat-7',
    name: 'Gardening & Plants',
    description: 'Proper soil tamping, seedling spacing, root depth, pruning angle, and staking methods.',
    iconName: 'Flower2',
    skillCount: 7,
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    id: 'cat-8',
    name: 'Cooking & Food Decoration',
    description: 'Chef knife claw grip, slicing cadence, pastry rolling pressure, and culinary presentation.',
    iconName: 'Utensils',
    skillCount: 6,
    gradient: 'from-red-500 to-orange-500',
  },
  {
    id: 'cat-9',
    name: 'DIY & Home Improvement',
    description: 'Perpendicular drill alignment, screw torque control, square marking, and level mounting.',
    iconName: 'Wrench',
    skillCount: 6,
    gradient: 'from-blue-600 to-cyan-600',
  },
  {
    id: 'cat-10',
    name: 'Creative & Decorative Crafts',
    description: 'Precise paper creasing, corner folding, resin pouring layers, and holiday adornments.',
    iconName: 'Palette',
    skillCount: 6,
    gradient: 'from-teal-500 to-emerald-400',
  },
];

const RAW_SKILLS: Omit<Skill, 'learning'>[] = [
  // 1. Painting & Decoration (7)
  {
    id: 'skill-wall-painting',
    categoryId: 'cat-1',
    name: 'Wall Painting',
    description: 'Establish consistent roller coverage, minimize lap marks, and keep even pressure across dry drywall.',
    difficulty: 'Beginner',
    duration: '10-15 min',
    steps: ['Dip roller lightly in tray', 'Roll off excess in grid', 'Apply in a dynamic W or M pattern', 'Cross-roll horizontally to smooth'],
    tools: ['9-inch paint roller', 'Extension pole', 'Paint tray', 'Primer/latex paint'],
    safetyNotes: ['Ensure adequate room ventilation', 'Wear safety goggles to protect eyes from spatter'],
    metrics: [
      { id: 'coverage', name: 'Coverage Uniformity', target: '>90%', unit: '%', description: 'Evenness of paint layer with no thin patches' },
      { id: 'stroke_speed', name: 'Stroke Cadence', target: '40-50/min', unit: 'strokes', description: 'Rhythmic strokes preventing paint slinging' },
      { id: 'pressure', name: 'Roll Pressure Balance', target: 'Balanced', unit: 'grade', description: 'Prevents roller edge bead buildup' }
    ],
    cameraPlacementTips: 'Mount phone 1.5m away facing the wall section at chest height.',
  },
  {
    id: 'skill-roller-painting',
    categoryId: 'cat-1',
    name: 'Roller Painting',
    description: 'Flagship drill: Perfect roller stroke consistency, overlap ratio, and edge boundary accuracy without dripping.',
    difficulty: 'Beginner',
    duration: '5-10 min',
    flagship: true,
    steps: ['Load roller evenly on tray ramp', 'Roll upwards first to deposit paint', 'Work in 3x3 foot sections', 'Backroll lightly in a single direction'],
    tools: ['Medium nap roller', 'Paint tray with liner', 'Sample board or wall'],
    safetyNotes: ['Maintain firm footing', 'Wipe handles to prevent slippery grip'],
    metrics: [
      { id: 'coverage', name: 'Coverage', target: '92%', unit: '%', description: 'Percentage of surface evenly covered without bare spots' },
      { id: 'stroke_consistency', name: 'Stroke Consistency', target: '88%', unit: '%', description: 'Uniformity of upward and downward roller passes' },
      { id: 'edge_accuracy', name: 'Edge Accuracy', target: '95%', unit: '%', description: 'Boundary cleanliness along taped or cut edges' }
    ],
    cameraPlacementTips: 'Prop phone on a stand 4-5 feet away, angled perpendicular to your working wall panel.',
  },
  {
    id: 'skill-edge-painting',
    categoryId: 'cat-1',
    name: 'Edge Painting',
    description: 'Cut clean borders along ceiling lines, baseboards, and window trim with steady brush bristle control.',
    difficulty: 'Intermediate',
    duration: '8-12 min',
    steps: ['Hold angled sash brush like a pencil', 'Lead with the bristle tip', 'Create an even 1/8-inch bead of paint', 'Draw brush smoothly without stopping'],
    tools: ['2.5-inch angled sash brush', 'Painter’s tape', 'Cut bucket'],
    safetyNotes: ['Maintain three points of contact if using a ladder', 'Do not overextend your reach'],
    metrics: [
      { id: 'line_straightness', name: 'Edge Straightness', target: '<1mm dev', unit: 'mm', description: 'Deviation from trim reference border' },
      { id: 'bristle_angle', name: 'Bristle Angle', target: '45°', unit: 'deg', description: 'Optimal angle for paint release and control' }
    ],
    cameraPlacementTips: 'Position phone side-on, 2 feet away, level with the trim line.',
  },
  {
    id: 'skill-crack-filling',
    categoryId: 'cat-1',
    name: 'Crack Filling',
    description: 'Apply spackle or joint compound smoothly with a putty knife, feathering edges flush with the drywall.',
    difficulty: 'Beginner',
    duration: '5-8 min',
    steps: ['Clean loose debris from crack', 'Load knife with small bead', 'Press compound firmly into groove at 45°', 'Hold knife at 15° to scrape surface flush'],
    tools: ['3-inch flexible putty knife', 'Lightweight spackle', 'Sanding sponge'],
    safetyNotes: ['Wear a dust mask when preparing and sanding dry compound'],
    metrics: [
      { id: 'flushness', name: 'Surface Flushness', target: 'Flush ±0.5mm', unit: 'mm', description: 'Level transition between wall and filler' },
      { id: 'blade_angle', name: 'Blade Angle Control', target: '30-45°', unit: 'deg', description: 'Proper angle to pack cavity without gouging' }
    ],
    cameraPlacementTips: 'Place camera 18 inches away with oblique lighting to highlight shadow ridges.',
  },
  {
    id: 'skill-mandala-painting',
    categoryId: 'cat-1',
    name: 'Mandala Painting',
    description: 'Dot and radial symmetry painting technique using dotting styluses and acrylics on stones or canvas.',
    difficulty: 'Intermediate',
    duration: '10-15 min',
    steps: ['Mark center point and radial grid', 'Dip tool perpendicularly into paint', 'Apply dot with straight downward press', 'Maintain consistent spacing across rings'],
    tools: ['Dotting tools of various diameters', 'Acrylic paints', 'Palette', 'Dark smooth base stone or canvas'],
    safetyNotes: ['Keep work surface level to prevent wet dots from drifting'],
    metrics: [
      { id: 'radial_symmetry', name: 'Radial Symmetry', target: '95%', unit: '%', description: 'Uniform spacing from center origin' },
      { id: 'dot_consistency', name: 'Dot Size Consistency', target: '±5%', unit: '%', description: 'Uniform droplet volume per ring tier' }
    ],
    cameraPlacementTips: 'Top-down overhead camera view directly above the mandala board.',
  },
  {
    id: 'skill-canvas-painting',
    categoryId: 'cat-1',
    name: 'Canvas Painting',
    description: 'Practice wet-on-wet acrylic blending and brush pressure transitions for smooth gradient backdrops.',
    difficulty: 'Intermediate',
    duration: '12-18 min',
    steps: ['Lay down base tone with flat wash', 'Introduce secondary pigment on bottom third', 'Use criss-cross strokes to merge boundaries', 'Finish with soft horizontal feathering'],
    tools: ['Stretched canvas', '1-inch flat wash brush', 'Acrylic colors', 'Water mist bottle'],
    safetyNotes: ['Work in well-lit area to avoid eye strain'],
    metrics: [
      { id: 'gradient_smoothness', name: 'Gradient Smoothness', target: '88%', unit: '%', description: 'Lack of harsh pigment separation lines' },
      { id: 'blend_rhythm', name: 'Brush Cadence', target: 'Steady', unit: 'tempo', description: 'Consistent stroke speed before acrylic dries' }
    ],
    cameraPlacementTips: 'Angle camera at 45 degrees over your dominant painting shoulder.',
  },
  {
    id: 'skill-diy-home-decoration',
    categoryId: 'cat-1',
    name: 'DIY Home Decoration',
    description: 'Stenciling and sponge dabbing geometric patterns onto decorative accent surfaces.',
    difficulty: 'Beginner',
    duration: '8-12 min',
    steps: ['Affix stencil securely with low-tack tape', 'Load sea sponge with near-dry paint', 'Dab perpendicularly onto stencil voids', 'Peel carefully while paint is tacky'],
    tools: ['Geometric wall stencil', 'Natural sea sponge', 'Matte acrylics', 'Painter tape'],
    safetyNotes: ['Test adhesion on scrap board first to protect underlying wall paint'],
    metrics: [
      { id: 'bleed_prevention', name: 'Boundary Bleed Control', target: '<2%', unit: '%', description: 'Paint bleed prevention under stencil mask' },
      { id: 'density', name: 'Dabbing Density', target: 'Uniform', unit: 'level', description: 'Even color distribution across repeating motif' }
    ],
    cameraPlacementTips: 'Position camera directly parallel to the stencil grid, 2 feet back.',
  },

  // 2. Tailoring & Fashion (6)
  {
    id: 'skill-straight-stitching',
    categoryId: 'cat-2',
    name: 'Straight Stitching',
    description: 'Flagship drill: Guide fabric with hand alignment, maintaining seam allowance and steady stitch length.',
    difficulty: 'Beginner',
    duration: '5-10 min',
    flagship: true,
    steps: ['Align fabric edge to throat plate guide line', 'Place left hand 3 inches in front to steer', 'Keep gentle hand pressure without pulling', 'Maintain rhythmic foot press and needle pacing'],
    tools: ['Sewing machine or hand needle', 'Practice fabric strips with ruled lines', 'Thread'],
    safetyNotes: ['Keep fingers at least 1 inch clear of needle path', 'Turn off power when threading'],
    metrics: [
      { id: 'line_deviation', name: 'Line Deviation', target: '<1.5mm', unit: 'mm', description: 'Maximum drift from the target seam guide' },
      { id: 'alignment', name: 'Alignment Stability', target: '94%', unit: '%', description: 'Parallel consistency along fabric edge' },
      { id: 'movement_consistency', name: 'Movement Consistency', target: '90%', unit: '%', description: 'Smooth, unhurried fabric feeding rate' }
    ],
    cameraPlacementTips: 'Mount phone on side tripod 30cm away, viewing needle plate and feeding fingers.',
  },
  {
    id: 'skill-hemming',
    categoryId: 'cat-2',
    name: 'Hemming',
    description: 'Execute invisible blind-hem or uniform folded hem stitches along garment bottom edges.',
    difficulty: 'Intermediate',
    duration: '10-15 min',
    steps: ['Press double fold with hot iron', 'Catch 1-2 threads of outer garment with needle', 'Pass through hem fold for 1/4 inch', 'Keep tension loose so hem does not pucker'],
    tools: ['Fine hand sewing needle', 'Matching thread', 'Hem gauge', 'Pressing iron'],
    safetyNotes: ['Be cautious with hot steam iron', 'Pin away from sewing direction'],
    metrics: [
      { id: 'stitch_invisibility', name: 'Stitch Invisibility', target: '92%', unit: '%', description: 'Lack of visible dimples on garment face' },
      { id: 'spacing', name: 'Hem Spacing', target: '6mm ±1mm', unit: 'mm', description: 'Uniform distance between successive hem stitches' }
    ],
    cameraPlacementTips: 'Overhead camera 25cm directly above the folded hemline.',
  },
  {
    id: 'skill-seam-alignment',
    categoryId: 'cat-2',
    name: 'Seam Alignment',
    description: 'Pin and match intersecting cross-seams and patterned plaids before machine stitching.',
    difficulty: 'Intermediate',
    duration: '6-10 min',
    steps: ['Align seam junction points right sides together', 'Insert pin directly through both seam wells', 'Pin on either side to prevent shift', 'Check reverse side match before basting'],
    tools: ['Glass-head sewing pins', 'Fabric swatches with cross seams'],
    safetyNotes: ['Store loose pins in magnetic cushion, never in mouth'],
    metrics: [
      { id: 'junction_match', name: 'Intersection Precision', target: '0mm offset', unit: 'mm', description: 'Exact point-to-point meeting of intersecting seams' },
      { id: 'pin_stability', name: 'Pin Placement Angle', target: '90° to seam', unit: 'deg', description: 'Perpendicular pinning prevents fabric slippage' }
    ],
    cameraPlacementTips: 'Close-up macro angle 20cm away focused on seam junction.',
  },
  {
    id: 'skill-button-stitching',
    categoryId: 'cat-2',
    name: 'Button Stitching',
    description: 'Sew secure 2-hole and 4-hole buttons with thread shank spacer for clean buttoning clearance.',
    difficulty: 'Beginner',
    duration: '5-8 min',
    steps: ['Anchor thread on wrong side', 'Place toothpick across button as spacer', 'Make 6-8 passes through alternating holes', 'Wrap thread 3 times around stem to form shank'],
    tools: ['4-hole button', 'Sewing needle', 'Heavy duty or doubled thread', 'Toothpick/spacer'],
    safetyNotes: ['Use thimble to prevent needle eye bruising on thumb'],
    metrics: [
      { id: 'shank_height', name: 'Shank Clearance', target: '2-3mm', unit: 'mm', description: 'Proper gap height for fabric buttonhole thickness' },
      { id: 'tension_balance', name: 'Thread Tension', target: 'Firm', unit: 'rating', description: 'Tight passes without distorting base garment' }
    ],
    cameraPlacementTips: 'Front-angled view 20cm away showing needle entry and wrap.',
  },
  {
    id: 'skill-hand-embroidery',
    categoryId: 'cat-2',
    name: 'Hand Embroidery',
    description: 'Master satin stitch and French knots with balanced floss tension and clean petal coverage.',
    difficulty: 'Intermediate',
    duration: '10-15 min',
    steps: ['Tension fabric drum-tight in wooden hoop', 'Bring needle up at outline boundary', 'Lay straight parallel thread across shape', 'Insert needle precisely on opposite contour line'],
    tools: ['Embroidery hoop', 'Stranded cotton floss', 'Size 7 crewel needle', 'Linen fabric'],
    safetyNotes: ['Take frequent micro-breaks to avoid finger cramps'],
    metrics: [
      { id: 'thread_parallelism', name: 'Thread Parallelism', target: '96%', unit: '%', description: 'Alignment of adjacent satin stitches without gaps' },
      { id: 'tension_uniformity', name: 'Fabric Pucker Control', target: '0 puckers', unit: 'count', description: 'Even tension without pulling base fabric taut' }
    ],
    cameraPlacementTips: 'Direct overhead view centered 25cm over the embroidery hoop.',
  },
  {
    id: 'skill-basic-clothing-repair',
    categoryId: 'cat-2',
    name: 'Basic Clothing Repair',
    description: 'Mend popped side seams and small fabric tears using reinforced ladder stitch techniques.',
    difficulty: 'Beginner',
    duration: '7-12 min',
    steps: ['Turn garment inside out or align torn fold', 'Insert needle inside folded hem edge', 'Take small stitch directly opposite', 'Pull thread gently to draw raw edges invisibly shut'],
    tools: ['Fine needle', 'Color-matched thread', 'Scissors', 'Iron'],
    safetyNotes: ['Inspect needle tip for burrs that might snag fabric knit'],
    metrics: [
      { id: 'closure_smoothness', name: 'Closure Flatness', target: 'Flush', unit: 'status', description: 'Seam lays flat without bunching' },
      { id: 'durability_tension', name: 'Anchor Security', target: 'High', unit: 'rating', description: 'Triple knot tie-off preventing re-opening' }
    ],
    cameraPlacementTips: 'Position 30cm away angled 45 degrees over hands.',
  },

  // 3. Crochet & Handmade Crafts (7)
  {
    id: 'skill-crochet-chain',
    categoryId: 'cat-3',
    name: 'Crochet Chain',
    description: 'Flagship drill: Establish uniform loop tension, consistent hook rotation, and steady hand rhythm.',
    difficulty: 'Beginner',
    duration: '5-10 min',
    flagship: true,
    steps: ['Create a clean slip knot on the hook', 'Tension working yarn over index finger', 'Yarn over hook from back to front', 'Rotate hook downward and draw through loop smoothly'],
    tools: ['5.0mm (H-8) crochet hook', 'Worsted weight yarn in bright color'],
    safetyNotes: ['Keep wrists neutral to avoid carpal strain'],
    metrics: [
      { id: 'stitch_consistency', name: 'Stitch Consistency', target: '90%', unit: '%', description: 'Uniform width and height across chained loops' },
      { id: 'spacing', name: 'Spacing & Tension', target: '88%', unit: '%', description: 'Consistency of yarn pull through hook' },
      { id: 'hand_movement', name: 'Hand Movement Rhythm', target: '92%', unit: '%', description: 'Smooth wrist rotation without jerky pulls' }
    ],
    cameraPlacementTips: 'Mount phone 30-40cm above hands, angled down 60 degrees to see hook throat.',
  },
  {
    id: 'skill-single-crochet',
    categoryId: 'cat-3',
    name: 'Single Crochet',
    description: 'Insert hook into chain loops, yarn over, pull through, and finish with balanced dual loop closure.',
    difficulty: 'Beginner',
    duration: '8-12 min',
    steps: ['Insert hook under top two loops of stitch', 'Yarn over and pull loop through (2 loops on hook)', 'Yarn over again and pull through both loops', 'Maintain even height on each post'],
    tools: ['5.0mm crochet hook', 'Swatches with foundation chain', 'Stitch markers'],
    safetyNotes: ['Do not grip hook with excessive thumb pressure'],
    metrics: [
      { id: 'row_straightness', name: 'Row Edge Straightness', target: '95%', unit: '%', description: 'Preservation of exact stitch count and edge borders' },
      { id: 'post_height', name: 'Post Height Uniformity', target: '±1mm', unit: 'mm', description: 'Even height across each single crochet post' }
    ],
    cameraPlacementTips: 'Angled over-shoulder view 35cm away focusing on working loops.',
  },
  {
    id: 'skill-double-crochet',
    categoryId: 'cat-3',
    name: 'Double Crochet',
    description: 'Build tall openwork stitches with initial yarn-over, step-wise two-by-two loop releases.',
    difficulty: 'Intermediate',
    duration: '8-15 min',
    steps: ['Yarn over before inserting hook into next stitch', 'Draw loop up to level of previous stitches', 'Yarn over and pull through first 2 loops', 'Yarn over and pull through final 2 loops'],
    tools: ['Crochet hook', 'DK or worsted yarn', 'Measuring tape'],
    safetyNotes: ['Rest forearms on table edge to reduce shoulder tension'],
    metrics: [
      { id: 'column_alignment', name: 'Column Verticality', target: '90%', unit: '%', description: 'Perpendicular alignment of double crochet pillars' },
      { id: 'loop_release_cadence', name: 'Loop Release Cadence', target: 'Fluid', unit: 'score', description: 'Two-stage draw without snagging yarn plies' }
    ],
    cameraPlacementTips: 'Overhead 40cm centered over both hands.',
  },
  {
    id: 'skill-granny-square',
    categoryId: 'cat-3',
    name: 'Granny Square',
    description: 'Construct concentric modular crochet squares with distinct 3-dc clusters and corner chain turns.',
    difficulty: 'Intermediate',
    duration: '12-20 min',
    steps: ['Form magic ring or chain-4 loop', 'Work 4 clusters of 3 double-crochet separated by ch-2', 'Slip stitch into top of beginning ch-3', 'Rotate work and build outward into corner spaces'],
    tools: ['Crochet hook', 'Multi-color scrap yarns', 'Darning needle'],
    safetyNotes: ['Keep tail ends tied safely away from scissors'],
    metrics: [
      { id: 'corner_squareness', name: 'Corner Orthogonality', target: '90° ±3°', unit: 'deg', description: 'Square profile without bowing into a circle' },
      { id: 'cluster_density', name: 'Cluster Balance', target: 'Uniform', unit: 'grade', description: 'Equal volume across 3-dc groupings' }
    ],
    cameraPlacementTips: 'Overhead view looking straight down on the expanding square motif.',
  },
  {
    id: 'skill-crochet-flower',
    categoryId: 'cat-3',
    name: 'Crochet Flower',
    description: 'Create multi-petal decorative floral motifs transitioning from sc to hdc to dc in a single petal.',
    difficulty: 'Beginner',
    duration: '6-10 min',
    steps: ['Work into center round', 'Chain 2, work 2 dc, chain 2 and slip stitch for petal 1', 'Repeat 5 times around center ring', 'Fasten off and pull center tight'],
    tools: ['Cotton yarn', '3.5mm hook', 'Tapestry needle'],
    safetyNotes: ['Clip yarn tails cleanly to avoid snagging'],
    metrics: [
      { id: 'petal_symmetry', name: 'Petal Symmetry', target: '94%', unit: '%', description: 'Consistent arc and curve for each radiating petal' },
      { id: 'center_tightness', name: 'Center Ring Closure', target: '<1mm hole', unit: 'mm', description: 'Magic ring pulled tightly shut' }
    ],
    cameraPlacementTips: 'Close top-down desk view 25cm away.',
  },
  {
    id: 'skill-crochet-bag',
    categoryId: 'cat-3',
    name: 'Crochet Bag',
    description: 'Learn spiral circular base shaping and sturdy continuous ribbing for mesh market totes.',
    difficulty: 'Intermediate',
    duration: '15-20 min',
    steps: ['Crochet oval base with end increases', 'Transition to sides without increasing to build height', 'Use sturdy stitch like waistcoat or thermal stitch', 'Reinforce handle join points'],
    tools: ['Sturdy cotton or macrame cord', '6.0mm hook', 'Stitch marker'],
    safetyNotes: ['Macrame cord requires more hand force; take rest intervals'],
    metrics: [
      { id: 'base_flatness', name: 'Base Flatness', target: '100% Flat', unit: 'state', description: 'Preventing curling or ruffling on tote base' },
      { id: 'wall_verticality', name: 'Wall Evenness', target: '88%', unit: '%', description: 'Uniform diameter as tote rises' }
    ],
    cameraPlacementTips: 'Mount camera 50cm back to capture entire bag circumference.',
  },
  {
    id: 'skill-basic-amigurumi',
    categoryId: 'cat-3',
    name: 'Basic Amigurumi',
    description: '3D stuffed toy crochet with invisible decreases and seamless continuous rounds.',
    difficulty: 'Advanced',
    duration: '15-25 min',
    steps: ['Work in continuous spiral without joining slip stitch', 'Execute invisible decrease through front loops only', 'Stuff firmly before narrowing neck', 'Close dome with needle through front loops'],
    tools: ['Fine mercerized yarn', '2.5mm hook', 'Polyfill stuffing', 'Safety eyes'],
    safetyNotes: ['Ensure safety eyes are clicked securely before stuffing'],
    metrics: [
      { id: 'hole_prevention', name: 'Stitch Tightness', target: 'No gaps', unit: 'status', description: 'Preventing stuffing from peeking between stitches' },
      { id: 'sphere_symmetry', name: 'Sphere Roundness', target: '92%', unit: '%', description: 'Spherical balance without flattened poles' }
    ],
    cameraPlacementTips: 'Side-angle 30cm away to evaluate 3D profile and hook angle.',
  },

  // 4. Pottery & Ceramics (7)
  {
    id: 'skill-clay-kneading',
    categoryId: 'cat-4',
    name: 'Clay Kneading',
    description: 'Wedge clay in a ram’s head or spiral pattern to eliminate air bubbles and homogenize moisture.',
    difficulty: 'Beginner',
    duration: '8-12 min',
    steps: ['Stand over plaster or canvas wedging board', 'Push clay forward with heel of palms', 'Roll clay back onto itself', 'Rotate 45 degrees and repeat rhythmically 50 times'],
    tools: ['Wedging board', 'Cutting wire', '1kg stoneware clay'],
    safetyNotes: ['Keep wrists straight to transfer force from your core and shoulders'],
    metrics: [
      { id: 'rhythm', name: 'Wedging Cadence', target: '40 cycles/min', unit: 'cpm', description: 'Fluid repetition rate without pauses' },
      { id: 'air_bubble_elimination', name: 'Spiral Uniformity', target: '95%', unit: '%', description: 'Uniform fold line without creating new trapped pockets' }
    ],
    cameraPlacementTips: 'Side profile view showing posture, arms, and table contact.',
  },
  {
    id: 'skill-clay-centering',
    categoryId: 'cat-4',
    name: 'Clay Centering',
    description: 'Anchor clay on the pottery wheel head using coning up and pressing down with anchored arms.',
    difficulty: 'Intermediate',
    duration: '6-10 min',
    steps: ['Slam clay ball onto dry center of wheel', 'Start wheel at high speed with wet hands', 'Lock elbows into thighs and squeeze clay upward into cone', 'Press down and center until clay stops wobbling'],
    tools: ['Electric pottery wheel', 'Throwing sponge', 'Water bucket'],
    safetyNotes: ['Tie back long hair and remove rings before starting wheel'],
    metrics: [
      { id: 'radial_wobble', name: 'Radial Wobble', target: '<0.5mm', unit: 'mm', description: 'Deviation of rotating clay lump from exact center' },
      { id: 'arm_anchoring', name: 'Elbow Anchoring Stability', target: 'Locked', unit: 'state', description: 'Rigid body posture stabilizing against wheel force' }
    ],
    cameraPlacementTips: 'Overhead wheel perspective 45 degrees facing the wheel head.',
  },
  {
    id: 'skill-pot-shaping',
    categoryId: 'cat-4',
    name: 'Pot Shaping',
    description: 'Pull vertical cylinder walls with coordinated inside and outside finger pads.',
    difficulty: 'Intermediate',
    duration: '10-15 min',
    steps: ['Open centered clay to base thickness of 1/2 inch', 'Compress bottom with sponge', 'Pinch clay between inside and outside fingers', 'Lift clay slowly upwards as wheel turns 3 full rotations'],
    tools: ['Pottery wheel', 'Rib tool', 'Sponge', 'Needle tool'],
    safetyNotes: ['Never stop the wheel abruptly while hands are engaged in clay'],
    metrics: [
      { id: 'wall_thickness', name: 'Wall Thickness Evenness', target: '5mm ±1mm', unit: 'mm', description: 'Equal thickness from base to rim' },
      { id: 'cylinder_verticality', name: 'Vertical Plumb', target: '90° ±2°', unit: 'deg', description: 'Upright cylinder without slumping' }
    ],
    cameraPlacementTips: 'Level side-view capturing cylinder height and hand lift speed.',
  },
  {
    id: 'skill-rim-shaping',
    categoryId: 'cat-4',
    name: 'Rim Shaping',
    description: 'Compress and round the upper lip of a pot with chamois leather or soft sponge to prevent chipping.',
    difficulty: 'Beginner',
    duration: '4-7 min',
    steps: ['Level rim with needle tool if uneven', 'Hold soft chamois leather over rim with left thumb and forefinger', 'Support underside of rim with right index finger', 'Compress gently at medium wheel speed'],
    tools: ['Wet chamois strip', 'Needle tool', 'Sponge'],
    safetyNotes: ['Ensure needle tool point is angled outward when trimming rim'],
    metrics: [
      { id: 'rim_smoothness', name: 'Lip Curvature Smoothness', target: 'Round', unit: 'rating', description: 'Absence of sharp edges or micro-fissures' },
      { id: 'rim_levelness', name: 'Rim Planarity', target: '<1mm variance', unit: 'mm', description: 'Horizontal level around 360 degree revolution' }
    ],
    cameraPlacementTips: 'Close-up 20cm macro angle focusing on the top lip of the pot.',
  },
  {
    id: 'skill-surface-smoothing',
    categoryId: 'cat-4',
    name: 'Surface Smoothing',
    description: 'Burnish and rib leather-hard clay surfaces to remove throwing rings and create a silky sheen.',
    difficulty: 'Beginner',
    duration: '6-10 min',
    steps: ['Allow piece to reach leather-hard stage', 'Hold flexible metal or rubber rib at 30° tangent', 'Gently glide rib upwards as wheel spins slowly', 'Polish with smooth river pebble for burnished shine'],
    tools: ['Flexible stainless rib', 'Smooth burnishing stone', 'Rubber kidney'],
    safetyNotes: ['Do not breathe fine clay dust; keep surface slightly damp or wipe with sponge'],
    metrics: [
      { id: 'surface_texture', name: 'Ring Elimination', target: '95%', unit: '%', description: 'Smoothness without leftover fingernail or throwing ridges' },
      { id: 'rib_contact_angle', name: 'Tool Angle Control', target: '25-35°', unit: 'deg', description: 'Prevents tool edge from digging gouges into wall' }
    ],
    cameraPlacementTips: 'Side angle with glancing light to expose surface topography.',
  },
  {
    id: 'skill-handle-making',
    categoryId: 'cat-4',
    name: 'Handle Making',
    description: 'Pull smooth, ergonomic clay handles directly from a carrot lump and attach securely with score and slip.',
    difficulty: 'Intermediate',
    duration: '8-14 min',
    steps: ['Form clay into tapered carrot shape', 'Wet hand and stroke downward to stretch clay with hydrostatic pressure', 'Cut to length and form graceful C-curve to dry slightly', 'Score cup surface and handle pads with fork, apply slip, press firmly'],
    tools: ['Scoring tool', 'Clay slip', 'Sponge', 'Clay knife'],
    safetyNotes: ['Thoroughly score both joints to prevent handle separation during bisque firing'],
    metrics: [
      { id: 'curve_grace', name: 'Handle Arc Ergonomics', target: 'Balanced', unit: 'status', description: 'Curvature provides 2-3 finger clearance and natural balance' },
      { id: 'joint_integrity', name: 'Joint Blending', target: 'Seamless', unit: 'rating', description: 'Smooth collar weld where handle meets body' }
    ],
    cameraPlacementTips: 'Side-elevation view 35cm away capturing handle attachment angle.',
  },
  {
    id: 'skill-ceramic-painting',
    categoryId: 'cat-4',
    name: 'Ceramic Painting',
    description: 'Underglaze brushwork on bisque ware with controlled brush moisture and steady line linework.',
    difficulty: 'Intermediate',
    duration: '10-15 min',
    steps: ['Wipe bisque pot with damp sponge to remove dust', 'Load round liner brush with well-mixed underglaze', 'Rest wrist on banding wheel for stability', 'Rotate wheel while applying continuous circular band'],
    tools: ['Bisque pot', 'Underglazes', 'Sable liner brushes', 'Banding wheel'],
    safetyNotes: ['Use non-toxic, food-safe glazes for dinnerware'],
    metrics: [
      { id: 'line_weight', name: 'Line Weight Uniformity', target: '±0.5mm', unit: 'mm', description: 'Even stroke thickness around the vessel perimeter' },
      { id: 'opacity', name: 'Glaze Opacity Evenness', target: '88%', unit: '%', description: 'Even underglaze saturation without brush streak voids' }
    ],
    cameraPlacementTips: 'Angled down 45 degrees over banding wheel.',
  },

  // 5. Beauty, Skincare & Makeup (9)
  // (IMPORTANT: technique/application coaching only, no medical diagnosis)
  {
    id: 'skill-face-cleansing',
    categoryId: 'cat-5',
    name: 'Face Cleansing Technique',
    description: 'Technique drill: Practice gentle upward circular hand strokes and optimal pressure distribution without pulling skin.',
    difficulty: 'Beginner',
    duration: '3-5 min',
    steps: ['Dampen face with lukewarm water', 'Lather cleanser in palms for 10 seconds', 'Move in upward circular motions starting from chin to cheeks', 'Use ring fingers around delicate orbital eye contours'],
    tools: ['Gentle cleanser', 'Clean hand towel'],
    safetyNotes: ['Avoid direct contact with eyes', 'Do not scrub aggressively or drag skin downward'],
    metrics: [
      { id: 'stroke_direction', name: 'Upward Stroke Ratio', target: '>90%', unit: '%', description: 'Upward and outward motions counteract gravity pulling' },
      { id: 'pressure', name: 'Contact Pressure', target: 'Light & Feathered', unit: 'level', description: 'Gentle pad contact without depressing skin tissue' }
    ],
    cameraPlacementTips: 'Position phone on mirror stand at eye level, 40cm directly facing your face.',
  },
  {
    id: 'skill-moisturizer-application',
    categoryId: 'cat-5',
    name: 'Moisturizer Application',
    description: 'Learn upward press-and-pat distribution technique for uniform hydration coverage across face and neck.',
    difficulty: 'Beginner',
    duration: '3-5 min',
    steps: ['Dispense pea-sized amount onto fingertips', 'Dot evenly onto forehead, cheeks, nose, chin, and neck', 'Smooth outward with light gliding strokes', 'Finish with gentle palm pressing to assist absorption'],
    tools: ['Hydrating moisturizer'],
    safetyNotes: ['Perform skin patch test prior to introducing new products'],
    metrics: [
      { id: 'distribution_uniformity', name: 'Coverage Uniformity', target: '94%', unit: '%', description: 'Equal distribution across all facial quadrants and neck' },
      { id: 'gentleness', name: 'Gliding Gentleness', target: 'High', unit: 'rating', description: 'Smooth gliding without pulling or stretching delicate areas' }
    ],
    cameraPlacementTips: 'Phone propped at eye level 45cm away with bright, even facial illumination.',
  },
  {
    id: 'skill-sunscreen-application',
    categoryId: 'cat-5',
    name: 'Sunscreen Application',
    description: 'Master the two-finger measurement and comprehensive boundary application including hairline and ears.',
    difficulty: 'Beginner',
    duration: '4-6 min',
    steps: ['Dispense full length along index and middle fingers', 'Dot methodically across face, ears, and neck line', 'Smooth in outward planes until transparent cast forms', 'Ensure full coverage along temple and jawline margins'],
    tools: ['Broad spectrum sunscreen'],
    safetyNotes: ['Reapply every 2 hours during continuous sun exposure'],
    metrics: [
      { id: 'margin_coverage', name: 'Perimeter Coverage', target: '96%', unit: '%', description: 'Verification of coverage at hairline, ear lobes, and upper neck' },
      { id: 'film_smoothness', name: 'Film Consistency', target: 'Smooth', unit: 'state', description: 'Even translucent spread without white clumps' }
    ],
    cameraPlacementTips: 'Direct front-facing mirror mount with even front lighting.',
  },
  {
    id: 'skill-face-mask-application',
    categoryId: 'cat-5',
    name: 'Face Mask Application',
    description: 'Use a silicone spatula brush to lay an even, boundary-accurate clay or gel mask layer.',
    difficulty: 'Beginner',
    duration: '5-8 min',
    steps: ['Dip silicone brush edge into mask formulation', 'Sweep from T-zone outward in continuous strokes', 'Maintain 1-inch safe margin around eyes and mouth', 'Ensure opaque, uniform layer thickness across skin'],
    tools: ['Silicone mask applicator', 'Clay or cream mask'],
    safetyNotes: ['Keep clear of eyes, nostrils, and lips'],
    metrics: [
      { id: 'margin_accuracy', name: 'Eye/Lip Boundary Margin', target: '>20mm clear', unit: 'mm', description: 'Accurate clearance from sensitive mucosal borders' },
      { id: 'layer_uniformity', name: 'Layer Thickness Evenness', target: '90%', unit: '%', description: 'Consistent layer depth preventing premature drying spots' }
    ],
    cameraPlacementTips: 'Eye-level phone stand 40cm back.',
  },
  {
    id: 'skill-foundation-application',
    categoryId: 'cat-5',
    name: 'Foundation Application',
    description: 'Stipple and blend liquid foundation seamlessly into the hairline and jawline with a damp beauty sponge.',
    difficulty: 'Intermediate',
    duration: '6-10 min',
    steps: ['Dampen and squeeze excess water from sponge', 'Dot foundation on center of face', 'Bounce sponge gently in stippling motions outward', 'Blend down past jawline onto upper neck for seamless shade transition'],
    tools: ['Damp beauty sponge', 'Liquid foundation', 'Mixing palette'],
    safetyNotes: ['Wash sponge regularly to maintain hygienic application'],
    metrics: [
      { id: 'jawline_transition', name: 'Jawline Blending Gradient', target: 'Seamless', unit: 'grade', description: 'Zero visible demarcation line at the jaw edge' },
      { id: 'stippling_frequency', name: 'Bouncing Cadence', target: '100 taps/min', unit: 'taps', description: 'Micro-stippling creates skin-like finish' }
    ],
    cameraPlacementTips: 'Center-facing phone mount 35cm away in natural white lighting.',
  },
  {
    id: 'skill-concealer-application',
    categoryId: 'cat-5',
    name: 'Concealer Application',
    description: 'Targeted spot placement and outer-edge tapping to brighten under-eyes without creasing.',
    difficulty: 'Intermediate',
    duration: '5-8 min',
    steps: ['Dot small bead at inner eye corner and outer orbital edge', 'Allow formula to sit 20 seconds to increase coverage', 'Tap edges with fingertip or small dense brush', 'Set with translucent powder before smile lines settle'],
    tools: ['Concealer wand', 'Small dense brush', 'Translucent setting powder'],
    safetyNotes: ['Do not pull or drag under-eye skin'],
    metrics: [
      { id: 'crease_control', name: 'Edge Feathering', target: '95%', unit: '%', description: 'Micro-feathered transition into surrounding foundation' },
      { id: 'target_placement', name: 'Placement Precision', target: 'Precise', unit: 'status', description: 'Keeps product localized to trough without overloading lid' }
    ],
    cameraPlacementTips: 'Close-up face view 30cm away.',
  },
  {
    id: 'skill-eyeliner-application',
    categoryId: 'cat-5',
    name: 'Eyeliner Application',
    description: 'Practice winged liquid liner angle alignment, resting pinky anchor, and symmetrical wing elevation.',
    difficulty: 'Advanced',
    duration: '7-12 min',
    steps: ['Rest pinky finger on cheekbone for tripod stability', 'Draw thin guide dot aligned with lower lash line projection', 'Connect outer corner to guide dot in a fluid flick', 'Fill wedge and trace inward along lash line'],
    tools: ['Fine felt-tip liquid eyeliner pen', 'Handheld magnifying mirror'],
    safetyNotes: ['Keep hand braced to avoid accidental eye contact'],
    metrics: [
      { id: 'wing_symmetry', name: 'Bilateral Angle Symmetry', target: '35° ±2°', unit: 'deg', description: 'Matching angle of elevation on left and right eyes' },
      { id: 'line_smoothness', name: 'Flick Edge Sharpness', target: '96%', unit: '%', description: 'Single crisp edge without micro-steps' }
    ],
    cameraPlacementTips: 'Angle phone camera 25cm in front of eyes at eye level.',
  },
  {
    id: 'skill-nail-polish-application',
    categoryId: 'cat-5',
    name: 'Nail Polish Application',
    description: 'Flagship drill: The classic 3-stroke lacquer method, cuticle gap control, and smooth capping of free edges.',
    difficulty: 'Beginner',
    duration: '5-10 min',
    flagship: true,
    steps: ['Wipe excess polish from one side of brush neck', 'Place bead 2mm above cuticle and push gently back', 'Draw brush straight down center to nail tip', 'Make 2 gentle curved side strokes to complete coat', 'Cap the free edge with brush edge'],
    tools: ['Base coat/colored nail polish', 'Nail file', 'Cuticle stick'],
    safetyNotes: ['Work in a well-ventilated room to disperse solvent fumes'],
    metrics: [
      { id: 'coverage', name: 'Coverage', target: '95%', unit: '%', description: 'Full smooth color deposit without streaking' },
      { id: 'boundary_accuracy', name: 'Boundary Accuracy', target: '92%', unit: '%', description: 'Even 1mm gap from cuticle and sidewall skin' },
      { id: 'symmetry', name: 'Curvature Symmetry', target: '90%', unit: '%', description: 'Equal margin and shine across all 5 fingers' }
    ],
    cameraPlacementTips: 'Top-down desk mount 20-25cm directly over flat hand resting on towel.',
  },
  {
    id: 'skill-basic-nail-art',
    categoryId: 'cat-5',
    name: 'Basic Nail Art',
    description: 'French tip smile-line curvature and clean accent line drawing using striping tape or detailer brushes.',
    difficulty: 'Intermediate',
    duration: '8-14 min',
    steps: ['Apply neutral base and allow to dry completely', 'Roll brush across free edge from left corner to center', 'Repeat from right corner to meet in middle', 'Clean boundary smile line with angled brush dipped in remover'],
    tools: ['Detailer liner brush', 'White/accent lacquer', 'Cleanup brush and acetone'],
    safetyNotes: ['Keep acetone away from synthetic fabrics'],
    metrics: [
      { id: 'smile_curvature', name: 'Smile Line Symmetry', target: '92%', unit: '%', description: 'Matching curve arc relative to nail bed center' },
      { id: 'tip_thickness', name: 'Tip Thickness Uniformity', target: '2mm ±0.3mm', unit: 'mm', description: 'Consistent tip stripe width across all fingers' }
    ],
    cameraPlacementTips: 'Overhead view 20cm above resting hand.',
  },

  // 6. Hair & Styling (6)
  {
    id: 'skill-hair-sectioning',
    categoryId: 'cat-6',
    name: 'Hair Sectioning',
    description: 'Part clean 4-quadrant grids using a tail comb for organized, snag-free styling and treatments.',
    difficulty: 'Beginner',
    duration: '5-8 min',
    steps: ['Trace tail comb from forehead center to nape of neck', 'Clip left side securely with crocodile clips', 'Draw horizontal part from apex to behind each ear', 'Twist each of the 4 quadrants into neat buns'],
    tools: ['Pintail comb', 'Sectioning crocodile clips', 'Mannequin or mirror'],
    safetyNotes: ['Do not scratch scalp with metal comb tail'],
    metrics: [
      { id: 'part_straightness', name: 'Part Cleanliness', target: '<1mm stray', unit: 'status', description: 'Crisp parting line with zero crossing hair strays' },
      { id: 'symmetry', name: 'Quadrant Symmetry', target: '92%', unit: '%', description: 'Equal hair volume partitioned into left and right quadrants' }
    ],
    cameraPlacementTips: 'Top-down / rear crown angle 60cm back.',
  },
  {
    id: 'skill-hair-braiding',
    categoryId: 'cat-6',
    name: 'Hair Braiding',
    description: 'Three-strand traditional braid: maintain equal strand thickness and uniform cross-over finger tension.',
    difficulty: 'Beginner',
    duration: '7-12 min',
    steps: ['Divide section into 3 equal strands (A, B, C)', 'Cross strand A over center strand B', 'Cross strand C over new center strand A', 'Maintain firm finger grip close to the plait weave intersection'],
    tools: ['Detangling brush', 'Clear elastic band'],
    safetyNotes: ['Avoid excessive root tension that can cause traction discomfort'],
    metrics: [
      { id: 'plait_uniformity', name: 'Plait Width Uniformity', target: '±1.5mm', unit: 'mm', description: 'Equal V-shape plait dimensions from root to tail' },
      { id: 'tension_stability', name: 'Tension Consistency', target: '94%', unit: '%', description: 'Tightness balance preventing loose bulging segments' }
    ],
    flagship: true,
    cameraPlacementTips: 'Rear view 50cm behind head, angled 30 degrees down.',
  },
  {
    id: 'skill-blow-drying',
    categoryId: 'cat-6',
    name: 'Blow-Drying',
    description: 'Round-brush blowout technique: direct nozzle airflow down the hair shaft for salon smoothness and volume.',
    difficulty: 'Intermediate',
    duration: '10-15 min',
    steps: ['Attach concentrator nozzle to dryer', 'Wrap 2-inch subsection around boar bristle round brush', 'Aim nozzle 2 inches away, angled 45° down hair cuticle', 'Roll brush continuously while pulling down under tension'],
    tools: ['Ionic hairdryer with nozzle', 'Large round ceramic brush', 'Heat protectant spray'],
    safetyNotes: ['Never touch dryer nozzle directly to hair or scalp to avoid heat damage'],
    metrics: [
      { id: 'nozzle_angle', name: 'Cuticle Airflow Angle', target: '30-45° down', unit: 'deg', description: 'Downward airflow seals cuticle and eliminates frizz' },
      { id: 'brush_tension', name: 'Tensile Glide Speed', target: 'Steady', unit: 'tempo', description: 'Smooth 5-second glide per hair section' }
    ],
    cameraPlacementTips: 'Side-mirror angle capturing dryer nozzle and brush trajectory.',
  },
  {
    id: 'skill-basic-hair-styling',
    categoryId: 'cat-6',
    name: 'Basic Hair Styling',
    description: 'Construct a sleek high ponytail or bun with smoothed crown bumps and anchored bobby pins.',
    difficulty: 'Beginner',
    duration: '5-8 min',
    steps: ['Brush hair up toward crown aligned with cheekbone angle', 'Smooth front and sides with boar bristle brush', 'Wrap elastic tightly 3 times', 'Wrap small strand of hair around elastic to conceal, pin underneath'],
    tools: ['Boar bristle smoothing brush', 'Snag-free hair tie', 'Bobby pins'],
    safetyNotes: ['Insert bobby pins wavy-side down for maximum grip without scalp poke'],
    metrics: [
      { id: 'crown_smoothness', name: 'Crown Bump Elimination', target: '100% Smooth', unit: 'status', description: 'Absence of ridges or slack loops around head' },
      { id: 'ponytail_elevation', name: 'Elevation Line Match', target: 'Aligned', unit: 'rating', description: 'Direct alignment with cheekbone-to-crown diagonal' }
    ],
    cameraPlacementTips: 'Side profile 60cm away at eye level.',
  },
  {
    id: 'skill-hair-curling',
    categoryId: 'cat-6',
    name: 'Hair Curling',
    description: 'Curling wand wrapping: wrap ribbon hair flat without bunching, maintain 8-10 second dwell time.',
    difficulty: 'Intermediate',
    duration: '8-14 min',
    steps: ['Apply thermal protectant', 'Take 1-inch vertical ribbon section', 'Point wand down, wrap hair flat without twisting', 'Hold 8 seconds, release into palm, allow to cool before touching'],
    tools: ['1.25-inch curling iron or wand', 'Heat protectant glove', 'Section clips'],
    safetyNotes: ['Always wear heat-resistant glove on wrapping hand'],
    metrics: [
      { id: 'wand_angle', name: 'Wand Orientation', target: '60-80° downward', unit: 'deg', description: 'Downward wand prevents awkward shoulder torque' },
      { id: 'hold_time', name: 'Heat Dwell Duration', target: '8-10 sec', unit: 'sec', description: 'Safe thermal transfer without scorching hair fiber' }
    ],
    cameraPlacementTips: 'Front diagonal view showing wand angle and hand wrap.',
  },
  {
    id: 'skill-hair-straightening',
    categoryId: 'cat-6',
    name: 'Hair Straightening',
    description: 'Comb-chase flat iron technique: glide iron right behind fine-toothed comb for glass hair finish.',
    difficulty: 'Beginner',
    duration: '8-12 min',
    steps: ['Set iron to appropriate temperature (below 190°C)', 'Place carbon comb into 1/2-inch subsection', 'Clamp iron directly behind comb spine', 'Glide both comb and iron down simultaneously in one smooth pass'],
    tools: ['Ceramic flat iron', 'Heat-resistant carbon comb'],
    safetyNotes: ['Never clamp iron on damp or wet hair; avoid multiple passes on same spot'],
    metrics: [
      { id: 'glide_speed', name: 'Single-Pass Glide Rate', target: '2.5 cm/sec', unit: 'speed', description: 'Even transit speed prevents heat banding' },
      { id: 'comb_tracking', name: 'Comb-Chase Proximity', target: '<10mm gap', unit: 'mm', description: 'Iron tracks comb closely to align every strand' }
    ],
    cameraPlacementTips: 'Upper side view 50cm away tracking iron descent.',
  },

  // 7. Gardening & Plants (7)
  {
    id: 'skill-potting',
    categoryId: 'cat-7',
    name: 'Potting',
    description: 'Planting container preparation: center root ball, maintain proper soil line, and eliminate air gaps.',
    difficulty: 'Beginner',
    duration: '6-10 min',
    steps: ['Cover drainage hole with mesh screen', 'Add 2 inches of potting mix to base', 'Center plant root ball 1 inch below pot rim', 'Fill mix around sides, press gently with thumbs to settle'],
    tools: ['Planter with drainage', 'Potting mix', 'Trowel', 'Watering can'],
    safetyNotes: ['Dampen potting mix before handling to prevent dust inhalation'],
    metrics: [
      { id: 'plant_position', name: 'Center Alignment', target: '<5mm offset', unit: 'mm', description: 'Root ball centered in pot circumference' },
      { id: 'soil_level', name: 'Soil Level Clearance', target: '20-25mm from rim', unit: 'mm', description: 'Headspace prevents water spillover during watering' },
      { id: 'firmness', name: 'Soil Tamping Firmness', target: 'Medium', unit: 'rating', description: 'Settled without compacting root aeration' }
    ],
    cameraPlacementTips: 'Prop phone 45cm away angled down 45 degrees over potting bench.',
  },
  {
    id: 'skill-seed-planting',
    categoryId: 'cat-7',
    name: 'Seed Planting',
    description: 'Seed depth and spacing in seed starting trays according to seed size ratios.',
    difficulty: 'Beginner',
    duration: '5-8 min',
    steps: ['Fill seedling cell trays with seed starting mix', 'Make depression 2-3 times the width of seed with pencil tip', 'Drop 1-2 seeds per cell', 'Cover with sifted mix and bottom-water tray'],
    tools: ['Seedling starter tray', 'Seed dibber or pencil', 'Fine vermiculite', 'Spray mister'],
    safetyNotes: ['Label seedling cells immediately with date and species'],
    metrics: [
      { id: 'depth_accuracy', name: 'Seeding Depth', target: '±2mm of target', unit: 'mm', description: 'Accurate planting depth ensures optimal emergence' },
      { id: 'spacing_uniformity', name: 'Cell Centering', target: '95%', unit: '%', description: 'Seeds placed in cell center for balanced root growth' }
    ],
    cameraPlacementTips: 'Overhead camera 30cm above seed tray.',
  },
  {
    id: 'skill-soil-preparation',
    categoryId: 'cat-7',
    name: 'Soil Preparation',
    description: 'Blend compost, perlite, and base soil into an airy, nutrient-dense potting substrate.',
    difficulty: 'Beginner',
    duration: '8-12 min',
    steps: ['Measure 2 parts peat or coco coir, 1 part perlite, 1 part compost', 'Fold thoroughly with hand spade', 'Test squeeze ball: should hold shape then crumble under light poke', 'Incorporate slow-release organic granules'],
    tools: ['Mixing tub', 'Hand scoop', 'Perlite', 'Compost', 'Coco coir'],
    safetyNotes: ['Wear garden gloves to protect skin from perlite abrasiveness'],
    metrics: [
      { id: 'blend_homogeneity', name: 'Particle Distribution', target: '90%', unit: '%', description: 'Perlite distributed evenly throughout batch' },
      { id: 'aeration_structure', name: 'Moisture Clump Friability', target: 'Crumbly', unit: 'grade', description: 'Ideal crumb structure for root breathability' }
    ],
    cameraPlacementTips: 'Angled view 50cm over mixing tub.',
  },
  {
    id: 'skill-pruning',
    categoryId: 'cat-7',
    name: 'Pruning',
    description: 'Execute clean 45-degree angle branch cuts 6mm above an outward-facing leaf bud.',
    difficulty: 'Intermediate',
    duration: '5-10 min',
    steps: ['Disinfect bypass pruners with rubbing alcohol', 'Locate healthy outward-facing node bud', 'Angle blades 45 degrees sloping away from bud', 'Make a single clean slice without crushing stem bark'],
    tools: ['Bypass pruning shears', 'Rubbing alcohol wipes', 'Gloves'],
    safetyNotes: ['Keep free hand positioned behind cutting blade path at all times'],
    metrics: [
      { id: 'cut_angle', name: 'Pruning Slice Angle', target: '45° ±5°', unit: 'deg', description: 'Optimal angle sheds water droplets away from bud' },
      { id: 'bud_clearance', name: 'Node Clearance Distance', target: '6mm', unit: 'mm', description: 'Prevents dieback while avoiding bud rot' }
    ],
    cameraPlacementTips: 'Close branch view 25cm away with contrasting background.',
  },
  {
    id: 'skill-repotting',
    categoryId: 'cat-7',
    name: 'Repotting',
    description: 'Unpot rootbound houseplants, tease encircling root girdles, and transition up 1-2 pot sizes.',
    difficulty: 'Intermediate',
    duration: '10-15 min',
    steps: ['Squeeze flexible nursery pot sides to loosen root ball', 'Slide plant out supporting base of stem between fingers', 'Tease circling bottom roots with root rake', 'Set into new container with fresh mix surrounding roots'],
    tools: ['New pot (2 inches wider)', 'Root hook or chopstick', 'Fresh substrate'],
    safetyNotes: ['Support plant crown gently; do not yank plant by stem'],
    metrics: [
      { id: 'root_teasing', name: 'Root Flare Loosening', target: 'Teased', unit: 'rating', description: 'Circling roots freed to grow outwards into fresh soil' },
      { id: 'crown_level', name: 'Root Crown Elevation', target: 'Flush with soil', unit: 'status', description: 'Crown neither buried too deep nor exposed' }
    ],
    cameraPlacementTips: 'Side angle 40cm back at plant height.',
  },
  {
    id: 'skill-plant-propagation',
    categoryId: 'cat-7',
    name: 'Plant Propagation',
    description: 'Take healthy node stem cuttings and prepare water or perlite rooting propagation setups.',
    difficulty: 'Beginner',
    duration: '5-8 min',
    steps: ['Choose vigorous non-flowering stem with 2-3 nodes', 'Cut 1cm below bottom node using sterile scalpel', 'Remove bottom leaves to expose bare node', 'Place in glass propagation vessel with fresh water'],
    tools: ['Sterile razor blade or snips', 'Propagation glass tubes', 'Rooting hormone powder'],
    safetyNotes: ['Handle sharp blades away from body; dispose of used blades safely'],
    metrics: [
      { id: 'node_cleanliness', name: 'Cut Edge Crispness', target: 'Clean', unit: 'status', description: 'Zero crushed vascular tissue along stem edge' },
      { id: 'leaf_clearance', name: 'Submerged Leaf Removal', target: '0 leaves submerged', unit: 'count', description: 'Prevents bacterial rot in water reservoir' }
    ],
    cameraPlacementTips: 'Desk mount 30cm away level with cutting node.',
  },
  {
    id: 'skill-plant-support',
    categoryId: 'cat-7',
    name: 'Plant Support',
    description: 'Stake climbing monsteras and tomatoes with moss poles and figure-8 soft plant ties.',
    difficulty: 'Beginner',
    duration: '6-10 min',
    steps: ['Insert stake deep into pot near back of stem to avoid main root core', 'Wrap soft garden tie in a loose figure-8 between stem and pole', 'Fasten securely without strangling vascular stem growth', 'Train aerial roots toward moist pole substrate'],
    tools: ['Coco coir or moss pole', 'Velcro plant ties', 'Moisture spray bottle'],
    safetyNotes: ['Push stake down slowly to feel for resistance against large root branches'],
    metrics: [
      { id: 'tie_tension', name: 'Figure-8 Tie Looseness', target: '10mm play', unit: 'mm', description: 'Allows stem to thicken without constriction' },
      { id: 'pole_verticality', name: 'Stake Plumb', target: '90° ±2°', unit: 'deg', description: 'Upright stake supports plant weight without listing' }
    ],
    cameraPlacementTips: 'Full height view 60cm back showing entire plant vertical axis.',
  },

  // 8. Cooking & Food Decoration (6)
  {
    id: 'skill-knife-handling',
    categoryId: 'cat-8',
    name: 'Knife Handling',
    description: 'Master the classic culinary pinch grip on the knife bolster and curling non-dominant fingers into the safe claw.',
    difficulty: 'Beginner',
    duration: '4-7 min',
    steps: ['Choke up on handle: pinch blade base between thumb and curved index finger', 'Wrap remaining three fingers comfortably around handle', 'Form guide hand into a rounded claw with fingertips curled in', 'Rest blade side against second knuckles of claw hand'],
    tools: ['8-inch chef knife', 'Wooden cutting board with damp towel underneath'],
    safetyNotes: ['Never catch a falling knife; keep fingers tucked behind knuckle shields'],
    metrics: [
      { id: 'claw_tuck', name: 'Guide Hand Claw Form', target: '100% Tucked', unit: '%', description: 'Fingertips and thumb completely behind knuckle plane' },
      { id: 'pinch_grip', name: 'Bolster Pinch Form', target: 'Anchored', unit: 'status', description: 'Thumb and index pinch blade for maximum blade control' }
    ],
    cameraPlacementTips: 'Side-high view 40cm away angled 45 degrees over cutting board.',
  },
  {
    id: 'skill-vegetable-chopping',
    categoryId: 'cat-8',
    name: 'Vegetable Chopping',
    description: 'Rock-chop cadence: maintain continuous board contact with tip while slicing celery or carrots into even batons.',
    difficulty: 'Intermediate',
    duration: '6-10 min',
    steps: ['Square vegetable off by cutting a thin flat anchor slice', 'Rest knife tip on cutting board', 'Push blade forward and down through food in fluid rocking motion', 'Retreat guide claw by precise increments between each stroke'],
    tools: ['Chef knife', 'Solid board', 'Carrots or celery'],
    safetyNotes: ['Stabilize cutting board with non-slip damp cloth underneath'],
    metrics: [
      { id: 'slice_uniformity', name: 'Piece Thickness Uniformity', target: '3mm ±0.5mm', unit: 'mm', description: 'Identical slice thickness ensures even cooking' },
      { id: 'rocking_rhythm', name: 'Rock-Chop Cadence', target: '60 cuts/min', unit: 'cpm', description: 'Smooth uninterrupted rocking stroke rhythm' }
    ],
    cameraPlacementTips: 'Profile angle 35cm away capturing blade rocking motion.',
  },
  {
    id: 'skill-dough-kneading',
    categoryId: 'cat-8',
    name: 'Dough Kneading',
    description: 'Develop gluten matrix using heel-push, 90-degree fold, and rhythmic quarter-turn technique.',
    difficulty: 'Beginner',
    duration: '8-12 min',
    steps: ['Dust countertop with light flour mist', 'Push dough away using heels of both palms', 'Fold top edge back over center towards you', 'Turn dough 90 degrees and push again; repeat until windowpane test passes'],
    tools: ['Pastry scraper', 'Unfloured work surface', 'Bread dough ball'],
    safetyNotes: ['Use body weight from hips to knead without fatiguing wrists'],
    metrics: [
      { id: 'knead_cycle', name: 'Push-Fold Repetition Cadence', target: '30/min', unit: 'cpm', description: 'Constant active movement warming and aligning gluten' },
      { id: 'surface_smoothness', name: 'Dough Skin Elasticity', target: 'Smooth & Taut', unit: 'grade', description: 'Taut outer skin without tearing surface fibers' }
    ],
    cameraPlacementTips: 'Overhead bench angle 50cm looking straight down on dough.',
  },
  {
    id: 'skill-dough-rolling',
    categoryId: 'cat-8',
    name: 'Dough Rolling',
    description: 'Roll circular tart and pie crusts from center outward with equal pressure and regular quarter rotations.',
    difficulty: 'Intermediate',
    duration: '6-10 min',
    steps: ['Place chilled dough disk on lightly floured marble or mat', 'Start rolling pin in dead center of dough', 'Roll upward with gentle pressure, stopping just shy of edges', 'Rotate dough clockwise 45 degrees after every 2 passes to maintain circle'],
    tools: ['French tapered rolling pin', 'Pastry mat', 'Bench scraper'],
    safetyNotes: ['Keep dough chilled to prevent butter melting and stickiness'],
    metrics: [
      { id: 'thickness_uniformity', name: 'Sheet Caliper Consistency', target: '3mm ±0.3mm', unit: 'mm', description: 'Equal thickness from center to perimeter' },
      { id: 'circularity', name: 'Crust Circularity', target: '92%', unit: '%', description: 'Round concentric expansion without oval distortion' }
    ],
    cameraPlacementTips: 'Overhead view 45cm above rolling surface.',
  },
  {
    id: 'skill-cake-decoration',
    categoryId: 'cat-8',
    name: 'Cake Decoration',
    description: 'Piping bag control: 90-degree rosette stars and continuous shell border piping along cake tiers.',
    difficulty: 'Intermediate',
    duration: '8-15 min',
    steps: ['Twist piping bag top tight to maintain internal pressure', 'Hold bag at 90° for stars, 45° for shell borders', 'Squeeze bag steadily until bulb forms', 'Release hand pressure before pulling tip away with quick flick'],
    tools: ['Piping bag with star tip', 'Buttercream frosting', 'Practice cake board or turntable'],
    safetyNotes: ['Support bag neck with guiding hand to prevent wrist trembling'],
    metrics: [
      { id: 'star_uniformity', name: 'Shell Volume Consistency', target: '±5%', unit: '%', description: 'Equal frosting volume per piped shell rosette' },
      { id: 'spacing_alignment', name: 'Border Spacing', target: 'Contiguous', unit: 'status', description: 'Tails overlap heads seamlessly along circular border' }
    ],
    cameraPlacementTips: 'Angled 45 degrees 30cm away focusing on piping tip exit point.',
  },
  {
    id: 'skill-food-plating',
    categoryId: 'cat-8',
    name: 'Food Plating',
    description: 'Culinary architecture: saucing swooshes, protein positioning, and microgreen tweezers garnishing.',
    difficulty: 'Intermediate',
    duration: '6-10 min',
    steps: ['Spoon sauce onto center of clean warm plate', 'Use convex back of saucing spoon to sweep a smooth crescent swoosh', 'Rest protein at 4 o’clock position overlapping sauce edge', 'Place delicate microgreens at highest apex with precision tweezers'],
    tools: ['Chef plating tweezers', 'Plating spoon', 'Wide-rim ceramic plate', 'Microgreens'],
    safetyNotes: ['Wipe plate rims spotless with vinegar-dampened cloth before presentation'],
    metrics: [
      { id: 'plate_balance', name: 'Visual Balance & Focal Point', target: 'Golden Ratio', unit: 'rating', description: 'Intentional negative space surrounding components' },
      { id: 'rim_cleanliness', name: 'Rim Cleanliness', target: '0 drips', unit: 'count', description: 'No stray sauce splatters or smudges on outer white rim' }
    ],
    cameraPlacementTips: 'Overhead camera 40cm directly above plate center.',
  },

  // 9. DIY & Home Improvement (6)
  {
    id: 'skill-measuring-marking',
    categoryId: 'cat-9',
    name: 'Measuring & Marking',
    description: 'Crow’s foot pencil marks, tape measure hook compensation, and true square alignment.',
    difficulty: 'Beginner',
    duration: '4-7 min',
    steps: ['Hook tape firmly onto workpiece edge (accounting for sliding hook rivet play)', 'Mark target dimension with a sharp V-shaped crow’s foot', 'Align speed square fence tight against edge over mark apex', 'Draw knife or pencil line cleanly across face'],
    tools: ['Tape measure', 'Speed square', '0.5mm mechanical pencil or marking knife'],
    safetyNotes: ['Retract tape measure under thumb control to prevent snap injury'],
    metrics: [
      { id: 'squareness', name: 'Mark Orthogonality', target: '90° ±0.2°', unit: 'deg', description: 'Perpendicular alignment across timber face' },
      { id: 'precision', name: 'Target Mark Accuracy', target: '<0.5mm dev', unit: 'mm', description: 'Line intersects apex of crow’s foot precisely' }
    ],
    cameraPlacementTips: 'Direct overhead view 30cm above timber board.',
  },
  {
    id: 'skill-screw-fitting',
    categoryId: 'cat-9',
    name: 'Screw Fitting',
    description: 'Driver bit alignment: maintain in-line axial downforce to drive wood screws flush without stripping heads.',
    difficulty: 'Beginner',
    duration: '5-8 min',
    steps: ['Select exact matching screwdriver bit (PZ2 vs PH2)', 'Position driver in complete axial alignment with screw shaft', 'Apply 70% forward pressure and 30% rotational torque', 'Slow down rotation as screw head seats flush into timber'],
    tools: ['Cordless drill/driver', 'Impact-rated bits', 'Wood screws', 'Timber scrap'],
    safetyNotes: ['Wear impact-rated safety glasses; clamp workpiece firmly'],
    metrics: [
      { id: 'axial_alignment', name: 'Driver Axial Alignment', target: '<2° tilt', unit: 'deg', description: 'Straight inline force prevents cam-out and stripped heads' },
      { id: 'flushness', name: 'Head Seat Depth', target: 'Flush ±0.3mm', unit: 'mm', description: 'Screw head sits flush with surface without sinking too deep' }
    ],
    cameraPlacementTips: 'Side-elevation view 35cm away showing driver shaft and screw line.',
  },
  {
    id: 'skill-furniture-assembly',
    categoryId: 'cat-9',
    name: 'Furniture Assembly',
    description: 'Cam-lock and dowel joinery: square panel alignment, torque tightening, and diagonal squareness verification.',
    difficulty: 'Beginner',
    duration: '10-15 min',
    steps: ['Tap wooden dowels gently until seated halfway', 'Screw cam pins until shoulder touches surface', 'Mate mating panel holes straight on without racking', 'Turn cam lock clockwise 180° until firm arrow lock clicks'],
    tools: ['Rubber mallet', 'Pozidriv screwdriver', 'Furniture flat-pack panels'],
    safetyNotes: ['Assemble on cardboard or carpet to protect laminate veneers from scratches'],
    metrics: [
      { id: 'gap_elimination', name: 'Joint Seam Tightness', target: '<0.2mm gap', unit: 'mm', description: 'Flush panel contact without visible joint daylight' },
      { id: 'squareness', name: 'Box Diagonal Symmetry', target: 'Identical ±1mm', unit: 'mm', description: 'Equal corner-to-corner diagonal measurements' }
    ],
    cameraPlacementTips: 'Wide view 1.2m away capturing full carcass framework.',
  },
  {
    id: 'skill-sanding',
    categoryId: 'cat-9',
    name: 'Sanding',
    description: 'Hand sanding progression: sand strictly with wood grain, maintain even pad pressure, step grits from 80 to 220.',
    difficulty: 'Beginner',
    duration: '7-12 min',
    steps: ['Wrap sandpaper around firm cork or rubber sanding block', 'Follow the natural grain orientation of the timber', 'Apply light, uniform downward pressure over full stroke length', 'Wipe dust and inspect before moving up grit sequence'],
    tools: ['Sanding block', 'Grit pack (80, 120, 180, 220)', 'Tack cloth'],
    safetyNotes: ['Always wear a well-fitted N95 dust mask when sanding wood'],
    metrics: [
      { id: 'grain_parallelism', name: 'With-Grain Stroke Alignment', target: '98%', unit: '%', description: 'Zero cross-grain scratching or swirl marks' },
      { id: 'pressure_evenness', name: 'Block Levelness', target: 'Flat', unit: 'status', description: 'Prevents rounding off sharp crisp edges' }
    ],
    cameraPlacementTips: 'Angled low view 35cm away with raking side light to highlight surface texture.',
  },
  {
    id: 'skill-wall-hanging',
    categoryId: 'cat-9',
    name: 'Wall Hanging',
    description: 'Anchor drywall fixings, level heavy frames, and align dual wall bracket points accurately.',
    difficulty: 'Intermediate',
    duration: '8-14 min',
    steps: ['Locate wall studs or use appropriate drywall anchors', 'Level reference line using bubble or laser torpedo level', 'Transfer center-to-center hook bracket spacing to wall mark', 'Drive wall anchor and test load before hanging frame'],
    tools: ['Torpedo bubble level', 'Drywall anchors & screws', 'Cordless drill', 'Pencil'],
    safetyNotes: ['Check with electronic sensor for hidden electrical conduit and water pipes'],
    metrics: [
      { id: 'level_accuracy', name: 'Levelness Deviation', target: '0.0° / 0mm', unit: 'deg', description: 'Center bubble alignment within target level marks' },
      { id: 'anchor_security', name: 'Anchor Tightness', target: 'Firmly Seated', unit: 'state', description: 'Zero wobble or loose anchor collars in plasterboard' }
    ],
    cameraPlacementTips: 'Stand 1.5m away capturing wall markings and torpedo level bubble.',
  },
  {
    id: 'skill-cable-organization',
    categoryId: 'cat-9',
    name: 'Cable Organization',
    description: 'Cable routing: grouping by signal type, bundle strain relief, velcro wrap intervals, and sleek under-desk channels.',
    difficulty: 'Beginner',
    duration: '6-10 min',
    steps: ['Separate power cords from sensitive data/audio cables', 'Bundle grouped runs together starting from device outlet', 'Apply reusable velcro cable ties every 6-8 inches', 'Affix adhesive clips along desk spine leaving generous service loops'],
    tools: ['Velcro cable wraps', 'J-channel raceway', 'Cable label tags'],
    safetyNotes: ['Never bend optical or heavy gauge power cables past minimum bend radius'],
    metrics: [
      { id: 'tie_spacing', name: 'Wrap Spacing Regularity', target: '15cm ±2cm', unit: 'cm', description: 'Uniform spacing across harness length' },
      { id: 'strain_relief', name: 'Service Loop Slack', target: '50mm bend radius', unit: 'mm', description: 'Adequate slack prevents port connector shear' }
    ],
    cameraPlacementTips: 'Facing rear of desk or cable tray 50cm away.',
  },

  // 10. Creative & Decorative Crafts (6)
  {
    id: 'skill-gift-wrapping',
    categoryId: 'cat-10',
    name: 'Gift Wrapping',
    description: 'Crisp box corner creases, clean double-sided tape concealment, and seamless Japanese parcel folding.',
    difficulty: 'Beginner',
    duration: '5-8 min',
    steps: ['Measure paper: wrap around box with 2 inches overlap; sides equal half box depth', 'Crease tightly over each box corner with bone folder or thumbnail', 'Fold side flaps inward into clean 45-degree triangles', 'Secure bottom flap up with concealed double-sided tape'],
    tools: ['Wrapping paper', 'Double-sided tape', 'Sharp scissors', 'Bone folder'],
    safetyNotes: ['Keep scissors closed on tabletop when not cutting paper'],
    metrics: [
      { id: 'crease_sharpness', name: 'Corner Crease Crispness', target: 'Sharp', unit: 'rating', description: 'Paper fits skin-tight against box contours' },
      { id: 'flap_symmetry', name: 'Side Flap Angle', target: '45° ±1°', unit: 'deg', description: 'Triangle side folds meet in dead center' }
    ],
    cameraPlacementTips: 'Overhead view 40cm looking straight down on gift parcel.',
  },
  {
    id: 'skill-paper-flower-making',
    categoryId: 'cat-10',
    name: 'Paper Flower Making',
    description: 'Crepe paper petal shaping: stretching grain for realistic petal cupping and floral tape stem wrapping.',
    difficulty: 'Intermediate',
    duration: '8-14 min',
    steps: ['Cut petal templates aligned with crepe grain orientation', 'Cup petal center by gently pulling outward with both thumbs', 'Curl top edge back over wooden skewer', 'Wrap floral tape under tension around stem wire to activate adhesive'],
    tools: ['Heavy Italian crepe paper', 'Floral wire & tape', 'Hot glue gun', 'Detail snips'],
    safetyNotes: ['Hot glue can cause burns; use silicone fingertip protectors'],
    metrics: [
      { id: 'petal_cupping', name: 'Cup Curvature Depth', target: 'Natural Arc', unit: 'rating', description: '3D petal curvature mimicking natural bloom' },
      { id: 'stem_wrap_smoothness', name: 'Tape Overlap Uniformity', target: 'Seamless', unit: 'status', description: 'Zero exposed wire or bulky tape bumps' }
    ],
    cameraPlacementTips: 'Top-down desk angle 30cm away centered on flower center.',
  },
  {
    id: 'skill-origami',
    categoryId: 'cat-10',
    name: 'Origami',
    description: 'Precise Japanese paper folding: corner-to-corner accuracy, valley folds, mountain folds, and petal folds.',
    difficulty: 'Intermediate',
    duration: '7-12 min',
    steps: ['Use authentic square origami kami paper', 'Align opposing corners with sub-millimeter precision before creasing', 'Smooth crease from center outwards to edges using bone folder', 'Execute inverted petal fold without tearing paper center'],
    tools: ['Origami paper (15x15cm)', 'Bone folder or smooth ruler'],
    safetyNotes: ['Handle thin paper gently to avoid paper cuts along edges'],
    metrics: [
      { id: 'corner_matching', name: 'Corner Alignment Precision', target: '<0.3mm off', unit: 'mm', description: 'Exact point-to-point matching of folded tips' },
      { id: 'crease_definition', name: 'Crease Sharpness', target: '100% Flat', unit: 'rating', description: 'Sharp fold lines prevent spring-back' }
    ],
    cameraPlacementTips: 'Overhead macro 25cm looking straight down at origami square.',
  },
  {
    id: 'skill-candle-decoration',
    categoryId: 'cat-10',
    name: 'Candle Decoration',
    description: 'Decoupage botanical flora onto pillar candles using heated spoons or low-temp heat embossing tools.',
    difficulty: 'Beginner',
    duration: '6-10 min',
    steps: ['Arrange pressed dried flowers onto candle wax surface', 'Wrap wax paper tightly around candle to hold flowers flat', 'Gently glide warm embossing heat tool or warm spoon over surface', 'Watch for wax to melt through paper, embedding petals securely'],
    tools: ['Pillar candle', 'Pressed dried flowers', 'Wax paper', 'Embossing heat tool / spoon'],
    safetyNotes: ['Never leave heating tools unattended; hold candle base away from heat stream'],
    metrics: [
      { id: 'adhesion_smoothness', name: 'Botanical Embedment', target: 'Flush', unit: 'status', description: 'Petals fully sealed under wax layer without raised edges' },
      { id: 'wax_clarity', name: 'Wax Surface Smoothness', target: 'Clear', unit: 'rating', description: 'Uniform sheen without scorching or bubbling candle wax' }
    ],
    cameraPlacementTips: 'Side angle 30cm away rotating around pillar candle axis.',
  },
  {
    id: 'skill-resin-craft',
    categoryId: 'cat-10',
    name: 'Resin/Decorative Craft',
    description: 'Epoxy mixing, bubble torching, slow stream pouring, and pigment swirl suspension in silicone molds.',
    difficulty: 'Intermediate',
    duration: '10-15 min',
    steps: ['Measure 1:1 ratio resin and hardener accurately by volume', 'Stir slowly for 3 minutes scraping sides to minimize micro-bubbles', 'Let sit 2 minutes to degas; pour in thin pencil stream into mold center', 'Pass butane micro-torch 3 inches above surface in swift sweeps to pop surface bubbles'],
    tools: ['2-part epoxy resin', 'Silicone coaster molds', 'Stir sticks', 'Butane micro-torch'],
    safetyNotes: ['Work in well-ventilated area wearing nitrile gloves and respirator mask'],
    metrics: [
      { id: 'bubble_clearance', name: 'Bubble Count', target: '0 bubbles', unit: 'count', description: 'Complete elimination of trapped air bubbles' },
      { id: 'mold_fill_level', name: 'Meniscus Planarity', target: 'Flush meniscus', unit: 'grade', description: 'Filled exactly to rim without overspill or dip' }
    ],
    cameraPlacementTips: 'Overhead view 35cm away with bright focused task light.',
  },
  {
    id: 'skill-festive-decoration',
    categoryId: 'cat-10',
    name: 'Festive Decoration',
    description: 'Construct lush holiday wreaths using wire binding, layered evergreen sprigs, and balanced ribbon bow anchor.',
    difficulty: 'Beginner',
    duration: '8-14 min',
    steps: ['Bundle 3-4 evergreen tips together with stems aligned', 'Lay bundle on wire wreath frame overlapping previous bundle by half', 'Wrap paddle wire tightly 3 times around woody stems', 'Repeat around circle; tie off wire firmly and fluff bow center'],
    tools: ['Wire wreath frame', 'Green paddle wire (22-gauge)', 'Garden pruners', 'Ribbon'],
    safetyNotes: ['Wear lightweight gardening gloves to avoid evergreen sap and wire pokes'],
    metrics: [
      { id: 'overlap_density', name: 'Wreath Density Evenness', target: 'Uniform 360°', unit: 'status', description: 'No exposed wire frame or thin gaps' },
      { id: 'wire_binding_tension', name: 'Wire Grip Firmness', target: 'Rigid', unit: 'rating', description: 'Foliage does not shift or sag when wreath is hung' }
    ],
    cameraPlacementTips: 'Wall or easel mount 1 meter away showing circular perimeter.',
  },
];

export const SKILLS: Skill[] = RAW_SKILLS.map((s) => ({
  ...s,
  learning: buildLearningContent(s),
}));

