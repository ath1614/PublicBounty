// Leaflet Foraging Map Component
import L from 'leaflet';
import { ForagingMission } from '../mastra/foraging-agent.js';

let mapInstance: L.Map | null = null;

export function initHarvestMap(containerId: string, mission: ForagingMission) {
  const container = document.getElementById(containerId);
  if (!container) return;

  if (mapInstance) {
    mapInstance.remove();
    mapInstance = null;
  }

  const firstTree = mission.stops[0].tree;
  mapInstance = L.map(containerId).setView([firstTree.lat, firstTree.lng], 15);

  // OpenStreetMap standard public tiles
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19
  }).addTo(mapInstance);

  const latlngs: [number, number][] = [];

  mission.stops.forEach((stop) => {
    const lat = stop.tree.lat;
    const lng = stop.tree.lng;
    latlngs.push([lat, lng]);

    const customIcon = L.divIcon({
      className: 'custom-tree-pin',
      html: `
        <div class="tree-pin-marker" style="background: ${stop.tree.species.color}">
          <span>${stop.tree.species.icon}</span>
          <span class="pin-seq">${stop.sequenceNumber}</span>
        </div>
      `,
      iconSize: [36, 36],
      iconAnchor: [18, 36]
    });

    const marker = L.marker([lat, lng], { icon: customIcon }).addTo(mapInstance!);
    marker.bindPopup(`
      <div style="font-family: inherit; padding: 4px;">
        <h4 style="margin: 0 0 4px; color: #1E293B;">${stop.tree.species.icon} ${stop.tree.species.commonName}</h4>
        <p style="margin: 0 0 4px; font-size: 0.85rem; color: #64748B;">📍 ${stop.tree.streetAddress}</p>
        <p style="margin: 0; font-size: 0.85rem; font-weight: 700; color: #15803D;">✅ ${stop.safetyReport.recommendedAction}</p>
      </div>
    `);
  });

  // Polyline walking path
  if (latlngs.length > 1) {
    L.polyline(latlngs, {
      color: '#15803D',
      weight: 4,
      dashArray: '8, 8',
      opacity: 0.85
    }).addTo(mapInstance);
  }
}
