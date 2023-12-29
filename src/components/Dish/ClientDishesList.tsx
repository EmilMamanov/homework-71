import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectDishes, selectFetchDishLoading } from '../../store/dishSlice.ts';
import { fetchDishes } from '../../store/dishThunks.ts';
import { addDish } from '../../store/cartSlice.ts';
import Spinner from '../../components/Spinner';
import { Dish } from '../../types';
import ClientDishItem from './ClientDishItem';

const ClientDishesList: React.FC = () => {
    const dispatch = useAppDispatch();
    const dishes = useAppSelector(selectDishes);
    const dishesLoading = useAppSelector(selectFetchDishLoading);

    useEffect(() => {
        dispatch(fetchDishes());
    }, [dispatch]);

    const addToCart = (dish: Dish) => {
        dispatch(addDish(dish));
    };

    return (
        <>
            <h4>Menu</h4>
            {dishesLoading ? (
                <Spinner />
            ) : (
                <div>
                    {dishes.map((dish) => (
                        <ClientDishItem key={dish.id} dish={dish} onAddToCart={() => addToCart(dish)} />
                    ))}
                </div>
            )}
        </>
    );
};

export default ClientDishesList;
