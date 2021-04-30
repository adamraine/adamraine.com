const sharp = require('sharp');
const toIco = require('to-ico');
const fs = require('fs');

const inputDir = './images';
const outputDir = './public/images'

const profileImage = fs.readFileSync(`${inputDir}/profile.png`);
sharp(profileImage)
  .resize(150, 150)
  .toFile(`${outputDir}/profile-small.webp`);
sharp(profileImage)
  .resize(300, 300)
  .toFile(`${outputDir}/profile.webp`);
sharp(profileImage)
  .resize(144, 144)
  .toFile(`${outputDir}/icon-144.webp`);
sharp(profileImage)
  .resize(512, 512)
  .toFile(`${outputDir}/icon-512.webp`);
sharp(profileImage)
  .toFormat('png')
  .resize(512, 512)
  .toFile(`${outputDir}/icon-512.png`);

toIco([profileImage], {
  sizes: [16, 24, 32, 48, 64],
  resize: true
}).then(result => fs.writeFileSync(`./public/favicon.ico`, result));