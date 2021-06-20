// Challenge One CodeWars

function likes(names) {
  if (names.length == 1) {
    return `${names[0]} likes this`
  } else if (names.length == 2) {
    return `${names[0]} and ${names[1]} like this`
  } else if (names.length == 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`
  } else if (names.length > 3) {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
  } else {
    return "no one likes this"
  }
}

likes(['Marco Tulio', 'Jacob', 'Mark', 'Max', 'Marco Tulio'])


// Challenge Two CodeWars

// function stringCompare(text) {
//   const arrayResponse = []
//   const stringAlfabet = ("abcdefghijklmnopqrstuvwxyz").split('')

//   text.replace(/\s/g, '').toLowerCase().split('').map((letter) => {
//     for (let i=0; i < stringAlfabet.length; i++) {
//       if (letter == stringAlfabet[i]) {
//         arrayResponse.push(stringAlfabet.indexOf(stringAlfabet[i]) + 1);
//         break;
//       }
//     }
//   })

//   text = arrayResponse.toString().replace(/,/g, " ")

//   return text;
// }
// console.log(stringCompare("The sunset sets at twelve o' clock."))