import axios from 'axios';
import React, { useState } from 'react';

const ExportProducts = ({ setProducts }: { setProducts: any }) => {
    const stripeSecretKeyOld = 'sk_test_51PCsGLCuA7NUNfXDocYDKSMo0IBKAZbIC1QgdiGoAP4a92wh7C6v9A8e7oIDXcddRFg7v4ejSy3XLJFVgMOQj3mC00QfVJqogP';

    const exportProducts = async () => {
        let hasMoreProducts = true;
        let startingAfterProduct = null;
        let allProducts: any = [];

        try {
            while (hasMoreProducts) {
                const productResponse: any = await axios.get('https://api.stripe.com/v1/products', {
                    headers: {
                        'Authorization': `Bearer ${stripeSecretKeyOld}`
                    },
                    params: {
                        limit: 100,
                        starting_after: startingAfterProduct
                    }
                });

                for (const product of productResponse.data.data) {
                    // Fetch prices for each product
                    const priceResponse = await axios.get('https://api.stripe.com/v1/prices', {
                        headers: {
                            'Authorization': `Bearer ${stripeSecretKeyOld}`
                        },
                        params: {
                            product: product.id
                        }
                    });

                    // Include prices in product data
                    product.prices = priceResponse.data.data;
                }

                allProducts = allProducts.concat(productResponse.data.data);
                hasMoreProducts = productResponse.data.has_more;

                if (productResponse.data.data.length > 0) {
                    startingAfterProduct = productResponse.data.data[productResponse.data.data.length - 1].id;
                }
            }
            setProducts(allProducts);
            console.log('Exportação concluída:', allProducts);
        } catch (error) {
            console.error('Erro ao exportar produtos:', error);
        }
    };

    return (
        <div>
            <button onClick={exportProducts}>Exportar Produtos</button>
        </div>
    );
};

export default ExportProducts;
