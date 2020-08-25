const sentence = "hello there my name is josh bawtinheimer and i am 23 years old";
let timer = 0;

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, timer += 50);
};

setTimeout(() => {
  process.stdout.write('\n');
}, timer);