import React from 'react';
import { useAppSelector } from '../../app/hooks';
import { Dish as DishType } from '../../types';
import Dish from './Dish';

const DishesList: React.FC = () => {
    const dishes = useAppSelector((state) => state.dishes.list);

    return (
        <div>
            <h2>Dishes</h2>
            {dishes.map((dish: DishType) => (
                <Dish key={dish.id} dish={dish} />
            ))}
        </div>
    );
};

export default DishesList;