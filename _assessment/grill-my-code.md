## Grill My Code

> **Generated:** 2026-05-05 11:44:16 UTC
> **Commits reviewed:** `40c4b0d` → `e94a77d`

> **Files assessed:** `array-functions.js`, `scope.js`

---

## Recall

_These questions check your knowledge of what specific parts of your code do._

1. **`array-functions.js`**
   ```
   productsArray.every(product => product.inStock === true);
   ```
   What does the `isEveryProductInStock` function return if all products in `productsArray` have `inStock` set to `true`?
2. **`array-functions.js`**
   ```
   productsArray.filter(product => product.price > minPrice);
   ```
   What does `getProductsAbovePrice` return when called with a `minPrice` of 30?
3. **`array-functions.js`**
   ```
   productsArray.find(product => product.price > threshold);
   ```
   What is the result of `findFirstExpensiveProduct(products, 50)` based on the provided `products` array?
4. **`array-functions.js`**
   ```
   price: Number((product.price * multiplier).toFixed(2)),
   ```
   In `applyDiscountToAllProducts`, what does the `price` property represent for each product in the returned array?
5. **`array-functions.js`**
   ```
   return productsArray.reduce((sum, product) => {
       return sum + product.price;
   }, 0);
   ```
   What value does `getTotalPrice(products)` return for the provided sample `products` array?
6. **`array-functions.js`**
   ```
   if (!categories.includes(product.category)) {
       categories.push(product.category);
   }
   ```
   What is the purpose of checking `!categories.includes(product.category)` in `getUniqueCategories`?
7. **`array-functions.js`**
   ```
   grouped[product.category].push(product.name);
   ```
   In `groupProductsByCategory`, what is stored in the array at `grouped[product.category]` for each category?
8. **`array-functions.js`**
   ```
   return [...productsArray].sort((a, b) => a.price - b.price);
   ```
   What does `sortProductsByPrice` return, and how is the returned array ordered?
9. **`array-functions.js`**
   ```
   return productsArray.flatMap(product => product.tags);
   ```
   What kind of array does `getAllTagsFlat` produce from the `products` array?
10. **`array-functions.js`**
    ```
    const chunkIndex = Math.floor(index / chunkSize);
    ```
    In `chunkProducts`, what does `chunkIndex` represent for each product?
11. **`array-functions.js`**
    ```
    const products = [
        {
            id: 1,
            name: "Keyboard",
            category: "electronics",
            price: 89.99,
            inStock: true,
            tags: ["office", "usb"]
        },
        // ...
    ];
    ```
    What kind of data structure is `products`, and what does each element represent?
12. **`array-functions.js`**
    ```
    console.log("Products above 30:");
    console.log(getProductsAbovePrice(products, 30));
    ```
    What is outputted when `getProductsAbovePrice(products, 30)` is called using the sample data?
13. **`array-functions.js`**
    ```
    console.log("Products chunked by size 2:");
    console.log(chunkProducts(products, 2));
    ```
    How many chunks does `chunkProducts(products, 2)` produce for the sample array?
14. **`scope.js`**
    ```
    const appName = "Scope Lab";
    ```
    What is the value of `appName` throughout the file?
15. **`scope.js`**
    ```
    function printGlobal() {
        console.log("1) Global scope ->", appName);
    }
    ```
    What does `printGlobal` log to the console when called?
16. **`scope.js`**
    ```
    var functionOnlyVar = "I exist only inside this function";
    ```
    In `functionScopeExample`, where is `functionOnlyVar` accessible?
17. **`scope.js`**
    ```
    let blockScopedLet = "let stays in the block";
    const blockScopedConst = "const stays in the block";
    ```
    Within `blockScopeExample`, what is the scope of `blockScopedLet` and `blockScopedConst`?
18. **`scope.js`**
    ```
    var notBlockScoped = "var escapes the block";
    ```
    Why can `notBlockScoped` be logged outside the block in `blockScopeExample`?
19. **`scope.js`**
    ```
    const outerValue = "from outer function";
    ```
    What value is accessible to `innerLexical` from its enclosing scope?
20. **`scope.js`**
    ```
    const role = "student";
    ```
    What is the value of `role` outside the `shadowingExample` function?

## Comprehension

_These questions ask you to explain why or how particular choices in your code work the way they do._

21. **`array-functions.js`**
    ```
    return productsArray.every(product => product.inStock === true);
    ```
    Why does `isEveryProductInStock` use the `.every` method instead of `.filter`?
22. **`array-functions.js`**
    ```
    return productsArray.filter(product => product.price > minPrice);
    ```
    How does `getProductsAbovePrice` determine which products to include in its result?
23. **`array-functions.js`**
    ```
    return productsArray.find(product => product.price > threshold);
    ```
    Why does `findFirstExpensiveProduct` return only one product rather than an array?
24. **`array-functions.js`**
    ```
    price: Number((product.price * multiplier).toFixed(2)),
    ```
    How does `applyDiscountToAllProducts` ensure the discounted price has only two decimal places?
25. **`array-functions.js`**
    ```
    return productsArray.reduce((sum, product) => {
        return sum + product.price;
    }, 0);
    ```
    Why is the initial value for `reduce` set to `0` in `getTotalPrice`?
