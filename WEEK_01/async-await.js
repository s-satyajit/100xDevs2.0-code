// without async await

const satyajitFn = () => {
    let p = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hi there!")
        }, 1000)
    })
    return p;
}

const main = () => {
    satyajitFn().then((value) => {
        console.log(value)
    })
}

main()

// after async await

const satyajitAsyncFn = () => {
    let p = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hi there with async")
        }, 3000)
    })
    return p;
}

const asyncMain = async () => {
    const value = await satyajitAsyncFn()
    console.log("Hello")
    console.log(value)
}

asyncMain()