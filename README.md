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
