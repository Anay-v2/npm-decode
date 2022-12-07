import { alphabet } from '../../utils/alphabet.js'
const validate = (string, key) =>
	typeof string == 'string' &&
	typeof key == 'string' &&
	key.length > 1 &&
	[...key].filter(v => !alphabet.includes(v)).length == 0

export { validate }
