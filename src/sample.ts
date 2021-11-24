// odd impair
// Trouver le nombre de nombre réversibles inférieurs à 1000

// Condition : résultat de la somme = composé de chiffres impairs
// Fonction qui va parser la somme et qui va analyser les chiffres

// Fonction qui fasse l'addition
// Prend chaque chiffre de 1 à 1000
// Détermine son inverse -> fonction
// Additionne les deux

export const isReversible = (n: any) => {
  const reversedNumber = returnReversedNumber(n)
  const sum = n + reversedNumber
  return isNumberComposedOfOddNumbers(sum)
}

export const returnReversedNumber = (value: any) => {
  const tempNumber = value + ""
  return parseInt(tempNumber.split("").reverse().join(""))
}

export const isNumberComposedOfOddNumbers = (result: any) => {
  const numberArray = result.toString().split("")
  let boolResult: boolean = true
  numberArray.forEach((n: any) => {
    const stringToNumber = parseInt(n)
    if (stringToNumber % 2 == 0) {
      boolResult = false
    }
  })
  return boolResult
}

export const countReversibleNumbers = (maxRange: any) => {
  let reversibleNumbers = []
  for (let i = 0; i <= maxRange; i++) {
    if (isReversible(i) && i % 10 !== 0) {
      reversibleNumbers.push(i)
    }
  }
  return reversibleNumbers.length
}
