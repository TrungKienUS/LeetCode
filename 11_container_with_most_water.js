/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function (height) {
    let l = 0;
    let r = height.length - 1;
    let maxArea = 0;
    while (l < r) {
        let area = Math.min(height[l], height[r]) * (r - l);
        maxArea = Math.max(area, maxArea);
        if(height[l] < height[r]){
            l++
        }else{
            r--;
        }
    }
    return maxArea
};
