import React from 'react'
import { useDispatch } from 'react-redux';
import { removefromCart } from '../../store/slices/cart-slice';

const CartTile = ( { cartItem } ) => {

    const dispatch = useDispatch()
    const handleRemoveFromCart = () => {
        dispatch( removefromCart( cartItem.id ) );
    };

    return (
        <div className='flex items-center p-5 justify-between bg-red-500 mt-2 mb-2 rounded-xl'>
            <div className="flex p-3">
                <img src={ cartItem?.image } alt={ cartItem?.title } className='h-28 rounded-lg' />
                <div className="ml-10 self-start space-y-5">
                    <h1 className='text-xl text-white font-bold'>{ cartItem?.title }</h1>
                    <p className='text-white font-extrabold'>{ cartItem?.price }</p>
                </div>
            </div>
            <div>
                <button onClick={ handleRemoveFromCart } className='bg-red-950 text-white border-2 rounded-lg font-bold px-4 py-2'>
                    Remove from cart
                </button>
            </div>
        </div>
    )
}

export default CartTile