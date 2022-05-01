import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';



const Login = () => {

    const [signInWithGoogle, user] = useSignInWithGoogle(auth);

    const navigate = useNavigate()
    const location = useLocation()

    let from = location.state?.from?.pathname || "/";


    if (user) {
        navigate(from, { replace: true });
    }

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