module.exports = function check(str, bracketsConfig) {

	let sameBrackets = []
	for (let el of bracketsConfig) { if (el[0] === el[1]) { sameBrackets.push(el[0]) } }
	let startBrackets = []
	let brackets = {}
	for (let el of bracketsConfig) {
		if (el[0] != el[1]) {
			startBrackets.push(el[0])
			brackets[el[0]] = el[1]
		}
	}
	//	console.log(brackets);
	let stack = []
	if (str.length) {

		if (str.length % 2 == 0) {

			for (let i = 0; i < str.length; i++) {

				if (sameBrackets.includes(str[i])) {
					if (stack[stack.length - 1] == str[i]) { stack.pop() } else { stack.push(str[i]) }
				} else {

					if (startBrackets.includes(str[i])) {
						stack.push(str[i])
						console.log(stack);
					}
					else { if (brackets[stack[stack.length - 1]] == str[i]) { stack.pop() } else { return false } }
				}

			}

		} else { return false }

	} else { return false }
	//console.log(stack);
	if (stack.length == 0) {
		return true
	} else { return false }
}
