import React, { useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { Dish as DishType } from '../../types';

interface DishFormProps {
    initialDish?: DishType;
}

const DishForm: React.FC<DishFormProps> = ({ initialDish }) => {
    const dispatch = useAppDispatch();
    const [title, setTitle] = useState(initialDish ? initialDish.name : '');
    const [price, setPrice] = useState(initialDish ? initialDish.price.toString() : '');
    const [image, setImage] = useState(initialDish ? initialDish.image : '');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const dishData = {
            id: initialDish ? initialDish.id : String(new Date().getTime()),
            name: title,
            price: Number(price),
            image,
        };

        if (initialDish) {
            dispatch(editDish(dishData));
        } else {
            dispatch(addDish(dishData));
        }

        setTitle('');
        setPrice('');
        setImage('');
    };

    return (
        <div>
            <h2>{initialDish ? 'Edit Dish' : 'Add New Dish'}</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                </label>
                <br />
                <label>
                    Price:
                    <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
                </label>
                <br />
                <label>
                    Image URL:
                    <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
                </label>
                <br />
                <button type="submit">{initialDish ? 'Edit Dish' : 'Add Dish'}</button>
            </form>
        </div>
    );
};

export default DishForm;