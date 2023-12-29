import React from 'react';
import ClientDishesList from '../components/Dish/ClientDishesList.tsx';

const Home: React.FC = () => {
    return (
        <div>
            <h1>Welcome to our restaurant!</h1>
            <ClientDishesList />
        </div>
    );
};

export default Home;
