import { NotamEntry } from '@/types';

// Static NOTAM data for major conflict zones
// In production, this would be supplemented by the FAA NOTAM API
const staticNotams: NotamEntry[] = [
  {
    id: '1',
    notamId: 'A0001/24',
    region: 'Ukraine',
    fir: 'UKFV',
    type: 'Airspace Restriction',
    effectiveFrom: '2022-02-24',
    effectiveTo: 'PERM',
    maxFL: 'FL660',
    description: 'Total closure of Ukrainian airspace due to armed conflict.',
    fullText: 'A0001/24 NOTAMR A0001/22\nQ) UKFV/QRALC/IV/NBO/W/000/660/4900N03200E999\nA) UKFV B) 2202240000 C) PERM\nE) ALL FLIGHTS IN KYIV FIR/UIR ARE PROHIBITED DUE TO ARMED CONFLICT.',
    severity: 'critical',
  },
  {
    id: '2',
    notamId: 'A0145/24',
    region: 'Iraq',
    fir: 'ORBB',
    type: 'Airspace Warning',
    effectiveFrom: '2024-01-15',
    effectiveTo: '2025-12-31',
    maxFL: 'FL260',
    description: 'Risk of anti-aviation weaponry in Iraqi airspace below FL260.',
    fullText: 'A0145/24 NOTAMN\nQ) ORBB/QWALC/IV/BO/W/000/260/3300N04400E999\nA) ORBB B) 2401150000 C) 2512312359\nE) OPERATORS ARE WARNED OF POTENTIAL RISK FROM ANTI-AVIATION WEAPONRY IN BAGHDAD FIR BELOW FL260.',
    severity: 'high',
  },
  {
    id: '3',
    notamId: 'A0089/24',
    region: 'Syria',
    fir: 'OSTT',
    type: 'Airspace Restriction',
    effectiveFrom: '2023-06-01',
    effectiveTo: 'PERM',
    maxFL: 'FL660',
    description: 'Damascus FIR closed to all civil aviation.',
    fullText: 'A0089/24 NOTAMR A0012/23\nQ) OSTT/QRALC/IV/NBO/W/000/660/3500N03800E999\nA) OSTT B) 2306010000 C) PERM\nE) DAMASCUS FIR CLOSED TO ALL CIVIL AVIATION OPERATIONS.',
    severity: 'critical',
  },
  {
    id: '4',
    notamId: 'A0234/24',
    region: 'North Korea',
    fir: 'ZKKP',
    type: 'Airspace Closure',
    effectiveFrom: '2017-01-01',
    effectiveTo: 'PERM',
    maxFL: 'FL660',
    description: 'Complete airspace closure — Pyongyang FIR.',
    fullText: 'A0234/24 NOTAMN\nQ) ZKKP/QRALC/IV/NBO/W/000/660/4000N12700E999\nA) ZKKP B) PERM C) PERM\nE) PYONGYANG FIR IS CLOSED TO ALL INTERNATIONAL CIVIL AVIATION.',
    severity: 'critical',
  },
  {
    id: '5',
    notamId: 'A0567/24',
    region: 'Libya',
    fir: 'HLLL',
    type: 'Airspace Warning',
    effectiveFrom: '2024-03-01',
    effectiveTo: '2025-12-31',
    maxFL: 'FL300',
    description: 'Tripoli FIR — armed conflict risk, airlines advised to reroute.',
    fullText: 'A0567/24 NOTAMN\nQ) HLLL/QWALC/IV/BO/W/000/300/3200N01500E999\nA) HLLL B) 2403010000 C) 2512312359\nE) OPERATORS WARNED OF RISK IN TRIPOLI FIR DUE TO ONGOING CIVIL CONFLICT.',
    severity: 'high',
  },
  {
    id: '6',
    notamId: 'A0312/24',
    region: 'Yemen',
    fir: 'OYSC',
    type: 'Airspace Warning',
    effectiveFrom: '2024-01-10',
    effectiveTo: '2025-06-30',
    maxFL: 'FL260',
    description: 'Sanaa FIR — Houthi anti-ship and anti-aviation activity in Red Sea corridor.',
    fullText: 'A0312/24 NOTAMN\nQ) OYSC/QWALC/IV/BO/W/000/260/1500N04400E999\nA) OYSC B) 2401100000 C) 2506302359\nE) RISK TO AVIATION FROM HOUTHI MILITARY ACTIVITY OVER RED SEA AND YEMEN AIRSPACE.',
    severity: 'high',
  },
  {
    id: '7',
    notamId: 'A0789/24',
    region: 'Afghanistan',
    fir: 'OAKX',
    type: 'Airspace Restriction',
    effectiveFrom: '2021-08-15',
    effectiveTo: 'PERM',
    maxFL: 'FL660',
    description: 'Kabul FIR — limited ATC services, high risk for overflights.',
    fullText: 'A0789/24 NOTAMR A0100/21\nQ) OAKX/QRALC/IV/NBO/W/000/660/3400N06700E999\nA) OAKX B) 2108150000 C) PERM\nE) KABUL FIR LIMITED ATC SERVICES. HIGH RISK FOR ALL OPERATIONS.',
    severity: 'critical',
  },
  {
    id: '8',
    notamId: 'A0456/24',
    region: 'Somalia',
    fir: 'HCSM',
    type: 'Airspace Warning',
    effectiveFrom: '2024-02-01',
    effectiveTo: '2025-12-31',
    maxFL: 'FL260',
    description: 'Mogadishu FIR — security threat from Al-Shabaab in southern regions.',
    fullText: 'A0456/24 NOTAMN\nQ) HCSM/QWALC/IV/BO/W/000/260/0200N04500E999\nA) HCSM B) 2402010000 C) 2512312359\nE) OPERATORS WARNED OF SECURITY RISK IN SOUTHERN MOGADISHU FIR.',
    severity: 'high',
  },
  {
    id: '9',
    notamId: 'A0678/24',
    region: 'Iran',
    fir: 'OIIX',
    type: 'Airspace Caution',
    effectiveFrom: '2024-04-15',
    effectiveTo: '2025-12-31',
    maxFL: 'FL460',
    description: 'Tehran FIR — heightened military activity, exercise caution.',
    fullText: 'A0678/24 NOTAMN\nQ) OIIX/QWALC/IV/BO/W/000/460/3200N05300E999\nA) OIIX B) 2404150000 C) 2512312359\nE) OPERATORS ADVISED TO EXERCISE CAUTION IN TEHRAN FIR DUE TO HEIGHTENED MILITARY ACTIVITY.',
    severity: 'medium',
  },
  {
    id: '10',
    notamId: 'A0890/24',
    region: 'Ethiopia',
    fir: 'HAAA',
    type: 'Airspace Caution',
    effectiveFrom: '2024-01-01',
    effectiveTo: '2025-06-30',
    maxFL: 'FL260',
    description: 'Addis Ababa FIR — residual conflict risk in Tigray region.',
    fullText: 'A0890/24 NOTAMN\nQ) HAAA/QWALC/IV/BO/W/000/260/1300N03900E999\nA) HAAA B) 2401010000 C) 2506302359\nE) CAUTION ADVISED IN NORTHERN SECTOR OF ADDIS ABABA FIR (TIGRAY REGION).',
    severity: 'medium',
  },
  {
    id: '11',
    notamId: 'A0345/24',
    region: 'Sudan',
    fir: 'HSSS',
    type: 'Airspace Warning',
    effectiveFrom: '2023-04-15',
    effectiveTo: 'PERM',
    maxFL: 'FL660',
    description: 'Khartoum FIR — civil war, all aviation operations at extreme risk.',
    fullText: 'A0345/24 NOTAMR A0100/23\nQ) HSSS/QRALC/IV/NBO/W/000/660/1500N03200E999\nA) HSSS B) 2304150000 C) PERM\nE) KHARTOUM FIR — EXTREME RISK DUE TO ONGOING CIVIL WAR. AVOID ALL OPERATIONS.',
    severity: 'critical',
  },
  {
    id: '12',
    notamId: 'A0123/24',
    region: 'Myanmar',
    fir: 'VYYY',
    type: 'Airspace Caution',
    effectiveFrom: '2024-02-01',
    effectiveTo: '2025-12-31',
    maxFL: 'FL260',
    description: 'Yangon FIR — civil unrest, limited ATC reliability.',
    fullText: 'A0123/24 NOTAMN\nQ) VYYY/QWALC/IV/BO/W/000/260/1900N09600E999\nA) VYYY B) 2402010000 C) 2512312359\nE) YANGON FIR CAUTION: CIVIL UNREST MAY AFFECT ATC SERVICES.',
    severity: 'medium',
  },
  {
    id: '13',
    notamId: 'A0901/24',
    region: 'Mali',
    fir: 'GABS',
    type: 'Airspace Caution',
    effectiveFrom: '2024-03-01',
    effectiveTo: '2025-12-31',
    maxFL: 'FL260',
    description: 'Bamako FIR — Sahel security situation, military operations ongoing.',
    fullText: 'A0901/24 NOTAMN\nQ) GABS/QWALC/IV/BO/W/000/260/1400N00800W999\nA) GABS B) 2403010000 C) 2512312359\nE) BAMAKO FIR: SECURITY SITUATION IN SAHEL REGION. MILITARY OPERATIONS MAY AFFECT CIVIL AVIATION.',
    severity: 'medium',
  },
];

