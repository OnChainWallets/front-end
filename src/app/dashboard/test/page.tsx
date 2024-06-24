'use client'

import { useState } from "react";
import ExportProducts from "./components/ExportProducts";
import ImportProducts from "./components/ImportProducts";

export default function Test() {
    const [exportedProducts, setExportedProducts] = useState([]);
    return (
        <div>
            <h1>Migration de Produtos Stripe</h1>
            <ExportProducts setProducts={setExportedProducts} />
            {exportedProducts.length > 0 && (
                <ImportProducts products={exportedProducts} />
            )}
        </div>
    );
}