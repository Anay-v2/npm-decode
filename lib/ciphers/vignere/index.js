import { vignereEncode } from './encode.js'
import { vignereDecode } from './decode.js'
import { runWithKey } from '../../utils/runwithvalidation.js'
import { validate } from './validate.js'

const vignere = {
	encode: runWithKey(validate, vignereEncode),
	decode: runWithKey(validate, vignereDecode),
}

export { vignere }
