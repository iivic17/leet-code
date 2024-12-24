function nextGreaterElement(nums1: number[], nums2: number[]) {
    const nextGreaterMap = new Map<number, number>()
    const stack: number[] = []

    for (const num of nums2) {
        while (stack.length > 0 && stack[stack.length - 1] < num) {
            const smallerNum = stack.pop()!
            nextGreaterMap.set(smallerNum, num)
        }
        stack.push(num)
    }

    while (stack.length > 0) {
        nextGreaterMap.set(stack.pop()!, -1)
    }

    return nums1.map(num => nextGreaterMap.get(num) ?? -1)
}