import { charCodeEncode } from './encode.js'
import { charCodeDecode } from './decode.js'
import { runWithKey } from '../../runwithvalidation.js'
import { validate } from './validate.js'

const charCode = {
	encode: runWithKey(validate, charCodeEncode),
	decode: runWithKey(validate, charCodeDecode, true),
}

export { charCode }
