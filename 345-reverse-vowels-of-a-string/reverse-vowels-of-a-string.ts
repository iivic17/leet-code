function reverseVowels(s: string) {
  let result = [...s]
  
  let left = 0
  let right = result.length - 1
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    
  while (left < right) {
    while (left < right && !vowels.includes(result[left])) {
      left++
    }
    if (left >= right) break
    
    while (left < right && !vowels.includes(result[right])) {
      right--
    }
    if (right <= left) break
    
    const temp = result[left]
    result[left] = result[right]
    result[right] = temp
    left++
    right--
  }
  
  return result.join('')
}