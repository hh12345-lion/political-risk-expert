/**
 * Photographs are stored locally in greyscale; BrandImage adds the colour wash.
 * Attribution lives on /image-credits.
 */

export const images = {
  peacePalace: {
    src: "/images/site/peace-palace.webp",
    alt: "The Peace Palace in The Hague at night",
  },
  containerPort: {
    src: "/images/site/container-port.webp",
    alt: "Aerial view of cranes and stacked containers at a port terminal",
  },
  openPitMine: {
    src: "/images/site/open-pit-mine.webp",
    alt: "Aerial view of the terraces of an open-pit copper mine",
  },
} as const;

export const imageCredits = [
  {
    title: "Peace Palace by Night",
    author: "Lybil BER",
    license: "CC BY-SA 4.0",
    source: "https://commons.wikimedia.org/wiki/File:Peace_Palace_by_Night.jpg",
  },
  {
    title: "Aerial view of shipping containers, and big container cranes at Tacoma's container port -a",
    author: "Brian Harris",
    license: "Public domain",
    source: "https://commons.wikimedia.org/wiki/File:Aerial_view_of_shipping_containers,_and_big_container_cranes_at_Tacoma%27s_container_port_-a.jpg",
  },
  {
    title: "KENNECOTT MINE IS THE LARGEST OPEN-PIT COPPER OPERATION IN THE WORLD",
    author: "Bruce McAllister",
    license: "Public domain",
    source: "https://commons.wikimedia.org/wiki/File:KENNECOTT_MINE_IS_THE_LARGEST_OPEN-PIT_COPPER_OPERATION_IN_THE_WORLD_-_NARA_-_544789.jpg",
  },
] as const;
