import { alphabet } from '../../utils/alphabet.js'

function caeserEncode(string, shift = 1) {
	let encodedString = ''
	for (const i of string) {
		if (!alphabet.includes(i.toLowerCase())) {
			encodedString += i
		} else {
			const lcase = i.toUpperCase() === i
			let currentIndex = alphabet.indexOf(i.toLowerCase())
			let newIndex = currentIndex + shift
			if (newIndex > 25) {
				newIndex = newIndex - 26
			}
			encodedString += lcase
				? alphabet[newIndex].toUpperCase()
				: alphabet[newIndex]
		}
	}
	return encodedString
}

export { caeserEncode }
