## Grill My Code

> **Generated:** 2026-05-05 11:48:04 UTC
> **Commits reviewed:** `40c4b0d` → `1422021`

> **Files assessed:** `array-functions.js`, `scope.js`

---

## Recall

_These questions check your knowledge of what specific parts of your code do._

1. **`array-functions.js`**
   ```
   productsArray.every(product => product.inStock === true);
   ```
   What does `isEveryProductInStock` return if all products in `productsArray` have `inStock` set to `true`?

2. **`array-functions.js`**
   ```
   productsArray.filter(product => product.price > minPrice);
   ```
   What will `getProductsAbovePrice` return when `minPrice` is higher than any product's price?

3. **`array-functions.js`**
   ```
   productsArray.find(product => product.price > threshold);
   ```
   What does `findFirstExpensiveProduct` return if no product's price exceeds `threshold`?

4. **`array-functions.js`**
   ```
   price: Number((product.price * multiplier).toFixed(2)),
   ```
   What is the effect of applying `applyDiscountToAllProducts` with `discountPercent` set to `0`?

5. **`array-functions.js`**
   ```
   return productsArray.reduce((sum, product) => {
      return sum + product.price;
   }, 0);
   ```
   What does `getTotalPrice` output for an empty `productsArray`?

6. **`array-functions.js`**
   ```
   if (!categories.includes(product.category)) {
      categories.push(product.category);
   }
   ```
   What does `getUniqueCategories` produce if all products share the same category?

7. **`array-functions.js`**
   ```
   grouped[product.category].push(product.name);
   ```
   What is the structure of the object returned by `groupProductsByCategory`?

8. **`array-functions.js`**
   ```
   return [...productsArray].sort((a, b) => a.price - b.price);
   ```
   What does `sortProductsByPrice` guarantee about the order of its output?

9. **`array-functions.js`**
   ```
   productsArray.flatMap(product => product.tags);
   ```
   What is the type of value returned by `getAllTagsFlat`?

10. **`array-functions.js`**
    ```
    chunks[chunkIndex].push(product);
    ```
    What does `chunkProducts` return when called with a `chunkSize` larger than the length of `productsArray`?

11. **`array-functions.js`**
    ```
    console.log(isEveryProductInStock(products));
    ```
    What is the result printed when `isEveryProductInStock` is called with the provided `products` array?

12. **`array-functions.js`**
    ```
    console.log(getProductsAbovePrice(products, 30));
    ```
    Which products are listed in the output of `getProductsAbovePrice(products, 30)`?

13. **`array-functions.js`**
    ```
    console.log(findFirstExpensiveProduct(products, 50));
    ```
    Which product does `findFirstExpensiveProduct(products, 50)` return?

14. **`array-functions.js`**
    ```
    console.log(applyDiscountToAllProducts(products, 10));
    ```
    What is the discounted price of "Keyboard" after applying a 10% discount?

15. **`scope.js`**
    ```
    const appName = "Scope Lab";
    ```
    What value does `printGlobal` log for `appName`?

16. **`scope.js`**
    ```
    var functionOnlyVar = "I exist only inside this function";
    ```
    Where can `functionOnlyVar` be accessed within `scope.js`?

17. **`scope.js`**
    ```
    var notBlockScoped = "var escapes the block";
    ```
    Is `notBlockScoped` accessible outside the `if (true)` block in `blockScopeExample`?

18. **`scope.js`**
    ```
    let blockScopedLet = "let stays in the block";
    ```
    Is `blockScopedLet` accessible outside the block in which it is declared?

19. **`scope.js`**
    ```
    const role = "student";
    ```
    What value is printed by `console.log("5) Shadowing (outside) ->", role);`?

20. **`scope.js`**
    ```
    let count = 0;
    ```
    What does each call to `counterA()` return, given the initial value of `count`?

## Comprehension

_These questions ask you to explain why or how particular choices in your code work the way they do._

21. **`array-functions.js`**
    ```
    productsArray.every(product => product.inStock === true);
    ```
    Why did you use the `every` method rather than `filter` to check if all products are in stock?

22. **`array-functions.js`**
    ```
    productsArray.filter(product => product.price > minPrice);
    ```
    How does `getProductsAbovePrice` determine which products to include in its output?

23. **`array-functions.js`**
    ```
    Number((product.price * multiplier).toFixed(2)),
    ```
    Why did you use `toFixed(2)` and then wrap with `Number()` when calculating the discounted price?

24. **`array-functions.js`**
    ```
    grouped[product.category].push(product.name);
    ```
    How does `groupProductsByCategory` ensure that product names are grouped under their categories?

25. **`array-functions.js`**
    ```
    return [...productsArray].sort((a, b) => a.price - b.price);
    ```
    Why did you create a shallow copy of `productsArray` with `[...]` before sorting?

26. **`array-functions.js`**
    ```
    productsArray.flatMap(product => product.tags);
    ```
    How does `flatMap` differ from `map` in the context of `getAllTagsFlat`?

27. **`array-functions.js`**
    ```
    const chunkIndex = Math.floor(index / chunkSize);
    ```
    How does `chunkProducts` use `chunkIndex` to organize products into chunks?

