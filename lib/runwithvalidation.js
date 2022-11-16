function run(validate, func, decode) {
	return string => {
		if (validate(decode, string)) {
			return func(string)
		} else {
			throw new Error(`Invalid Argument: ${string}`)
		}
	}
}

function runWithKey(validate, func, decode) {
	return (string, key) => {
		if (validate(decode, string, key)) {
			return func(string, key)
		} else {
			throw new Error(`Invalid Argument: ${string} with key ${key}`)
		}
	}
}
export { run, runWithKey }
