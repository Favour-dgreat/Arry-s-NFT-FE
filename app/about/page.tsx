"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ShoppingCartIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SeeMore from "@/components/SeeMore";

const socialLinks = [
  { icon: "discord", href: "#", image: "./images/ri_discord-line.png" },
  { icon: "youtube", href: "#", image: "./images/line-md_youtube.png" },
  { icon: "twitter", href: "#", image: "./images/prime_twitter.png" },
  { icon: "instagram", href: "#", image: "./images/mdi_instagram.png" },
];

const navigationButtons = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "TEAM", href: "/team" },
  { label: "ROADMAP", href: "/roadmap" },
];
const nftCollection = [
  {
    id: 1,
    image: "./images/BOWLR-COUNTERS4.png",
  },
  {
    id: 2,
    image: "./images/BOWLR-COUNTERS5.png",
  },
  {
    id: 3,
    image: "./images/BOWLR-COUNTERS6.png",
  },
  {
    id: 4,
    image: "./images/BOWLR-COUNTERS7.png",
  },
  {
    id: 5,
    image: "./images/2.png",
  },
  {
    id: 6,
    image: "./images/4.png",
  },
  {
    id: 7,
    number: "NO 7",
    image: "./images/6.png",
  },
  {
    id: 8,
    number: "NO 8",
    image: "./images/8.png",
  },
];

