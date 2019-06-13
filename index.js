
undefined
firstArray
[]
firstArray = [2, 3, 5, 7, 9]
(5) [2, 3, 5, 7, 9]
firstArray = []
[]
var primes = [2, 3, 5, 7, 9]
undefined
primes
(5) [2, 3, 5, 7, 9]
var primesPlusOne = primes.map(function(prime) { return prime + 1 });
undefined
primesPlusOne
(5) [3, 4, 6, 8, 10]
var primesZero = primes.map(function(prime) { return prime - prime });
undefined
primesZero
(5) [0, 0, 0, 0, 0]
var primeZero = []
undefined
primeZero
[]
primesZero = []
[]
primesZero = primes.map(function(prime) { return prime - primes });
(5) [NaN, NaN, NaN, NaN, NaN]
primesZero = primes.map(function(prime) { return primes - primes });
(5) [NaN, NaN, NaN, NaN, NaN]
primesZero = primes.map(function(prime) { return prime - prime });
(5) [0, 0, 0, 0, 0]
primesZero = primes.map(function(primes) { return primes - primes });
(5) [0, 0, 0, 0, 0]
primesZero = primes.map(function(max) { return primes - primes });
(5) [NaN, NaN, NaN, NaN, NaN]
primesZero = primes.map(function(max) { return max - max });
(5) [0, 0, 0, 0, 0]0: 01: 02: 03: 04: 0length: 5__proto__: Array(0)
primesZero = primes.map(function(smith) { return smith - 1 });
(5) [1, 2, 4, 6, 8]
primesZero = primes.map(function(smith) { return smith - 1 });
(5) [1, 2, 4, 6, 8]
return 1 + 1
VM1032:1 Uncaught SyntaxError: Illegal return statement
1 + 1
2
primes + primes
"2,3,5,7,92,3,5,7,9"
[primes] + [primes]
"2,3,5,7,92,3,5,7,9"
primesZero = primes.map(function(prime) { return prime + prime })
(5) [4, 6, 10, 14, 18]
 var evens = [2, 4, 6, 8, 10]
undefined
var addedArrays = primes.map(function(prime) { return prime + evens[1] }
VM1245:1 Uncaught SyntaxError: missing ) after argument list
var addedArrays = primes.map(function(prime) { return prime + evens[1] })
undefined
addedArrays
(5) [6, 7, 9, 11, 13]
primes
(5) [2, 3, 5, 7, 9]
primes
(5) [2, 3, 5, 7, 9]
evens
(5) [2, 4, 6, 8, 10]
var words = [joe, cat, dog, itch]
VM1341:1 Uncaught ReferenceError: joe is not defined
    at <anonymous>:1:14
(anonymous) @ VM1341:1
var words = ["joe", "cat", "dog", "itch"]
undefined
words
(4) ["joe", "cat", "dog", "itch"]
var bigWords = words.map(function(word) { return word.upperCase })
undefined
bigWords
(4) [undefined, undefined, undefined, undefined]
var bigWords = words.map(function(word) { return word.toUpperCase })
undefined
bigWords
(4) [ƒ, ƒ, ƒ, ƒ]
words
(4) ["joe", "cat", "dog", "itch"]
var bigWords = words.map(function(word) { return word.toUpperCase() })
undefined
bigWords
(4) ["JOE", "CAT", "DOG", "ITCH"]