26. **`array-functions.js`**
    ```
    if (!categories.includes(product.category)) {
        categories.push(product.category);
    }
    ```
    How does this check in `getUniqueCategories` prevent duplicate categories in the result?
27. **`array-functions.js`**
    ```
    grouped[product.category].push(product.name);
    ```
    Why does `groupProductsByCategory` store product names rather than the whole product object?
28. **`array-functions.js`**
    ```
    return [...productsArray].sort((a, b) => a.price - b.price);
    ```
    Why does `sortProductsByPrice` spread `productsArray` into a new array before sorting?
29. **`array-functions.js`**
    ```
    return productsArray.flatMap(product => product.tags);
    ```
    How does `flatMap` differ from `map` in the context of `getAllTagsFlat`?
30. **`array-functions.js`**
    ```
    const chunkIndex = Math.floor(index / chunkSize);
    ```
    How does `chunkProducts` use `chunkIndex` to divide the array into sub-arrays?
31. **`scope.js`**
    ```
    function printGlobal() {
        console.log("1) Global scope ->", appName);
    }
    ```
    How does `printGlobal` access `appName` from outside its own scope?
32. **`scope.js`**
    ```
    var functionOnlyVar = "I exist only inside this function";
    ```
    How is the scope of `functionOnlyVar` determined in `functionScopeExample`?
33. **`scope.js`**
    ```
    let blockScopedLet = "let stays in the block";
    const blockScopedConst = "const stays in the block";
    ```
    Why are `blockScopedLet` and `blockScopedConst` not accessible outside the `if` block?
34. **`scope.js`**
    ```
    var notBlockScoped = "var escapes the block";
    ```
    Why does declaring `notBlockScoped` with `var` allow it to be used after the block ends?
35. **`scope.js`**
    ```
    function innerLexical() {
        const innerValue = "from inner function";
        console.log("4) Lexical scope ->", outerValue, "&", innerValue);
    }
    ```
    How does `innerLexical` access `outerValue` from its parent function?
36. **`scope.js`**
    ```
    const role = "student";
    ```
    Why does the value of `role` change inside `shadowingExample`?
37. **`scope.js`**
    ```
    const role = "mentor";
    ```
    How does the declaration of `role` inside `shadowingExample` affect the value seen inside the function?

## Analysis

_These questions ask you to trace execution, reason about logic, or identify issues._

38. **`array-functions.js`**
    ```
    productsArray.every(product => product.inStock === true);
    ```
    What happens if `productsArray` is empty when calling `isEveryProductInStock`?
39. **`array-functions.js`**
    ```
    productsArray.filter(product => product.price > minPrice);
    ```
    If all products have a price less than or equal to `minPrice`, what is the result of `getProductsAbovePrice`?
40. **`array-functions.js`**
    ```
    productsArray.find(product => product.price > threshold);
    ```
    What does `findFirstExpensiveProduct` return if no product meets the threshold condition?
41. **`array-functions.js`**
    ```
    price: Number((product.price * multiplier).toFixed(2)),
    ```
    How would the price calculation behave if `discountPercent` is 0 or 100 in `applyDiscountToAllProducts`?
42. **`array-functions.js`**
    ```
    return productsArray.reduce((sum, product) => {
        return sum + product.price;
    }, 0);
    ```
    If any product is missing the `price` property, how does `getTotalPrice` handle that product?
43. **`array-functions.js`**
    ```
    grouped[product.category].push(product.name);
    ```
    What happens if two products in the array share the same category in `groupProductsByCategory`?
44. **`array-functions.js`**
    ```
    return [...productsArray].sort((a, b) => a.price - b.price);
    ```
    How does `sortProductsByPrice` handle products with identical prices?
45. **`array-functions.js`**
    ```
    return productsArray.flatMap(product => product.tags);
    ```
    If some products have an empty `tags` array, how does `getAllTagsFlat` behave?
46. **`array-functions.js`**
    ```
    chunkProducts(products, 2)
    ```
    If `chunkSize` is larger than the number of products, what does `chunkProducts` return?
47. **`scope.js`**
    ```
    var functionOnlyVar = "I exist only inside this function";
    ```
    What happens if you try to access `functionOnlyVar` outside of `functionScopeExample`?
48. **`scope.js`**
    ```
    let blockScopedLet = "let stays in the block";
    ```
    What would happen if you tried to log `blockScopedLet` after the `if (true)` block ends in `blockScopeExample`?
49. **`scope.js`**
    ```
    const role = "mentor";
    ```
    When the `shadowingExample` function runs, how does the value of `role` inside the function compare to outside?

## Evaluation

_These questions ask you to judge design decisions, tradeoffs, or rationale._

50. **`array-functions.js`**
    ```
    (() => {
        // ... all function definitions and usage
    })();
    ```
    What are the advantages and disadvantages of wrapping the entire file in an immediately invoked function expression (IIFE)?

---

<sub>Generated by [grill-my-code](https://github.com/NSCC-ITC-Assessment/GrillMyCode) · gpt-4.1 via github-models · main</sub>