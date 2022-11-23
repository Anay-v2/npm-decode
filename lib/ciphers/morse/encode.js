import { morseCode } from './code.js'

function morseEncode(string) {
	return [...string.toLowerCase()]
		.map(letter => {
			if (!Object.keys(morseCode).includes(letter)) return letter
			return morseCode[letter]
		})
		.join(' ')
}

export { morseEncode }
