## Grill My Code

> **Generated:** 2026-05-05 11:34:25 UTC
> **Commits reviewed:** `40c4b0d` → `754db0c`

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
   What does `getProductsAbovePrice` return when every product's price in `productsArray` is less than or equal to `minPrice`?
3. **`array-functions.js`**
   ```
   productsArray.find(product => product.price > threshold);
   ```
   What is the result of `findFirstExpensiveProduct` if no product in `productsArray` has a price greater than `threshold`?
4. **`array-functions.js`**
   ```
   price: Number((product.price * multiplier).toFixed(2)),
   ```
   What value is assigned to the `price` property for each product inside `applyDiscountToAllProducts`?
5. **`array-functions.js`**
   ```
   return productsArray.reduce((sum, product) => {
       return sum + product.price;
   }, 0);
   ```
   What does `getTotalPrice` return when `productsArray` is empty?
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
   In `groupProductsByCategory`, what elements are stored in each category's array within `grouped`?
8. **`array-functions.js`**
   ```
   [...productsArray].sort((a, b) => a.price - b.price);
   ```
   What does `sortProductsByPrice` return with respect to the order of products?
9. **`array-functions.js`**
   ```
   productsArray.flatMap(product => product.tags);
   ```
   What kind of array is produced by `getAllTagsFlat`?
10. **`array-functions.js`**
    ```
    const chunkIndex = Math.floor(index / chunkSize);
    ```
    How is `chunkIndex` calculated in `chunkProducts`?
11. **`array-functions.js`**
    ```
    name: "Notebook",
    category: "stationery",
    ```
    What are the `name` and `category` values for the second product in the `products` array?
12. **`array-functions.js`**
    ```
    console.log("First product above 50:");
    console.log(findFirstExpensiveProduct(products, 50));
    ```
    What does the second log statement output if no products have a price above 50?
13. **`array-functions.js`**
    ```
    console.log("Products after 10% discount:");
    console.log(applyDiscountToAllProducts(products, 10));
    ```
    What is the effect of passing `10` as the `discountPercent` to `applyDiscountToAllProducts`?
14. **`array-functions.js`**
    ```
    console.log("Products chunked by size 2:");
    console.log(chunkProducts(products, 2));
    ```
    What is the structure of the array returned by `chunkProducts(products, 2)`?
15. **`scope.js`**
    ```
    const appName = "Scope Lab";
    ```
    What value does `appName` hold throughout the execution of the IIFE in `scope.js`?
16. **`scope.js`**
    ```
    function printGlobal() {
        console.log("1) Global scope ->", appName);
    }
    ```
    What is logged when `printGlobal()` is called?
17. **`scope.js`**
    ```
    var functionOnlyVar = "I exist only inside this function";
    const functionOnlyConst = "Me too";
    ```
    What are the values of `functionOnlyVar` and `functionOnlyConst` inside `functionScopeExample`?
18. **`scope.js`**
    ```
    functionScopeExample();
    ```
    What happens when `functionScopeExample` is invoked?
19. **`scope.js`**
    ```
    console.log(functionOnlyVar); 
    ```
    What is the outcome of the log statement after `functionScopeExample()` is called?

## Comprehension

_These questions ask you to explain why or how particular choices in your code work the way they do._

20. **`array-functions.js`**
    ```
    return productsArray.every(product => product.inStock === true);
    ```
    Why did you use `every` in `isEveryProductInStock` instead of `reduce` or another array method?
21. **`array-functions.js`**
    ```
    return productsArray.filter(product => product.price > minPrice);
    ```
    How does the `filter` method in `getProductsAbovePrice` achieve its purpose compared to using a loop?
22. **`array-functions.js`**
    ```
    return productsArray.find(product => product.price > threshold);
    ```
    Why does `findFirstExpensiveProduct` stop searching once it finds a product above the threshold?
23. **`array-functions.js`**
    ```
    price: Number((product.price * multiplier).toFixed(2)),
    ```
    What is the reason for using `.toFixed(2)` and `Number()` together when calculating the discounted price?
24. **`array-functions.js`**
    ```
    return productsArray.reduce((sum, product) => {
        return sum + product.price;
    }, 0);
    ```
    How does the accumulator `sum` work within the `reduce` function in `getTotalPrice`?
25. **`array-functions.js`**
    ```
    if (!categories.includes(product.category)) {
        categories.push(product.category);
    }
    ```
    Why is it necessary to check for category existence before pushing in `getUniqueCategories`?
26. **`array-functions.js`**
    ```
    grouped[product.category].push(product.name);
    ```
    How does `groupProductsByCategory` ensure each category contains only product names?
