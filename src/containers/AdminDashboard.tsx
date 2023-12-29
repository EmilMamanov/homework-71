import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import DishesList from '../components/Dish/DishesList';
import DishForm from '../components/Dish/DishForm';
import EditDish from "../components/Dish/EditDish.tsx";
import Orders from '../components/Orders/Orders.tsx';
import NewDish from '../components/Dish/NewDish';

const AdminDashboard: React.FC = () => {
    return (
        <div>
            <header>
                <h1>Turtle Pizza Admin</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to="dishes">Dishes</Link>
                        </li>
                        <li>
                            <Link to="orders">Orders</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <Routes>
                <Route path="dishes" element={<DishesList />} />
                <Route path="dishes/add" element={<NewDish />} />
                <Route path="dishes/edit/:id" element={<EditDish />} />
                <Route path="orders" element={<Orders />} />
            </Routes>
        </div>
    );
};

export default AdminDashboard;
