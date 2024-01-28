import classNames from 'classnames/bind';
import styles from './Product.module.scss';
import { Down, Left, Right } from '~/components/Icons/Icon';
import Sidebar from '~/components/Sidebar';
import ProductList from '~/components/ProductList';
import Button from '~/components/Button';

const cx = classNames.bind(styles);
function Product() {
    const pageBtns = ['1', '2', '...', '13'];
    return (
        <div className={cx('wrapper')}>
            <div className={cx('notify-product')}>
                <span className={cx('notify-product__showing')}>
                    <strong>Showing 1 - 20</strong> out of 2,356 Products
                </span>
                <span className={cx('notify-product__sort')}>
                    Sort by: <strong>New Arrivals</strong> <Down />
                </span>
            </div>
            <div className={cx('product')}>
                <Sidebar />
                <ProductList />
            </div>
            <div className={cx('pages')}>
                <div className={cx('wrapper-btn-pages')}>
                    <Button className={cx('pages-btn', { color1: true })} children={<Left />} />
                    {pageBtns.map((pageBtn, index) => (
                        <Button className={cx('pages-btn')} key={index} children={pageBtn} />
                    ))}
                    <Button className={cx('pages-btn', { color2: true })} children={<Right />} />
                </div>
            </div>
        </div>
    );
}

export default Product;