27. **`array-functions.js`**
    ```
    [...productsArray].sort((a, b) => a.price - b.price);
    ```
    Why did you use the spread operator when sorting products by price?
28. **`array-functions.js`**
    ```
    productsArray.flatMap(product => product.tags);
    ```
    How does `flatMap` in `getAllTagsFlat` differ from using `map` followed by `flat`?
29. **`array-functions.js`**
    ```
    const chunkIndex = Math.floor(index / chunkSize);
    ```
    How does dividing and flooring the index allow `chunkProducts` to create groups of a specified size?
30. **`array-functions.js`**
    ```
    console.log(isEveryProductInStock(products));
    ```
    How does this log statement indicate whether all products are in stock?
31. **`array-functions.js`**
    ```
    console.log(getUniqueCategories(products));
    ```
    Why does `getUniqueCategories` return an array without duplicates?
32. **`array-functions.js`**
    ```
    console.log(sortProductsByPrice(products));
    ```
    How does `sortProductsByPrice` affect the original `products` array?
33. **`array-functions.js`**
    ```
    console.log(getAllTagsFlat(products));
    ```
    Why does the output of `getAllTagsFlat` include all tags from each product?
34. **`scope.js`**
    ```
    const appName = "Scope Lab";
    ```
    How does declaring `appName` with `const` affect its visibility within the IIFE?
35. **`scope.js`**
    ```
    var functionOnlyVar = "I exist only inside this function";
    ```
    Why is `functionOnlyVar` only accessible inside `functionScopeExample`?
36. **`scope.js`**
    ```
    console.log(functionOnlyVar); 
    ```
    Why does this line result in an error or undefined output after calling `functionScopeExample()`?

## Analysis

_These questions require tracing execution, reasoning about logic, or identifying issues in the code._

37. **`array-functions.js`**
    ```
    productsArray.every(product => product.inStock === true);
    ```
    What happens if one product in `productsArray` has `inStock` as `false` in `isEveryProductInStock`?
38. **`array-functions.js`**
    ```
    productsArray.filter(product => product.price > minPrice);
    ```
    How would `getProductsAbovePrice` behave if some products are missing the `price` property?
39. **`array-functions.js`**
    ```
    productsArray.find(product => product.price > threshold);
    ```
    What result would you expect from `findFirstExpensiveProduct` if multiple products exceed the threshold?
40. **`array-functions.js`**
    ```
    price: Number((product.price * multiplier).toFixed(2)),
    ```
    How could rounding using `.toFixed(2)` affect the total price calculated after applying discounts?
41. **`array-functions.js`**
    ```
    productsArray.reduce((categories, product) => {
        if (!categories.includes(product.category)) {
            categories.push(product.category);
        }
        return categories;
    }, []);
    ```
    What would happen if some products lack a `category` property in `getUniqueCategories`?
42. **`array-functions.js`**
    ```
    grouped[product.category].push(product.name);
    ```
    What if two products share the same category and name in `groupProductsByCategory`?
43. **`array-functions.js`**
    ```
    [...productsArray].sort((a, b) => a.price - b.price);
    ```
    What happens if `productsArray` contains products with identical prices in `sortProductsByPrice`?
44. **`array-functions.js`**
    ```
    productsArray.flatMap(product => product.tags);
    ```
    What would `getAllTagsFlat` return if some products had empty or missing `tags` arrays?
45. **`array-functions.js`**
    ```
    chunkProducts(products, 2)
    ```
    How does `chunkProducts` handle a chunk size larger than the number of products?
46. **`scope.js`**
    ```
    var functionOnlyVar = "I exist only inside this function";
    ```
    What would happen if `functionOnlyVar` were declared with `let` instead of `var`?
47. **`scope.js`**
    ```
    console.log(functionOnlyVar); 
    ```
    What is the sequence of scope lookups when this line attempts to access `functionOnlyVar`?

## Evaluation

_These questions require judging design decisions, tradeoffs, or rationale._

48. **`array-functions.js`**
    ```
    return productsArray.every(product => product.inStock === true);
    ```
    What are the advantages of using `every` for checking stock status versus iterating with a loop and early exit?
49. **`array-functions.js`**
    ```
    return productsArray.reduce((sum, product) => {
        return sum + product.price;
    }, 0);
    ```
    Why might you prefer `reduce` for summing prices over other array methods or constructs?
50. **`scope.js`**
    ```
    const appName = "Scope Lab";
    ```
    What are the benefits or drawbacks of declaring `appName` with `const` compared to `let` or `var` inside the IIFE?

---

<sub>Generated by [grill-my-code](https://github.com/NSCC-ITC-Assessment/GrillMyCode) · gpt-4.1 via github-models · main</sub>