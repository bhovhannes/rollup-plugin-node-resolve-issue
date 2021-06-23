import sum from '@abcdef/lib-utils/dist/sum.js'

type TTest = {
    foo: string
}

export function test() {
    const a: TTest = {
        foo: 'test'
    }
    console.log(`This is ${a.foo}`)
    console.log(`1 + 1 = ${sum(1, 1)}`)
}
