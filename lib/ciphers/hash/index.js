import { hashCreate } from './encode.js'
import { runWithKey } from '../../runwithvalidation.js'
import { validate } from './validate.js'

const hash = {
	create: runWithKey(validate, hashCreate),
}

export { hash }
