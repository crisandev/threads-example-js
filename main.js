function startCounter() {
  const worker = new Worker("worker.js");

  worker.postMessage({ cmd: "eject" });
  worker.onmessage = (e) => {
     if (e.data.cmd === "finished") console.log("tiempo: ", e.data.msg);
  };
}
function onButtonClick(e) {
  console.log("clicked");
}