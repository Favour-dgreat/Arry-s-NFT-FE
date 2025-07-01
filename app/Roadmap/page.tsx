import Footer from '@/components/Layout/Footer';
import { RoadmapTimeline } from '@/components/roadmap/RoadmapTimeline';

export default function RoadmapPage() {
  return (
    <div className="min-h-screen bg-black py-40 px-6">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold mb-4 font-fattip">ROADMAP</h1>
        <p className="text-gray-[#F2F2F7] text-xl mb-8">
          Our vision for the future of Arry&apos;s NFT and the milestones we aim to achieve.
        </p>
      </div>
      <RoadmapTimeline />
    <Footer />
    </div>
  );
}