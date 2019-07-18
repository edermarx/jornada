const a = '■';

if(!process.argv[2]){
  console.log('Arguments: mode, wall, gap, requestsNum, speed');
  process.exit();
}
const { 2: mode, 3: wall, 4: gap, 5: requestsNum, 6: speed } = process.argv;
// example: node sync_async_animation.js async 20 3 20 50

const config = {
  sync: {
    gap: wall * 2,
    i: -wall * requestsNum * 2,
  },
  async: {
    gap,
    i: -requestsNum * gap,
  },
};

const draw = (i) => {
  let space = '';

  if (i >= wall * 2) return a;
  const position = i > wall ? wall - (i % wall) : i;

  for (let i = 0; i < position; i++) {
    space += ' ';
  }

  return space + a;
};

const start = new Date().getTime();
setInterval(() => {
  const stopCondition = mode === 'sync' ? config[mode].gap -1 : 0;
  if(config[mode].i + stopCondition >= wall * 2){
    console.log(`Time elapsed: ${new Date().getTime() - start}ms`);
    process.exit();
  }
  console.log('\033c');
  let drawing = '';
  for (let j = requestsNum; j > 0; j--) {
    drawing += `${draw(config[mode].i + config[mode].gap * j)}\n`;
  }
  console.log(drawing);
  config[mode].i++;
}, speed);

