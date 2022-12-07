import { morseCode } from './code.js'
import { swap } from '../../utils/swap.js'

function morseDecode(string) {
	const fromMorse = swap(morseCode)
	return string
		.split(' ')
		.map(v => {
			if (!Object.keys(fromMorse).includes(v)) return v
			return fromMorse[v]
		})
		.join('')
}

export { morseDecode }
