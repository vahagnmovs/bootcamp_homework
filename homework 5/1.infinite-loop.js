let count = 0;

function infiniteLoop() {
    console.log(count++);
    return new Promise( resolve => {
        setTimeout(() => {
            resolve('hello');
            return workWithInfinite();}
        , 3000)
    })
}

async function workWithInfinite() {
    await infiniteLoop()
        .then(res => console.log(res));
}

workWithInfinite();
