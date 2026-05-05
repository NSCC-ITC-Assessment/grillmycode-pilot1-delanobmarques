(() => {
	console.log("===== JavaScript Scope Examples =====");

	// 1) Global scope: accessible everywhere in this file.
	const appName = "Scope Lab";

	function printGlobal() {
		console.log("1) Global scope ->", appName);
	}

	printGlobal();

	// 2) Function scope: variables declared with var/let/const inside
	// a function are not visible outside that function.
	function functionScopeExample() {
		var functionOnlyVar = "I exist only inside this function";
		const functionOnlyConst = "Me too";

		console.log("2) Function scope (inside) ->", functionOnlyVar, "|", functionOnlyConst);
	}

	functionScopeExample();
	console.log(functionOnlyVar); // Uncomment to see ReferenceError

	
})()