## Grill My Code

> **Generated:** 2026-05-05 11:39:03 UTC
> **Commits reviewed:** `40c4b0d` → `303f870`

> **Files assessed:** `array-functions.js`, `scope.js`

---

## Recall

_These questions check your knowledge of what specific parts of your code do._

1. **`array-functions.js`**
   ```
   productsArray.every(product => product.inStock === true);
   ```
   What does the function `isEveryProductInStock` return if every product in `productsArray` has `inStock` set to `true`?

2. **`array-functions.js`**
   ```
   productsArray.filter(product => product.price > minPrice);
   ```
   What does `getProductsAbovePrice` return when `minPrice` is set to `30`?

3. **`array-functions.js`**
   ```
   productsArray.find(product => product.price > threshold);
   ```
   What is the output of `findFirstExpensiveProduct` if no product’s price exceeds `threshold`?

4. **`array-functions.js`**
   ```
   price: Number((product.price * multiplier).toFixed(2)),
   ```
   What is the new `price` property in each object returned by `applyDiscountToAllProducts`?

5. **`array-functions.js`**
   ```
   return sum + product.price;
   ```
   What does `getTotalPrice` accumulate in its returned value?

6. **`array-functions.js`**
   ```
   if (!categories.includes(product.category)) {
       categories.push(product.category);
   }
   ```
   What does `getUniqueCategories` include in its returned array?

7. **`array-functions.js`**
   ```
   if (!grouped[product.category]) {
       grouped[product.category] = [];
   }
   grouped[product.category].push(product.name);
   ```
   What does `groupProductsByCategory` store as the values in its returned object?

8. **`array-functions.js`**
   ```
   [...productsArray].sort((a, b) => a.price - b.price);
   ```
   What does `sortProductsByPrice` return in terms of order and structure?

9. **`array-functions.js`**
   ```
   productsArray.flatMap(product => product.tags);
   ```
   What does `getAllTagsFlat` return for the given `products` array?

10. **`array-functions.js`**
    ```
    const chunkIndex = Math.floor(index / chunkSize);
    ```
    What does `chunkProducts` use `chunkIndex` for when building the returned array?

11. **`array-functions.js`**
    ```
    id: 1,
    name: "Keyboard",
    category: "electronics",
    ```
    What are the properties and values of the first object in the `products` array?

12. **`array-functions.js`**
    ```
    console.log(isEveryProductInStock(products));
    ```
    What does this `console.log` statement print for the provided `products` data?

13. **`array-functions.js`**
    ```
    console.log(getProductsAbovePrice(products, 30));
    ```
    What is the output of this statement for the current `products` array?

14. **`array-functions.js`**
    ```
    console.log(findFirstExpensiveProduct(products, 50));
    ```
    What does this log print for the supplied `products` array?

15. **`array-functions.js`**
    ```
    console.log(applyDiscountToAllProducts(products, 10));
    ```
    What is the result of this statement for all products with a 10% discount applied?

16. **`array-functions.js`**
    ```
    console.log(getTotalPrice(products));
    ```
    What does this log statement return for the given `products`?

17. **`array-functions.js`**
    ```
    console.log(getUniqueCategories(products));
    ```
    What does this statement output for the provided `products`?

18. **`array-functions.js`**
    ```
    console.log(groupProductsByCategory(products));
    ```
    What does the log statement show for the `products` array grouped by category?

19. **`array-functions.js`**
    ```
    console.log(sortProductsByPrice(products));
    ```
    What does this statement display regarding the order of products?

20. **`array-functions.js`**
    ```
    console.log(getAllTagsFlat(products));
    ```
    What is the result of flattening all tags from the `products` array?

21. **`array-functions.js`**
    ```
    console.log(chunkProducts(products, 2));
    ```
    What does this log statement output for chunk size of 2?

22. **`scope.js`**
    ```
    const appName = "Scope Lab";
    ```
    What is the value of `appName` used throughout `scope.js`?

23. **`scope.js`**
    ```
    function printGlobal() {
        console.log("1) Global scope ->", appName);
    }
    ```
    What does the `printGlobal` function output when called?

24. **`scope.js`**
    ```
    var functionOnlyVar = "I exist only inside this function";
    const functionOnlyConst = "Me too";
    ```
    What are the values of `functionOnlyVar` and `functionOnlyConst` inside `functionScopeExample`?

25. **`scope.js`**
    ```
    console.log("2) Function scope (inside) ->", functionOnlyVar, "|", functionOnlyConst);
    ```
    What does this `console.log` statement print inside `functionScopeExample`?

26. **`scope.js`**
    ```
    var notBlockScoped = "var escapes the block";
    let blockScopedLet = "let stays in the block";
    const blockScopedConst = "const stays in the block";
    ```
    Which variables are accessible outside the block in `blockScopeExample`?

