import { morseCode } from './code.js'

function morseEncode(string) {
	return [...string.toLowerCase()].map(letter => morseCode[letter]).join(' ')
}

export { morseEncode }
