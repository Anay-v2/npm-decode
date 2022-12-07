//? https://stackoverflow.com/questions/23013573/swap-key-with-value-in-object
function swap(json) {
	let ret = {}
	for (let key in json) {
		ret[json[key]] = key
	}
	return ret
}

export { swap }
