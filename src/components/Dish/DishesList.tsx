import React, {useEffect} from 'react';
import DishItem from './DishItem';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {selectDeleteDishLoading, selectDishes, selectFetchDishLoading} from '../../store/dishSlice.ts';
import Spinner from '../../components/Spinner';
import {deleteDish, fetchDishes} from '../../store/dishThunks.ts';
import { Link } from 'react-router-dom';

const DishesList: React.FC = () => {
    const dispatch = useAppDispatch();
    const dishes = useAppSelector(selectDishes);
    const dishesLoading = useAppSelector(selectFetchDishLoading);
    const deleteLoading = useAppSelector(selectDeleteDishLoading);

    useEffect(() => {
        dispatch(fetchDishes());
    }, [dispatch]);

    const removeDish = async (id: string) => {
        await dispatch(deleteDish(id));
        await dispatch(fetchDishes());
    }

    return (
        <>
            <h4>Dishes</h4>
            <Link to="/admin/dishes/add" className="btn btn-primary">
                Add New Dish
            </Link>
            {dishesLoading ? <Spinner/> : dishes.map((dish) => (
                <DishItem
                    key={dish.id}
                    dish={dish}
                    deleteLoading = {deleteLoading}
                    onDelete={() => removeDish(dish.id)}
                />
            ))}
        </>
    );
};

export default DishesList;