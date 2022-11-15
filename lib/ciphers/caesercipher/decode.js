import { alphabet } from '../../alphabet.js'

function caeserDecode(string, shift = 1) {
	let decodedString = ''
	for (const i of string) {
		let currentIndex = alphabet.indexOf(i)
		let newIndex = currentIndex - shift
		if (newIndex < 0) {
			newIndex = newIndex + 26
		}
		decodedString += alphabet[newIndex]
	}
	return decodedString
}

export { caeserDecode }
