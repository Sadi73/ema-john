import React, { useEffect, useState } from 'react';
import './Shop.css';
import Products from '../Products/Products';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div className='shop-container'>
            <div className='product-container'>
                {/* <h3>Available Products: {products.length}</h3> */}
                {
                    products.map(product => <Products key={product.id} productInfo={product}></Products>)
                }
            </div>
            <div className='order-summary'>
                <h3>Order Summary</h3>
            </div>

        </div>
    );
};

export default Shop;