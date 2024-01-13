import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button/Button';

const cx = classNames.bind(styles);
function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('block-logo1')}>
                <div className={cx('block-logo__item1')}>
                    <img className={cx('img')} src={images.Rectangle14} />
                    <div className={cx('block-logo-for-figma')}>
                        <span className={cx('span-logo')}>Logo</span>
                        <span className={cx('for-figma')}>for Figma</span>
                    </div>
                </div>

                <div className={cx('block-logo__item2')}>
                    <div className={cx('block-img-input')}>
                        {' '}
                        <img className={cx('img')} src={images.envelope} />
                        <input placeholder="Enter your email to get the latest news..." />
                    </div>
                    <Button className={cx('btn-subscribe')}> Subsribe</Button>
                </div>
            </div>

            <div className={cx('block-logo2 sm:grid sm:grid-cols-2 w-full sm:gap-16 lg:grid-cols-4')}>
                <div className={cx('column-footer')}>
                    <h2>Column One</h2>
                    <span>Twenty One</span>
                    <span>Thirty Two</span>
                    <span>Fourty Three</span>
                    <span>Fifty Four</span>
                </div>
                <div className={cx('column-footer')}>
                    <h2>Column One</h2>
                    <span>Twenty One</span>
                    <span>Thirty Two</span>
                    <span>Fourty Three</span>
                    <span>Fifty Four</span>
                </div>
                <div className={cx('column-footer')}>
                    <h2>Column One</h2>
                    <span>Twenty One</span>
                    <span>Thirty Two</span>
                    <span>Fourty Three</span>
                    <span>Fifty Four</span>
                </div>
                <div className={cx('column-footer')}>
                    <h2>Column One</h2>
                    <div className={cx('block-button')}>
                        <Button className={cx('btn-social')}>
                            <img src={images.Group} />
                        </Button>
                        <Button className={cx('btn-social')}>
                            <img src={images.Google} />
                        </Button>
                    </div>
                </div>
            </div>

            <div className={cx('block-logo3')}>
                <span className={cx('span-footer')}>CompanyName @ 202X. All rights reserved.</span>
                <div className={cx('block-logo3__item')}>
                    <span>Eleven</span>
                    <span>Twelve</span>
                    <span>Thirteen</span>
                </div>
            </div>
        </div>
    );
}

export default Footer;
