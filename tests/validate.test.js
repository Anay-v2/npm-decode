console.log('\n-----------------')
console.log('Validation Tests')
console.log('-----------------\n')
import {
	caeser,
	base64,
	morse,
	charCode,
	bacon,
	affine,
	railFence,
	hash,
	hmac,
	vignere,
} from '../index.js'

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
succeed(() => affine.encode('hello', [5, 8]), 'Affine Encode: Normal')
succeed(() => affine.decode('rclla', [5, 8]), 'Affine Decode: Normal')
fail(() => affine.encode(1), 'Affine Encode: Wrong String Type')
fail(() => affine.decode(1), 'Affine Decode: Wrong String Type')
fail(
	() => affine.encode('hello', [-2, -3]),
	'Affine Encode: Wrong Key (negative)',
)
fail(
	() => affine.decode('rclla', [-2, -3]),
	'Affine Decode: Wrong Key (negative)',
)
fail(
	() => affine.encode('hello', [2, 8]),
	'Affine Encode: Wrong Key (not coprime)',
)
fail(
	() => affine.decode('rclla', [2, 8]),
	'Affine Decode: Wrong Key (not coprime)',
)
fail(
	() => affine.encode('hello', ['2', '3']),
	'Affine Encode: Wrong Key (string)',
)
fail(
	() => affine.decode('rclla', ['2', '3']),
	'Affine Decode: Wrong Key (string)',
)

succeed(() => railFence.encode('hello', [2, 0]), 'Rail Fence Encode: Normal')
succeed(() => railFence.decode('hloel', [2, 0]), 'Rail Fence Decode: Normal')
fail(() => railFence.encode(1), 'Rail Fence Encode: Wrong String Type')
fail(() => railFence.decode(1), 'Rail Fence Decode: Wrong String Type')
fail(
	() => railFence.encode('hello', [-2, -3]),
	'Rail Fence Encode: Wrong Key (negative)',
)
fail(
	() => railFence.decode('hloel', [-2, -3]),
	'Rail Fence Decode: Wrong Key (negative)',
)
fail(
	() => railFence.encode('hello', [98, 0]),
	'Rail Fence Encode: Wrong Key (too big)',
)
fail(
	() => railFence.decode('hloel', [98, 0]),
	'Rail Fence Decode: Wrong Key (too big)',
)
fail(
	() => railFence.encode('hello', ['2', '3']),
	'Rail Fence Encode: Wrong Key (string)',
)
fail(
	() => railFence.decode('hloel', ['2', '3']),
	'Rail Fence Decode: Wrong Key (string)',
)

succeed(() => hash.create('hello', ['sha256', 'hex']), 'Hash: Normal')
fail(() => hash.create(1), 'Hash: Wrong String Type')
fail(() => hash.create('hello', 3), 'Hash: Wrong Options type')
fail(() => hash.create('hello', [-3, 456]), 'Hash: Wrong Options')

succeed(
	() => hmac.create(['hello', 'abc 123'], ['sha256', 'hex']),
	'HMAC: Normal',
)
fail(() => hmac.create([1, 'abc 123']), 'HMAC: Wrong String Type')
fail(() => hmac.create(['hello', 'abcdefg 123 /wrong/']), 'HMAC: Wrong Key')
fail(() => hmac.create(['hello', 1]), 'HMAC: Wrong Key Type')
fail(() => hmac.create(['hello', 'abc 123'], 3), 'HMAC: Wrong Options type')
fail(() => hmac.create(['hello', 'abc 123'], [-3, 456]), 'HMAC: Wrong Options')

succeed(() => vignere.encode('Hello!', 'world'), 'Vignere: Normal')
fail(() => vignere.encode(4, 'world'), 'Vignere: Wrong String Type')
fail(() => vignere.encode('Hello!', 4), 'Vignere: Wrong Key Type')
fail(
	() => vignere.encode('Hello!', 'World!'),
	'Vignere: Unknown Characters In Key',
)

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