const AboutPage = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const itemWidth = 240; // reduced from 320
  const scrollSpeed = 3000; // 3 seconds

  // Auto-scroll logic
  useEffect(() => {
    const interval = setInterval(() => {
      if (!scrollRef.current) return;

      const container = scrollRef.current;
      const maxScrollLeft = container.scrollWidth - container.clientWidth;

      if (container.scrollLeft + itemWidth >= maxScrollLeft) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: itemWidth, behavior: "smooth" });
      }
    }, scrollSpeed);

    return () => clearInterval(interval);
  }, []);

  // Manual scroll functions
  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -itemWidth, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: itemWidth, behavior: "smooth" });
  };
  return (
    <div className=" min-h-screen bg-white text-black flex flex-col flex-1 items-center justify-center">
      <main className="flex-1 flex flex-col items-center justify-center px-8 py-16">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-5"
        >
          <h1 className="text-6xl md:text-8xl font-fattip font-black">
            &apos;ARRY&apos;S
          </h1>
          <h2 className="text-center max-w-1xl text-lg leading-relaxed">
            THE ART OF THE MODERN GENTLEMAN
          </h2>
        </motion.div>

        <div className="w-full flex items-center justify-center">
          <Image
            src={"./images/image2.png"}
            alt="Current NFT"
            className="object-cover w-96 h-96"
            width={220}
            height={220}
          />
        </div>

        {/* NFT Showcase */}
        <div className="relative w-full max-w-7xl mx-auto overflow-hidden mb-8">
          <div className="relative overflow-hidden">
            <div
              ref={scrollRef}
              className="flex space-x-4 overflow-x-auto scrollbar-hide px-2 py-4"
              style={{ scrollBehavior: "smooth", whiteSpace: "nowrap" }}
            >
              {nftCollection.map((nft, index) => (
                <div
                  key={index}
                  className="min-w-[240px] h-60 flex-shrink-0 flex items-center justify-center "
                >
                  <Image
                    src={nft.image}
                    alt={`NFT ${index}`}
                    className="object-contain w-full h-full"
                    width={120}
                    height={120}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={scrollLeft}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white text-black rounded-full shadow-md p-2 hover:bg-gray-200 z-10"
            aria-label="Scroll Left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={scrollRight}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white text-black rounded-full shadow-md p-2 hover:bg-gray-200 z-10"
            aria-label="Scroll Right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center max-w-1xl mb-8 text-lg leading-relaxed"
        >
          RE-INVENTING THE BOWLER HAT MEANING AND USAGE FOR THE 21ST CENTURY
        </motion.p>
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h1 className="text-6xl md:text-8xl font-fattip font-black border-4 border-black p-5 mb-2">
            &apos;ARRY&apos;S
          </h1>
          <h2 className="text-center max-w-1xl mb-2 text-lg leading-relaxed">
            Gentlemen + Art + Community
          </h2>
        </motion.div>
        {/* Details */}
        <div className="w-full items-center justify-center p-4">
          <div 
            style={{
              borderRadius: "5px",
              padding: "2px",
              background:
                "linear-gradient(to bottom, #000 20%, rgba(0,0,0,0) 100%)",
            }}
          >
            <div
              className="flex p-20 gap-10 justify-center flex-row items-center"
              style={{ borderRadius: "5px", background: "white" }}
            >
              <div className="flex flex-col items-start">
                <Image
                  src="./images/WEB-NEWW3.png"
                  alt="NFT Image"
                  className="object-contain w-72 h-72 mr-8"
                  width={156}
                  height={156}
                />
              </div>
              <div>
                <p className="text-lg max-w-xl mt-10 leading-relaxed bg-[#1E1E1E] text-white p-4 rounded-lg">
                  We want to use art to fund bringing back the Gentleman. To do
                  this; the Arry’s Bowlr NFT collection was conceived. 
                  <br></br>
                  We are designing 12&apos;000 unique NFT Bowlrs; initially
                  starting with 1001 pre-sale launch July 2025. Followed by 1999
                  in September 2025 Whitelist and then 8500 in December 2025.
                </p>
                <p className="flex text-center justify-center mt-4">
                   <span>
                    <ShoppingCartIcon className="h-5 w-5 " />
                  </span>
                   <a
                    href="/FullSelectionInterface"
                    style={{ textDecoration: "underline" }}
                  >
                     Shop the Collection
                  </a>
                 
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center flex-row items-center">
            <div className="flex text-center flex-col items-start">
              <Image
                src="./images/about1.png"
                alt="NFT Image"
                className="object-contain w-72 h-72 mr-8"
                width={156}
                height={156}
              />
            </div>
            <div className="p-6 space-y-6">
              <SeeMore
                preview={
                  <p>
                    The story of Arry’s Bowlr NFT came about when the
                    co-founders of The Fraternity & Co: Tunde + Sam wanted to
                    retell their story in a post-pandemic world. We struggled
                    for years to raise money from VC’s to fund our business as
                    the following concepts were not understood:
                  </p>
                }
              > <p>
                  <ul>
                    <ol>1. A Gentleman Social Network</ol>
                    <ol>2. Butler APP</ol>
                    <ol>3. Polo shirt with Utilities</ol>
                  </ul>
                  Today in a post-pandemic world, these concepts are now de
                  rigueur; The Manosphere is now a thing: CHATGPT is a reality
                  and NFT’s come with utilities...If you would like to learn
                  more about our original story, please click the link below to
                  see our original offer:
                  <a
                    href="https://www.byinvitation.london"
                    style={{ textDecoration: "underline" }}
                  >
                    www.byinvitation.london
                  </a>
                </p>
              </SeeMore>
            </div>
          </div>
          <div className="flex justify-center flex-row items-center">
            <div className="p-6 space-y-6">
              <SeeMore
                preview={
                  <p>
                    In creating our original offer, we had struggled to package
                    our utilities. We chose fashion, as the Gentleman in a lot
                    of people&apos;s perception was closely related to dress
                    (See Instagram; Gentleman 21m+ followers) and we had an idea
                    that if we could produce the best item of a particular class
                    we would stand out in the market place.
                  </p>
                }
              >
                <p>
                  We hadn&apos;t banked on the cost of getting that particular
                  message out. Instead, our price point (£155) meant people just
                  focused on our shirt being expensive and never really looked
                  into the built-in elements; &apos;network&apos;
                  &apos;rarity&apos; ‘utility&apos; and giving back 20% of our
                  annual income to members to use as they please in facilitating
                  gentlemanliness. This we entirely blame ourselves, we feel it
                  is a result of our failure to succinctly present our offer and
                  struggled to raise more funds to reach more audiences.
                </p>
              </SeeMore>
            </div>
            <div className="flex text-center flex-col items-start">
              <Image
                src="./images/offer.png"
                alt="NFT Image"
                className="object-contain w-72 h-72 mr-8"
                width={156}
                height={156}
              />
            </div>
          </div>
          <div className="flex justify-center flex-row items-center">
            <div className="flex text-center flex-col items-start">
              <Image
                src="./images/utilities.png"
                alt="NFT Image"
                className="object-contain w-72 h-72 mr-8"
                width={156}
                height={156}
              />
            </div>
            <div className="p-6 space-y-6">
              <SeeMore
                preview={
                  <p>
                    The advent of Non-Fungible Tokens and the general
                    understanding of what utility is has gone mainstream and
                    changed the dynamics of understanding. Whereas before, we
                    engaged expensive accountants and Lawyers in creating a
                    limited company to house 12&apos;000 shareholdings to give
                    value, we can do the same thing today by offering just 1 NFT
                    to: each person, because as a collective that 1 NFT will
                    grow in much the same value as a shareholding (Smart
                    Contract).
                  </p>
                }
              >
                <p>
                  This critical mass means today we can re-present our offering
                  through NFT and give added value in each NFT we produce.
                  Please see our original offer:{" "}
                  <a
                    href="https://www.byinvitation.london"
                    style={{ textDecoration: "underline" }}
                  >
                    www.byinvitation.london
                  </a>{" "}
                  to get an in depth idea of what we are building.
                </p>
              </SeeMore>
            </div>
          </div>

          <div className="flex justify-center flex-row items-center">
            <div className="p-6 space-y-6">
              <SeeMore
                preview={
                  <p>
                    400 Legacy Fellows joined us - Thank you - We will now be
                    closing the Legacy Fellowship at 400. Your contribution is
                    forever appreciated and will be memorialized in an updated
                    offering. As every business, we battled to stay alive during
                    and after Covid. For a small start up with only friends and
                    family funding, we struggled to keep our concern going.
                  </p>
                }
              >
                <p>
                  The key cost being the building of the ‘Butler APP’, those
                  Legacy costs have pretty much been taken away by the advent of
                  ChatGPT. Therefore, as fate would have it concepts we were
                  pushing that were thought to be ‘abstract’ or not possible can
                  today be achieved within a 14 month roadmap.
                </p>
              </SeeMore>
            </div>
            <div className="flex text-center flex-col items-start">
              <Image
                src="./images/legacy.png"
                alt="NFT Image"
                className="object-contain w-72 h-72 mr-8"
                width={156}
                height={156}
              />
            </div>
          </div>

          <div className="flex justify-center flex-row items-center">
            <div className="flex text-center flex-col items-start">
              <Image
                src="./images/pivot.png"
                alt="NFT Image"
                className="object-contain w-72 h-72 mr-8"
                width={156}
                height={156}
              />
            </div>
            <div className="p-6 space-y-6">
              <SeeMore
                preview={
                  <p>
                    We have always been inspired by art; see our campaigns “Art
                    of the modern Gentlemen” on
                    www.instagram.com/gentleman.fraternity sadly lost to
                    theft... From inception we have been referencing Rene
                    Magritte&apos;s famed paintings especially &apos;the son of
                    man&apos;s. It speaks to us of the self-realization that
                    everyman could be a better man...
                  </p>
                }
              >
                <p>
                  When we learnt about Non Fungible Tokens there was an ‘Aha’
                  moment, here was the missing link! A tool to give a favorable
                  return with an innovative forward thinking art collection, a
                  way to package our utilities, form a community with a common
                  purpose of spearheading our vision to realization. We have
                  already proved we can deliver a market leading product, and
                  showed foresight and market innovation in its execution. With
                  the advent of NFTs, cryptocurrencies and modern digital
                  technologies, the possibilities are limitless, and we aim to
                  be at the forefront by creating the avatar for the modern
                  Gentleman. Arry’s NFT collection is available to anyone to buy
                  with the understanding that all the funds from it will be
                  going into bringing the Gentleman back through The Fraternity
                  & Co.
                </p>
              </SeeMore>
            </div>
          </div>

          <div className="flex justify-center flex-row items-center">
            <div className="p-6 space-y-6">
              <SeeMore
                preview={
                  <p>
                    The Bowler Hat is the quintessential English export in
                    millinery, literature, arts & films: It represents the
                    iconic Gentleman, worn with pinstripes & Umbrella... It is
                    also the quintessential hat of the world’s most famous
                    Tramp... In art, surrealism, it represents the mystery of
                    the ordinary... It was worn with great style by Liza
                    Minnelli in Cabaret...
                  </p>
                }
              >
                <p>
                  It has been used to represent subversion: A Clockwork Orange..
                  It has been used to great effect to make us all laugh: Laurel
                  & Hardy It is the symbol of the everyman, and today it’s due
                  for a digital transformation to yet again represent a new
                  era...
                </p>
              </SeeMore>
            </div>
            <div className="flex text-center flex-col items-start">
              <Image
                src="./images/Bowlers.png"
                alt="NFT Image"
                className="object-contain w-72 h-72 mr-8"
                width={156}
                height={156}
              />
            </div>
          </div>

          <div className="flex justify-center flex-row items-center">
            <div className="flex text-center flex-col items-start">
              <Image
                src="./images/gentleman.png"
                alt="NFT Image"
                className="object-contain w-72 h-72 mr-8"
                width={156}
                height={156}
              />
            </div>
            <div className="p-6 space-y-6">
              <SeeMore
                preview={
                  <p>
                    Do you have to be a Gentleman to define
                    “Gentlemanliness&apos;? Simple answer: No the thoughts and
                    concepts surrounding the Gentleman are generally known and
                    understood. Arry&apos;ss Bowlr NFT Collection is a gateway
                    vision, bringing the Gentleman and Art together in an
                    avantgarde NFT collection to inspire, engage and pique your
                    interest in our cause.
                  </p>
                }
              >
                <p>
                  Our cause is subversion: A Clockwork Orange.. to raise funding
                  through Arry&apos;ss Bowlr NFT Collection to bring back the
                  Gentleman as set out in our road map: through our
                  pre-conceived brand: &apos;sThe Fraternity & Co&apos;s which
                  digitalises&apos;s the thoughts and concept of the Gentleman
                  into readymade byte sized packages. We are now pivoting to an
                  NFT Bowler Collection, to rebrand the &apos;sGentleman
                  Avatar&apos;s into a Pop Culture Icon of cool, that represents
                  modern &apos;sGentlemanliness&apos;s but also a must have art
                  piece to hang at home, gallery, store or used as street wear
                  or merchandising.
                </p>
              </SeeMore>
            </div>
          </div>

          <div className="flex justify-center flex-row items-center">
            <div className="p-6 space-y-6">
              <SeeMore
                preview={
                  <p>
                    This delves into themes of Expressionism, Deconstructivism,
                    Surrealism, Street, Pop and Modern Digital Art. We have
                    taken inspiration from artists such as:
                    <Image
                      src="./images/artists.png"
                      alt="Artists"
                      className="object-contain w-5/6 h-12 mx-auto mt-4"
                      width={56}
                      height={56}
                    />
                  </p>
                }
              >
                <p>
                  Our new story is going to be told through art. We love art and
                  in bringing our collection together have been influenced by
                  surrealism and in particular Rene Magritte. Alongside Salvador
                  Dali’s Lobster telephone, Rene Magritte’s Bowler Hat is the
                  most enduring....
                </p>
              </SeeMore>
            </div>

            <div className="flex text-center flex-col items-start">
              <Image
                src="./images/presale.png"
                alt="NFT Image"
                className="object-contain w-72 h-72 mr-8"
                width={156}
                height={156}
              />
            </div>
          </div>

          <div className="flex justify-center flex-row items-center">
            <div className="flex text-center flex-col items-start">
              <Image
                src="./images/mission.png"
                alt="NFT Image"
                className="object-contain w-72 h-72 mr-8"
                width={156}
                height={156}
              />
            </div>
            <div className="p-6 space-y-6">
              <SeeMore
                preview={
                  <p>
                    Through buying Arry&apos;ss NFT Bowlr&apos;ss, you help fund
                    the creation of a community that can define what
                    Gentlemanliness should be for the 21st century:
                    <ol>
                      <li> A. Through a Gentleman&apos;ss Algorithm </li>
                      <li> B. Through a Gentleman&apos;s Butler APP </li>
                      <li>
                        {" "}
                        C. The Fraternity & Co - An online Gentleman&apos;ss
                        Fraternity{" "}
                      </li>
                    </ol>
                  </p>
                }
              >
                <p>
                  To build this grand vision requires sizable funding overall,
                  however we have broken that down into manageable costs for
                  each phase of growth… This gives early adopters the
                  opportunity to purchase premium and rare designs at lower
                  price points that will grow in value as we scale.
                </p>
              </SeeMore>
            </div>
          </div>
          <div className="flex justify-center flex-row items-center">
            <div className="p-6 space-y-6">
              <SeeMore
                preview={
                  <p>
                    In Gentleman&apos;ss Algorithm: The Gentleman’s algorithm
                    maybe the single biggest evolution to Men’s lifestyle in the
                    21st century. Currently, the Gentleman is used to sell
                    everything from aftershave to Cars; it is the epitome of
                    manhood. Yet there are less and less Gentlemen and even more
                    tragic, men aren’t interested in being Gentlemen. In a cost
                    benefits analysis it simply ... doesn’t reward them.
                  </p>
                }
              >
                <p>
                  This is exactly what the algorithm we are developing does. It
                  rewards the ‘everyman’ for being a Gentleman. - the more
                  gentlemanly a fellow is, the more premium utilities they will
                  be eligible for starting with GENTLEMAN&apos;sS QUALITY OF
                  LIFE which offers AN/PRDBO&apos;ss (Access, Networking,
                  Privileges, Rewards, Discounts, Benefits & Offers), PRIVY
                  EVENTS and KEYS TO LONDON. The ‘IP’ we are building is what
                  makes our offer remarkable, enabling members to constantly
                  improve and adjust their quality of life, increase their
                  sphere of influence, and pursue self-development.
                </p>
              </SeeMore>
            </div>
            <div className="flex text-center flex-col items-start">
              <Image
                src="./images/algorithm.png"
                alt="NFT Image"
                className="object-contain w-72 h-72 mr-8"
                width={156}
                height={156}
              />
            </div>
          </div>
          <div className="flex justify-center flex-row items-center">
            <div className="flex text-center flex-col items-start">
              <Image
                src="./images/butlergpt.png"
                alt="NFT Image"
                className="object-contain w-72 h-72 mr-8"
                width={156}
                height={156}
              />
            </div>
            <div className="p-6 space-y-6">
              <SeeMore
                preview={
                  <p>
                    The aim of the Butler App is to be the best men’s lifestyle
                    assistant in the market, and will be delivered in 4 phases.
                    (1) Westminster (2) Eaton (3) Oxford (4) Cambridge Each
                    phase will be tested through Founding Fellows and thereafter
                    Fellows, allowing each member to leave its mark on the
                    algorithm.
                  </p>
                }
              >
                <p>
                  We are developing a 21st Century Butler App, like current
                  market assistant apps but with more joie de vivre. The point
                  of having a Butler is that he is your keys to any city. The
                  Butler understands you. It knows what you do, it knows what
                  you like, it knows the people you know, it is aware of your
                  habits, and is confidential to you. The Butler App will help
                  plan your life, and manage your AN/PRDBO&apos;ss. The
                  lifestyle concierge service costs £1 per request and is a
                  modern Yellow Pages, that aims to save you time, improve your
                  quality of life, delegate life tasks to an expert, provide
                  insider knowledge, tips, and a recommendation service, upon
                  request. Founding Fellows will be requested to help
                  &apos;siron out the kinks&apos;s by providing feedback before
                  we release more invites for new Fellows.
                </p>
              </SeeMore>
            </div>
          </div>

          <div className="flex justify-center flex-row items-center">
            <div className="p-6 space-y-6">
              <SeeMore
                preview={
                  <p>
                    Our journey with The Fraternity & Co begins as gentleman
                    apprentices, and ends with the acknowledgement of our peers,
                    through participation, engagement and the reputation
                    algorithm: as a Gentleman. The Fraternity & Co is a
                    by-invitation social network that combines 2 venerable
                    traditions: The Gentleman & Fraternity.
                  </p>
                }
              >
                <p>
                  A new premium utility service, that we have titled The
                  Gentleman&apos;ss Quality of Life (GQOL), aims to provide
                  members the following utilities: Reputation, AN/PRDBOs, Keys
                  to London, Privy Events, Butler, Concierge, and Sartorial &
                  Product Lines, and AN/PRDBOs. Brought to you through a
                  platform we describe as Technological Luxury, this denotes
                  mixing old world luxury with new world technologies.
                </p>
              </SeeMore>
            </div>
            <div className="flex text-center flex-col items-start">
              <Image
                src="./images/fraternity.png"
                alt="NFT Image"
                className="object-contain w-72 h-72 mr-8"
                width={156}
                height={156}
              />
            </div>
          </div>

          <div className="flex justify-center flex-row items-center">
            <div className="flex text-center flex-col items-start">
              <Image
                src="./images/keystolondon.png"
                alt="NFT Image"
                className="object-contain w-72 h-72 mr-8"
                width={156}
                height={156}
              />
            </div>
            <div className="p-6 space-y-6">
              <SeeMore
                preview={
                  <p>
                    The Fraternity & Co&apos;ss base is London; the original
                    home of the &apos;sGentleman&apos;s and the home of the
                    earliest key Gentleman clubs. This gives us historical
                    precedence and market credibility to gain critical mass
                    globally. It is also where we Beta-test our city offers,
                    starting with ‘Keys To London’ service before we take it
                    global, which is ... essentially a quality-of-life index,
                    managed by your Butler App (Beta Summer 2026) and also
                    through our concierge services. KEYS TO LONDON (2026) will
                    provide daily premium utilities: Breakfast Club (7am-12pm),
                    Sir Lunch a Lot (12pm-6pm), Supper Club (6pm-12am), and Le
                    Bon Viveur (24hrs).
                  </p>
                }
              >
                <p>
                  These premium utilities are all free except for Le Bon Viveur
                  which is for customized requests. Whatever you seek in London
                  will be listed in a personalized and context-aware manner
                  through the Butler App. As appropriate you will be informed of
                  localized AN/PRDBOs, PRIVY EVENTS, weekly pop-ups and
                  meet-ups. The idea is to eventually give our members ‘KEYS TO
                  ANY CITY’ having utilizing London as our test bed. Finally we
                  have been in talks to open a physical location in Central
                  London and this will be re-explored with the membership after
                  we reach 12&apos;s000 members.
                </p>
              </SeeMore>
            </div>
          </div>

          <div className="flex justify-center flex-row items-center">
            <div className="p-6 space-y-6">
              <SeeMore
                preview={
                  <p>
                    It is the responsibility of a Gentleman to lead an
                    interesting life” Our first services are PRIVY EVENTS;
                    therefore we aim to throw the best parties, pop-ups and
                    events, on a weekly and monthly basis in London&apos;ss
                    finest, underutilized real estate – part of our
                    GENTLEMAN&apos;sS QUALITY OF LIFE service. Giving fellows
                    ... essentially a quality-of-life index, managed by your
                    Butler App (Beta Summer 2026) and also through our concierge
                    services. KEYS TO LONDON (2026) will provide daily premium
                    utilities: Breakfast Club (7am-12pm), Sir Lunch a Lot
                    (12pm-6pm), Supper Club (6pm-12am), and Le Bon Viveur
                    (24hrs).
                  </p>
                }
              >
                <p>
                  These premium utilities are all free except for Le Bon Viveur
                  which is for customized requests. Whatever you seek in London
                  will be listed in a personalized and context-aware manner
                  through the Butler readymade meet-ups, evenings and events
                  specifically crafted for your consummate pleasure and curated
                  for you by your Butler. In 2026, we plan to stage our first
                  big party. We have chosen one of central; London’s most
                  prestigious addresses to throw ‘The Pyjama party of Pyjama
                  Parties’ and you are invited to show up in your best PJs... We
                  plan to be a fun Gentleman’s Fraternity and from May to
                  September 2026, we plan to have a stand at all key English
                  social season events: Polo in the park, Royal Ascot,
                  Wimbledon, Henley, Cowdray Park polo, Cowes, Goodwood, British
                  Grand Prix etc. Fellows will be invited to join us en-Legacy
                  or without.
                </p>
              </SeeMore>
            </div>
            <div className="flex text-center flex-col items-start">
              <Image
                src="./images/parrys.png"
                alt="NFT Image"
                className="object-contain w-72 h-72 mr-8"
                width={156}
                height={156}
              />
            </div>
          </div>

          <div className="flex justify-center flex-row items-center">
            <div className="flex text-center flex-col items-start">
              <Image
                src="./images/12houses.png"
                alt="NFT Image"
                className="object-contain w-72 h-72 mr-8"
                width={156}
                height={156}
              />
            </div>
            <div className="p-6 space-y-6">
              <SeeMore
                preview={
                  <p>
                    12 houses were created to enable greater freedoms for
                    members, to get together under smaller umbrella groups to
                    vote for their own representatives and causes. Houses will
                    be encouraged to choose their own logos, causes,
                    specializations and enter in-house rivalries and
                    competitions in order to foster lifelong friendships and
                    social capital.
                  </p>
                }
              >
                <p>
                  Approximately 10% of the memberships annual revenue will be
                  given back to bring the houses to life and to hold events. 12
                  Houses based on the legendary 12 Knights. All new Fellows will
                  be randomly placed in one 12 houses by AI. Fosters Traditions,
                  Fraternity, Allegiance, Esprit de Corps. Competitions, Clubs,
                  Sportsmanship, Charity, Volunteering and Mentorship.
                  You&apos;sll gain access to a vast network of like-minded
                  individuals (Gentlemen), exposure to leading edge information,
                  general advice, sporting & gaming clubs, high quality events,
                  the latest tools and resources, and opportunities to interact
                  with peers & chapters worldwide.
                </p>
              </SeeMore>
            </div>
          </div>

          <div className="flex justify-center flex-row items-center">
            <div className="p-6 space-y-6">
              <SeeMore
                preview={
                  <p>
                    Masculinity needs a new definition of cool, the bad boy has
                    been over eulogized and good men ignored. Social media is
                    amplifying the spread of cynical marketing where negativity
                    is easier to sell than positivity. Men in the 21st century:
                    Who we are? What do we want to become? How can manliness be
                    less stigmatized? Our business focuses on men and their role
                    in modern societies i.e. how can we become better, improve
                    ourselves, lead a better life, give back and make the world
                    a better place.
                  </p>
                }
              >
                <p>
                  Historically, we read and aspire to be different men;
                  warriors, philosophers, scientists, artists, athletes,
                  entrepreneurs and Gentlemen. Of all the Gentlemen is the least
                  developed and improbable to justify in modern society, that is
                  till the advent of technology. We live in a world where bad
                  behaviour, loucheness is celebrated and rewarded, what if good
                  behaviour and gentlemanliness was equally rewarded and made
                  cool - that is the technical premise behind The Fraternity &
                  Co.
                </p>
              </SeeMore>
            </div>

            <div className="flex text-center flex-col items-start">
              <Image
                src="./images/maleconsumer.png"
                alt="NFT Image"
                className="object-contain w-72 h-72 mr-8"
                width={156}
                height={156}
              />
            </div>
          </div>

          <div className="flex justify-center flex-row items-center">
            <div className="flex text-center flex-col items-start">
              <Image
                src="./images/reputation.png"
                alt="NFT Image"
                className="object-contain w-72 h-72 mr-8"
                width={156}
                height={156}
              />
            </div>
            <div className="p-6 space-y-6">
              <SeeMore
                preview={
                  <p>
                    Social classification is in our human nature and personal
                    reputation has been a part of making socio-economic
                    decisions for thousands of years. We are moving towards a
                    “socialstructed” world: a new economy where your web
                    influence and social connections will matter just as much as
                    the money in your bank account. This &apos;sreputation
                    economy&apos;s is ... already happening, where the
                    individual social graph — the social data set about each
                    person — determines one&apos;ss value in society, access to
                    services, and employability. In this economy, reputation
                    becomes currency:
                  </p>
                }
              >
                <p>
                  see modern day &apos;sInfluencers&apos;s social media. A.I. is
                  here and we believe that reputation is about to become a
                  capital asset. The Fraternity & Co aims to be at the fore
                  front of the reputation economy through creating the algorithm
                  for 21st Century Gentleman.
                </p>
              </SeeMore>
            </div>
          </div>
          <div className="flex justify-center flex-row items-center">
            <div className="p-6 space-y-6">
              <SeeMore
                preview={
                  <p>
                    The word &apos;sGentleman&apos;s is widely used and renown
                    worldwide, and in the literal sense has no ownership, no
                    clear interpretation but generates billions in revenues
                    annually for those that chose to capitalize on it. Today,
                    there are 21.3 million people interested in posts about the
                    Gentleman on the top 200 Gentleman&apos;ss Instagram Pages.
                    These followers actively engage and buy into brands and ...
                    influencers that use the term, Gentleman; major luxury
                    manufacturers, engage in this space through sponsorship,
                    advertising and promotions, spending millions actively
                    promoting their luxury goods.
                  </p>
                }
              >
                <p>
                  The word &apos;sGentleman&apos;s is widely used and renown
                  worldwide, and in the literal sense has no ownership, no clear
                  interpretation but generates billions in revenues annually for
                  those that chose to capitalize on it. Today, there are 21.3
                  million people interested in posts about the Gentleman on the
                  top 200 Gentleman&apos;ss Instagram Pages. These followers
                  actively engage and buy into brands and ... influencers that
                  use the term, Gentleman; major luxury manufacturers, engage in
                  this space through sponsorship, advertising and promotions,
                  spending millions actively promoting their luxury goods.
                </p>
              </SeeMore>
            </div>

            <div className="flex text-center flex-col items-start">
              <Image
                src="./images/gentleman.png"
                alt="NFT Image"
                className="object-contain w-72 h-72 mr-8"
                width={156}
                height={156}
              />
            </div>
          </div>

          <div className="flex justify-center flex-row items-center">
            <div className="flex text-center flex-col items-start">
              <Image
                src="./images/timeline.gif"
                alt="NFT Image"
                className="object-contain w-72 h-72 mr-8"
                width={156}
                height={156}
              />
            </div>
            <div className="p-6 space-y-6">
              <SeeMore
                preview={
                  <p>
                    We will initially be launching with 1500 NFTS Bowler supreme
                    collection July 2025. Administration will be put in place
                    for growth and prepare for marketing the next 3 collections.
                    Thereafter, the ‘1001&apos;s will be launched and presented
                    in September 2025.{" "}
                  </p>
                }
              >
                <p>
                  The third collection: 1999 (Surreal Collection) December 2025
                  The final collection: (AI Collection) January 2026 will grow
                  the membership to 12&apos;s000 and will enable us to build out
                  the first working app.{" "}
                  <a href="/Roadmap" style={{ textDecoration: "underline" }}>
                    (See Roadmap)
                  </a>{" "}
                  . We will begin to offer our first services and the
                  &apos;sButler&apos;s will become omni present.
                </p>
              </SeeMore>
            </div>
          </div>
        </div>
      </main>
      {/* Navigation Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="flex justify-center gap-4 mb-8"
      >
        {navigationButtons.map((nav) => (
          <Link key={nav.label} href={nav.href}>
            <Button
              variant="outline"
              className="px-6 py-2 rounded-none bg-white border border-black text-black font-bold border-solid shadow-[20px_-8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-150 mx-4"
            >
              {nav.label}
            </Button>
          </Link>
        ))}
      </motion.div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex gap-4 mb-12"
      >
        {socialLinks.map((social) => (
          <Link key={social.icon} href={social.href}>
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center hover:scale-110 transition-transform">
              <Image
                src={social.image}
                alt={social.icon}
                width={24}
                height={24}
                className="w-6 h-6 object-contain"
              />
            </div>
          </Link>
        ))}
      </motion.div>

      {/* Footer */}
      <footer className="flex justify-between  items-center text-sm">
        <div className="flex-1 flex justify-center items-center">
          <p>© 2025 Arrys NFT by Artheistlabs. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;
