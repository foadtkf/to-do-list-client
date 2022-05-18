import React from 'react';
import google from './google.png';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/"
    
    let errorElement;

    if(loading ){
        return <Loading></Loading>
    }

    if (error ) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    if (user) {
        localStorage.setItem('email',user._tokenResponse.email)
        console.log('>>>>>>',user._tokenResponse.email,user.email)
        navigate('/home');navigate(from, { replace: true });
    }
    return (
        <div>
            <div class="flex flex-col w-full border-opacity-50">
  <div class="divider">OR</div>
</div>
            {errorElement}
            <div className=''>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-info w-50 d-block mx-auto my-2'>
                    <img style={{ width: '30px' }} src={google} alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;