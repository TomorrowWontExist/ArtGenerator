# Thank You HashLips 👄 Upgraded and Articulated by ScrawnyViking aka TWECryptoDev

![](https://gateway.pinata.cloud/ipfs/QmeQTg75CRKSVUTnMnRM2RyRrBQDYT6G6oxzR4xmWSEH1U)

All the code in these repos was created and explained by HashLips - Please go subscribe to him if you want to learn how to code your own DApps and do everything from scratch! ❤️

To find out more please visit:

[📺 YouTube](https://www.youtube.com/channel/UCesmc1HdFKXqmNFZwT0M9GQ)

[💬 Telegram](https://t.me/TBCToken)

[🐦 Twitter](https://twitter.com/TWECryptoDev)

[ℹ️ Website](https://TomorrowWontExist.com)

# ScrawnyViking A-Z How to Launch your own NFT Collection using HashLips Art Engine 🔥

![](https://github.com/HashLips/hashlips_art_engine/blob/main/banner.png)

Create generative art by using the canvas api and node js. Before you use the generation engine, make sure you have node.js and yarn installed.

## Installation 🛠️

If you are cloning the project then run this first, otherwise you can download the source code on the release page and skip this step.

```sh
git clone https://github.com/TomorrowWontExist/MassiveRandomNFTGenerator
```

Go to the root of your folder and run this command if you have yarn installed.

```sh
yarn install
```

Alternatively you can run this command if you have node installed.

```sh
npm install // I prefer NPM over Yarn
```

## Usage ℹ️

Create your different layers as folders in the 'layers' directory, and add all the layer assets in these directories. You can name the assets anything as long as it has a rarity weight attached in the file name like so: `example element#70.png`. You can optionally change the delimiter `#` to anything you would like to use in the variable `rarityDelimiter` in the `src/config.js` file.

Once you have all your layers, go into `src/config.js` and update the `layerConfigurations` objects `layersOrder` array to be your layer folders name in order of the back layer to the front layer.

_Example:_ If you were creating a portrait design, you might have a background, then a head, a mouth, eyes, eyewear, and then headwear, so your `layersOrder` would look something like this:

```js
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
];
```

The `name` of each layer object represents the name of the folder (in `/layers/`) that the images reside in.

Optionally you can now add multiple different `layerConfigurations` to your collection. Each configuration can be unique and have different layer orders, use the same layers or introduce new ones. This gives the artist flexibility when it comes to fine tuning their collections to their needs.

_Example:_ If you were creating a portrait design, you might have a background, then a head, a mouth, eyes, eyewear, and then headwear and you want to create a new race or just simple re-order the layers or even introduce new layers, then you're `layerConfigurations` and `layersOrder` would look something like this:

```js
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
    growEditionSizeTo: 15, // 5 more like this, added eyewear
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
    growEditionSizeTo: 25, // 10 more, added headpiece
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
]; // Now you can go and rename the pngs to which ever number you want them to be, to make the order more mixed.
```

Then optionally, update your `format` size, ie the outputted image size, and the `growEditionSizeTo` on each `layerConfigurations` object, which is the amount of variation outputted.

If you want to play around with different blending modes, you can add a `blend: MODE.colorBurn` field to the layersOrder object. If you need a layers to have a different opacity then you can add the `opacity: 0.7` field to the layersOrder object as well. Both the `blend: MODE.colorBurn` and `opacity: 0.7` can be addes on the same layer if you want to.

Here is an example on how you can play around with both filter fields:

```js
const layerConfigurations = [
  {
    growEditionSizeTo: 5,
    layersOrder: [
      { name: "1-background" },
      { name: "2-extra" },
      { name: "3-character", blend: MODE.colorBurn },
      { name: "4-prop" },
      { name: "5-expression" },
      { name: "6-face", blend: MODE.overlay, opacity: 0.7 },
      { name: "7-eyewear", opacity: 0.7 },
    ],
  },
];
```

Here is a list of the different blending modes that you can optionally use.

```js
const MODE = {
  sourceOver: "source-over",
  sourceIn: "source-in",
  sourceOut: "source-out",
  sourceAtop: "source-out",
  destinationOver: "destination-over",
  destinationIn: "destination-in",
  destinationOut: "destination-out",
  destinationAtop: "destination-atop",
  lighter: "lighter",
  copy: "copy",
  xor: "xor",
  multiply: "multiply",
  screen: "screen",
  overlay: "overlay",
  darken: "darken",
  lighten: "lighten",
  colorDodge: "color-dodge",
  colorBurn: "color-burn",
  hardLight: "hard-light",
  softLight: "soft-light",
  difference: "difference",
  exclusion: "exclusion",
  hue: "hue",
  saturation: "saturation",
  color: "color",
  luminosity: "luminosity",
};
```

When you are all ready, run the following command and your outputted art will be in the `build/images` directory and the json in the `build/json` directory:

```sh
npm run build
```

or

```sh
node index.js
```

The program will output all the images in the `build/images` directory along with the metadata files in the `build/json` directory. Each collection will have a `_metadata.json` file that consists of all the metadata in the collection inside the `build/json` directory. The `build/json` folder also will contain all the single json files that represent each image file. The single json file of a image will look something like this:

```json
{
  "dna": "614932c9807faa6f1db822bde13daa33b881c34a",
  "name": "#1",
  "description": "This is the description of your NFT project, remember to replace this",
  "image": "ipfs://QmNfPMWLPTEbFpBtPFy4wkYEHRVWcz8dzjziTcPbebzF53/1.png",
  "edition": 1,
  "date": 1632176579874,
  "attributes": [
    {
      "trait_type": "1-background",
      "value": "astronaut"
    },
    {
      "trait_type": "2-extra",
      "value": "none"
    },
    {
      "trait_type": "3-character",
      "value": "Twee Pink Wings"
    },
    {
      "trait_type": "4-prop",
      "value": "soda"
    },
    {
      "trait_type": "5-expression",
      "value": "neutral"
    },
    {
      "trait_type": "6-face",
      "value": "gasmask"
    }
  ],
  "compiler": "HashLips Art Engine"
}
```

That's it, you're done.

### Updating baseUri for IPFS

You might possibly want to update the baseUri after you have ran your collection. To update the baseUri simply run:

```sh
node utils/updateBaseUri.js
```

### Printing rarity data (Experimental feature)

To see the percentages of each attribute across your collection, run:

```sh
node utils/rarityData.js
```

The output will look something like this:

```sh
Trait type: 1-background
{ trait: 'acryllica', chance: '16', occurrence: '8' }  
{ trait: 'astronaut', chance: '16', occurrence: '20' } 
{ trait: 'badacid', chance: '16', occurrence: '20' }   
{ trait: 'bluespiral', chance: '16', occurrence: '28' }
{ trait: 'dancefloor', chance: '16', occurrence: '8' } 
{ trait: 'lightening', chance: '16', occurrence: '16' }

Trait type: 2-extra
{ trait: 'blue explosion', chance: '15', occurrence: '16' }
{ trait: 'christmas lights', chance: '15', occurrence: '20' }
{ trait: 'devil tail', chance: '5', occurrence: '4' }
{ trait: 'dinosaurs', chance: '15', occurrence: '16' }
{ trait: 'none', chance: '35', occurrence: '28' }
{ trait: 'polaroids', chance: '10', occurrence: '12' }
{ trait: 'spooky', chance: '5', occurrence: '4' }
```

Hope you create some awesome artworks with this code 👄 Thank you Hashlips!
Created by Hashlips, edited and articulated by ScrawnyViking

When you're all finished with your NFT's here, and we update your metadata .json files to the correct CID that we're going to go over in the video...
NOW, we want to get the DApp (Minting Station with web3 connect) attached to your contract that we're about to deploy.

run this command to get ScrawnyVikings Minting Station DApp
cd clone https://github.com/TomorrowWontExist/MintingStationDApp.git

Follow the read me instructions or keep watching the video!