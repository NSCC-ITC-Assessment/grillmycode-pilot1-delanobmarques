## Grill My Code

> **Generated:** 2026-05-05 11:32:25 UTC
> **Commits reviewed:** `40c4b0d` → `5bb0a46`

> **Files assessed:** `array-functions.js`

---

## Recall

_These questions check your knowledge of what specific parts of your code do._

1. **`array-functions.js`**
   ```
   productsArray.every(product => product.inStock === true);
   ```
   What does the `isEveryProductInStock` function return if all products in `productsArray` are in stock?

2. **`array-functions.js`**
   ```
   productsArray.filter(product => product.price > minPrice);
   ```
   What is the output of `getProductsAbovePrice` when all products have a `price` less than or equal to `minPrice`?

3. **`array-functions.js`**
   ```
   productsArray.find(product => product.price > threshold);
   ```
   What does `findFirstExpensiveProduct` return if no product's price exceeds `threshold`?

4. **`array-functions.js`**
   ```
   price: Number((product.price * multiplier).toFixed(2)),
   ```
   What does the `applyDiscountToAllProducts` function assign to the `price` property for each product?

5. **`array-functions.js`**
   ```
   productsArray.reduce((sum, product) => {
       return sum + product.price;
   }, 0);
   ```
   What is computed by `getTotalPrice` for an empty `productsArray`?

6. **`array-functions.js`**
   ```
   if (!categories.includes(product.category)) {
       categories.push(product.category);
   }
   ```
   What does `getUniqueCategories` return if all products share the same category?

7. **`array-functions.js`**
   ```
   grouped[product.category].push(product.name);
   ```
   What values are stored in each category's array within the object returned by `groupProductsByCategory`?

8. **`array-functions.js`**
   ```
   [...productsArray].sort((a, b) => a.price - b.price);
   ```
   What is the effect of calling `sortProductsByPrice` with a `productsArray` already sorted by price?

9. **`array-functions.js`**
   ```
   productsArray.flatMap(product => product.tags);
   ```
   What does `getAllTagsFlat` return when all products have only a single tag each?

10. **`array-functions.js`**
    ```
    const chunkIndex = Math.floor(index / chunkSize);
    ```
    What is the purpose of `chunkIndex` in the `chunkProducts` function?

11. **`array-functions.js`**
    ```
    console.log(isEveryProductInStock(products));
    ```
    What value is logged after this statement executes given the initial `products` array?

12. **`array-functions.js`**
    ```
    console.log(getProductsAbovePrice(products, 30));
    ```
    Which products will be logged when this line runs?

13. **`array-functions.js`**
    ```
    console.log(findFirstExpensiveProduct(products, 50));
    ```
    What is logged if no product has a price above 50?

14. **`array-functions.js`**
    ```
    console.log(applyDiscountToAllProducts(products, 10));
    ```
    What is the new price of the "Keyboard" after applying a 10% discount?

15. **`array-functions.js`**
    ```
    console.log(getTotalPrice(products));
    ```
    What is the total sum of product prices as logged here?

16. **`array-functions.js`**
    ```
    console.log(getUniqueCategories(products));
    ```
    How many unique categories are included in the logged array?

17. **`array-functions.js`**
    ```
    console.log(groupProductsByCategory(products));
    ```
    How are product names organized in the output of this log statement?

18. **`array-functions.js`**
    ```
    console.log(sortProductsByPrice(products));
    ```
    What is the first product in the sorted array as logged here?

19. **`array-functions.js`**
    ```
    console.log(getAllTagsFlat(products));
    ```
    How many tags are returned in the flattened tags array?

20. **`array-functions.js`**
    ```
    console.log(chunkProducts(products, 2));
    ```
    How many chunks are produced when chunking the five products with size 2?

## Comprehension

_These questions ask you to explain why or how particular choices in your code work the way they do._

21. **`array-functions.js`**
    ```
    productsArray.every(product => product.inStock === true);
    ```
    Why did you use the `.every` method for `isEveryProductInStock` instead of a loop or `.reduce`?

22. **`array-functions.js`**
    ```
    productsArray.filter(product => product.price > minPrice);
    ```
    How does `.filter` ensure only products above `minPrice` are included?

23. **`array-functions.js`**
    ```
    productsArray.find(product => product.price > threshold);
    ```
    Why does `findFirstExpensiveProduct` return only one product rather than a list?

24. **`array-functions.js`**
    ```
    price: Number((product.price * multiplier).toFixed(2)),
    ```
    Why did you use `.toFixed(2)` followed by `Number` for the price calculation?

25. **`array-functions.js`**
    ```
    return productsArray.reduce((sum, product) => {
        return sum + product.price;
    }, 0);
    ```
    How does the initial value of 0 in `.reduce` affect the result in `getTotalPrice`?

