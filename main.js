let threadsQuantity = 0;
let intervals = [];

function startThread() {
   const worker = new Worker("worker.js");
   threadElementStart(threadsQuantity);
   worker.postMessage({ cmd: "eject", thread: threadsQuantity });
   threadsQuantity++;

   worker.onmessage = ({ data }) => {
      if (data.cmd === "finished") {
         threadElementEnd(data.thread);
      }
   };
}

const threadElementStart = (threadsQuantity) => {
   const threadContainer = document.getElementById("threads-container");
   const div = document.createElement("div");
   const span = document.createElement("span");
   const p = document.createElement("p");
   const btn = document.createElement("button");
   const img = document.createElement("img");

   div.className = "thread";
   div.id = `thread-${threadsQuantity}`;
   p.textContent = "Milliseconds";
   img.src = "./images/delete.png";
   btn.className = "btn-delete";
   btn.addEventListener("click", (e) => {
      threadContainer.removeChild(div);
   });

   let milliseconds = 0;
   intervals.push(
      setInterval(() => {
         milliseconds++;
         span.textContent = milliseconds;
      }, 1)
   );

   btn.appendChild(img);
   div.appendChild(p);
   div.appendChild(span);
   div.appendChild(btn);
   threadContainer.appendChild(div);
};

const threadElementEnd = (thread) => {
   clearInterval(intervals[thread]);
};
