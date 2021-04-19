const sharp = require('sharp');
const fs = require('fs');
const input_dir = './images';
const output_dir = './public/images'

fs.readdirSync(input_dir).forEach(file => {
  const name = file.split('.').slice(0, -1).join('.');
  sharp(`${input_dir}/${file}`)
    .resize(250, 250)
    .toFile(`${output_dir}/${name}-small.webp`);
  sharp(`${input_dir}/${file}`)
    .resize(500, 500)
    .toFile(`${output_dir}/${name}.webp`);
});