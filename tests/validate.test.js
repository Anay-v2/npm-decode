console.log('\n-----------------')
console.log('Validation Tests')
console.log('-----------------\n')

import { caeser, base64, morse, charCode, bacon } from '../index.js'

succeed(() => caeser.encode('hello', 3), 'Caeser Encode: Normal')
succeed(() => caeser.decode('khoor', 3), 'Caeser Decode: Normal')
fail(() => caeser.encode(1, 3), 'Caeser Encode: Wrong String Type')
fail(() => caeser.decode(1, 3), 'Caeser Decode: Wrong String Type')
fail(() => caeser.encode('hello', -2), 'Caeser Encode: Wrong Key (negative)')
fail(() => caeser.decode('khoor', -2), 'Caeser Decode: Wrong Key (negative)')
fail(() => caeser.encode('hello', '2'), 'Caeser Encode: Wrong Key (string)')
fail(() => caeser.decode('khoor', '2'), 'Caeser Decode: Wrong Key (string)')
succeed(() => base64.encode('hello'), 'Base64 Encode: Normal')
succeed(() => base64.decode('aGVsbG8='), 'Base64 Decode: Normal')
succeed(() => morse.encode('hello'), 'Morse Encode: Normal')
succeed(() => morse.decode('.... . .-.. .-.. ---'), 'Morse Decode: Normal')
fail(() => morse.encode(4), 'Morse Encode: Wrong String Type')
fail(() => morse.decode(4), 'Morse Decode: Wrong String Type')
succeed(() => charCode.encode('hello', '/'), 'Char code Encode: Normal')
succeed(
	() => charCode.decode('104/101/108/108/111', '/'),
	'Char code Decode: Normal',
)
fail(() => charCode.encode(3, '/'), 'Char code Encode: Wrong String')
fail(() => charCode.decode(3, '/'), 'Char code Decode: Wrong String')
fail(
	() => charCode.encode('hello', '3'),
	'Char code Encode: Wrong Key (number)',
)
fail(
	() => charCode.decode('104/101/108/108/111', '3'),
	'Char code Decode: Wrong Key (number)',
)

fail(
	() => charCode.encode('hello', 3),
	'Char code Encode: Wrong Key (not string)',
)
fail(
	() => charCode.decode('104/101/108/108/111', 3),
	'Char code Decode: Wrong Key (not string)',
)
succeed(() => bacon.encode('hello'), 'Bacon Encode: Normal')
succeed(
	() => bacon.decode('AABBB AABAA ABABA ABABA ABBAB'),
	'Bacon Decode: Normal',
)
fail(() => bacon.encode(3), 'Bacon Encode: Wrong String Type')
fail(() => bacon.decode(3), 'Bacon Decode: Wrong String Type')

function fail(f, name) {
	try {
		f()
	} catch {
		console.log('✓ Test Passed:', name)
		return
	}
	throw new Error(
		`✗ Test Failed: ${name}. Expected to fail but instead passed`,
	)
}

function succeed(f, name) {
	try {
		f()
	} catch {
		throw new Error(
			`✗ Test Failed: ${name}. Expected to pass but instead failed`,
		)
	}
	console.log('✓ Test Passed:', name)
}
console.log('\n-------------------')
console.log('✓ All Tests Passed')
console.log('-------------------')
