function gcd(a, b) {
	if (a == 0 || b == 0) return 0

	if (a == b) return a

	if (a > b) return gcd(a - b, b)

	return gcd(a, b - a)
}

export { gcd }
