import { morseCode } from './code.js'
import { swap } from '../../swap.js'

function morseDecode(string) {
	const fromMorse = swap(morseCode)
	return string
		.split(' ')
		.map(v => fromMorse[v])
		.join('')
}

export { morseDecode }
