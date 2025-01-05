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