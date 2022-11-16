import { baconCode } from './code.js'
import { swap } from '../../swap.js'

const validate = (decode, string, alphs = ['A', 'B']) =>
	typeof string == 'string' &&
	(!decode
		? [...string].filter(v => !baconCode[v]).length == 0
		: string.split(' ').filter(v => !swap(baconCode)[v]).length == 0) &&
	typeof alphs[0] == 'string' &&
	typeof alphs[1] == 'string'

export { validate }