28. **`scope.js`**
    ```
    var notBlockScoped = "var escapes the block";
    ```
    Why does `notBlockScoped` remain accessible outside the `if (true)` block?

29. **`scope.js`**
    ```
    let blockScopedLet = "let stays in the block";
    ```
    How does declaring `blockScopedLet` with `let` affect its visibility compared to `var`?

30. **`scope.js`**
    ```
    function innerLexical() {
        const innerValue = "from inner function";
        console.log("4) Lexical scope ->", outerValue, "&", innerValue);
    }
    ```
    How is `outerValue` accessible to `innerLexical`, even though it's defined in `outerLexical`?

31. **`scope.js`**
    ```
    const role = "student";
    ```
    Why does the value of `role` differ inside and outside the `shadowingExample` function?

32. **`scope.js`**
    ```
    let count = 0;
    return function increment() {
        count += 1;
        return count;
    };
    ```
    How does `createCounter` use closure to maintain a persistent state across calls?

33. **`scope.js`**
    ```
    for (var i = 0; i < 3; i++) {
        withVar.push(() => i);
    }
    ```
    Why do all functions in `withVar` return the same value after the loop completes?

34. **`scope.js`**
    ```
    for (let j = 0; j < 3; j++) {
        withLet.push(() => j);
    }
    ```
    How does using `let` for the loop variable change the behavior of the functions in `withLet`?

35. **`scope.js`**
    ```
    console.log("6) Closure counterA ->", counterA());
    ```
    How do repeated calls to `counterA()` affect the value printed?

## Analysis

_These questions ask you to trace execution, reason about logic, or identify issues._

36. **`array-functions.js`**
    ```
    productsArray.map(product => {
        return {
            id: product.id,
            name: product.name,
            category: product.category,
            price: Number((product.price * multiplier).toFixed(2)),
            inStock: product.inStock,
            tags: product.tags
        };
    });
    ```
    If the original product objects contain additional properties not listed here, what happens to those properties in the result of `applyDiscountToAllProducts`?

37. **`array-functions.js`**
    ```
    return productsArray.reduce((categories, product) => {
        if (!categories.includes(product.category)) {
            categories.push(product.category);
        }
        return categories;
    }, []);
    ```
    How would `getUniqueCategories` behave if two products had categories with different casing, e.g., `"Electronics"` and `"electronics"`?

38. **`array-functions.js`**
    ```
    grouped[product.category].push(product.name);
    ```
    What happens if two products share the same category and name in `groupProductsByCategory`?

39. **`array-functions.js`**
    ```
    return [...productsArray].sort((a, b) => a.price - b.price);
    ```
    What potential issues could arise if some products lack a `price` property?

40. **`array-functions.js`**
    ```
    productsArray.flatMap(product => product.tags);
    ```
    What would be the result if some products have `tags` set to `undefined`?

41. **`array-functions.js`**
    ```
    chunks[chunkIndex].push(product);
    ```
    How does `chunkProducts` handle cases where `chunkSize` is not a positive integer?

42. **`array-functions.js`**
    ```
    console.log(getTotalPrice(products));
    ```
    If one product's price were set to a string value, how would `getTotalPrice` respond?

43. **`scope.js`**
    ```
    functionOnlyVar = "I exist only inside this function";
    ```
    What error, if any, occurs if you try to access `functionOnlyVar` outside `functionScopeExample`?

44. **`scope.js`**
    ```
    let blockScopedLet = "let stays in the block";
    ```
    What would happen if you tried to log `blockScopedLet` outside the block?

45. **`scope.js`**
    ```
    const role = "student";
    function shadowingExample() {
        const role = "mentor";
        console.log("5) Shadowing (inside) ->", role);
    }
    ```
    If you removed the inner `const role` declaration, what would `shadowingExample` print?

46. **`scope.js`**
    ```
    let count = 0;
    return function increment() {
        count += 1;
        return count;
    };
    ```
    What happens to `count` in `counterA` if `counterB` is called?

47. **`scope.js`**
    ```
    for (var i = 0; i < 3; i++) {
        withVar.push(() => i);
    }
    ```
    Why do `withVar[0]()`, `withVar[1]()`, and `withVar[2]()` all return the same result?

48. **`scope.js`**
    ```
    for (let j = 0; j < 3; j++) {
        withLet.push(() => j);
    }
    ```
    If you call `withLet[1]()`, what value is returned and why?

49. **`scope.js`**
    ```
    console.log("6) Closure counterA ->", counterA()); 
    console.log("6) Closure counterA ->", counterA()); 
    console.log("6) Closure counterB ->", counterB()); 
    ```
    Why does `counterB()` return a different value than the preceding `counterA()` calls?

## Evaluation

_These questions ask you to judge design decisions, tradeoffs, or rationale._

50. **`array-functions.js`**
    ```
    (() => {
        // ... all function declarations and calls ...
    })();
    ```
    What is the rationale for wrapping all code in an immediately invoked function expression (IIFE) in `array-functions.js` and how does this affect variable visibility and potential for conflicts?

---

<sub>Generated by [grill-my-code](https://github.com/NSCC-ITC-Assessment/GrillMyCode) · gpt-4.1 via github-models · main</sub>