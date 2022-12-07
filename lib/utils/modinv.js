function modInv(a, b) {
	a %= b
	for (let i = 1; i < b; i++) {
		if ((a * i) % 26 === 1) {
			return i
		}
	}
}

export { modInv }
