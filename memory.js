const count = Number(process.argv[2]) || 1e7;
const state = {};

function nop() {}

const buffer = (data) => {
  const last = state.lastBufferedRequest;
  state.lastBufferedRequest = {
    chunk: Buffer.from(data),
    encoding: 'buffer',
    isBuf: true,
    callback: nop,
    next: null,
  };

  if (last) last.next = state.lastBufferedRequest;
  else state.bufferedRequest = state.lastBufferedRequest;

  state.bufferedRequestCount += 1;
};

const start = process.memoryUsage().heapUsed;
for (let i = 0; i < count; i++) {
  buffer('a');
}
const used = (process.memoryUsage().heapUsed - start) / 1024 / 1024;
console.log(`${Math.round(used * 100) / 100} MB`);
