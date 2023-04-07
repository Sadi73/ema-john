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

    const handleAddToCart = (id) => {
        console.log('item added', id);
    }

    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product => <Products key={product.id} productInfo={product} handleAddToCart={handleAddToCart}></Products>)
                }
            </div>
            <div className='order-summary'>
                <h3>Order Summary</h3>
            </div>

        </div>
    );
};

export default Shop;