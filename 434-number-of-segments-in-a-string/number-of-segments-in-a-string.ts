function countSegments(s: string) {
    return s.split(' ').filter(c => c !== '').length
}