function canConstruct(ransomNote: string, magazine: string) {
  if (ransomNote.length > magazine.length) return false
  
  const magazineLetters = new Map<string, number>()
  const ransomNoteLetters = new Map<string, number>()

  const incrementMapValue = (map: Map<string, number>, key: string): void => {
    if (map.has(key)) {
      map.set(key, (map.get(key) as number) + 1)
    } else {
      map.set(key, 1)
    }
  }

  for (let i = 0; i < magazine.length; i++) {
    const current = magazine[i]
    incrementMapValue(magazineLetters, current)
  }
  
   for (let i = 0; i < ransomNote.length; i++) {
    const current = ransomNote[i]
    incrementMapValue(ransomNoteLetters, current)
  }

  if (ransomNoteLetters.size > magazineLetters.size) return false
  
  for (const [key, value] of ransomNoteLetters) {
    if (!magazineLetters.has(key)) return false
    const magazineValue = magazineLetters.get(key)
    if (magazineValue < value) return false
  }
  
  return true
}