import { alphabet } from '../../alphabet.js'

const validate = (d, string, key) =>
	typeof string == 'string' &&
	typeof key[0] == 'number' &&
	key[0] > 0 &&
	typeof key[1] == 'number' &&
	key[1] > 0 &&
	key[0]

export { validate }
