let threadsQuantity = 0;
let intervals = [];

function startThread() {
   const worker = new Worker("worker.js");
   threadElementStart(threadsQuantity);
   worker.postMessage({ cmd: "eject", thread: threadsQuantity });
   threadsQuantity++;

   worker.onmessage = (e) => {
      if (e.data.cmd === "finished") {
         console.log("finished");
         threadElementEnd(e.data.thread);
      }
   };
}

const threadElementStart = (threadsQuantity) => {
   const threadContainer = document.getElementById("threads-container");
   const div = document.createElement("div");
   div.className = "thread";
   div.id = `thread-${threadsQuantity}`;

   let milliseconds = 0;
   intervals.push(
      setInterval(() => {
         milliseconds++;
         div.innerHTML = milliseconds;
      }, 1)
   );
   threadContainer.appendChild(div);
};

const threadElementEnd = (thread) => {
   const div = document.getElementById(`thread${thread}`);
   clearInterval(intervals[thread]);
   console.log(thread);
};
