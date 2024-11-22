function getServerStatus() {
    const result = fetch("/server/status");

    result.then(function(status){
        console.log("The status from the server is: ", status.ok);
    })
}

function sumAsync(x, y){
    console.log("1. sumAsync is executed");
    const p = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("4. Resolving sumAsync's Promise with the result after 500ms");            
            resolve(x + y);
        }, 500);
        console.log("2. sumAsync Promise is initialized");
    });
    console.log("3. sumAsync has returned the Promise");
    return p;
}

sumAsync(5, 7).then((result) => {
    console.log("5. The result of the addition is: ", result);
})

function sumAsync2(x, y) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (x < 0 || y < 0) {
                reject("Negative values received");
            } else {
                resolve(x + y);
            }
        }, 500);
    });
}

sumAsync2(-5, 7).then((result) => {
    console.log("The result of the addition is: ", result);
}).catch((error) => {
    console.log("Error received: ", error);
});

function stringAsync(string) {
    return new Promise((resolve, reject) => {
        if(!string) {
            reject();
        } else {
            resolve(string.toUpperCase());
        }
    });
}

stringAsync("eric").then(console.log);
stringAsync(null).catch((x) => {
    console.log("No string received!");
});