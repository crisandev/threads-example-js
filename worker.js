self.onmessage = ({ data }) => {
   if (data.cmd === "eject") initCounter(data.thread);
};

function initCounter(thread) {
   const t0 = performance.now();
   for (let i = 0; i < 100_000; i++) {
      for (let j = 0; j < 100_000; j++) {}
   }
   const tz = (performance.now() - t0) / 1_000;
   self.postMessage({ cmd: "finished", msg: tz, thread });
}
