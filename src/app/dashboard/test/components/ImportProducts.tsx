import axios from 'axios';
import React from 'react';

interface Product {
    name: string;
    description?: string;
    active: boolean;
    attributes?: string[];
    caption?: string;
    deactivate_on?: string[];
    images?: string[];
    metadata?: Record<string, string>;
    package_dimensions?: {
        height: number;
        width: number;
        length: number;
        weight: number;
    };
    shippable?: boolean;
    unit_label?: string;
    url?: string;

}

interface ImportProductsProps {
    products: Product[];
}

const ImportProducts: React.FC<ImportProductsProps> = ({ products }) => {
    const stripeSecretKeyNew = 'sk_test_51PSlxM01h9W4XtRyxxYFVYQzI1yXncni0OrcMaEHYNYkSiZRmALaLB0BfdHn0S1JMScneWVwnBDulWA1P2we1I1A00QrQIClNO';

    const importProducts = async () => {
        try {
            for (const product of products) {
                const response = await axios.post('https://api.stripe.com/v1/products', {
                    name: product.name,
                    description: product.description,
                    active: product.active,
                    attributes: product.attributes,
                    caption: product.caption,
                    deactivate_on: product.deactivate_on,
                    images: product.images,
                    metadata: product.metadata,
                    package_dimensions: product.package_dimensions,
                    shippable: product.shippable,
                    unit_label: product.unit_label,
                    url: product.url,
                }, {
                    headers: {
                        'Authorization': `Bearer ${stripeSecretKeyNew}`,
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                });
                console.log('Produto importado:', response.data);
            }
            console.log('Importação concluída.');
        } catch (error) {
            console.error('Erro ao importar produtos:', error);
        }
    };

    return (
        <div>
            <button onClick={importProducts}>Importar Produtos</button>
        </div>
    );
};

export default ImportProducts;
