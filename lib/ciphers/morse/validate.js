import { morseCode } from './code.js'
const validate = (string, key) =>
	typeof string == 'string' &&
	[...string].filter(v => !Object.keys(morseCode).includes(v)).length == 0 &&
	typeof key == 'string' &&
	!/\d/g.test(key)
