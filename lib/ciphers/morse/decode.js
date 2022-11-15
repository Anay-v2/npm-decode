import { morseCode } from './code.js'

function morseDecode(string) {
	const fromMorse = Object.keys(morseCode).reduce(
		(obj, char) => ({ ...obj, [morseCode[char]]: char }),
		{},
	)
	return string
		.split(' ')
		.map(v => fromMorse[v])
		.join('')
}

export { morseDecode }
