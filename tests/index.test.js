console.log('\n----------------')
console.log('Regular Tests')
console.log('----------------\n')

import { caeser, base64, morse, charCode, bacon, affine } from '../index.js'

assert(caeser.encode('Hello!', 3), 'Khoor!', 'Caeser Cipher - Encode')
assert(caeser.decode('Khoor!', 3), 'Hello!', 'Caeser Cipher - Decode')

assert(base64.encode('hello'), 'aGVsbG8=', 'Base 64 - Encode')
assert(base64.decode('aGVsbG8='), 'hello', 'Base 64 - Decode')

assert(morse.encode('Hello*'), '.... . .-.. .-.. --- *', 'Morse Code - Encode')
assert(morse.decode('.... . .-.. .-.. --- *'), 'hello*', 'Morse Code - Decode')

assert(
	charCode.encode('hello', '/'),
	'104/101/108/108/111',
	'Char Code - Encode',
)
assert(
	charCode.decode('104/101/108/108/111', '/'),
	'hello',
	'Char Code - Decode',
)

assert(
	bacon.encode('Hello!'),
	'AABBB AABAA ABABA ABABA ABBAB !',
	'Bacon Cipher - Encode',
)
assert(
	bacon.decode('AABBB AABAA ABABA ABABA ABBAB !'),
	'hello!',
	'Bacon Cipher - Decode',
)

assert(affine.encode('Hello!', [5, 8]), 'Rclla!', 'Affine Cipher - Encode')
assert(affine.decode('Rclla!', [5, 8]), 'Hello!', 'Affine Cipher - Decode')

function assert(a, b, name) {
	if (a === b) console.log('✓ Test Passed:', name)
	else {
		throw new Error(
			`✗ Test Failed: ${name}. Expected ${b}, instead got ${a}`,
		)
	}
}
console.log('\n-------------------')
console.log('✓ All Tests Passed')
console.log('-------------------')
