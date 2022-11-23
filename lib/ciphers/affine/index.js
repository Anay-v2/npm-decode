import { affineEncode } from './encode.js'
import { affineDecode } from './decode.js'
import { runWithKey } from '../../runwithvalidation.js'
import { validate } from './validate.js'

const affine = {
	encode: runWithKey(validate, affineEncode),
	decode: runWithKey(validate, affineDecode, true),
}

export { affine }
