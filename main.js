// Reference: https://p5js.org/examples/simulate-bubble-sort.html

const input = []
let barWidth = 10
let current = 0
let next = 0
let canvasWidth = window.innerWidth
let canvasHeight = window.innerHeight

function setup() {
    createCanvas(canvasWidth, canvasHeight)

    for (let current = 0; current < (width / barWidth); current++) {
        input.push(Math.random() * height)
    }
}

function draw() {
    background(230)
    bubbleSort()
    simulateSorting()
}

function bubbleSort() {
    for (let count = 0; count < barWidth; count++) {
        if (current < input.length) {
            const temp = input[next];

            if (input[next] > input[next + 1]) {
                input[next] = input[next + 1]
                input[next + 1] = temp
            }

            next++

            if (next >= input.length - current - 1) {
                next = 0
                current++
            }

            continue
        }

        noLoop()
    }
}

function simulateSorting() {
    for (let current = 0; current < input.length; current++) {
        stroke(10, 100, 100)
        fill(60)
        rect(current * barWidth, height, barWidth, -input[current], 20)
    }
}