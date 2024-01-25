import classNames from 'classnames/bind';
import styles from './Signup.module.scss';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import images from '~/assets/images';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import { Facebook, Githup, Google } from '~/components/Icons/Icon';

const cx = classNames.bind(styles);
function Signup() {
    const navigate = useNavigate();
    const handleSignup = (data) => {
        const dataPost = { ...data };
        console.log(data);
        console.log(dataPost);
        axios
            .post('https://shop-ban-hang-backend.onrender.com/user', dataPost)
            .then((response) => {
                if (response.status === 201) {
                    toast.success('Đăng ký thành công', {
                        position: 'top-right',
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: 'light',
                    });
                    navigate('/login');
                    console.log(response.data.token);
                }
            })
            .catch((e) => {
                toast.error('Đăng ký thất bại', {
                    position: 'top-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'light',
                });
                console.log(e);
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
                <div className={cx('wrapper__block-left__signup-block')}>
                    <span className={cx('wrapper__block-left__span-luxury')}>Luxury</span>
                    <h2 className={cx('wrapper__block-left__h2-signup')}>Sign up</h2>

                    <label className={cx('wrapper__block-left__label')}>Username</label>

                    <input
                        type="text"
                        placeholder="nguyendangthienan"
                        className={cx('wrapper__block-left__input')}
                        {...register('name', { required: true })}
                    />
                    {errors.name && <p className={cx('error-message')}>Username is required!</p>}
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
                    <label className={cx('wrapper__block-left__label')}>Re-enter password</label>
                    <input
                        className={cx('wrapper__block-left__input')}
                        type="password"
                        {...register('re-password', { required: true })}
                    />
                    {errors.password && <p className={cx('error-message')}>Re-enterpassword is required!</p>}
                    <label className={cx('wrapper__block-left__label')}>Phone number</label>
                    <input
                        className={cx('wrapper__block-left__input')}
                        type="tel"
                        {...register('phone', { required: true })}
                    />
                    {errors.phone && <p className={cx('error-message')}>Phone number is required!</p>}
                    <button className={cx('wrapper__block-left__btn-sign-up')} onClick={handleSubmit(handleSignup)}>
                        Sign up
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
                </div>
            </div>
            <div className={cx('block-right')}>
                <img className={cx('block-right__img')} src={images.fashion_and_accessories} />
            </div>
        </div>
    );
}

export default Signup;
