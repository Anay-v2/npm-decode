import { hmacCreate } from './encode.js'
import { runWithKey } from '../../utils/runwithvalidation.js'
import { validate } from './validate.js'

const hmac = {
	create: runWithKey(validate, hmacCreate),
}

export { hmac }
