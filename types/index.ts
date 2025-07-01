export interface NFTItem {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  level: string;
  currentBid: number;
  description: string;
  price: number;
}
export interface Collection {
  name: string;
  items: NFTItem[];
}