26. **`array-functions.js`**
    ```
    if (!categories.includes(product.category)) {
        categories.push(product.category);
    }
    ```
    Why did you check for category inclusion before pushing in `getUniqueCategories`?

27. **`array-functions.js`**
    ```
    if (!grouped[product.category]) {
        grouped[product.category] = [];
    }
    grouped[product.category].push(product.name);
    ```
    Why is an empty array initialized for each category in `groupProductsByCategory`?

28. **`array-functions.js`**
    ```
    return [...productsArray].sort((a, b) => a.price - b.price);
    ```
    Why did you use `[...productsArray]` before sorting instead of sorting in place?

29. **`array-functions.js`**
    ```
    productsArray.flatMap(product => product.tags);
    ```
    How does `.flatMap` differ from `.map` in the `getAllTagsFlat` function?

30. **`array-functions.js`**
    ```
    const chunkIndex = Math.floor(index / chunkSize);
    ```
    How does dividing by `chunkSize` allow for chunking the products array?

31. **`array-functions.js`**
    ```
    const products = [
        { id: 1, name: "Keyboard", ... },
        ...
    ];
    ```
    What is the purpose of declaring the `products` array within the IIFE?

32. **`array-functions.js`**
    ```
    console.log("Is every product in stock?");
    ```
    Why did you print descriptive text before logging function outputs?

33. **`array-functions.js`**
    ```
    console.log(applyDiscountToAllProducts(products, 10));
    ```
    How does the `applyDiscountToAllProducts` function ensure each product object is copied rather than mutated?

34. **`array-functions.js`**
    ```
    console.log(getUniqueCategories(products));
    ```
    How does `getUniqueCategories` guarantee no duplicate categories in the output?

35. **`array-functions.js`**
    ```
    console.log(groupProductsByCategory(products));
    ```
    Why are product names grouped by their category in the output object?

36. **`array-functions.js`**
    ```
    console.log(chunkProducts(products, 2));
    ```
    How does the chunking algorithm handle the case when the number of products is not divisible by `chunkSize`?

## Analysis

_These questions ask you to trace execution, reason about logic, or identify issues in the code._

37. **`array-functions.js`**
    ```
    productsArray.every(product => product.inStock === true);
    ```
    What happens if `productsArray` contains an object missing the `inStock` property?

38. **`array-functions.js`**
    ```
    productsArray.filter(product => product.price > minPrice);
    ```
    What would be the result if some products lack the `price` property?

39. **`array-functions.js`**
    ```
    price: Number((product.price * multiplier).toFixed(2)),
    ```
    If `discountPercent` is greater than 100, what is the resulting price for each product?

40. **`array-functions.js`**
    ```
    return productsArray.reduce((sum, product) => {
        return sum + product.price;
    }, 0);
    ```
    What effect does a negative product price have on the total returned by `getTotalPrice`?

41. **`array-functions.js`**
    ```
    if (!categories.includes(product.category)) {
        categories.push(product.category);
    }
    ```
    What happens if two products have the same category but different casing (e.g., "Electronics" vs "electronics")?

42. **`array-functions.js`**
    ```
    grouped[product.category].push(product.name);
    ```
    If a product's `category` is `undefined`, how is it grouped in the output object?

43. **`array-functions.js`**
    ```
    [...productsArray].sort((a, b) => a.price - b.price);
    ```
    How does the sorting handle products with equal prices?

44. **`array-functions.js`**
    ```
    productsArray.flatMap(product => product.tags);
    ```
    What will happen if a product's `tags` property is not an array?

45. **`array-functions.js`**
    ```
    const chunkIndex = Math.floor(index / chunkSize);
    ```
    How does the chunking algorithm behave if `chunkSize` is zero?

46. **`array-functions.js`**
    ```
    console.log(findFirstExpensiveProduct(products, 50));
    ```
    If multiple products are above the threshold, which one is returned?

47. **`array-functions.js`**
    ```
    console.log(getProductsAbovePrice(products, 30));
    ```
    How would the output change if the `products` array were empty?

48. **`array-functions.js`**
    ```
    price: Number((product.price * multiplier).toFixed(2)),
    ```
    What happens if `product.price` is not a number in `applyDiscountToAllProducts`?

## Evaluation

_These questions ask you to judge design decisions, tradeoffs, or rationale in the code._

49. **`array-functions.js`**
    ```
    (() => {
        // ...all code...
    })();
    ```
    What are the benefits and drawbacks of wrapping all functions and data within an IIFE in this file?

50. **`array-functions.js`**
    ```
    console.log(applyDiscountToAllProducts(products, 10));
    ```
    Why did you choose to return new product objects with the same properties rather than modifying the original ones in `applyDiscountToAllProducts`?

---

<sub>Generated by [grill-my-code](https://github.com/NSCC-ITC-Assessment/GrillMyCode) · gpt-4.1 via github-models · main</sub>