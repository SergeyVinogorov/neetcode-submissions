class MinStack {
    constructor() {
        this.stack = {
            arr: [],
            min: [],
        }
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.arr.push(val)
        const min = this.stack.min
        if(min.length === 0) {
            this.stack.min.push(val)
            return
        }
        if(min[min.length - 1] >= val) {
            this.stack.min.push(val)
        }

    }

    /**
     * @return {void}
     */
    pop() {
        const top = this.stack.arr.pop()
        const min = this.stack.min
        if(top === min[min.length - 1]) {
            this.stack.min.pop()
        }
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack.arr[this.stack.arr.length - 1]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.stack.min[this.stack.min.length - 1] 
    }
}
