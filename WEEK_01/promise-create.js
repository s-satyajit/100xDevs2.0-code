const promisifiedMyOwnSetTimeout = (duration) => {
    let p = new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, [duration])
    })
    return p;
}

const ans = promisifiedMyOwnSetTimeout(2000)
console.log(ans)
ans.then(() => {
    console.log("Timeout is done")
})

// another example 

const getPromises = () => {
    const p1 = new Promise();
    const p2 = new Promise();
    return [p1, p2]
}

const x = getPromises
x[1].then
x[2].then