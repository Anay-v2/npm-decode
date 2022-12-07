import { railFenceEncode } from './encode.js'
import { railFenceDecode } from './decode.js'
import { runWithKey } from '../../utils/runwithvalidation.js'
import { validate } from './validate.js'

const railFence = {
	encode: runWithKey(validate, railFenceEncode),
	decode: runWithKey(validate, railFenceDecode),
}

export { railFence }