27. **`scope.js`**
    ```
    console.log("3) Block scope (inside) ->", blockScopedLet, "|", blockScopedConst);
    ```
    What values are printed inside the block of `blockScopeExample`?

28. **`scope.js`**
    ```
    console.log("3) var outside block ->", notBlockScoped);
    ```
    What does this statement print after the block in `blockScopeExample`?

29. **`scope.js`**
    ```
    const outerValue = "from outer function";
    ```
    What is the value of `outerValue` within `outerLexical`?

30. **`scope.js`**
    ```
    const innerValue = "from inner function";
    ```
    What is the value of `innerValue` inside `innerLexical`?

31. **`scope.js`**
    ```
    console.log("4) Lexical scope ->", outerValue, "&", innerValue);
    ```
    What is printed by this statement within `innerLexical`?

## Comprehension

_These questions ask you to explain why or how particular choices in your code work the way they do._

32. **`array-functions.js`**
    ```
    return productsArray.every(product => product.inStock === true);
    ```
    Why did you choose `.every` for `isEveryProductInStock` instead of `.some` or `.filter`?

33. **`array-functions.js`**
    ```
    return productsArray.filter(product => product.price > minPrice);
    ```
    How does the `.filter` method determine which products to include in the result of `getProductsAbovePrice`?

34. **`array-functions.js`**
    ```
    return productsArray.find(product => product.price > threshold);
    ```
    Why does `findFirstExpensiveProduct` potentially return `undefined`?

35. **`array-functions.js`**
    ```
    price: Number((product.price * multiplier).toFixed(2)),
    ```
    How does the calculation of `price` in `applyDiscountToAllProducts` ensure prices are rounded to two decimals?

36. **`array-functions.js`**
    ```
    return productsArray.reduce((sum, product) => {
        return sum + product.price;
    }, 0);
    ```
    Why did you initialize the `reduce` accumulator to `0` in `getTotalPrice`?

37. **`array-functions.js`**
    ```
    if (!categories.includes(product.category)) {
        categories.push(product.category);
    }
    ```
    How does the check for `.includes` prevent duplicates in `getUniqueCategories`?

38. **`array-functions.js`**
    ```
    grouped[product.category].push(product.name);
    ```
    Why did you choose to group by `category` and store only `product.name` in `groupProductsByCategory`?

39. **`array-functions.js`**
    ```
    [...productsArray].sort((a, b) => a.price - b.price);
    ```
    Why did you use the spread operator `[...]` before sorting in `sortProductsByPrice`?

40. **`array-functions.js`**
    ```
    productsArray.flatMap(product => product.tags);
    ```
    How does `.flatMap` differ from `.map` in the behavior of `getAllTagsFlat`?

41. **`array-functions.js`**
    ```
    const chunkIndex = Math.floor(index / chunkSize);
    ```
    How does the calculation of `chunkIndex` ensure products are divided into chunks of the desired size in `chunkProducts`?

42. **`array-functions.js`**
    ```
    return productsArray.reduce((chunks, product, index) => {
        //...
    }, []);
    ```
    Why did you use `.reduce` for chunking instead of a traditional loop in `chunkProducts`?

43. **`scope.js`**
    ```
    const appName = "Scope Lab";
    ```
    How does the declaration of `appName` affect its accessibility in other functions within the IIFE?

44. **`scope.js`**
    ```
    var functionOnlyVar = "I exist only inside this function";
    const functionOnlyConst = "Me too";
    ```
    How does the use of `var` and `const` inside `functionScopeExample` demonstrate differences in scope?

45. **`scope.js`**
    ```
    let blockScopedLet = "let stays in the block";
    const blockScopedConst = "const stays in the block";
    ```
    Why are `blockScopedLet` and `blockScopedConst` not accessible outside the block?

46. **`scope.js`**
    ```
    var notBlockScoped = "var escapes the block";
    ```
    How does using `var` here illustrate its behavior relative to block scope?

47. **`scope.js`**
    ```
    function innerLexical() {
        const innerValue = "from inner function";
        console.log("4) Lexical scope ->", outerValue, "&", innerValue);
    }
    ```
    How does `innerLexical` access `outerValue` from `outerLexical`?

48. **`scope.js`**
    ```
    (() => {
        //...
    })()
    ```
    Why did you wrap all code in an immediately-invoked function expression (IIFE)?

49. **`scope.js`**
    ```
    console.log("===== JavaScript Scope Examples =====");
    ```
    Why did you include this log statement at the start of the script?

50. **`array-functions.js`**
    ```
    tags: product.tags
    ```
    Why did you choose to preserve the `tags` property when creating discounted products in `applyDiscountToAllProducts`?

---

<sub>Generated by [grill-my-code](https://github.com/NSCC-ITC-Assessment/GrillMyCode) · gpt-4.1 via github-models · main</sub>