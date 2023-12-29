import {createAsyncThunk} from '@reduxjs/toolkit';
import axiosApi from '../axiosApi';
import {Dish, DishList} from '../types';
import {AppDispatch} from '../app/store';
import {updateCart} from './cartSlice';

export const createDish = createAsyncThunk<Dish, Dish>(
    'dishes/create',
    async (newDish, thunkAPI) => {
        const response = await axiosApi.post<Dish>('dishes.json', newDish);
        const createdDish: Dish = response.data;
        return createdDish;
    }
);

export const fetchDishes = createAsyncThunk<Dish[], undefined, {dispatch: AppDispatch}>(
    'dishes/fetchAll',
    async (_, thunkAPI) => {
        const dishesResponse = await axiosApi.get<DishList | null>('dishes.json');
        const dishes = dishesResponse.data;

        let newDishes: Dish[] = [];

        if (dishes) {
            newDishes = Object.keys(dishes).map(key => {
                const dish = dishes[key];
                return {
                    ...dish,
                    id: key,
                }
            });
        }

        thunkAPI.dispatch(updateCart(newDishes));
        return newDishes;
    }
);

export const deleteDish = createAsyncThunk<void, string>(
    'dishes/delete',
    async (dishId) => {
        await axiosApi.delete(`/dishes/${dishId}.json`);
    }
);