function fetchData(callback) {
    setTimeout(() => {
        const data = 'Fetched data';
        callback(data);
    }, 1000);
}

const fetchDataPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = 'Fetched data 2';
            resolve(data);
        }, 1000);
    });
}

async function getData() {
    const data = await fetchDataPromise();
    console.log(data);
}

fetchData((data) => {
    console.log(data);
});
getData();