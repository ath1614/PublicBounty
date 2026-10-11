// Screenless Pocket Harvest Card Component
import { ForagingMission } from '../mastra/foraging-agent.js';

export function renderPocketCardHTML(mission: ForagingMission): string {
  return `
    <div class="pocket-harvest-card" id="pocket-card-printable">
      <div class="card-edge-tag">🧺 20-MIN POCKET HARVEST CARD • SCREENLESS FORAGING</div>
      
      <div class="pocket-card-header">
        <div>
          <h2 class="pocket-card-title">${mission.neighborhood} Harvest Route</h2>
          <p class="pocket-card-sub">Estimated Yield: <strong>${mission.totalEstimatedYieldKg} kg</strong> • Walking: <strong>${mission.totalWalkingMinutes} mins</strong> (${mission.totalDistanceMeters}m)</p>
        </div>
        <div class="pocket-qr-mock">
          <span>🍂</span>
        </div>
      </div>

      <div class="pocket-stops-grid">
        ${mission.stops.map(stop => `
          <div class="pocket-stop-item">
            <div class="stop-num-badge">${stop.sequenceNumber}</div>
            <div class="stop-details">
              <div class="stop-header-line">
                <strong class="species-title">${stop.tree.species.icon} ${stop.tree.species.commonName}</strong>
                <span class="safety-tag ${stop.safetyReport.recommendedAction.toLowerCase()}">
                  ${stop.safetyReport.recommendedAction === 'HARVEST_APPROVED' ? '✅ SAFE' : '🧤 WEAR GLOVES'}
                </span>
              </div>
              <p class="stop-address">📍 <strong>${stop.tree.streetAddress}</strong> (${stop.walkingDistanceMeters}m walk)</p>
              <div class="pocket-diagnostic-checklist">
                ${stop.screenlessChecklist.map(item => `
                  <div class="checklist-row">
                    <span class="box-sq">☐</span>
                    <span>${item}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        `).join('')}
      </div>

      <div class="pocket-card-footer">
        <p><strong>🍳 Kitchen Counter Recipe:</strong> ${mission.culinaryRecipeSummary}</p>
        <span class="pocket-hint">👉 Slip this card into your coat pocket or bag. Leave your phone locked. Touch grass & trees!</span>
      </div>
    </div>
  `;
}
