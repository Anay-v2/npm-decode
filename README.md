# Decode

Easily encode and decode strings using popular encrypting methods

`npm i @anay69420/npm-decode`

# Usage

```js
import { decode } from 'decode'

console.log(decode.caeser.encode('Hello', 3)) // Khoor
```

### Tree Shakable!!!

```js
import { caeser, base64 } from 'decode'
// Still Works!
```

## Ciphers

-   Caeser cipher [About](https://en.wikipedia.org/wiki/Caesar_cipher)

```js
import { caeser } from 'decode'
caeser.encode('hello', 3) // khoor
caeser.decode('khoor', 3) // hello
```

-   Base 64 [About](https://en.wikipedia.org/wiki/Base64)

```js
import { base64 } from 'decode'
base64.encode('hello') // aGVsbG8=
base64.decode('aGVsbG8=') // hello
```

-   Morse Code [About](https://en.wikipedia.org/wiki/Morse_code)

```js
import { morse } from 'decode'
morse.encode('hello') // .... . .-.. .-.. ---
morse.decode('.... . .-.. .-.. ---') // hello
```

-   Character code [About](https://en.wikipedia.org/wiki/UTF-8)

```js
import { charCode } from 'decode'
charCode.encode('hello') // 104 101 108 108 111
charCode.decode('104 101 108 108 111') // hello
// You may optionally pass a string as a delimiter
charCode.encode('hello', '/') // 104/101/108/108/111
charCode.decode('104/101/108/111', '/') // hello
```

-   Baconian Cipher [About](https://en.wikipedia.org/wiki/Bacon%27s_cipher)

```js
import { bacon } from 'decode'
bacon.encode('hello') // AABBB AABAA ABABA ABABA ABBAB
bacon.decode('AABBB AABAA ABABA ABABA ABBAB') // hello
// You may optionally pass an object containing values for character a and b
bacon.encode('hello', { a: '-', b: '/' }) // --/// --/-- -/-/- -/-/- -//-/
bacon.decode('--/// --/-- -/-/- -/-/- -//-/', '/', { a: '-', b: '/' }) // hello
```

-   Affine Cipher [About](https://en.wikipedia.org/wiki/Affine_cipher)

```js
import { affine } from 'decode'
affine.encode('hello', [5 /*a*/, 8 /*b*/]) // rclla
bacon.decode('rclla', [5, 8]) // hello
// Note that a must be coprime to 26
```

-   Rail Fence Cipher [About](https://en.wikipedia.org/wiki/Rail_fence_cipher)

```js
import { railFence } from 'decode'
railFence.encode('hello', [2, 0]) // hloel
railFence.decode('hloel', [2, 0] // hello
```

# Changelog

-   v1.1.0

    -   Add Affine cipher **MAJOR**
    -   Make Unknown characters and Uppercase characters work **MAJOR**

-   v1.2.0
    -   Add Rail Fence Cipher **MAJOR**
    -   Add validation tests for Affine cipher and Rail Fence cipher
