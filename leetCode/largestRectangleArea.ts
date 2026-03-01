/*
"""
Largest Rectangle in Histogram

Given an array of integers heights representing the histogram's bar height
where the width of each bar is 1, return the area of the largest rectangle in the histogram.

Input: heights = [2,1,5,6,2,3]
Output: 10
Explanation: The above is a histogram where width of each bar is 1.
The largest rectangle is shown in the red area, which has an area = 10 units.

"""
*/





function largestRectangleArea(heights: Array<number>): number {
    let stack: Array<number> = []
    let maxArea = 0

    for (let i = 0; i < heights.length; i++) {
        while (stack.length && heights[i] < heights[stack[stack.length - 1]]) {
            const height = heights[stack.pop()!];
            const width = stack.length ? i - stack[stack.length - 1] - 1 : i;
            maxArea = Math.max(maxArea, height * width);
        };
        stack.push(i);
    };

    if (stack) {
        const right_boarder = heights.length
        while (stack.length) {
            const height = heights[stack.pop()!];
            const width = stack.length ? right_boarder - stack[stack.length - 1] - 1 : right_boarder;
            maxArea = Math.max(maxArea, height * width);
        };

    };
    
    return maxArea
};

let heights = [2,1,5,6,2,3]
console.log(largestRectangleArea(heights))

heights = [2,4]
console.log(largestRectangleArea(heights))
