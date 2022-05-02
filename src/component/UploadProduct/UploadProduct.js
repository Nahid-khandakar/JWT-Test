import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';

const UploadProduct = () => {


    const [user] = useAuthState(auth);

    const handleUpload = (event) => {
        event.preventDefault();

        const name = event.target.name.value
        const price = event.target.price.value
        const product = { name, price }



        fetch('http://localhost:5000/uploadproduct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `${user.email} ${localStorage.getItem("accessToken")}`
            },
            body: JSON.stringify(product),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                event.target.reset()
            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }

    return (
        <div className='w-50 mx-auto'>
            <h4 className='mt-5'>Upload Product</h4>

            <form onSubmit={handleUpload}>

                <div className="mb-3">
                    <label className="form-label">Product Name</label>
                    <input type="text" className="form-control" name='name' id="exampleInputEmail1" required />

                </div>

                <div className="mb-3">
                    <label className="form-label">Price</label>
                    <input type="number" name='price' className="form-control" id="exampleInputPassword1" required />
                </div>

                <button type="submit" className="btn btn-warning">Upload</button>

            </form>
        </div>
    );
};

export default UploadProduct;