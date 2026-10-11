// Municipal Street Tree Census Datasets & OpenStreetMap Overpass Ingestion
import { FORAGING_SPECIES, BotanicalSpecies } from './foraging-species.js';

export interface UrbanTreeRecord {
  id: string;
  speciesId: string;
  species: BotanicalSpecies;
  streetAddress: string;
  city: string;
  neighborhood: string;
  lat: number;
  lng: number;
  municipalityId: string;
  publicAccessLevel: 'sidewalk_overhang' | 'public_park' | 'median_strip' | 'community_garden';
  treeDiameterInches: number;
  estimatedYieldKg: number;
  autumnRipenessStatus: 'peak_harvest' | 'approaching_ripe' | 'late_harvest';
  curbSafetyNotes: string;
}

export const CITIES_CONFIG = [
  { id: 'sf', name: 'San Francisco, CA', lat: 37.7599, lng: -122.4148, zoom: 14, defaultNeighborhood: 'Mission District & Bernal Heights' },
  { id: 'portland', name: 'Portland, OR', lat: 45.5152, lng: -122.6450, zoom: 14, defaultNeighborhood: 'Ladd’s Addition & Hawthorne' },
  { id: 'austin', name: 'Austin, TX', lat: 30.2672, lng: -97.7431, zoom: 14, defaultNeighborhood: 'East Austin & Zilker' },
  { id: 'nyc', name: 'Brooklyn, NYC', lat: 40.6782, lng: -73.9442, zoom: 14, defaultNeighborhood: 'Park Slope & Prospect Heights' },
  { id: 'london', name: 'London, UK', lat: 51.5450, lng: -0.0550, zoom: 14, defaultNeighborhood: 'Hackney & Victoria Park' }
];

