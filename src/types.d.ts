export interface Dish {
    id: string;
    name: string;
    image: string;
    price: number;
}

export type ApiDish = Omit<Dish, 'id'>;

export interface DishList {
    [id: string]: ApiDish;
}

export interface DishMutation {
    name: string;
    image: string;
    price: string;
}

export interface CartDish {
    dish: Dish;
    amount: number;
}


export interface ApiOrder {
    customer: Customer;
    dishes: CartDish[];
}

interface ApiOrders {
    [id: string]: ApiOrder
}

export interface Order extends ApiOrder {
    id: string;
    totalPrice: number;
}

export interface Customer {
    name: string;
    address: string;
    phone: string;
}