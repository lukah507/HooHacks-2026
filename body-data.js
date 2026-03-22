const BODY_DATA = {

  hourglass: {
    name: 'Hourglass',
    emoji: '⌛',
    tagline: 'defined waist with equal bust and hips',
    heroGradient: 'linear-gradient(135deg, #FFF0F5 0%, #F2C4C4 40%, #D97B7B 100%)',
    textColor: '#2B1A1A',
    badgeBg: '#F2C4C4',
    badgeColor: '#2B1A1A',
    oneWordSum: 'Balanced & Curvy',
    characteristics: [
      { icon: '📐', text: 'Your bust and hips are roughly equal in width' },
      { icon: '✂️', text: 'Your waist is well-defined and noticeably narrower than your bust and hips' },
      { icon: '💫', text: 'You likely have a fuller chest and rounder derrière' },
      { icon: '🌀', text: 'You may describe yourself as curvy or voluptuous' },
    ],
    dressingTip: 'Flaunt your curves by accentuating your smallest point — your waist. Wrap-style tops and dresses are your best friend. Opt for high-rise bottoms to elongate your legs. Avoid boxy or low-rise styles that hide your shape.',
    tops: [
      { name: 'Wrap Top', description: 'Cinches at your smallest point and celebrates your balanced proportions.' },
      { name: 'Surplice / Faux-Wrap Top', description: 'Creates a waist-defining V-neck silhouette without bulk.' },
      { name: 'Fitted Turtleneck', description: 'Skims your curves evenly from top to bottom.' },
    ],
    bottoms: [
      { name: 'High-Rise Wide Leg Trousers', description: 'Elongates your legs while keeping the focus on your defined waist.' },
      { name: 'Fit-and-Flare Skirt', description: 'Mirrors your natural silhouette and celebrates your proportions.' },
      { name: 'High-Rise Straight Jeans', description: 'A clean, modern silhouette that highlights your waist.' },
    ],
    dresses: [
      { name: 'Wrap Dress', description: 'The ultimate hourglass dress — adjustable and infinitely flattering.' },
      { name: 'Body-Con Midi Dress', description: 'Follows your curves for a confident, polished look.' },
      { name: 'Fit-and-Flare Dress', description: 'Defined bodice with a flared skirt — made for your shape.' },
    ],
    outerwear: [
      { name: 'Belted Coat', description: 'Cinches at the waist to preserve your hourglass silhouette.' },
      { name: 'Moto Jacket', description: 'A cropped cut that ends at the waist and emphasizes your curves.' },
    ],
    necklines: [
      { name: 'Oval / Round', description: 'Low and slightly wide to show off the décolletage without adding volume.' },
      { name: 'V-Neck', description: 'Draws the eye toward the center and maintains the balanced silhouette.' },
    ],
    sleeves: [
      { name: 'Set-in Sleeves', description: 'Follow the natural shoulder line to avoid adding width to either the top or bottom.' },
    ],
    avoid: [
      'Boxy, oversized tops that hide your waist',
      'Low-rise bottoms that cut across your widest hip point',
      'Shapeless shift dresses with no waist definition',
      'Very stiff, structured fabrics that add bulk without shape',
    ],
    bestCombos: [
      'Wrap dress + strappy heels — timeless and effortless',
      'High-rise wide-leg trousers + tucked-in surplice blouse',
      'Fitted bodysuit + high-waisted skirt or jeans',
      'Belted midi dress in a solid color or subtle print',
    ],
  },

  triangle: {
    name: 'Triangle',
    emoji: '🔺',
    tagline: 'bust and waist narrower than hips',
    heroGradient: 'linear-gradient(135deg, #FFF8E1 0%, #FFE082 40%, #FFB300 100%)',
    textColor: '#3E2723',
    badgeBg: '#FFE082',
    badgeColor: '#3E2723',
    oneWordSum: 'Pear-Shaped & Defined',
    characteristics: [
      { icon: '📐', text: 'Your hips are wider than your bust and shoulders' },
      { icon: '✂️', text: 'Your waist is defined and narrower than your hips' },
      { icon: '💫', text: 'You may have narrow or sloping shoulders' },
      { icon: '🌀', text: 'Your hips and thighs are the first place you notice weight changes' },
    ],
    dressingTip: 'Draw attention upward with bold, structured, or printed tops. Balance your hips with roomier cuts and dark washes on the bottom. High-rise styles make your waist look tiny and legs long. Avoid anything that adds volume at the hip.',
    tops: [
      { name: 'Puff Sleeve Blouse', description: 'Volume at the shoulders perfectly balances out wider hips.' },
      { name: 'Off-the-Shoulder Top', description: 'Widens the shoulder line visually for a balanced silhouette.' },
      { name: 'Printed / Embellished Top', description: 'Bold detail up top draws the eye away from the hips.' },
    ],
    bottoms: [
      { name: 'Dark Wash Straight Leg Jeans', description: 'Slimming dark wash and clean lines elongate the lower body.' },
      { name: 'A-Line Skirt (midi or maxi)', description: 'Skims over hips gracefully without adding volume.' },
      { name: 'Wide-Leg Trousers (dark, solid)', description: 'Creates a long, clean line through the leg.' },
    ],
    dresses: [
      { name: 'Off-the-Shoulder Dress', description: 'Adds width at the shoulders and nips in at the waist.' },
      { name: 'Fit-and-Flare Dress', description: 'Structured bodice balances the flared skirt over the hips.' },
      { name: 'Wrap Dress', description: 'Highlights the waist and flows gracefully over the hips.' },
    ],
    outerwear: [
      { name: 'Structured Blazer', description: 'Adds definition to the shoulders for a more balanced frame.' },
      { name: 'Cropped Jacket', description: 'Ends above the hip to keep attention in the upper body.' },
    ],
    necklines: [
      { name: 'Boat / Bateau', description: 'Widens the shoulder line visually to match the width of the hips.' },
      { name: 'Cowl Neck', description: 'Adds desired volume to the bust area to create balance.' },
    ],
    sleeves: [
      { name: 'Bell / Batwing', description: 'The extra volume at the arms helps broaden the upper body.' },
    ],
    avoid: [
      'Skinny jeans that emphasize the hip-to-waist contrast',
      'Tops with horizontal stripes across the hips',
      'Pleated or gathered skirts that add volume at the hip',
      'Low-slung or hip-slung belts',
    ],
    bestCombos: [
      'Bold printed top + dark wash straight leg jeans',
      'Puff sleeve blouse + A-line midi skirt',
      'Off-the-shoulder dress + minimal accessories',
      'Structured blazer + wide-leg dark trousers',
    ],
  },

  inverted_triangle: {
    name: 'Inverted Triangle',
    emoji: '🔻',
    tagline: 'broad shouldered with narrow hips',
    heroGradient: 'linear-gradient(135deg, #E8F5E9 0%, #A5D6A7 40%, #66BB6A 100%)',
    textColor: '#1B5E20',
    badgeBg: '#A5D6A7',
    badgeColor: '#1B5E20',
    oneWordSum: 'Athletic & Strong',
    characteristics: [
      { icon: '📐', text: 'Your shoulders and bust are wider than your hips' },
      { icon: '✂️', text: 'You have a smaller derrière and narrower hips' },
      { icon: '💫', text: 'You consider yourself to have broad or square shoulders' },
      { icon: '🌀', text: 'Your upper body is the first place you notice weight changes' },
    ],
    dressingTip: 'Celebrate your strong shoulders with open necklines that frame your face. Add volume and definition to the lower half to balance your proportions. Waist-cinching belts and high-rises create the illusion of curves. Avoid pairing voluminous tops with tight-fitting bottoms.',
    tops: [
      { name: 'Subtle Peplum Blouse', description: 'The flared hem adds volume at the hip to balance broad shoulders.' },
      { name: 'V-Neck or Scoop Neck Top', description: 'Draws the eye inward and downward, de-emphasizing shoulder width.' },
      { name: 'Simple, Fitted Top (dark or solid)', description: 'Keeps the upper body understated so the lower body can shine.' },
    ],
    bottoms: [
      { name: 'Pleated Midi Skirt', description: 'Pleating adds volume to the lower half, balancing broad shoulders.' },
      { name: 'Wide-Leg Trousers (patterned or bright)', description: 'Adds visual width to the hips for a balanced silhouette.' },
      { name: 'A-Line Skirt with Volume', description: 'Creates curves where needed and softens a strong shoulder line.' },
    ],
    dresses: [
      { name: 'Fit-and-Flare Dress', description: 'Fitted bodice leads into a full skirt — perfect for adding hip volume.' },
      { name: 'Wrap Dress', description: 'Creates a defined waist and adds gentle volume at the hips.' },
      { name: 'Skater Dress', description: 'Full skirt creates the curve illusion and balances the upper body.' },
    ],
    outerwear: [
      { name: 'Belted Jacket or Coat', description: 'Defines the waist and creates an hourglass effect.' },
      { name: 'Longline Blazer', description: 'Lengthens the torso and draws the eye downward.' },
    ],
    necklines: [
      { name: 'Halter Neck', description: 'Breaks up the width of the shoulders by drawing the eye inward.' },
      { name: 'Scoop Neck', description: 'A deep curve helps soften a broad chest and shoulder line.' },
    ],
    sleeves: [
      { name: 'Raglan Sleeves', description: 'The diagonal seam line helps visually narrow the shoulders.' },
    ],
    avoid: [
      'Boat necks and wide, horizontal necklines that broaden shoulders',
      'Cap sleeves and puff sleeves that add upper body volume',
      'Skinny jeans or pencil skirts with voluminous tops',
      'Strong shoulder details like epaulettes or structured padding',
    ],
    bestCombos: [
      'Simple fitted top + pleated midi skirt + belt',
      'V-neck blouse + wide-leg patterned trousers',
      'Peplum top + straight leg jeans',
      'Belted wrap dress in a solid or subtle print',
    ],
  },

  rectangle: {
    name: 'Rectangle',
    emoji: '▬',
    tagline: 'straight waisted with equal bust and hips',
    heroGradient: 'linear-gradient(135deg, #E3F2FD 0%, #90CAF9 40%, #42A5F5 100%)',
    textColor: '#0D47A1',
    badgeBg: '#90CAF9',
    badgeColor: '#0D47A1',
    oneWordSum: 'Lean & Athletic',
    characteristics: [
      { icon: '📐', text: 'Your bust, waist, and hips are roughly equal in width' },
      { icon: '✂️', text: 'Your waist is straight rather than curvy or cinched' },
      { icon: '💫', text: 'You are likely on the taller side or have an athletic build' },
      { icon: '🌀', text: 'Weight distributes fairly evenly across your whole body' },
    ],
    dressingTip: 'Create the illusion of curves by adding volume evenly to your bust and hips. High-rise fits and waist-cinching belts define your midsection. You look stunning in structured, tailored pieces. Avoid boxy cuts that emphasize your straight silhouette.',
    tops: [
      { name: 'Puff Sleeve Top or Dress', description: 'Dramatic sleeves add upper body volume and create shape.' },
      { name: 'Ruffled or Embellished Blouse', description: 'Detail and texture at the bust adds dimension to a straight frame.' },
      { name: 'Cropped Top with High-Rise Bottom', description: 'The gap between pieces creates a visual waist.' },
    ],
    bottoms: [
      { name: 'Printed Wide Leg Pants', description: 'Bold print + flowy volume creates curves through the leg.' },
      { name: 'Pleated Trousers', description: 'Adds gentle hip volume and a tailored, polished look.' },
      { name: 'Mini or Micro Skirt', description: 'Highlights your long, lean legs — a major asset.' },
    ],
    dresses: [
      { name: 'Puff Sleeve Midi Dress', description: 'Creates shape from top to bottom with structured volume.' },
      { name: 'Belted Shirt Dress', description: 'The belt cinches a waist where there may not be much natural definition.' },
      { name: 'Tiered Ruffle Dress', description: 'Layers of volume create the illusion of curves throughout.' },
    ],
    outerwear: [
      { name: 'Trench Coat (belted)', description: 'Elongates your figure and creates an instant waist.' },
      { name: 'Faux Fur or Chunky Knit Coat', description: 'Adds volume and drama to your lean frame.' },
    ],
    necklines: [
      { name: 'Sweetheart', description: 'Adds a curved line to a straight frame to mimic a fuller bust.' },
      { name: 'Off-the-Shoulder', description: 'Creates a horizontal line that breaks up the "straight up and down" look.' },
    ],
    sleeves: [
      { name: 'Cuffed or Flared', description: 'Adds interesting detail and volume to keep the eye moving.' },
    ],
    avoid: [
      'Shapeless shift dresses with no waist definition',
      'Boxy, oversized tops worn untucked over straight-cut bottoms',
      'Very long, straight cardigans that elongate without adding shape',
      'Matching straight-cut top and bottom sets with no contrast',
    ],
    bestCombos: [
      'Puff sleeve top + high-waisted wide-leg pants + belt',
      'Cropped embellished blouse + mini skirt',
      'Belted trench coat over a fitted midi dress',
      'Structured blazer + pleated trousers + pointed heels',
    ],
  },

  oval: {
    name: 'Oval',
    emoji: '🥚',
    tagline: 'waist wider than bust and hips',
    heroGradient: 'linear-gradient(135deg, #F3E5F5 0%, #CE93D8 40%, #AB47BC 100%)',
    textColor: '#1A0027',
    badgeBg: '#CE93D8',
    badgeColor: '#1A0027',
    oneWordSum: 'Full & Rounded',
    characteristics: [
      { icon: '📐', text: 'Your waist is equal to or greater than your hips and bust' },
      { icon: '✂️', text: 'Your waist is undefined or carries more fullness than other areas' },
      { icon: '💫', text: 'You tend to have a larger bust and a fuller midsection' },
      { icon: '🌀', text: 'Your midsection is the first area where you notice weight changes' },
    ],
    dressingTip: 'Use silhouettes and lines to draw attention away from your midsection and elongate your figure. Stick to small-scale prints and vertical lines for a slimming effect. V-necks and open necklines draw the eye upward. Avoid cropped fits and voluminous ruffles at the waist.',
    tops: [
      { name: 'V-Neck Blouse', description: 'Elongates the chest and neckline, drawing attention toward your face.' },
      { name: 'Longline Tunic or Top', description: 'Flows past the waist and hips, creating a smooth, elongating line.' },
      { name: 'Wrap Top', description: 'The diagonal lines of a wrap create a waist illusion and open the neckline.' },
    ],
    bottoms: [
      { name: 'Straight or Bootcut Trousers', description: 'A consistent width through the leg creates a streamlined look.' },
      { name: 'Dark Wash Wide-Leg Jeans', description: 'High-rise + dark wash + wide leg elongates without constricting.' },
      { name: 'A-Line or Flared Skirt', description: 'Skims over the midsection and flares gently for a balanced look.' },
    ],
    dresses: [
      { name: 'Midi Wrap Dress', description: 'Instantly creates an hourglass shape; the skirt smooths over the stomach.' },
      { name: 'Long-Line Shirt Dress', description: 'A vertical line from shoulder to hem is your most elongating silhouette.' },
      { name: 'Empire Waist Dress', description: 'The seam sits just below the bust — the narrowest point — creating definition.' },
    ],
    outerwear: [
      { name: 'Long-Lapel Single-Breasted Blazer', description: 'Long vertical line streamlines the midsection without adding bulk.' },
      { name: 'Open-Front Longline Cardigan', description: 'Creates a vertical column of negative space down the center.' },
    ],
    necklines: [
      { name: 'Deep V-Neck', description: 'The ultimate elongating neckline that breaks up the fullness of the torso.' },
      { name: 'Square Neck', description: 'Provides structure and vertical lines to frame the face.' },
    ],
    sleeves: [
      { name: 'Cap Sleeves', description: 'Draws attention upward to the shoulders and away from the waist.' },
    ],
    avoid: [
      'Cropped tops and jackets that end at the waist',
      'Voluminous ruffles or embellishments at the midsection',
      'Very tight, body-con styles through the stomach',
      'Horizontal stripes or large prints across the waist',
    ],
    bestCombos: [
      'V-neck blouse + dark wash wide-leg jeans + longline blazer',
      'Midi wrap dress + block heels',
      'Empire waist dress + strappy sandals',
      'Longline tunic + straight trousers + open-front cardigan',
    ],
  },

};