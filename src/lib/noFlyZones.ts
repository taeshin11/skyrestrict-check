import noFlyZonesData from '@/data/noFlyZones.json';

export function getNoFlyZones() {
  return noFlyZonesData;
}

export function getSeverityColor(severity: string): { color: string; opacity: number } {
  switch (severity) {
    case 'total':
      return { color: '#EF4444', opacity: 0.35 };
    case 'high-risk':
      return { color: '#F59E0B', opacity: 0.25 };
    case 'caution':
      return { color: '#EAB308', opacity: 0.2 };
    default:
      return { color: '#6B7280', opacity: 0.15 };
  }
}

export function getSeverityLabel(severity: string): string {
  switch (severity) {
    case 'total':
      return 'Total No-Fly';
    case 'high-risk':
      return 'High Risk';
    case 'caution':
      return 'Caution';
    default:
      return 'Unknown';
  }
}
