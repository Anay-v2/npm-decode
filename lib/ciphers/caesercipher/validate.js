import { alphabet } from '../../alphabet.js'

const validate = (d, string, key) =>
	typeof string == 'string' &&
	[...string].filter(v => !alphabet.includes(v)).length == 0 &&
	typeof key == 'number' &&
	key > 0

export { validate }
