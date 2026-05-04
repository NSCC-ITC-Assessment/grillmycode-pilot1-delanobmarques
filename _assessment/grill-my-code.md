## Grill My Code

> **Generated:** 2026-05-04 21:05:38 UTC
> **Commits reviewed:** `4fdc55e` → `89c4d9a`

> **Files assessed:** `README.md`, `array-functions.js`

---

## Recall

_These questions check your knowledge of what specific parts of your code do._

1. **`array-functions.js`**
   ```
   productsArray.every(product => product.inStock === true);
   ```
   What does the `isEveryProductInStock` function return when all products in `productsArray` have `inStock` set to `true`?

2. **`array-functions.js`**
   ```
   productsArray.filter(product => product.price > minPrice);
   ```
   What is the output of `getProductsAbovePrice` if no products in `productsArray` have a price above `minPrice`?

3. **`array-functions.js`**
   ```
   productsArray.find(product => product.price > threshold);
   ```
   What value does `findFirstExpensiveProduct` return when no product's price exceeds `threshold`?

4. **`array-functions.js`**
   ```
   Number((product.price * multiplier).toFixed(2))
   ```
   What datatype is returned for the `price` property in the objects produced by `applyDiscountToAllProducts`?

5. **`array-functions.js`**
   ```
   productsArray.reduce((sum, product) => {
       return sum + product.price;
   }, 0);
   ```
   What does `getTotalPrice` return if `productsArray` is empty?

6. **`array-functions.js`**
   ```
   if (!categories.includes(product.category)) {
       categories.push(product.category);
   }
   ```
   What is the purpose of checking `!categories.includes(product.category)` within `getUniqueCategories`?

7. **`array-functions.js`**
   ```
   grouped[product.category].push(product.name);
   ```
   What is the structure of the object returned by `groupProductsByCategory`?

8. **`array-functions.js`**
   ```
   [...productsArray].sort((a, b) => a.price - b.price);
   ```
   What effect does the spread operator (`...productsArray`) have before sorting in `sortProductsByPrice`?

9. **`array-functions.js`**
   ```
   productsArray.flatMap(product => product.tags);
   ```
   What type of array is returned by `getAllTagsFlat`?

10. **`array-functions.js`**
    ```
    const chunkIndex = Math.floor(index / chunkSize);
    ```
    What does `chunkProducts` do with the `chunkIndex` value?

11. **`array-functions.js`**
    ```
    inStock: false,
    ```
    What is the value of the `inStock` property for the product with `name: "Mouse"` in the `products` array?

12. **`array-functions.js`**
    ```
    tags: ["school", "office"]
    ```
    Which product in the `products` array has the tags `["school", "office"]`?

13. **`array-functions.js`**
    ```
    console.log("Is every product in stock?");
    console.log(isEveryProductInStock(products));
    ```
    What does the second console log statement output if any product in `products` is out of stock?

14. **`array-functions.js`**
    ```
    console.log("Products above 30:");
    console.log(getProductsAbovePrice(products, 30));
    ```
    What does the second console log statement display after calling `getProductsAbovePrice(products, 30)`?

15. **`array-functions.js`**
    ```
    console.log("Products chunked by size 2:");
    console.log(chunkProducts(products, 2));
    ```
    How many chunks are produced when `chunkProducts` is called with `chunkSize` of 2 on the `products` array?

## Comprehension

_These questions ask you to explain why or how particular choices in your code work the way they do._

16. **`array-functions.js`**
    ```
    return productsArray.every(product => product.inStock === true);
    ```
    Why did you choose the `every` method in `isEveryProductInStock` instead of iterating with a loop?

17. **`array-functions.js`**
    ```
    return productsArray.filter(product => product.price > minPrice);
    ```
    How does the use of the `filter` function help `getProductsAbovePrice` achieve its purpose?

18. **`array-functions.js`**
    ```
    return productsArray.find(product => product.price > threshold);
    ```
    Why might `findFirstExpensiveProduct` return `undefined` in some cases?

19. **`array-functions.js`**
    ```
    const multiplier = 1 - discountPercent / 100;
    ```
    How does the calculation of `multiplier` relate to applying a percentage discount in `applyDiscountToAllProducts`?

20. **`array-functions.js`**
    ```
    price: Number((product.price * multiplier).toFixed(2)),
    ```
    Why do you use `.toFixed(2)` followed by `Number(...)` for the price in the new object returned by `applyDiscountToAllProducts`?

21. **`array-functions.js`**
    ```
    return productsArray.reduce((sum, product) => {
        return sum + product.price;
    }, 0);
    ```
    How does the initial value `0` affect the result of `getTotalPrice`?

22. **`array-functions.js`**
    ```
    if (!categories.includes(product.category)) {
        categories.push(product.category);
    }
    ```
    Why is it necessary to check for inclusion before pushing a category in `getUniqueCategories`?

23. **`array-functions.js`**
    ```
    if (!grouped[product.category]) {
        grouped[product.category] = [];
    }
    ```
    How does this conditional statement ensure the correct structure in `groupProductsByCategory`?

24. **`array-functions.js`**
    ```
    [...productsArray].sort((a, b) => a.price - b.price);
    ```
    Why did you copy the array using the spread operator before sorting in `sortProductsByPrice`?

25. **`array-functions.js`**
    ```
    productsArray.flatMap(product => product.tags);
    ```
    How does `flatMap` differ from `map` in `getAllTagsFlat`?

