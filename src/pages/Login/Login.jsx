import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonComp } from '../../components';
import logo from '../../assets/logo.png';
import { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [isValidPassword, setIsValidPassword] = useState(true);
    // email change handler
    const emailChangeHandler = (e) => {
        const emailValidator = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const email = e.target.value;
        if (emailValidator.test(email)) {
            setIsValidEmail(true);
        } else {
            setIsValidEmail(false);
        }
        setEmail(email);
    };

    // password change handler
    const passwordChangeHandler = (e) => {
        const password = e.target.value;
        if (password.trim() == '') {
            setIsValidPassword(false);
        } else {
            setIsValidPassword(true);
        }
        setPassword(password);
    };
    // submit handler
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password);
        if (!email || !password) {
            if (!email) {
                setIsValidEmail(false);
            }
            if (!password) {
                setIsValidPassword(false);
            }
            return;
        }
        alert('Successfully Logged In');
        setEmail('');
        setPassword('');
    };
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div>
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <img src={logo} alt="" className="mx-auto h-12 w-auto" />
                    <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
                        Login to your account
                    </h2>
                    <p className="mt-2 text-center text-base leading-5 text-gray-600">
                        Or
                        <Link
                            to="/sign-up"
                            className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150 ml-2"
                        >
                            Register
                        </Link>
                    </p>
                </div>
                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <form
                        className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10"
                        onSubmit={handleSubmit}
                    >
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium leading-5 mb-1 text-gray-700"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className={`form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full ${
                                    !isValidEmail && 'border-red-500'
                                }`}
                                value={email}
                                onChange={emailChangeHandler}
                            />
                        </div>
                        {!isValidEmail && (
                            <div className="text-xs text-red-500 mt-1">
                                This email must be valid
                            </div>
                        )}
                        <div className="mt-6">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium leading-5 mb-1 text-gray-700"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                className={`form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full ${
                                    !isValidPassword && 'border-red-500'
                                }`}
                                value={password}
                                onChange={passwordChangeHandler}
                            />
                        </div>
                        {!isValidPassword && (
                            <div className="text-xs text-red-500 mt-1">
                                This field is mandatory
                            </div>
                        )}
                        <div className="mt-2 flex items-center justify-end">
                            <div className="text-sm leading-5">
                                <p className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                                    Forgot Password?
                                </p>
                            </div>
                        </div>
                        <div className="block w-full rounded-md shadow-sm mt-6">
                            <ButtonComp text="To Enter" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