export function getNotams(): NotamEntry[] {
  return staticNotams;
}

export function searchNotams(query: string): NotamEntry[] {
  const lower = query.toLowerCase();
  return staticNotams.filter(
    (n) =>
      n.region.toLowerCase().includes(lower) ||
      n.notamId.toLowerCase().includes(lower) ||
      n.description.toLowerCase().includes(lower) ||
      n.fir.toLowerCase().includes(lower)
  );
}

export function filterNotamsBySeverity(severity: string): NotamEntry[] {
  if (severity === 'all') return staticNotams;
  return staticNotams.filter((n) => n.severity === severity);
}

export function sortNotams(
  notams: NotamEntry[],
  sortBy: 'newest' | 'region' | 'severity'
): NotamEntry[] {
  const sorted = [...notams];
  switch (sortBy) {
    case 'newest':
      return sorted.sort(
        (a, b) =>
          new Date(b.effectiveFrom).getTime() -
          new Date(a.effectiveFrom).getTime()
      );
    case 'region':
      return sorted.sort((a, b) => a.region.localeCompare(b.region));
    case 'severity': {
      const order = { critical: 0, high: 1, medium: 2, low: 3 };
      return sorted.sort((a, b) => order[a.severity] - order[b.severity]);
    }
    default:
      return sorted;
  }
}
