import { morseCode } from './code.js'
import { swap } from '../../swap.js'
const validate = (decode, string) => {
	return (
		typeof string == 'string' &&
		(!decode
			? [...string.toLowerCase()].filter(
					v => !Object.keys(morseCode).includes(v),
			  ).length == 0
			: string
					.split(' ')
					.filter(v => !Object.keys(swap(morseCode)).includes(v))
					.length == 0)
	)
}

export { validate }
