// IIFE - Immediately Invoked Function Expression
(() => {
	// Array manipulation functions using a product catalog

	// 1st Function: check if all products are in stock
	const isEveryProductInStock = (productsArray) => {
		return productsArray.every(product => product.inStock === true);
	};

	// 2nd Function: find products above a minimum price
	const getProductsAbovePrice = (productsArray, minPrice) => {
		return productsArray.filter(product => product.price > minPrice);
	};

	// 3rd Function: find first expensive product
	const findFirstExpensiveProduct = (productsArray, threshold) => {
		return productsArray.find(product => product.price > threshold);
	};

	// 4th Function: apply discount to every product
	const applyDiscountToAllProducts = (productsArray, discountPercent) => {
		const multiplier = 1 - discountPercent / 100;

		return productsArray.map(product => {
			return {
				id: product.id,
				name: product.name,
				category: product.category,
				price: Number((product.price * multiplier).toFixed(2)),
				inStock: product.inStock,
				tags: product.tags
			};
		});
	};

	// 5th Function: sum all product prices
	const getTotalPrice = (productsArray) => {
		return productsArray.reduce((sum, product) => {
			return sum + product.price;
		}, 0);
	};

	// 6th Function: collect unique categories
	const getUniqueCategories = (productsArray) => {
		return productsArray.reduce((categories, product) => {
			if (!categories.includes(product.category)) {
				categories.push(product.category);
			}

			return categories;
		}, []);
	};

	// 7th Function: group products by category
	const groupProductsByCategory = (productsArray) => {
		return productsArray.reduce((grouped, product) => {
			if (!grouped[product.category]) {
				grouped[product.category] = [];
			}

			grouped[product.category].push(product.name);
			return grouped;
		}, {});
	};

	// 8th Function: sort products by price (low to high)
	const sortProductsByPrice = (productsArray) => {
		return [...productsArray].sort((a, b) => a.price - b.price);
	};

	// 9th Function: flatten all tags from all products
	const getAllTagsFlat = (productsArray) => {
		return productsArray.flatMap(product => product.tags);
	};

	// 10th Function: split array into chunks
	const chunkProducts = (productsArray, chunkSize) => {
		return productsArray.reduce((chunks, product, index) => {
			const chunkIndex = Math.floor(index / chunkSize);

			if (!chunks[chunkIndex]) {
				chunks[chunkIndex] = [];
			}

			chunks[chunkIndex].push(product);
			return chunks;
		}, []);
	};

	const products = [
		{
			id: 1,
			name: "Keyboard",
			category: "electronics",
			price: 89.99,
			inStock: true,
			tags: ["office", "usb"]
		},
		{
			id: 2,
			name: "Notebook",
			category: "stationery",
			price: 4.5,
			inStock: true,
			tags: ["paper", "school"]
		},
		{
			id: 3,
			name: "Mouse",
			category: "electronics",
			price: 29.99,
			inStock: false,
			tags: ["office", "wireless"]
		},
		{
			id: 4,
			name: "Desk Lamp",
			category: "furniture",
			price: 45,
			inStock: true,
			tags: ["home", "office"]
		},
		{
			id: 5,
			name: "Pen Set",
			category: "stationery",
			price: 12.75,
			inStock: true,
			tags: ["school", "office"]
		}
	];

	// 1st Function demo
	console.log("Is every product in stock?");
	console.log(isEveryProductInStock(products));

	// 2nd Function demo
	console.log("Products above 30:");
	console.log(getProductsAbovePrice(products, 30));

	// 3rd Function demo
	console.log("First product above 50:");
	console.log(findFirstExpensiveProduct(products, 50));

	// 4th Function demo
	console.log("Products after 10% discount:");
	console.log(applyDiscountToAllProducts(products, 10));

	// 5th Function demo
	console.log("Total price of all products:");
	console.log(getTotalPrice(products));

	// 6th Function demo
	console.log("Unique categories:");
	console.log(getUniqueCategories(products));

	// 7th Function demo
	console.log("Products grouped by category:");
	console.log(groupProductsByCategory(products));

	// 8th Function demo
	console.log("Products sorted by price:");
	console.log(sortProductsByPrice(products));

	// 9th Function demo
	console.log("All tags flattened:");
	console.log(getAllTagsFlat(products));

	// 10th Function demo
	console.log("Products chunked by size 2:");
	console.log(chunkProducts(products, 2));
})();
