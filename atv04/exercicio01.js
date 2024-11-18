function calculateTotalPrice(products) {
    const getSubtotal = () =>
        products.reduce((sum, product) => sum + product.price * product.quantity, 0);

    const getDiscountedTotal = (subtotal) => (subtotal > 100 ? subtotal * 0.9 : subtotal);

    const applyShippingCost = (total) => (total < 50 ? total + 5 : total);

    return applyShippingCost(getDiscountedTotal(getSubtotal())).toFixed(2);
}

// ======= Utilizando para testar ======= // 
// const products = [
//     { price: 10, quantity: 2 },
//     { price: 15, quantity: 3 },
//     { price: 25, quantity: 1 }
// ];

// console.log(calculateTotalPrice(products));
