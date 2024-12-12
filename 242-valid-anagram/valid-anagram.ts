function isAnagram(s: string, t: string) {
    if (s.length !== t.length) return false

    const mapS = new Map<string, number>()
    const mapT = new Map<string, number>()

    function increaseByOne(map: Map<string, number>, key: string) {
        if (map.has(key)) {
            map.set(key, map.get(key) + 1)
        }
    }

    for (let i = 0; i < s.length; i++) {
        const keyS = s[i], keyT = t[i]

        if (mapS.has(keyS)) increaseByOne(mapS, keyS)
        else mapS.set(keyS, 1)
        
        if (mapT.has(keyT)) increaseByOne(mapT, keyT)
        else mapT.set(keyT, 1)
    }

    for (const [key, value] of mapS) {
        if (!mapT.has(key) || (mapT.get(key) !== value)) {
            return false
        }
    }

    return true
}