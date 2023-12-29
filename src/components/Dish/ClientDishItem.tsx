import React from 'react';
import { Dish } from '../../types';
import { useAppDispatch } from '../../app/hooks';
import { addDish } from '../../store/cartSlice';
import axiosApi from '../../axiosApi';

interface Props {
    dish: Dish;
}

const ClientDishItem: React.FC<Props> = ({ dish }) => {
    const dispatch = useAppDispatch();

    const addToCart = async () => {
        try {
            await axiosApi.post('/cart', { dishId: dish.id });
            dispatch(addDish(dish));
        } catch (error) {
            console.error('Error adding to cart:', error);
        }
    };

    return (
        <div className="card mb-2">
            <div className="row no-gutters">
                <div className="col-sm-4 rounded-start">
                    <img
                        src={dish.image || 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png'}
                        alt={dish.name}
                        className="img-fluid"
                    />
                </div>
                <div className="col-sm-8">
                    <div className="card-body">
                        <h5 className="card-title">{dish.name}</h5>
                        <p className="card-text">{dish.price} KGS</p>
                        <button className="btn btn-success" onClick={addToCart}>
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientDishItem;
