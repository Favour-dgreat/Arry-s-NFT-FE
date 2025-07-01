// Do NOT use "use client" here

import { nftsByCollection } from '../../../lib/data';
import NFTDetailsClient from '../../../components/NFTDetailsClient';
import Footer from '@/components/Layout/Footer';

export default function NFTDetailsPage({ params }: { params: { id: string } }) {
  const id = params.id;
  const nftData = Object.entries(nftsByCollection).reduce<{
    nft: any;
    collection: string;
    series: any[];
  } | null>((acc, [collectionName, nfts]) => {
    const nft = nfts.find(n => n.id === id);
    if (nft) {
      return {
        nft,
        collection: collectionName,
        series: nfts
      };
    }
    return acc;
  }, null);

  if (!nftData) {
    return <div className="text-center py-20">NFT not found</div>;
  }

  return (
    <>
      <NFTDetailsClient {...nftData} />
      <Footer />
    </>
  );
  
}

export async function generateStaticParams() {
  const ids = Object.values(nftsByCollection)
    .flat()
    .map((nft) => ({ id: nft.id }));
  return ids;
}
