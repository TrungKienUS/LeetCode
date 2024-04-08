/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
 var canCompleteCircuit = function(gas, cost) {
    let totalSurplus = 0;
    let surplus = 0;
    let result = 0;
    for(let i = 0; i < gas.length; i ++){
        totalSurplus += gas[i] - cost[i];
        surplus += gas[i] - cost[i];
        if(surplus < 0){
            surplus = 0;
            result = i + 1;
        }
    }
    return totalSurplus < 0 ? -1 : result;
};

for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];

    }
}

