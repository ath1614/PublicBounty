// Main Orchestrator for PublicBounty
import { MastraUrbanForagingAgent, ForagingMission } from './mastra/foraging-agent.js';
import { renderPocketCardHTML } from './components/pocket-card.js';
import { initHarvestMap } from './components/harvest-map.js';
import { playAudioCue, stopAudioCues, isAudioPlaying } from './components/audio-beacon.js';
import confetti from 'canvas-confetti';

const agent = new MastraUrbanForagingAgent();
let currentMission: ForagingMission | null = null;

// DOM Elements
const citySelector = document.getElementById('city-selector') as HTMLSelectElement;
const btnGenerateRoute = document.getElementById('btn-generate-route') as HTMLButtonElement;
const statYield = document.getElementById('stat-yield') as HTMLElement;
const statWalking = document.getElementById('stat-walking') as HTMLElement;
const pocketCardMount = document.getElementById('pocket-card-mount') as HTMLElement;
const btnPrintPocket = document.getElementById('btn-print-pocket') as HTMLButtonElement;
const btnAudioBeacon = document.getElementById('btn-audio-beacon') as HTMLButtonElement;
const audioBeaconLabel = document.getElementById('audio-beacon-label') as HTMLElement;

async function loadCityMission(cityId: string) {
  btnGenerateRoute.disabled = true;
  btnGenerateRoute.innerHTML = '⚙️ <span>Mastra Agent Planning...</span>';

  try {
    const mission = await agent.planForagingMission(cityId);
    currentMission = mission;

    // Update Stats
    statYield.innerText = `${mission.totalEstimatedYieldKg} kg`;
    statWalking.innerText = `${mission.totalWalkingMinutes} mins`;

    // Render Leaflet Map
    initHarvestMap('leaflet-map-container', mission);

    // Render Screenless Pocket Card
    pocketCardMount.innerHTML = renderPocketCardHTML(mission);

    // Confetti celebration
    try {
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.55 },
        colors: ['#EA580C', '#1F3F2E', '#D97706']
      });
    } catch (e) {}

  } catch (err) {
    console.error('Failed to plan foraging mission:', err);
    alert('Error planning harvest mission. Please retry.');
  } finally {
    btnGenerateRoute.disabled = false;
    btnGenerateRoute.innerHTML = '🧺 <span>Plan 20-Min Harvest Route</span>';
  }
}

// Bind Events
btnGenerateRoute.onclick = () => {
  const selectedCity = citySelector.value;
  loadCityMission(selectedCity);
};

citySelector.onchange = () => {
  const selectedCity = citySelector.value;
  loadCityMission(selectedCity);
};

// Print Pocket Card
btnPrintPocket.onclick = () => {
  window.print();
};

// Audio Beacon (Hands-free pocket mode)
btnAudioBeacon.onclick = () => {
  if (isAudioPlaying()) {
    stopAudioCues();
    btnAudioBeacon.classList.remove('btn-audio-active');
    audioBeaconLabel.innerText = 'Pocket Audio Guide';
    return;
  }

  if (!currentMission) return;

  const fullAudioScript = `Starting your screenless harvest loop in ${currentMission.neighborhood}. ` +
    currentMission.stops.map(s => s.audioCue).join(' Next: ') +
    ` Happy foraging! Put your phone away and enjoy the autumn harvest.`;

  btnAudioBeacon.classList.add('btn-audio-active');
  audioBeaconLabel.innerText = 'Stop Audio Guide';

  playAudioCue(fullAudioScript, () => {
    btnAudioBeacon.classList.remove('btn-audio-active');
    audioBeaconLabel.innerText = 'Pocket Audio Guide';
  });
};

// Initial load on launch
loadCityMission('sf');

console.log('🧺 PublicBounty Mastra Agent mounted successfully!');
