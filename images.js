import sharp from 'sharp';
import toIco from 'to-ico';
import {promises as fs} from 'fs';

const inputDir = './images';
const outputDir = './public/images'

const profileMaskableImage = await fs.readFile(`${inputDir}/profile-maskable.png`);
sharp(profileMaskableImage)
  .resize(150, 150)
  .toFile(`${outputDir}/profile-maskable-150x150.webp`);
sharp(profileMaskableImage)
  .resize(300, 300)
  .toFile(`${outputDir}/profile-maskable-300x300.webp`);
sharp(profileMaskableImage)
  .resize(144, 144)
  .toFile(`${outputDir}/profile-maskable-144x144.webp`);
sharp(profileMaskableImage)
  .resize(512, 512)
  .toFile(`${outputDir}/profile-maskable-512x512.webp`);

const profileImage = await fs.readFile(`${inputDir}/profile.png`)
sharp(profileImage)
  .toFormat('png')
  .resize(512, 512)
  .toFile(`${outputDir}/profile-512x512.png`);

const favicon = await toIco([profileImage], {
  sizes: [16, 24, 32, 48, 64],
  resize: true
});
await fs.writeFile('./public/favicon.ico', favicon)