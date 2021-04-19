const sharp = require('sharp');
const fs = require('fs');
const input_dir = './images';
const output_dir = './public/images'

fs.readdirSync(input_dir).forEach(file => {
  const name = file.split('.').slice(0, -1).join('.');
  const path = `${input_dir}/${file}`
  sharp(path)
    .resize(150, 150)
    .toFile(`${output_dir}/${name}-small.webp`);
  sharp(path)
    .resize(300, 300)
    .toFile(`${output_dir}/${name}.webp`);
  sharp(path)
    .resize(144, 144)
    .toFile(`${output_dir}/${name}-144.webp`);
  sharp(path)
    .resize(512, 512)
    .toFile(`${output_dir}/${name}-512.webp`);
  sharp(path)
    .toFormat('png')
    .resize(512, 512)
    .toFile(`${output_dir}/${name}.png`);
});