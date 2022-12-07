import { affineEncode } from './encode.js'
import { affineDecode } from './decode.js'
import { runWithKey } from '../../utils/runwithvalidation.js'
import { validate } from './validate.js'

const affine = {
	encode: runWithKey(validate, affineEncode),
	decode: runWithKey(validate, affineDecode),
}

export { affine }
