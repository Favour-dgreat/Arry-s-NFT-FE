import { NFT, Collection } from './types';

export const featuredNFT: NFT = {
  id: 'featured-001',
  title: 'NUMBERS #01',
  description: 'LOREM IPSUM NUMBERED ONE GENTLEMAN NUMBER ONE',
  series: 'Numbers Series',
  image: 'https://images.pexels.com/photos/2832382/pexels-photo-2832382.jpeg',
  currentBid: 0.234,
  level: 'v2 level',
  subtitle: 'GENTLEMANO NUMERO UNO',
 
};

export const topCollections: Collection[] = [
  {
    id: 'col-001',
    name: 'Numbers Collection',
    image: 'https://images.pexels.com/photos/2832382/pexels-photo-2832382.jpeg',
    volume: 25430,
    change: 36.97,
  },
  {
    id: 'col-002',
    name: 'Light Bulb Collection',
    image: 'https://images.pexels.com/photos/2372978/pexels-photo-2372978.jpeg',
    volume: 18240,
    change: 21.53,
  },
  {
    id: 'col-003',
    name: 'Deconstruct Collection',
    image: 'https://images.pexels.com/photos/2760242/pexels-photo-2760242.jpeg',
    volume: 15670,
    change: 12.89,
  },
  {
    id: 'col-004',
    name: 'The Great Dictator',
    image: 'https://images.pexels.com/photos/3222685/pexels-photo-3222685.jpeg',
    volume: 9850,
    change: 6.25,
  }
];

