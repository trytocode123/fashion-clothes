import classNames from 'classnames/bind';
import styles from './Forgot.module.scss';

import images from '~/assets/images';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);
function Forgot() {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper_item-left')}>
                <div className={cx('wrapper_item-left_input')}>
                    <div className={cx('luxury-forgot')}>
                        <span className={cx('luxury-forgot_span-luxury')}>Luxury</span>
                        <h2 className={cx('luxury-forgot_title-forgot')}>Forgot Password</h2>
                    </div>
                    <span className={cx('enter-email')}>Enter the email address associated with your account</span>
                    <div className={cx('block-email')}>
                        <input
                            className={cx('input-email')}
                            spellCheck={false}
                            placeholder="Enter Email Address"
                            {...register('Email', { required: true })}
                        />
                        {errors.Email && <p className={cx('error-message')}>Email Address is required!</p>}
                        <button className={cx('block-email_button-next')} onClick={handleSubmit()} type="submit">
                            Next
                        </button>

                        <button
                            onClick={() => {
                                navigate('/login');
                            }}
                            className={cx('block-email_button-cancel')}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>

            <div className={cx('wrapper_item-right')}>
                <img className={cx('img')} src={images.fashion_and_accessories} alt="image" />
            </div>
        </div>
    );
}

export default Forgot;
