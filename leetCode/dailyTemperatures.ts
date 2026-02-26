/*
Q2. Daily Temperatures

Given an array of integers temperatures represents the daily temperatures,
return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature.
If there is no future day for which this is possible, keep answer[i] == 0 instead.



Example 1:

Input: temperatures = [73,74,75,71,69,72,76,73]
Output: [1,1,4,2,1,1,0,0]
Example 2:

Input: temperatures = [30,40,50,60]
Output: [1,1,1,0]
Example 3:

Input: temperatures = [30,60,90]
Output: [1,1,0]
*/


function dailyTemperatures(temperatures: Array<number>): Array<number> {
    const output: Array<number> = Array(temperatures.length).fill(0)
    let stack: Array<number> = []

    for (const [idx, temp] of temperatures.entries()) {
        while (stack.length > 0 && temperatures[stack[stack.length - 1]] < temp) {
            const prevIdx = stack.pop()!
            output[prevIdx] = idx - prevIdx
        }
        stack.push(idx)

    }



    return output
}


const temperatures = [73,74,75,71,69,72,76,73]
console.log(dailyTemperatures(temperatures))