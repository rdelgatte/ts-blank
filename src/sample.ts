// odd impair
// Trouver le nombre de nombre réversibles inférieurs à 1000

// Condition : résultat de la somme = composé de chiffres impairs
// Fonction qui va parser la somme et qui va analyser les chiffres

// Fonction qui fasse l'addition
// Prend chaque chiffre de 1 à 1000
// Détermine son inverse -> fonction
// Additionne les deux

export const isReversible = (n: number): boolean =>
  n % 10 !== 0 && isComposedOfOnlyOdds(n + reverse(n));

export const reverse = (value: number): number =>
  Number(value.toString().split("").reverse().join(""));

export const isComposedOfOnlyOdds = (result: number): boolean =>
  result
    .toString()
    .split("")
    .map((c) => Number(c))
    .every((val) => val % 2 == 1);

export const countReversibleNumbers = (maxRange: number): number =>
  Array.from(Array(maxRange).keys())
    .map((i) => i++)
    .filter((val) => isReversible(val)).length;
