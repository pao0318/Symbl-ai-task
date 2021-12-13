import fetch from "node-fetch"
const datas = async () => {
    const res = await fetch(`http://localhost:3003/books`);
    res.data.sort(function (a, b) {
        return a.id - b.id
    })

    for (var idx in res.data) {
        console.log(`id: ${res.data.id}, name: ${res.data.name}`);

    }

}
datas()