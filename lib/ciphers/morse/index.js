import { morseEncode } from './encode.js'
import { morseDecode } from './decode.js'
import { validate } from './validate.js'
import { run } from '../../runwithvalidation.js'

const morse = {
	encode: run(validate, morseEncode),
	decode: run(validate, morseDecode, true),
}

export { morse }
