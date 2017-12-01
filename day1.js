const reverseCapcha = (input) => {
   const digits = input.toString().split('')
   return digits.filter((digit, index) => {
     return digit === digits[(index + 1) % digits.length]
   })
   .reduce((total, next) => {
     return total += Number(next)
   }, 0)
}

const reverseCapchaII = (input) => {
   const digits = input.toString().split('')
   let half = digits.length / 2
   return digits.slice(0, half)
   .filter((digit, index) => {
     return digit === digits[(index + half) % digits.length]
   })
   .reduce((total, next) => {
     return total += Number(next)
   }, 0) * 2
}
