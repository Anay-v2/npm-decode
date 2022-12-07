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

-   Hash [About](https://en.wikipedia.org/wiki/Cryptographic_hash_function)

```js
hash.create('hello') // 9b71d224bd62f3785d96d46ad3ea...
// By default it uses SHA-256 algorithm with output as hexadecimal.
// You can provide options to change this.
hash.create('hello', ['sha512', 'base64']) // m3HSJL1i83hdltRq0+o9czGb+8KJ...
```

-   HMAC [About](https://en.wikipedia.org/wiki/HMAC)

```js
hmac.create(['hello' /*string*/, 'abc 123' /*key*/]) //08b81922163891559333fa6b30e2...
// By default it uses SHA-256 algorithm with output as hexadecimal.
// You can provide options to change this.
hmac.create(['hello', 'abc 123'], ['sha512', 'base64']) // +ndU5Yc30cV9pg+fRFUZGay/Nuum==...
```

-   Vignere Cipher [About](https://en.wikipedia.org/wiki/vignere_cipher)

```js
import { vignere } from 'decode'
vignere.encode('hello', 'world') // dscwr
vignere.decode('dscwr', 'world' // hello
```

# Changelog

-   v1.4.0

    -   Add vignere cipher

-   v1.3.0

    -   Add hashing function
    -   Add HMAC function

-   v1.2.0

    -   Add Rail Fence Cipher

-   v1.1.0

    -   Add Affine cipher
    -   Make Unknown characters and Uppercase characters work
