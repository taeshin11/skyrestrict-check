'use client';

import { GeoJSON, Popup } from 'react-leaflet';
import { getSeverityColor, getSeverityLabel } from '@/lib/noFlyZones';
import Badge from '@/components/ui/Badge';
import type { Layer, LeafletEvent } from 'leaflet';

interface NoFlyZoneLayerProps {
  data: GeoJSON.FeatureCollection;
}

export default function NoFlyZoneLayer({ data }: NoFlyZoneLayerProps) {
  const onEachFeature = (feature: GeoJSON.Feature, layer: Layer) => {
    if (feature.properties) {
      const p = feature.properties;
      const severity = p.severity as string;
      const badgeVariant = severity === 'total' ? 'critical' : severity === 'high-risk' ? 'high' : 'medium';

      layer.on({
        mouseover: (e: LeafletEvent) => {
          const target = e.target;
          target.setStyle({ weight: 3, fillOpacity: 0.5 });
        },
        mouseout: (e: LeafletEvent) => {
          const target = e.target;
          const { opacity } = getSeverityColor(severity);
          target.setStyle({ weight: 1, fillOpacity: opacity });
        },
      });

      layer.bindPopup(`
        <div style="min-width: 200px; font-family: Inter, sans-serif;">
          <h3 style="font-weight: 700; font-size: 14px; margin-bottom: 4px;">${p.name}</h3>
          <span style="display: inline-block; padding: 2px 8px; border-radius: 9999px; font-size: 11px; font-weight: 600;
            background: ${badgeVariant === 'critical' ? '#FEE2E2' : badgeVariant === 'high' ? '#FFEDD5' : '#FEF9C3'};
            color: ${badgeVariant === 'critical' ? '#991B1B' : badgeVariant === 'high' ? '#9A3412' : '#854D0E'};">
            ${getSeverityLabel(severity)}
          </span>
          <p style="color: #64748B; font-size: 12px; margin-top: 8px;"><strong>Authority:</strong> ${p.authority}</p>
          <p style="color: #64748B; font-size: 12px;"><strong>Effective:</strong> ${p.effectiveFrom} → ${p.effectiveTo || 'PERM'}</p>
          <p style="color: #475569; font-size: 12px; margin-top: 6px;">${p.reason}</p>
        </div>
      `);
    }
  };

  const style = (feature?: GeoJSON.Feature) => {
    const severity = feature?.properties?.severity || 'caution';
    const { color, opacity } = getSeverityColor(severity);
    return {
      color,
      weight: 1,
      fillColor: color,
      fillOpacity: opacity,
    };
  };

  return <GeoJSON data={data} style={style} onEachFeature={onEachFeature} />;
}
