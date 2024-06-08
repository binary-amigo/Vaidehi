import React from 'react'

const Shop = () => {

  const [shop, setShop] = React.useState([])
  return (
    <div className='shop'>
        <div className='shop-container'>
            <div className='shop-header'>
                <h1>Shop</h1>
            </div>
            <div className='shop-content'>
                <div className='shop-item'>
                    <h2>Item 1</h2>
                    <p>Price: $10</p>
                    <button>Add to Cart</button>
                </div>
                <div className='shop-item'>
                    <h2>Item 2</h2>
                    <p>Price: $20</p>
                    <button>Add to Cart</button>
                </div>
                <div className='shop-item'>
                    <h2>Item 3</h2>
                    <p>Price: $30</p>
                    <button>Add to Cart</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Shop
