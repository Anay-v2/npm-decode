import { morseEncode } from './encode.js'
import { morseDecode } from './decode.js'
import { validate } from './validate.js'
import { run } from '../../utils/runwithvalidation.js'

const morse = {
	encode: run(validate, morseEncode),
	decode: run(validate, morseDecode),
}

export { morse }
