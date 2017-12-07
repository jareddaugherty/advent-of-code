fs = require('fs')
fs.readFile('./input2.txt', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }

  const formatData = () => {
    return data.split('\n').map(line => line.split('\t').map(item => +item))
  }

  const problem1 = () => {
    const lines = formatData()
    const checksum = lines.map( line => {
        const min = line.reduce((min, next) => {return Math.min(min, next)})
        const max = line.reduce((max, next) => {return Math.max(max, next)})
        return max - min
      })
      .reduce((total, next) => {
       return total += next
      })
    return checksum
  }

  const isDivisible = (arr) => {
    if(arr.length < 2){
      return false
    }

    for(let i = 1; i < arr.length; i++){
      if (arr[i] % arr[0] === 0){
        return arr[i] / arr[0]
      }
    }
    return isDivisible(arr.slice(1, arr.length))
  }
  const problem2 = () => {
    const lines = formatData()
    const checksum = lines.map( line => {
      const sorted = line.sort((a,b) => a - b)
      return isDivisible(sorted)
    }).reduce((total, next) => {
      return total += next
    })
    return checksum
  }

  console.log(`Problem 1: ${problem1()}, Problem 2: ${problem2()}`)
});
