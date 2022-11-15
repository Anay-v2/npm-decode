import { caeser, base64, morse, charCode } from '../index.js'

assert(caeser.encode('hello', 3), 'khoor', 'Caeser Cipher - Encode')
assert(caeser.decode('khoor', 3), 'hello', 'Caeser Cipher - Decode')

assert(base64.encode('hello'), 'aGVsbG8=', 'Base 64 - Encode')
assert(base64.decode('aGVsbG8='), 'hello', 'Base 64 - Decode')

assert(morse.encode('hello'), '.... . .-.. .-.. ---', 'Morse Code - Encode')
assert(morse.decode('.... . .-.. .-.. ---'), 'hello', 'Morse Code - Decode')

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

function assert(a, b, name) {
	if (a === b) console.log('✓ Test Passed:', name)
	else {
		console.log('✗ Test Failed:', name, '. Expected', b, ', instead got', a)
		process.exit()
	}
}
console.log('\n-------------------')
console.log('✓ All Tests Passed')
console.log('-------------------')
