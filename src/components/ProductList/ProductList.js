import classNames from 'classnames/bind';
import styles from './ProductList.module.scss';
import ProductItems from './ProductItems';
import images from '~/assets/images';
import { useNavigate } from 'react-router-dom';
const cx = classNames.bind(styles);

function ProductList() {
    const navigate = useNavigate();
    const productItems = [
        {
            img: images.Rectangle53,
            title: 'Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse',
            officialPrice: '$120.23',
            discountPrice: '$120.23',
            numberOrder: '24 Orders',
            newNotify: 'New Arrivals',
        },
        {
            img: images.Rectangle53,
            title: 'Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse',
            officialPrice: '$120.23',
            discountPrice: '$120.23',
            numberOrder: '24 Orders',
        },
        {
            img: images.Rectangle53,
            title: 'Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse',
            officialPrice: '$120.23',
            discountPrice: '$120.23',
            numberOrder: '24 Orders',
        },
        {
            img: images.Rectangle53,
            title: 'Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse',
            officialPrice: '$120.23',
            discountPrice: '$120.23',
            numberOrder: '24 Orders',
        },
        {
            img: images.Rectangle53,
            title: 'Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse',
            officialPrice: '$120.23',
            discountPrice: '$120.23',
            numberOrder: '24 Orders',
            newNotify: 'New Arrivals',
        },
        {
            img: images.Rectangle53,
            title: 'Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse',
            officialPrice: '$120.23',
            discountPrice: '$120.23',
            numberOrder: '24 Orders',
        },
        {
            img: images.Rectangle53,
            title: 'Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse',
            officialPrice: '$120.23',
            discountPrice: '$120.23',
            numberOrder: '24 Orders',
        },
        {
            img: images.Rectangle53,
            title: 'Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse',
            officialPrice: '$120.23',
            discountPrice: '$120.23',
            numberOrder: '24 Orders',
            newNotify: 'New Arrivals',
        },
        {
            img: images.Rectangle53,
            title: 'Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse',
            officialPrice: '$120.23',
            discountPrice: '$120.23',
            numberOrder: '24 Orders',
        },
        {
            img: images.Rectangle53,
            title: 'Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse',
            officialPrice: '$120.23',
            discountPrice: '$120.23',
            numberOrder: '24 Orders',
        },
        {
            img: images.Rectangle53,
            title: 'Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse',
            officialPrice: '$120.23',
            discountPrice: '$120.23',
            numberOrder: '24 Orders',
            newNotify: 'New Arrivals',
        },
        {
            img: images.Rectangle53,
            title: 'Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse',
            officialPrice: '$120.23',
            discountPrice: '$120.23',
            numberOrder: '24 Orders',
        },
        {
            img: images.Rectangle53,
            title: 'Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse',
            officialPrice: '$120.23',
            discountPrice: '$120.23',
            numberOrder: '24 Orders',
        },
        {
            img: images.Rectangle53,
            title: 'Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse',
            officialPrice: '$120.23',
            discountPrice: '$120.23',
            numberOrder: '24 Orders',
        },
        {
            img: images.Rectangle53,
            title: 'Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse',
            officialPrice: '$120.23',
            discountPrice: '$120.23',
            numberOrder: '24 Orders',
        },
    ];
    return (
        <div className={cx('wrapper lg:grid lg:grid-cols-3 lg:gap-x-[23px] lg:gap-y-[50px]')}>
            {productItems.map((productItem, index) => (
                <ProductItems
                    onClick={() => {
                        navigate('/details');
                        document.title = 'Details';
                    }}
                    key={index}
                    img={productItem.img}
                    title={productItem.title}
                    officialPrice={productItem.officialPrice}
                    discountPrice={productItem.discountPrice}
                    numberOrder={productItem.numberOrder}
                    newNotify={productItem.newNotify && productItem.newNotify}
                />
            ))}
        </div>
    );
}

export default ProductList;
