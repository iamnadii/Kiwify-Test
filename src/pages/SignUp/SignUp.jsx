import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonComp } from '../../components';
import logo from '../../assets/logo.png';
import { useState } from 'react';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [password, setPassword] = useState('');
    const [terms, setTerms] = useState(false);
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [isValidConfirmEmail, setIsValidConfirmPassword] = useState(true);
    const [matchedEmail, setMatchedEmail] = useState(true);
    const [isValidPassword, setIsValidPassword] = useState(true);
    const [isTermsChecked, setIsTermsChecked] = useState(true);

    const emailValidator = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    // email change handler
    const emailChangeHandler = (e) => {
        const email = e.target.value;
        if (emailValidator.test(email)) {
            setIsValidEmail(true);
        } else {
            setIsValidEmail(false);
        }
        setEmail(email);
    };

    // confirm email change handler
    const confirmEmailChangeHandler = (e) => {
        const mail = e.target.value;
        if (emailValidator.test(mail)) {
            setIsValidConfirmPassword(true);
            if (mail === email) {
                setMatchedEmail(true);
            } else {
                setMatchedEmail(false);
            }
        } else {
            setIsValidConfirmPassword(false);
            setMatchedEmail(false);
        }
        setConfirmEmail(mail);
    };

    // password change handler
    const passwordChangeHandler = (e) => {
        const password = e.target.value;
        if (password.trim() !== '') {
            setIsValidPassword(true);
        } else {
            setIsValidPassword(false);
        }
        setPassword(password);
    };

    // terms change handler
    const termsChangeHandler = (e) => {
        const term = e.target.checked;
        if (term) {
            setIsTermsChecked(true);
        } else {
            setIsTermsChecked(false);
        }
        setTerms(term);
    };
    // submit handler
    const submitHandler = (e) => {
        e.preventDefault();
        if (!email || !confirmEmail || !password || !terms) {
            if (!email) setIsValidEmail(false);
            if (!confirmEmail) {
                setIsValidConfirmPassword(false);
            }
            if (!password) setIsValidPassword(false);
            if (!terms) setIsTermsChecked(false);
            if (email !== confirmEmail) {
                setMatchedEmail(false);
            }
            return;
        }
        if (email !== confirmEmail) {
            setMatchedEmail(false);
            return;
        }
        alert('Successfully registered!');
        setEmail('');
        setConfirmEmail('');
        setPassword('');
        setTerms('');
    };
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div>
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <img src={logo} alt="" className="mx-auto h-12 w-auto" />
                    <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
                        Create new account
                    </h2>
                    <p className="mt-2 text-center text-base leading-5 text-gray-600">
                        Or
                        <Link
                            to="/"
                            className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150 ml-2"
                        >
                            Log into your existing account
                        </Link>
                    </p>
                </div>
                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <form
                        className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10"
                        onSubmit={submitHandler}
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
                                htmlFor="email"
                                className="block text-sm font-medium leading-5 mb-1 text-gray-700"
                            >
                                Re-enter Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className={`form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full ${
                                    !isValidConfirmEmail && 'border-red-500'
                                }`}
                                value={confirmEmail}
                                onChange={confirmEmailChangeHandler}
                            />
                        </div>
                        {!matchedEmail && (
                            <div className="text-xs text-red-500 mt-1">
                                This two emails must be the same
                            </div>
                        )}
                        {!isValidConfirmEmail && (
                            <div className="text-xs text-red-500 mt-1">
                                This field is mandatory
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
                            <label className="relative flex items-start mt-2">
                                <div className="flex items-center h-5">
                                    <input
                                        type="checkbox"
                                        className={`form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out cursor-pointer ${
                                            !isTermsChecked && 'border-red-500'
                                        }`}
                                        checked={terms}
                                        onChange={termsChangeHandler}
                                    />
                                </div>
                                <div className="ml-2 text-sm leading-5">
                                    <span>
                                        I have read and accept Kiwify's{' '}
                                        <a
                                            href="https://kiwify.com.br/termos-de-uso"
                                            target="_blank"
                                            class="underline"
                                        >
                                            terms of use
                                        </a>
                                        &nbsp;,&nbsp;
                                        <a
                                            href="https://kiwify.com.br/licenca-de-uso-software"
                                            target="_blank"
                                            class="underline"
                                        >
                                            software license terms
                                        </a>
                                        &nbsp;,&nbsp;
                                        <a
                                            href="https://kiwify.com.br/politica-de-conteudo"
                                            target="_blank"
                                            class="underline"
                                        >
                                            content policy
                                        </a>
                                    </span>
                                    {!isTermsChecked && (
                                        <div className="text-xs text-red-500 mt-1">
                                            (This field is mandatory)
                                        </div>
                                    )}
                                </div>
                            </label>
                        </div>
                        <div className="block w-full rounded-md shadow-sm mt-6">
                            <ButtonComp text="Create an account" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
