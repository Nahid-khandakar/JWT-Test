import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const Products = () => {

    const [products, setProducts] = useState([])
    const [user] = useAuthState(auth);


    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    const handleOrder = (product) => {
        //console.log(product, user.email)
        const { name, price } = product



        fetch('http://localhost:5000/orders', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name, price, email: user.email
            }),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                toast("order add!");

            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }

    return (
        <div>
            <h4 className='text-center text-success mt-3'>Total Products : {products.length}</h4>

            <div className='row'>
                {
                    products.map(product =>
                        <div key={product._id} className="col-4 g-3">
                            <div className='card'>
                                <div className="card-body">
                                    <h2 className="card-title text-danger text-center">{product.name}</h2>
                                    <h6 className="card-subtitle mb-2 text-center">{product.price}</h6>
                                    <button onClick={() => handleOrder(product)} className='btn btn-secondary mx-auto d-block w-50'>Order</button>
                                </div>
                            </div>

                        </div>
                    )
                }
            </div>
            <ToastContainer />
        </div>

    );
};

export default Products;