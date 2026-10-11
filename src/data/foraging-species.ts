export interface BotanicalSpecies {
  id: string;
  commonName: string;
  scientificName: string;
  category: 'fruit' | 'nut' | 'berry';
  peakSeason: string;
  isPeakAutumn: boolean;
  flavorProfile: string;
  harvestMethod: string;
  culinaryUse: string;
  diagnosticTraits: string[];
  toxicLookalikes: {
    name: string;
    scientificName: string;
    dangerLevel: 'deadly' | 'toxic' | 'gastrointestinal';
    distinguishingDifference: string;
  }[];
  gemmaSafetyVerdict: string;
  icon: string;
  color: string;
}

export const FORAGING_SPECIES: Record<string, BotanicalSpecies> = {
  persimmon: {
    id: 'persimmon',
    commonName: 'Autumn Persimmon (अमरूद/जापानी तेंदू)',
    scientificName: 'Diospyros kaki / virginiana',
    category: 'fruit',
    peakSeason: 'October — December',
    isPeakAutumn: true,
    flavorProfile: 'Honey-sweet, spiced apricot, custard-like texture when fully ripe',
    harvestMethod: 'Gently shake lower branches or twist ripe soft fruit with stems attached',
    culinaryUse: 'Eat raw with spoon, bake into spiced autumn puddings, or dehydrate into hoshigaki',
    diagnosticTraits: [
      'Four distinct woody persistent calyx sepals clinging to top of fruit',
      'Turns translucent deep orange-amber when ripe; soft like a water balloon',
      'Bark has distinct alligator-hide blocky pattern on mature trunks'
    ],
    toxicLookalikes: [
      {
        name: 'Horse Nettle / Nightshade Berries',
        scientificName: 'Solanum carolinense',
        dangerLevel: 'toxic',
        distinguishingDifference: 'Nightshades grow on low spiny herbaceous weeds, not woody deciduous trees; berries lack the 4-part woody crown calyx.'
      }
    ],
    gemmaSafetyVerdict: 'VERIFIED EDIBLE. Only consume when completely soft to touch to avoid astringent tannins.',
    icon: '🍊',
    color: '#EA580C'
  },
  fig: {
    id: 'fig',
    commonName: 'Mission & Kadota Fig (अंजीर)',
    scientificName: 'Ficus carica',
    category: 'fruit',
    peakSeason: 'August — November',
    isPeakAutumn: true,
    flavorProfile: 'Jammy, brown-sugar caramel sweetness with subtle seed crunch',
    harvestMethod: 'Snip at the neck with pruning shears; fruit should droop and give to gentle pressure',
    culinaryUse: 'Fresh with goat cheese, roasted with balsamic honey, or preserved in autumn fig jam',
    diagnosticTraits: [
      'Distinct deeply lobed palmate leaves (3 to 5 lobes, like a glove)',
      'Drooping soft pear-shaped fruit with open ostiole (eye) at base',
      'Rough sandpapery leaf upper surface'
    ],
    toxicLookalikes: [
      {
        name: 'Weeping Fig / Ornamental Ficus',
        scientificName: 'Ficus benjamina',
        dangerLevel: 'gastrointestinal',
        distinguishingDifference: 'Ornamental ficus fruits are tiny (marble-sized), hard, dry, and unpalatable with irritating milky sap.'
      }
    ],
    gemmaSafetyVerdict: 'VERIFIED EDIBLE. Wear garden gloves when picking if sensitive to milky branch sap.',
    icon: '🫐',
    color: '#701A75'
  },
  sweet_chestnut: {
    id: 'sweet_chestnut',
    commonName: 'Sweet Chestnut (शाहबलूत)',
    scientificName: 'Castanea sativa',
    category: 'nut',
    peakSeason: 'September — November',
    isPeakAutumn: true,
    flavorProfile: 'Sweet, buttery, roasted starchy delicacy when heat-treated',
    harvestMethod: 'Step gently on fallen prickly green/brown spiny burs on sidewalk to pop nuts out',
    culinaryUse: 'Score X on shell and roast over open coals, or puree into mont blanc dessert',
    diagnosticTraits: [
      'Dense, needle-sharp prickly bur resembles a green sea urchin with hundreds of spikes',
      'Nuts have a pointed tip with a tiny hairy tuft',
      'Leaves are long, lance-shaped with sharp saw-tooth edges (serrated)'
    ],
    toxicLookalikes: [
      {
        name: 'Horse Chestnut (Conker)',
        scientificName: 'Aesculus hippocastanum',
        dangerLevel: 'toxic',
        distinguishingDifference: 'CRITICAL WARNING: Horse Chestnut has sparse, blunt, rubbery warts (not needle-dense like an urchin). Leaf has 7 radiating leaflets from a single center point. Seeds contain poisonous aesculin.'
      }
    ],
    gemmaSafetyVerdict: 'BOTANICAL SAFETY ALERT: Verify needle-dense urchin bur. Never eat smooth single-pod horse chestnuts.',
    icon: '🌰',
    color: '#854D0E'
  },
  black_walnut: {
    id: 'black_walnut',
    commonName: 'Eastern Black Walnut & Pecan (अखरोट)',
    scientificName: 'Juglans nigra / Carya illinoinensis',
    category: 'nut',
    peakSeason: 'October — November',
    isPeakAutumn: true,
    flavorProfile: 'Deep, earthy, smoky-rich floral nuttiness unlike grocery walnuts',
    harvestMethod: 'Collect green-yellow fallen balls from sidewalk curbs before car traffic crushes them',
    culinaryUse: 'Husk, dry for 3 weeks, crack shell for wild nutmeat in autumn breads and granolas',
    diagnosticTraits: [
      'Fallen tennis-ball sized green or yellow-brown fleshy husks with sharp citrus-resinous aroma',
      'Pinnately compound leaves with 15–23 serrated leaflets',
      'Husks exude intense brown juglone dye when bruised'
    ],
    toxicLookalikes: [
      {
        name: 'Ohio Buckeye',
        scientificName: 'Aesculus glabra',
        dangerLevel: 'toxic',
        distinguishingDifference: 'Buckeye leaves are palmately compound (only 5 leaflets from one stem). Husk has weak prickles and smells foul rather than citrusy.'
      }
    ],
    gemmaSafetyVerdict: 'VERIFIED EDIBLE. Wear rubber gloves when handling husks to avoid persistent dark skin staining.',
    icon: '🥜',
    color: '#3F6212'
  },
  apple: {
    id: 'apple',
    commonName: 'Wild Heritage Apple & Crabapple (सेब)',
    scientificName: 'Malus domestica / coronaria',
    category: 'fruit',
    peakSeason: 'September — November',
    isPeakAutumn: true,
    flavorProfile: 'Crisp tart-sweet acidity, high pectin, aromatic wild floral notes',
    harvestMethod: 'Lift fruit upward and twist; if ripe, the stem releases cleanly from spur',
    culinaryUse: 'Fresh cider press, homemade spiced applesauce, or rustic autumn tarts',
    diagnosticTraits: [
      'Simple ovate serrated leaves with slightly fuzzy undersides',
      'Central depression at stem and calyx basin with dried blossom remnants',
      'Seeds arranged in 5-chambered star carpel inside core'
    ],
    toxicLookalikes: [],
    gemmaSafetyVerdict: 'VERIFIED EDIBLE. Check for insect damage; wash thoroughly before fresh eating.',
    icon: '🍎',
    color: '#DC2626'
  }
};
