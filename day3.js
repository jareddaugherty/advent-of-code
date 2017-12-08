
const problem1 = (input) => {
  const root = Math.ceil(Math.sqrt(input))
  const sqrt = root % 2 === 0 ? root + 1 : root
  const layer = Math.floor(root / 2)
  const midpoint = ((sqrt - 2) ** 2) + 1 + (layer - 1)
  const position = Math.abs(input - midpoint) % (sqrt - 1)
  const stepsToMidpoint = position <= layer ? position : (sqrt-1) - position
  return layer + stepsToMidpoint
}
