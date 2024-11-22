function callback(arg) {
    console.log(arg);
}

// setTimeout(callback, 5000);

// setTimeout(function() {
//     console.log("Done!");
// }, 10000);

function useCallback(callback) {
    callback(1);
    callback(2);
    callback(3);
}

useCallback(callback);