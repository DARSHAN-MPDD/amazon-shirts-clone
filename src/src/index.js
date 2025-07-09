import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../components/Header';
import ProductList from '../components/ProductList';
import './styles.css';

const App = () => {
    return (
        <div>
            <Header />
            <ProductList />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));