import React from 'react';
import { useParams } from 'react-router';
import Car from './Car/Car';
import City from './City/City';
import Order from './Order/Order';
import Points from './Points/Points';

const Main = () => {
    const { id } = useParams();

    switch (id) {
        case `order`:
            return <Order />;
        case `car`:
            return <Car />;
        case `city`:
            return <City />;
        case `points`:
            return <Points />;
        default:
            return;
    }
};
export default Main;
