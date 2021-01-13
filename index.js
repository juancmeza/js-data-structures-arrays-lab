// Write your solution here!
let drivers = ['Milo', 'Otis', 'Garfield']

let arrayFunctions = []
arrayFunctions.push(drivers)

function destructivelyAppendDriver(name){
    drivers.push(name)
}

function destructivelyPrependDriver(name){
    drivers.unshift(name)
}

function 'destructivelyRemoveLastDriver(){
    drivers.pop()
}

function 'destructivelyRemoveFirstDriver(){
    drivers.shift()
}

function appendDriver(name){
    let newDrivers = drivers.slice().push(name)
    return newDrivers
}

function prependDriver(name){
    let newDrivers = drivers.slice().unshift(name)
    return newDrivers
}

function removeLastDriver(){
    let newDrivers = drivers.slice().pop()
    return newDrivers
}

function removeFirstDriver(){
    let newDrivers = drivers.slice().shift()
    return newDrivers
}