import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import images from '~/assets/images';
import { Facebook, Githup, Google } from '~/components/Icons/Icon';

const cx = classNames.bind(styles);

function Login() {
    const navigate = useNavigate();

    const handleLogin = (data) => {
        axios
            .post('https://shop-ban-hang-backend.onrender.com/user/login', data)
            .then((response) => {
                if (response.status === 201) {
                    toast.success(`Đăng nhập thành công, chào mừng ${response.data.user.email}!`, {
                        position: 'top-right',
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: 'light',
                    });
                    navigate('/product');
                }
            })
            .catch(() => {
                toast.error('Đăng nhập thất bại, xin vui lòng kiểm tra lại tài khoản hoặc mặt khẩu.', {
                    position: 'top-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'light',
                });
            });
    };
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper__block-left')}>
                <div className={cx('wrapper__block-left__signin-block')}>
                    <span className={cx('wrapper__block-left__span-luxury')}>Luxury</span>
                    <h2 className={cx('wrapper__block-left__h2-signin')}>Log in</h2>
                    <label className={cx('wrapper__block-left__label')}>Email</label>
                    <input
                        placeholder="nguyendangthienan@gmail.com"
                        className={cx('wrapper__block-left__input')}
                        {...register('email', { required: true })}
                    />
                    {errors.email && <p className={cx('error-message')}>Email is required!</p>}
                    <label className={cx('wrapper__block-left__label')}>Password</label>
                    <input
                        className={cx('wrapper__block-left__input')}
                        type="password"
                        {...register('password', { required: true })}
                    />
                    {errors.password && <p className={cx('error-message')}>Password is required!</p>}
                    <label
                        onClick={() => navigate('/forgot')}
                        className={cx('wrapper__block-left__span-forgot-password')}
                    >
                        Forgot Password
                    </label>

                    <button className={cx('wrapper__block-left__btn-sign-in')} onClick={handleSubmit(handleLogin)}>
                        Log in
                    </button>

                    <span className={cx('wrapper__block-left__span-continue')}>or continue with</span>
                    <div className={cx('wrapper__block-left__social-link')}>
                        <a href="http://www.google.com/" className={cx('wrapper__block-left__social-link__item')}>
                            <Google />
                        </a>
                        <a href="https://github.com/" className={cx('wrapper__block-left__social-link__item')}>
                            <Githup />
                        </a>
                        <a href="https://www.facebook.com/" className={cx('wrapper__block-left__social-link__item')}>
                            <Facebook />
                        </a>
                    </div>
                    <span className={cx('wrapper__block-left__link-to-register')}>
                        Don’t have an account yet?{' '}
                        <span
                            onClick={() => navigate('/signup')}
                            className={cx('wrapper__block-left__link-to-register__item')}
                        >
                            Register for free
                        </span>
                    </span>
                </div>
            </div>
            <div className={cx('block-right')}>
                <img className={cx('block-right__img')} src={images.fashion_and_accessories} alt="image" />
            </div>
            <ToastContainer />
        </div>
    );
}

export default Login;
