function run(validate, func) {
	return string => {
		if (validate(string)) {
			return func(string)
		} else {
			throw new Error(`Invalid Argument: ${string}`)
		}
	}
}

function runWithKey(validate, func) {
	return (string, key) => {
		if (validate(string, key)) {
			return func(string, key)
		} else {
			throw new Error(`Invalid Argument: ${string} with key ${key}`)
		}
	}
}
export { run, runWithKey }
