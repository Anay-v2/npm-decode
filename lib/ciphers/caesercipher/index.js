import { caeserEncode } from './encode.js'
import { caeserDecode } from './decode.js'
import { runWithKey } from '../../utils/runwithvalidation.js'
import { validate } from './validate.js'

const caeser = {
	encode: runWithKey(validate, caeserEncode),
	decode: runWithKey(validate, caeserDecode),
}

export { caeser }
