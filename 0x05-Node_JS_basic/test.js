function anAsync() {
    console.log("Start cooking");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Food is ready")
            resolve("rice");;
        }, 3000);
    })
};

anAsync()
    .then((food) => console.log(`Eat ${food}`))
console.log("Play game");
