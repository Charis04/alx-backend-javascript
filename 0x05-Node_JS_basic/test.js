const obj = {"item1": "value 1", item2: "value2"};

console.log(obj["item1"])

for (const item in obj) {
    console.log(item)
}
