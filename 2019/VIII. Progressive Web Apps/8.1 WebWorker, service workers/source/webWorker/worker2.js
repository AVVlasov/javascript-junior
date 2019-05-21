onmessage = function(e) {
  console.log("webWorker сынок отвечает");
  const workerSay = `Папка папка я родился!`;

  postMessage(workerSay);
};
