const { MODE } = require("./blendMode.js");
const description =
  "This is the description of your NFT project, remember to replace this";
const baseUri = "ipfs://QmNfPMWLPTEbFpBtPFy4wkYEHRVWcz8dzjziTcPbebzF53";

const layerConfigurations = [
  {
    growEditionSizeTo: 10, // Example to show you the inifite amount of possibilities
    layersOrder: [
      { name: "1-background" },
      { name: "2-extra" },
      { name: "3-character" },
      { name: "4-prop" },
      { name: "5-expression" },
      { name: "6-face" },
    ],
  },
  {
    growEditionSizeTo: 25, // 15 more like this, added eyewear
    layersOrder: [
      { name: "1-background" },
      { name: "2-extra" },
      { name: "3-character" },
      { name: "4-prop" },
      { name: "5-expression" },
      { name: "6-face" },
      { name: "7-eyewear" },
    ],
  },
  {
    growEditionSizeTo: 65, // 40 more, added headpiece
    layersOrder: [
      { name: "1-background" },
      { name: "2-extra" },
      { name: "3-character" },
      { name: "4-prop" },
      { name: "5-expression" },
      { name: "6-face" },
      { name: "7-eyewear" },
      { name: "8-headpiece" },
    ],
  },
]; // Now you can go and rename the pngs to which ever number you want them to be...
            // ... to make the order more mixed. Remember even tho it's not RNG now, it is to the buyer!
const format = {
  width: 750, // change this to the dimension your NFT was created with in PSD
  height: 1200,
};

const background = {
  generate: true,
  brightness: "100%",
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
};
