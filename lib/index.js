import { caeser } from './ciphers/caesercipher/index.js'
import { base64 } from './ciphers/base64/index.js'
import { morse } from './ciphers/morse/index.js'
import { charCode } from './ciphers/charcode/index.js'
import { bacon } from './ciphers/bacon/index.js'
import { affine } from './ciphers/affine/index.js'
import { railFence } from './ciphers/railfence/index.js'
import { hash } from './ciphers/hash/index.js'
import { hmac } from './ciphers/hmac/index.js'
import { vignere } from './ciphers/vignere/index.js'
const decode = {
	caeser,
	base64,
	morse,
	charCode,
	bacon,
	affine,
	railFence,
	hash,
	hmac,
	vignere,
}

export { decode }
