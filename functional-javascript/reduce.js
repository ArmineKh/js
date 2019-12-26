function countWords(inputWords) {
     // SOLUTION GOES HERE
     return inputWords.reduce(function(countMap, inputWord) {
    countMap[inputWord] = ++countMap[inputWord] || 1
    return countMap
  }, {})
   }

   module.exports = countWords
