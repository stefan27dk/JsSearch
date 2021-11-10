export const getMostOccurringProducts = (subscriptions, c) => {
    let store = {}; // Stores the collection of subscriptions {ID:Count}
    let mostOcurr = '', count = 0;
    for (let s of subscriptions) {
        if (store[s.productId]) // If there is property with the name of the Subscription.ProductId
        {
            store[s.productId].count++; // Increase count in collection
            store[s.productId].quantity += s.quantity;
        }
        else {
            store[s.productId] = { count: 1 };
            store[s.productId].quantity = s.quantity;
        }
        if (count < store[s.productId])  // Count holds the highest count of all in the collection --> If count is smaller
        {
            mostOcurr = s.productId; // Assign the most occurrent productId to mostOcurr
            count = store[s.productId] // Assign the count of the mostocurrent product to count
        }
    }


    let keyValues = Object.entries(store).sort((a, b) => a[1].count - b[1].count);

    let length = keyValues.length;
    if (length > c)
    {
        return keyValues.slice(length - c, length).reverse();
    }
    return keyValues;
}
