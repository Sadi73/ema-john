import React from 'react';
import './Products.css';

const Products = (props) => {
    // console.log(props);
    // const handleAddToCart = (id) => {
    //     console.log('item added', id);
    // }

    const { id, name, price, img, seller, ratings } = props.productInfo;

    return (
        <div className='product-item'>
            <div style={{padding:'10px'}}>
                <img src={img} alt="" />
                <p>{name}</p>
                <p>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings} star</p>
            </div>
            <button onClick={() => props.handleAddToCart(id)}>Add to Cart</button>
        </div>
    );
};

export default Products;
// export {Products};