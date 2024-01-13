import classNames from 'classnames/bind';
import styles from './ProductItems.module.scss';

const cx = classNames.bind(styles);

function ProductItems({ title, officialPrice, discountPrice, numberOrder, newNotify, img, onClick }) {
    return (
        <div onClick={onClick} className={cx('product-item')}>
            <div>
                <img className={cx('img')} src={img} />
            </div>
            <span className={cx('span')}>{title}</span>

            <div className={cx('block-price')}>
                <div className={cx('block-price__left')}>
                    <span className={cx('official-price')}>{officialPrice} </span>
                    <span className={cx('discount-price')}>{discountPrice}</span>
                </div>
                <div className={cx('block-price__right')}>
                    <span className={cx('number-of-order')}>{numberOrder}</span>
                    {newNotify && <span className={cx('new')}>{newNotify}</span>}
                </div>
            </div>
        </div>
    );
}

export default ProductItems;
