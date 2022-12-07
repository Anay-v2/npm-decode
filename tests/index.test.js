console.log('\n----------------')
console.log('Regular Tests')
console.log('----------------\n')

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

assert(railFence.encode('Hello!', [2, 0]), 'Hloel!', 'Rail Fence - Encode')
assert(railFence.decode('Hloel!', [2, 0]), 'Hello!', 'Rail Fence - Decode')

assert(
	hash.create('hello'),
	'2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824',
	'Hash - Default',
)
assert(
	hash.create('hello', ['sha512', 'base64']),
	'm3HSJL1i83hdltRq0+o9czGb+8KJDKra4t/3JRlnPKcjI8PZm6XBHXx6zG4UuMXaDEZjR1wuXDre9G9zvN7AQw==',
	'Hash - Options',
)

assert(
	hmac.create(['hello', 'abc 123']),
	'08b81922163891559333fa6b30e2450ef1a08d452bf0f1655d1010e6c2d8b479',
	'HMAC - Default',
)
assert(
	hmac.create(['hello', 'abc 123'], ['sha512', 'base64']),
	'+ndU5Yc30cV9pg+fRFUZGay/NuumgX2k13WPcPWlDijWVmbYElLNWyzcOhi4+oKQXNyKpQTNmIsslhFSLiQysw==',
	'HMAC - Options',
)

assert(vignere.encode('Hello!', 'world'), 'Dscwr!', 'Vignere - Encode')
assert(vignere.decode('Dscwr!', 'world'), 'Hello!', 'Vignere - Decode')

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
