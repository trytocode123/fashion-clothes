import classNames from 'classnames/bind';
import styles from './Change.module.scss';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import images from '~/assets/images';

const cx = classNames.bind(styles);
function Change() {
    const Nav = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    return (
        <div className={cx('wrapper')}>
            <div className={cx('block-left')}>
                <div className={cx('block-left__change-password')}>
                    <div className={cx('block-left__change-password__title-lux-change')}>
                        <span className={cx('block-left__change-password__title-lux-change-span')}>Luxury</span>
                        <h2 className={cx('block-left__change-password__title-lux-change-h2')}>Change Password</h2>
                    </div>

                    <div className={cx('wrapper-total')}>
                        <div className={cx('wrapper-form')}>
                            <div className={cx('wrapper-form__item')}>
                                <label className={cx('label')}>New Password</label>
                                <input type="password" {...register('newpassword', { required: true })} />
                                {errors.newpassword && <p className={cx('error-message')}>Email is required!</p>}
                            </div>

                            <div className={cx('wrapper-form__item')}>
                                <label className={cx('label')}>Confirm Password</label>
                                <input type="password" {...register('confirmpassword', { required: true })} />
                                {errors.confirmpassword && <p className={cx('error-message')}>Password is required!</p>}
                            </div>
                        </div>

                        <div className={cx('wrapper__next-cancel')}>
                            <button className={cx('btn-next')} onClick={handleSubmit((data) => console.log(data))}>
                                Next
                            </button>
                            <button
                                onClick={() => {
                                    Nav('/login');
                                }}
                                className={cx('btn-cancel')}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('block-right')}>
                <img className={cx('img')} src={images.fashion_and_accessories} />
            </div>
        </div>
    );
}

export default Change;
