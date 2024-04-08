/**
 * @param {number} val
 * @return {boolean}
 */

 class RandomizedSet {
    constructor() {
        this.hashMap = {};
        this.array = [];
    }

    insert(val) {
        if (!!this.hashMap[val] || this.hashMap[val] == 0) return false;
        this.hashMap[val] = this.array.length;
        this.array.push(val);
        return true;
    }
    remove(val) {
        if (!!this.hashMap[val] || this.hashMap[val] == 0) {
            let valueOfLastIndex = this.array[this.array.length - 1];
            let currentIndexOfValue = this.hashMap[val];

            this.hashMap[valueOfLastIndex] = currentIndexOfValue;
            this.array[currentIndexOfValue] = valueOfLastIndex;
            this.array.pop();
            delete this.hashMap[val];
            return true;
        }
        return false
    }
    getRandom() {
        const randomIndex = Math.floor(Math.random() * this.array.length);
        return this.array[randomIndex];
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
