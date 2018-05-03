var intervalId = 0;
var i = 0;

onmessage = function(e) {
    if (intervalId === 0) {
        intervalId = setInterval(work, 400);
    }
    postMessage("worker started");
}

function work() {
    i += 1
    if (i < 11) {
        postMessage(`work in progress 10/${i}`);
    } else {
        postMessage(`work finished`);
        clearInterval(intervalId);
        intervalId = 0;
        i = 0
    }

}