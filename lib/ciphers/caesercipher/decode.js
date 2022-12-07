import { alphabet } from '../../utils/alphabet.js'

function caeserDecode(string, shift = 1) {
	let decodedString = ''
	for (const i of string) {
		if (!alphabet.includes(i.toLowerCase())) {
			decodedString += i
		} else {
			const lcase = i.toUpperCase() === i
			let currentIndex = alphabet.indexOf(i.toLowerCase())
			let newIndex = currentIndex - shift
			if (newIndex < 0) {
				newIndex = newIndex + 26
			}
			decodedString += lcase
				? alphabet[newIndex].toUpperCase()
				: alphabet[newIndex]
		}
	}
	return decodedString
}

export { caeserDecode }
