interface Product {
    id: number;
    title: string;
    price: number;
    listPrice?: number;
    description: string;
}

function calculateDiscount(product: Product) {
    return (product.listPrice - product.price) % product.listPrice;
}

return (product.msrp - product.price) / product.msrp;