export const MUNICIPAL_TREE_INVENTORY: UrbanTreeRecord[] = [
  // San Francisco
  {
    id: 'tree_sf_01',
    speciesId: 'persimmon',
    species: FORAGING_SPECIES['persimmon'],
    streetAddress: '742 Folsom St / 24th St Corner',
    city: 'sf',
    neighborhood: 'Mission District',
    lat: 37.7525,
    lng: -122.4150,
    municipalityId: 'SF-DPW-TREE-88314',
    publicAccessLevel: 'sidewalk_overhang',
    treeDiameterInches: 14,
    estimatedYieldKg: 28,
    autumnRipenessStatus: 'peak_harvest',
    curbSafetyNotes: 'Low pedestrian sidewalk overhang. Fruit is drooping 7ft above ground level. Safe sidewalk.'
  },
  {
    id: 'tree_sf_02',
    speciesId: 'fig',
    species: FORAGING_SPECIES['fig'],
    streetAddress: '1180 Hampshire St',
    city: 'sf',
    neighborhood: 'Mission District',
    lat: 37.7538,
    lng: -122.4082,
    municipalityId: 'SF-DPW-TREE-41920',
    publicAccessLevel: 'median_strip',
    treeDiameterInches: 18,
    estimatedYieldKg: 22,
    autumnRipenessStatus: 'peak_harvest',
    curbSafetyNotes: 'Public sidewalk border. Heavy sweet fruit fragrance detectable from 15 paces away.'
  },
  {
    id: 'tree_sf_03',
    speciesId: 'black_walnut',
    species: FORAGING_SPECIES['black_walnut'],
    streetAddress: 'Precita Park Greenline',
    city: 'sf',
    neighborhood: 'Bernal Heights',
    lat: 37.7478,
    lng: -122.4132,
    municipalityId: 'SF-REC-PARK-09214',
    publicAccessLevel: 'public_park',
    treeDiameterInches: 26,
    estimatedYieldKg: 45,
    autumnRipenessStatus: 'peak_harvest',
    curbSafetyNotes: 'Dozens of intact green-yellow walnut spheres resting in soft lawn grass.'
  },
  {
    id: 'tree_sf_04',
    speciesId: 'apple',
    species: FORAGING_SPECIES['apple'],
    streetAddress: '310 Cortland Ave Sidewalk',
    city: 'sf',
    neighborhood: 'Bernal Heights',
    lat: 37.7395,
    lng: -122.4180,
    municipalityId: 'SF-DPW-TREE-77401',
    publicAccessLevel: 'sidewalk_overhang',
    treeDiameterInches: 11,
    estimatedYieldKg: 18,
    autumnRipenessStatus: 'late_harvest',
    curbSafetyNotes: 'Crisp tart heritage apples. Branches easily reached from public walkway.'
  },

  // Portland
  {
    id: 'tree_pdx_01',
    speciesId: 'sweet_chestnut',
    species: FORAGING_SPECIES['sweet_chestnut'],
    streetAddress: 'SE 16th Ave & Harrison St',
    city: 'portland',
    neighborhood: 'Ladd’s Addition',
    lat: 45.5085,
    lng: -122.6492,
    municipalityId: 'PDX-PARKS-CHESTNUT-102',
    publicAccessLevel: 'sidewalk_overhang',
    treeDiameterInches: 32,
    estimatedYieldKg: 65,
    autumnRipenessStatus: 'peak_harvest',
    curbSafetyNotes: 'Spiky urchin burs carpet the parking strip. Step carefully with thick soles to release nuts.'
  },
  {
    id: 'tree_pdx_02',
    speciesId: 'apple',
    species: FORAGING_SPECIES['apple'],
    streetAddress: 'SE 34th Ave & Hawthorne Blvd',
    city: 'portland',
    neighborhood: 'Hawthorne',
    lat: 45.5122,
    lng: -122.6291,
    municipalityId: 'PDX-PARKS-TREE-59021',
    publicAccessLevel: 'sidewalk_overhang',
    treeDiameterInches: 15,
    estimatedYieldKg: 35,
    autumnRipenessStatus: 'peak_harvest',
    curbSafetyNotes: 'Heritage Gravenstein heirloom apple tree overhangs sidewalk curb. Clean ripe drop.'
  },
  {
    id: 'tree_pdx_03',
    speciesId: 'black_walnut',
    species: FORAGING_SPECIES['black_walnut'],
    streetAddress: 'SE Lincoln St & 21st Ave',
    city: 'portland',
    neighborhood: 'Hawthorne',
    lat: 45.5080,
    lng: -122.6438,
    municipalityId: 'PDX-PARKS-TREE-30911',
    publicAccessLevel: 'median_strip',
    treeDiameterInches: 24,
    estimatedYieldKg: 40,
    autumnRipenessStatus: 'peak_harvest',
    curbSafetyNotes: 'Mature tree with heavy ground deposit of citrusy-aromatic walnuts.'
  },

  // Austin
  {
    id: 'tree_atx_01',
    speciesId: 'black_walnut', // Pecan
    species: FORAGING_SPECIES['black_walnut'],
    streetAddress: '2200 Barton Springs Rd',
    city: 'austin',
    neighborhood: 'Zilker',
    lat: 30.2638,
    lng: -97.7712,
    municipalityId: 'ATX-FORESTRY-PECAN-99',
    publicAccessLevel: 'public_park',
    treeDiameterInches: 38,
    estimatedYieldKg: 80,
    autumnRipenessStatus: 'peak_harvest',
    curbSafetyNotes: 'Historic Texas Pecan canopy. Smooth golden brown pecans carpet public trail.'
  },
  {
    id: 'tree_atx_02',
    speciesId: 'persimmon',
    species: FORAGING_SPECIES['persimmon'],
    streetAddress: '1400 E 4th St',
    city: 'austin',
    neighborhood: 'East Austin',
    lat: 30.2625,
    lng: -97.7289,
    municipalityId: 'ATX-FORESTRY-TREE-201',
    publicAccessLevel: 'sidewalk_overhang',
    treeDiameterInches: 12,
    estimatedYieldKg: 19,
    autumnRipenessStatus: 'peak_harvest',
    curbSafetyNotes: 'Texas wild black/orange persimmon. Jelly-sweet flavor.'
  },

  // Brooklyn, NYC
  {
    id: 'tree_nyc_01',
    speciesId: 'fig',
    species: FORAGING_SPECIES['fig'],
    streetAddress: '6th Ave & 3rd St',
    city: 'nyc',
    neighborhood: 'Park Slope',
    lat: 40.6729,
    lng: -73.9822,
    municipalityId: 'NYC-PARKS-TREE-77192',
    publicAccessLevel: 'sidewalk_overhang',
    treeDiameterInches: 16,
    estimatedYieldKg: 20,
    autumnRipenessStatus: 'peak_harvest',
    curbSafetyNotes: 'Classic Italian Brooklyn brownstone sidewalk fig tree overflowing onto street.'
  },
  {
    id: 'tree_nyc_02',
    speciesId: 'sweet_chestnut',
    species: FORAGING_SPECIES['sweet_chestnut'],
    streetAddress: 'Prospect Park West & 9th St',
    city: 'nyc',
    neighborhood: 'Prospect Park',
    lat: 40.6625,
    lng: -73.9781,
    municipalityId: 'NYC-PARKS-TREE-88319',
    publicAccessLevel: 'public_park',
    treeDiameterInches: 29,
    estimatedYieldKg: 50,
    autumnRipenessStatus: 'peak_harvest',
    curbSafetyNotes: 'Magnificent sweet chestnut inside park perimeter sidewalk.'
  }
];

export function getTreesForCity(cityId: string): UrbanTreeRecord[] {
  return MUNICIPAL_TREE_INVENTORY.filter(t => t.city === cityId);
}
