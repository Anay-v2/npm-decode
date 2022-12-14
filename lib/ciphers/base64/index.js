import { base64Encode } from './encode.js'
import { base64Decode } from './decode.js'
import { validate } from './validate.js'
import { run } from '../../utils/runwithvalidation.js'

const base64 = {
	encode: run(validate, base64Encode),
	decode: run(validate, base64Decode),
}

export { base64 }