26. **`array-functions.js`**
    ```
    const chunkIndex = Math.floor(index / chunkSize);
    ```
    Why do you use `Math.floor(index / chunkSize)` to determine the chunk index in `chunkProducts`?

27. **`array-functions.js`**
    ```
    return productsArray.reduce((chunks, product, index) => {
        // ...
    }, []);
    ```
    How does the `reduce` function build the array of chunks in `chunkProducts`?

28. **`array-functions.js`**
    ```
    id: product.id,
    name: product.name,
    category: product.category,
    price: Number((product.price * multiplier).toFixed(2)),
    inStock: product.inStock,
    tags: product.tags
    ```
    Why did you include all these properties in the new product object returned by `applyDiscountToAllProducts`?

29. **`array-functions.js`**
    ```
    console.log("Unique categories:");
    console.log(getUniqueCategories(products));
    ```
    How does `getUniqueCategories` ensure there are no duplicate categories in its output?

30. **`array-functions.js`**
    ```
    console.log("Products sorted by price:");
    console.log(sortProductsByPrice(products));
    ```
    Why does `sortProductsByPrice` produce a new sorted array instead of sorting the original `products` array in place?

## Analysis

_These questions ask you to trace execution, reason about logic, or identify issues in the code._

31. **`array-functions.js`**
    ```
    productsArray.every(product => product.inStock === true);
    ```
    What would happen in `isEveryProductInStock` if a product object was missing the `inStock` property?

32. **`array-functions.js`**
    ```
    productsArray.filter(product => product.price > minPrice);
    ```
    How would the output of `getProductsAbovePrice` change if `minPrice` was set to a negative value?

33. **`array-functions.js`**
    ```
    productsArray.find(product => product.price > threshold);
    ```
    If multiple products have a price above `threshold`, which product does `findFirstExpensiveProduct` return and why?

34. **`array-functions.js`**
    ```
    price: Number((product.price * multiplier).toFixed(2)),
    ```
    What are the possible consequences of using `.toFixed(2)` for prices that already have more than two decimal places?

35. **`array-functions.js`**
    ```
    return sum + product.price;
    ```
    What would happen if a product in `productsArray` had its `price` property as a string instead of a number in `getTotalPrice`?

36. **`array-functions.js`**
    ```
    if (!categories.includes(product.category)) {
        categories.push(product.category);
    }
    ```
    How does this logic in `getUniqueCategories` behave if `product.category` is `undefined`?

37. **`array-functions.js`**
    ```
    grouped[product.category].push(product.name);
    ```
    How would `groupProductsByCategory` handle products with the same category?

38. **`array-functions.js`**
    ```
    [...productsArray].sort((a, b) => a.price - b.price);
    ```
    What would be the result if some products had identical prices in `sortProductsByPrice`?

39. **`array-functions.js`**
    ```
    productsArray.flatMap(product => product.tags);
    ```
    What happens if a product's `tags` property is not an array in `getAllTagsFlat`?

40. **`array-functions.js`**
    ```
    if (!chunks[chunkIndex]) {
        chunks[chunkIndex] = [];
    }
    ```
    What issue might arise in `chunkProducts` if `chunkSize` is zero or negative?

41. **`array-functions.js`**
    ```
    return productsArray.reduce((chunks, product, index) => {
        // ...
    }, []);
    ```
    How does the use of `index` in `reduce` help in dividing the array into chunks?

42. **`array-functions.js`**
    ```
    id: 1,
    name: "Keyboard",
    category: "electronics",
    price: 89.99,
    inStock: true,
    tags: ["office", "usb"]
    ```
    If the `products` array was missing one of these properties from a product, how would it affect the functions using `products`?

43. **`array-functions.js`**
    ```
    console.log("First product above 50:");
    console.log(findFirstExpensiveProduct(products, 50));
    ```
    What is logged if no products are priced above 50?

44. **`array-functions.js`**
    ```
    console.log("Products after 10% discount:");
    console.log(applyDiscountToAllProducts(products, 10));
    ```
    How is the price of each product affected after applying a 10% discount with `applyDiscountToAllProducts`?

45. **`array-functions.js`**
    ```
    console.log("All tags flattened:");
    console.log(getAllTagsFlat(products));
    ```
    How does `getAllTagsFlat` handle repeated tags across different products?

46. **`array-functions.js`**
    ```
    console.log("Products chunked by size 2:");
    console.log(chunkProducts(products, 2));
    ```
    How does the chunking logic ensure all products are included in the result even if the array length isn't divisible by `chunkSize`?

## Evaluation

_These questions ask you to judge design decisions, tradeoffs, or rationale behind the code._

47. **`array-functions.js`**
    ```
    (() => {
        // ...all functions and code...
    })();
    ```
    What are the benefits and drawbacks of wrapping all code in an Immediately Invoked Function Expression (IIFE)?

48. **`array-functions.js`**
    ```
    const getUniqueCategories = (productsArray) => {
        // ...
    };
    ```
    Why did you choose an array for storing unique categories instead of a Set in `getUniqueCategories`?

49. **`array-functions.js`**
    ```
    return [...productsArray].sort((a, b) => a.price - b.price);
    ```
    How does creating a new sorted array support immutability, and what are the tradeoffs compared to sorting in place?

50. **`array-functions.js`**
    ```
    console.log("Products sorted by price:");
    console.log(sortProductsByPrice(products));
    ```
    What considerations might influence the decision to sort products by price ascending as opposed to descending?

---

<sub>Generated by [grill-my-code](https://github.com/NSCC-ITC-Assessment/GrillMyCode) · gpt-4.1 via github-models · main</sub>