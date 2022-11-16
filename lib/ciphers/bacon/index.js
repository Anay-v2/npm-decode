import { baconEncode } from './encode.js'
import { baconDecode } from './decode.js'
import { runWithKey } from '../../runwithvalidation.js'
import { validate } from './validate.js'

const bacon = {
	encode: runWithKey(validate, baconEncode),
	decode: runWithKey(validate, baconDecode, true),
}

export { bacon }
