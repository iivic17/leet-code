function findPoisonedDuration(timeSeries: number[], duration: number) {
    let totalDuration = duration

    timeSeries.forEach((hit, i) => {
        if (i == 0) return
        const prevHit = timeSeries[i - 1]
        const durationBetweenHits = hit - prevHit
        const gainedDuration = durationBetweenHits > duration ? duration : durationBetweenHits
        totalDuration += gainedDuration
    })   

    return totalDuration
}