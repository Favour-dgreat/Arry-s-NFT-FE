import Footer from '@/components/Layout/Footer';
import { RoadmapTimeline } from '@/components/roadmap/RoadmapTimeline';
import Image from "next/image";

export default function RoadmapPage() {
  return (
    <div className="min-h-screen bg-black py-40 px-6">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold mb-4 font-fattip">ROADMAP</h1>
        <p className="text-gray-[#F2F2F7] text-xl mb-8">
          Our vision for the future of Arry&apos;s NFT and the milestones we aim to achieve.
        </p>
        <div className="flex text-center justify-center items-center">
                      <Image
                        src="./images/timeline.gif"
                        alt="NFT Image"
                        className="object-contain w-72 h-72 mr-8"
                        width={156}
                        height={156}
                      />
                    </div>
      </div>
      <RoadmapTimeline />
    <Footer />
    </div>
  );
}