export interface NFT {
  id: string;
  title: string;
  description: string;
  series: string;
  image: string;
  subtitle: string;
  level: string;
  currentBid: number;
}

export interface Collection {
  id: string;
  name: string;
  image: string;
  volume: number;
  change: number;
}