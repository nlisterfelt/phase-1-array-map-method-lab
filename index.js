const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCased() {
  for (let j=0; j < tutorials.length; j++) {
    const splitArray = tutorials[j].split(' ')
    const capitalSplit = splitArray.map(elem => ' ' + elem.charAt(0).toUpperCase() + elem.substring(1))
    let i = 0
    let newElement = ''
    while (i < capitalSplit.length) {
      newElement += capitalSplit[i]
      i++
    }    
    tutorials[j] = newElement.substring(1)
  }
  return tutorials
}
titleCased()