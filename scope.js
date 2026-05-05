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
	//console.log(functionOnlyVar); // Uncomment to see ReferenceError

	// 3) Block scope: let/const are block-scoped, var is not.
	function blockScopeExample() {
		if (true) {
			var notBlockScoped = "var escapes the block";
			let blockScopedLet = "let stays in the block";
			const blockScopedConst = "const stays in the block";

			console.log("3) Block scope (inside) ->", blockScopedLet, "|", blockScopedConst);
		}

		console.log("3) var outside block ->", notBlockScoped);
		// console.log(blockScopedLet); // Uncomment to see ReferenceError
		// console.log(blockScopedConst); // Uncomment to see ReferenceError
	}

	blockScopeExample();

	// 4) Lexical scope: inner functions can read parent variables.
	function outerLexical() {
		const outerValue = "from outer function";

		function innerLexical() {
			const innerValue = "from inner function";
			console.log("4) Lexical scope ->", outerValue, "&", innerValue);
		}

		innerLexical();
		// console.log(innerValue); // Uncomment to see ReferenceError
	}

	outerLexical();

	
	// 5) Shadowing: inner scope variable with same name hides outer one.
	const role = "student";

	function shadowingExample() {
		const role = "mentor";
		console.log("5) Shadowing (inside) ->", role);
	}

	shadowingExample();
	console.log("5) Shadowing (outside) ->", role);

	// 6) Closures: function remembers variables from where it was created.
	function createCounter() {
		let count = 0;

		return function increment() {
			count += 1;
			return count;
		};
	}

	const counterA = createCounter();
	const counterB = createCounter();

	console.log("6) Closure counterA ->", counterA()); // 1
	console.log("6) Closure counterA ->", counterA()); // 2
	console.log("6) Closure counterB ->", counterB()); // 1 (separate scope)

	// 7) Scope in loops: let creates a new binding each iteration.
	const withVar = [];
	for (var i = 0; i < 3; i++) {
		withVar.push(() => i);
	}

	const withLet = [];
	for (let j = 0; j < 3; j++) {
		withLet.push(() => j);
	}

	console.log("7) Loop scope with var ->", withVar[0](), withVar[1](), withVar[2]()); // 3 3 3
	console.log("7) Loop scope with let ->", withLet[0](), withLet[1](), withLet[2]()); // 0 1 2

	console.log("===== End of Examples =====");

	
})()