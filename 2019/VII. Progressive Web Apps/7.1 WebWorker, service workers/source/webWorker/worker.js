onmessage = function(e) {
  console.log("webWorker: отвечает");
  const workerSay = `Я не хочу говорить ${e.data.substring(
    e.data.indexOf(" "),
    e.data.lenght
  )}`;

  postMessage(workerSay);

  const myFirstWorker = new Worker("worker2.js");
  console.log("webWorker спрашивает: Ты кто?");
  myFirstWorker.postMessage(`Ты кто?`);

  myFirstWorker.onmessage = function(e) {
    console.log(e.data);
  };
};