export const nftsByCollection: Record<string, NFT[]> = {
  'Numbers Series': [
    {
      id: "1",
      image: "/images/NFT1.png", // Replace with your actual image
      title: "EXPRESSIONISM NUMERO UNO",
      subtitle: "GENTLEMANO NUMERO UNO",
      level: "v2 level",
      currentBid: 0.234,
      description: '',
      series: '',
      
    },
  {
    id: "2",
    image: "/images/2.png", // Replace with your actual image
    title: "EXPRESSIONISM NUMERO DOS",
    subtitle: "GENTLEMANO NUMERO DOS",
    level: "v2 level",
    currentBid: 0.234,
    description: '',
    series: '',
  },
  {
    id: "3",
    image: "/images/art3.png", // Replace with your actual image
    title: "EXPRESSIONISM NUMERO TRES",
    subtitle: "GENTLEMANO NUMERO TRES",
    level: "v2 level",
    currentBid: 0.234,
    description: '',  
    series: '',
  },
  {
    id: "4",
    image: "/images/4.png", // Replace with your actual image
    title: "EXPRESSIONISM NUMERO CUATRO",
    subtitle: "GENTLEMANO NUMERO CUATRO",
    level: "v2 level",
    currentBid: 0.234,
    description: '',
    series: '',
  },
  {
    id: "5",
    image: "/images/art5.png", // Replace with your actual image
    title: "EXPRESSIONISM NUMERO CINCO",
    subtitle: "GENTLEMANO NUMERO CINCO", 
    level: "v2 level",
    currentBid: 0.234,
    description: '',
    series: '',
  },
  {
    id: "6",
    image: "/images/6.png", // Replace with your actual image
    title: "EXPRESSIONISM NUMERO SEIS",
    subtitle: "GENTLEMANO NUMERO SEIS",
    level: "v2 level",
    currentBid: 0.234,
    description: '',
    series: '',
  },
    {
    id: "7",
    image: "/images/art7.png", // Replace with your actual image
    title: "EXPRESSIONISM NUMERO SEITE",
    subtitle: "GENTLEMANO NUMERO SEITE",
    level: "v2 level",
    currentBid: 0.234,
    description: '',
    series: '',
  },
    {
    id: "8",
    image: "/images/8.png", // Replace with your actual image
    title: "EXPRESSIONISM NUMERO OCHO",
    subtitle: "GENTLEMANO NUMERO OCHO",
    level: "v2 level",
    currentBid: 0.234,
    description: '',
    series: '',
  },
    {
    id: "9",
    image: "/images/9.png", // Replace with your actual image
    title: "EXPRESSIONISM NUMERO NUEVE",
    subtitle: "GENTLEMANO NUMERO NUEVE",
    level: "v2 level",
    currentBid: 0.234,
    description: '',
    series: '',
  },
    {
    id: "10",
    image: "/images/10.png", // Replace with your actual image
    title: "EXPRESSIONISM NUMERO DIEZ",
    subtitle: "GENTLEMANO NUMERO DIEZ",
    level: "v2 level",
    currentBid: 0.234,
    description: '',
    series: '',
  },
        {
    id: "11",
    image: "/images/11.png", // Replace with your actual image
    title: "EXPRESSIONISM NUMERO ONCE",
    subtitle: "GENTLEMANO NUMERO ONCE",
    level: "v2 level",
    currentBid: 0.234,
    description: '',
    series: '',
  },

  ],
  'Light Bulb Moment Series': [
    {
      id: 'lb-001',
       image: "/images/light1.png", // Replace with your actual image
    title: "EXPRESSIONISM NUMERO ONCE",
    subtitle: "GENTLEMANO NUMERO ONCE",
    level: "v2 level",
    currentBid: 0.234,
    description: '',
    series: '',

    },
    {
      id: 'lb-002',
       image: "/images/light2.png", // Replace with your actual image
    title: "EXPRESSIONISM NUMERO ONCE",
    subtitle: "GENTLEMANO NUMERO ONCE",
    level: "v2 level",
    currentBid: 0.234,
    description: '',
    series: 'Light Bulb Moment Series',
    },
    {  
    id: 'lb-003',
    image: "/images/light3.png", // Replace with your actual image
    title: "EXPRESSIONISM NUMERO ONCE",
    subtitle: "GENTLEMANO NUMERO ONCE",
    level: "v2 level",
    description: 'LIGHT BULB MOMENT #3',
    series: 'Light Bulb Moment Series',
    currentBid: 0.234,
    },
    {  
    id: 'lb-004',
    image: "/images/light4.png", // Replace with your actual image
    title: "EXPRESSIONISM NUMERO ONCE",
    subtitle: "GENTLEMANO NUMERO ONCE",
    level: "v2 level",
    description: 'LIGHT BULB MOMENT #3',
    series: 'Light Bulb Moment Series',
    currentBid: 0.234,
    },
    {  
    id: 'lb-005',
    image: "/images/light5.png", // Replace with your actual image
    title: "EXPRESSIONISM NUMERO ONCE",
    subtitle: "GENTLEMANO NUMERO ONCE",
    level: "v2 level",
    description: 'LIGHT BULB MOMENT #3',
    series: 'Light Bulb Moment Series',
    currentBid: 0.234,
    },
      {  
    id: 'lb-006',
    image: "/images/light6.png", // Replace with your actual image
    title: "EXPRESSIONISM NUMERO ONCE",
    subtitle: "GENTLEMANO NUMERO ONCE",
    level: "v2 level",
    description: 'LIGHT BULB MOMENT #3',
    series: 'Light Bulb Moment Series',
    currentBid: 0.234,
    },
    {  
    id: 'lb-007',
    image: "/images/light7.png", // Replace with your actual image
    title: "EXPRESSIONISM NUMERO ONCE",
    subtitle: "GENTLEMANO NUMERO ONCE",
    level: "v2 level",
    description: 'LIGHT BULB MOMENT #3',
    series: 'Light Bulb Moment Series',
    currentBid: 0.234,
    },
     {  
    id: 'lb-008',
    image: "/images/light8.png", // Replace with your actual image
    title: "EXPRESSIONISM NUMERO ONCE",
    subtitle: "GENTLEMANO NUMERO ONCE",
    level: "v2 level",
    description: 'LIGHT BULB MOMENT #3',
    series: 'Light Bulb Moment Series',
    currentBid: 0.234,
    },
     {  
    id: 'lb-009',
    image: "/images/light9.png", // Replace with your actual image
    title: "EXPRESSIONISM NUMERO ONCE",
    subtitle: "GENTLEMANO NUMERO ONCE",
    level: "v2 level",
    description: 'LIGHT BULB MOMENT #3',
    series: 'Light Bulb Moment Series',
    currentBid: 0.234,
    },
     {  
    id: 'lb-0010',
    image: "/images/light10.png", // Replace with your actual image
    title: "EXPRESSIONISM NUMERO ONCE",
    subtitle: "GENTLEMANO NUMERO ONCE",
    level: "v2 level",
    description: 'LIGHT BULB MOMENT #3',
    series: 'Light Bulb Moment Series',
    currentBid: 0.234,
    },
     {  
    id: 'lb-0011',
    image: "/images/light11.png", // Replace with your actual image
    title: "EXPRESSIONISM NUMERO ONCE",
    subtitle: "GENTLEMANO NUMERO ONCE",
    level: "v2 level",
    description: 'LIGHT BULB MOMENT #3',
    series: 'Light Bulb Moment Series',
    currentBid: 0.234,
    },
     {  
    id: 'lb-0012',
    image: "/images/light12.png", // Replace with your actual image
    title: "EXPRESSIONISM NUMERO ONCE",
    subtitle: "GENTLEMANO NUMERO ONCE",
    level: "v2 level",
    description: 'LIGHT BULB MOMENT #3',
    series: 'Light Bulb Moment Series',
    currentBid: 0.234,
    },

  ],
  'Deconstruct Series': [
    {
      id: 'dec-001',
      title: 'CHAPLIN\'S PARADOX - 1',
      description: 'A BOWLER PERSONIFIED',
      series: 'Deconstruct Series',
      image: '/images/de1.png',
      currentBid: 0.234,
      level: "v3level",
      subtitle: "v3 subtitle", 
    },
    {
      id: 'dec-002',
      title: 'CHAPLINS PARADOX - 2',
      description: 'A BOWLER PERSONIFIED',
      series: 'Deconstruct Series',
      image: '/images/de2.png',
      currentBid: 0.221,
      level: '',
      subtitle: '',
    },
    {
      id: 'dec-003',
      title: 'CHAPLINS PARADOX - 3',
      description: 'A BOWLER PERSONIFIED',
      series: 'Deconstruct Series',
      image: '/images/de3.png',
      currentBid: 0.219,
      level: '',
      subtitle: '',
    },
  ],
  'The Great Dictator Speech': [
    {
      id: 'dict-001',
      title: 'NUMBER #125',
      description: 'THE GREAT SMALL DETAIL FROM THE GREAT DICTATOR',
      series: 'The Great Dictator Speech',
      image: 'https://images.pexels.com/photos/2110937/pexels-photo-2110937.jpeg',
      currentBid: 0.234,
      level: '',
      subtitle: '',
    },
    {
      id: 'dict-002',
      title: 'NUMBER #126',
      description: 'THE GREAT SMALL DETAIL FROM THE GREAT DICTATOR',
      series: 'The Great Dictator Speech',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
      currentBid: 0.221,
      level: '',
      subtitle: '',
    },
    {
      id: 'dict-003',
      title: 'NUMBER #127',
      description: 'THE GREAT SMALL DETAIL FROM THE GREAT DICTATOR',
      series: 'The Great Dictator Speech',
      image: 'https://images.pexels.com/photos/2510428/pexels-photo-2510428.jpeg',
      currentBid: 0.219,
      level: '',
      subtitle: '',

    },
  ],
  'Anonymous Series': [
    {
      id: 'anon-001',
      title: 'ANONYMOUS GENT 1',
      description: 'GENTLEMAN MODE',
      series: 'Anonymous Series',
      image: 'https://images.pexels.com/photos/6447217/pexels-photo-6447217.jpeg',
      currentBid: 0.234,
      level: '',
      subtitle: '',
    },
    {
      id: 'anon-002',
      title: 'ANONYMOUS GENT 2',
      description: 'GENTLEMAN MODE',
      series: 'Anonymous Series',
      image: 'https://images.pexels.com/photos/6447154/pexels-photo-6447154.jpeg',
      currentBid: 0.221,
      level: '',
      subtitle: '',
    },
    {
      id: 'anon-003',
      title: 'ANONYMOUS GENT 3',
      description: 'GENTLEMAN MODE',
      series: 'Anonymous Series',
      image: 'https://images.pexels.com/photos/6447137/pexels-photo-6447137.jpeg',
      currentBid: 0.219,
      level: '',
      subtitle: '',
    },
  ],
};

export const allCollections = Object.keys(nftsByCollection);