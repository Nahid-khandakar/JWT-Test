import React from 'react';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';



const Login = () => {

    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [user] = useAuthState(auth);


    const navigate = useNavigate()
    const location = useLocation()

    let from = location.state?.from?.pathname || "/";


    if (user) {
        const url = 'http://localhost:5000/login'


        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                { email: user.email }
            ),
        })
            .then(response => response.json())
            .then(data => {
                //console.log(data.token);
                localStorage.setItem("accessToken", data.token)
                navigate(from, { replace: true });

            })
            .catch((error) => {
                console.error('Error:', error);
            });


    }


    //google sign in
    const handleSignIn = () => {
        signInWithGoogle()
    }

    return (
        <div className='text-center mt-3'>
            <h4>Google Login Here</h4>

            <div>
                <button type="button"
                    onClick={handleSignIn}
                    className="text-center btn btn-warning mt-3">Google Login
                </button>
            </div>

        </div>
    );
};

export default Login;