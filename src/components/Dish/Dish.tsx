import React from 'react';
import { Dish as DishType } from '../../types';

interface DishProps {
    dish: DishType;
}

const Dish: React.FC<DishProps> = ({ dish }) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <img
                src={dish.image}
                alt={dish.name}
                style={{ width: '30px', height: '30px', marginRight: '10px' }}
            />
            <div>
                <p>{dish.name}</p>
                <p>{`$${dish.price.toFixed(2)}`}</p>
            </div>
        </div>
    );
};

export default Dish;