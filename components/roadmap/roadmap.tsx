'use client';

import { Badge } from '@/components/ui/badge';
import  NavBar  from '@/components/Layout/Navbar2';

interface Phase {
  number: number;
  title: string;
  status: 'completed' | 'current' | 'upcoming';
  items: string[];
  expectedDate: string;
}

const phases: Phase[] = [
  {
    number: 1,
    title: 'Launch & Community Building',
    status: 'completed',
    items: [
      'Initial release of 100 preview NFTs',
      'Website launch with gallery view',
      'Discord community establishment',
      'Marketing campaign kickoff',
    ],
    expectedDate: 'Q1 2025',
  },
  {
    number: 2,
    title: 'Full Collection Release',
    status: 'current',
    items: [
      'Release of all 1,000 NFTs across 10 series',
      'Implementation of selection and minting system',
      'Exclusive community events for collectors',
      'Artist spotlight series',
    ],
    expectedDate: 'Q2 2025',
  },
  {
    number: 3,
    title: 'Expansion & Partnerships',
    status: 'upcoming',
    items: [
      'Partnerships with established galleries and artists',
      'Virtual exhibitions in the metaverse',
      'Limited edition physical prints for NFT holders',
      'Collector rewards program',
    ],
    expectedDate: 'Q3 2025',
  },
  {
    number: 4,
    title: 'Interactive Experiences',
    status: 'upcoming',
    items: [
      'Launch of interactive art experiences',
      'AR/VR gallery integration',
      'Community-curated exhibitions',
      'Collaborative art projects',
    ],
    expectedDate: 'Q4 2025',
  },
  {
    number: 5,
    title: 'Global Expansion',
    status: 'upcoming',
    items: [
      'International artist residency program',
      'Multi-language platform support',
      'Regional community hubs',
      'Global NFT art festival',
    ],
    expectedDate: 'Q1 2026',
  },
];

export function RoadmapTimeline() {

  return (
    <div className="max-w-3xl mx-auto relative">
    <NavBar discordConnected={false} onOpenModal={function (): void {
              throw new Error('Function not implemented.');
          } } />

      {/* Vertical line */}
      <div className="absolute left-[28px] top-0 bottom-0 w-px bg-gray-800" />
      
      <div className="space-y-16">
        {phases.map((phase) => (
          <div key={phase.number} className="relative">
            {/* Phase circle */}
            <div className={`absolute left-0 w-14 h-14 rounded-full flex items-center justify-center
            
              ${phase.status === 'completed' ? 'bg-[#FFFFFF]' :
                phase.status === 'current' ? 'bg-[#8E8E93]' : 'bg-gray-700'}`}
                style={{padding:"2px"}} >
              <span className="text-xs font-medium text-black">Phase {phase.number}</span>
            </div>
            
            {/* Content box */}
            <div className="ml-20 rounded-lg p-6"
              style={{  background: 'linear-gradient(180deg, #262E30 0%, #060C0C00 100%)', borderRadius: "10px" }}>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold py-2">{phase.title}</h3>
                <Badge
                    style={{
                        padding: "10px",
                        boxShadow: "0 2px 8px 0 rgba(0,0,0,0.25)", // Added shadow for boldness
                    }}
                    className={`
                        ${phase.status === 'completed' ? 'bg-[#22C55E33] text-green-500' :
                            phase.status === 'current' ? 'bg-[#7676801F] text-white' :
                            'bg-[#374151] text-[#9CA3AF]'}
                    `}
                >
                    {phase.status.charAt(0).toUpperCase() + phase.status.slice(1)}
                </Badge>
              </div>
              
              <ul className="space-y-2 mb-4">
                {phase.items.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#C084FC] mr-2">•</span>
                    <span className="text-gray-400">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="text-sm text-[#6B7280]">
                Expected: {phase.expectedDate}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}