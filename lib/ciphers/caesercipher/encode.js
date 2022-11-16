import { alphabet } from '../../alphabet.js'

function caeserEncode(string, shift = 1) {
	let encodedString = ''
	for (const i of string) {
		let currentIndex = alphabet.indexOf(i.toLowerCase())
		let newIndex = currentIndex + shift
		if (newIndex > 25) {
			newIndex = newIndex - 26
		}
		encodedString += alphabet[newIndex]
	}
	return encodedString
}

export { caeserEncode }
