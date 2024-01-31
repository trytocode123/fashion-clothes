import classNames from 'classnames/bind';
import styles from './Cart.module.scss';
import { AddVoucher, Location1, Location2, Location3 } from '~/components/Icons/Icon';
import images from '~/assets/images';
import Quality from '~/components/Quality/Quality';
import Button from '~/components/Button/Button';

const cx = classNames.bind(styles);
function Cart() {
    const carts = [
        {
            img: images.image_removebg_preview1,
            title: 'Nike Air Max 95',
            name: 'Men’s Shoes',
            quality: '1 Colour',
            price: '$71.56',
        },
        {
            img: images.image_removebg_preview1,
            title: 'Nike Air Max 95',
            name: 'Men’s Shoes',
            quality: '1 Colour',
            price: '$71.56',
        },
        {
            img: images.image_removebg_preview1,
            title: 'Nike Air Max 95',
            name: 'Men’s Shoes',
            quality: '1 Colour',
            price: '$71.56',
        },
        {
            img: images.image_removebg_preview1,
            title: 'Nike Air Max 95',
            name: 'Men’s Shoes',
            quality: '1 Colour',
            price: '$71.56',
        },
        {
            img: images.image_removebg_preview1,
            title: 'Nike Air Max 95',
            name: 'Men’s Shoes',
            quality: '1 Colour',
            price: '$71.56',
        },
    ];

    const fields = [
        { text: 'Subtotal (3 items)' },
        { text: 'Shipping fee' },
        { text: 'Discount' },
        { icon: <AddVoucher />, text: 'Add voucher' },
        { text: 'Total' },
    ];

    const results = ['$300', '$1', '-$15', '-$3', '$283'];
    return (
        <div className={cx('lg:flex lg:flex-col lg:mt-[100px]')}>
            <h2
                className={cx(
                    'lg:border-b-[#000] lg:border-solid lg:border-b-[1px] lg:font-[inter] lg:text-[60px] lg:font-[700] lg:normal lg:leading-[120%] lg:text-[#5F4C49] lg:outline-none lg:pb-[30px] lg:mb-[30px]',
                )}
            >
                Cart
            </h2>

            <div className={cx('lg:flex lg:flex-col lg:gap-[30px]')}>
                <div className={cx('lg:flex lg:gap-[15px]')}>
                    <Location1 />
                    <span className={cx('lg:text-[#171212] lg:font-[Poppins] lg:text-[24px] lg:font-[600] lg:normal')}>
                        Delivery address
                    </span>
                </div>

                <div className={cx('lg:flex lg:items-center lg:gap-[53px] mb-[120px]')}>
                    <div
                        className={cx(
                            'lg:flex lg:flex-col lg:p-[25px] lg:bg-[#D8BC7E] lg:w-[369px] lg:h-[150px] lg:gap-[20px] lg:rounded-[10px]',
                        )}
                    >
                        <Location2 />
                        <span
                            className={cx(
                                'lg:text-[#171212] lg:font-[Inter] lg:text-[16px] lg:font-[400] lg:leading-[150%] lg:whitespace-normal ',
                            )}
                        >
                            925/6 Ngô Quyền,An Hải Bắc,quận Sơn Trà, thành phố Đà Nẵng
                        </span>
                    </div>

                    <div
                        className={cx(
                            'lg:flex lg:flex-col lg:p-[25px] lg:border-dashed lg:w-[369px] lg:rounded-[10px] lg:h-[150px] lg:border-[2px] lg:border-[#D8BC7E] lg:gap-[20px]',
                        )}
                    >
                        <Location3 />
                        <span
                            className={cx(
                                'lg:text-[#171212] lg:font-[Inter] lg:text-[16px] lg:font-[400] lg:leading-[150%] lg:whitespace-normal',
                            )}
                        >
                            36/7 Tôn Thất Thuyết, thành phố Đông Hà, Quảng Trị
                        </span>
                    </div>
                </div>

                <div className={cx('lg:flex lg:flex-col lg:gap-[100px] lg:mb-[96px] lg:w-[400]')}>
                    {carts.map((cart, index) => (
                        <CartItems key={index} cartItem={cart} />
                    ))}
                </div>

                <div className={cx('lg:flex lg:flex-col lg:gap-[40px]')}>
                    <h2
                        className={cx(
                            'lg:text-[#171212] lg:font-[700] lg:normal lg:leading-[120%] lg:text-[24px] lg:pb-[30px] lg:border-b-solid lg:border-[#8A7268] lg:border-b-[1px] lg:px-[16px]',
                        )}
                    >
                        Pricing & shipping fee
                    </h2>
                    <div className={cx('lg:grid lg:grid-cols-2 lg:gap-x-[574px] lg:max-h-[415px]')}>
                        <div className={cx('lg:flex lg:flex-col lg:gap-[50px]')}>
                            {fields.map((field, index) => (
                                <div key={index} className={cx('lg:flex lg:items-center lg:gap-[21px]')}>
                                    {field.icon && <span key={field}>{field.icon}</span>}
                                    <span
                                        key={index}
                                        className={cx(
                                            'lg:text-[#171212] lg:text-[20px] lg:normal lg:font-[700] lg:leading-[120%]',
                                        )}
                                    >
                                        {field.text}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <div className={cx('lg:flex lg:flex-col lg:gap-y-[30px] lg:text-center')}>
                            {results.map((result, index) => (
                                <span
                                    key={index}
                                    className={cx(
                                        'lg:bg-[#C5A356] lg:max-w-[80px] lg:text-[#E5E0DC] lg:text-[20px] lg:font-[700] lg:normal lg:leading-[120%] lg:rounded-[40px] lg:p-[10px]',
                                    )}
                                >
                                    {result}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className={cx('lg:flex lg:justify-end lg:items-center')}>
                    <Button />
                </div>
            </div>
        </div>
    );
}

function CartItems({ cartItem = {} }) {
    return (
        <div className={cx('lg:flex lg:items-center lg:justify-between')}>
            <div className={cx('lg:flex lg:items-center lg:w-[200px] lg:h-[200px]')}>
                <img src={cartItem.img} />
                <div className={cx('lg:flex lg:flex-col lg:gap-[10px] lg:w-[500px]')}>
                    <span
                        className={cx(
                            'lg:text-[#171212] lg:font-[700] lg:text-[20px] lg:normal lg:leading-[150%] lg:w-[300px] ',
                        )}
                    >
                        {cartItem.title}
                    </span>
                    <span
                        className={cx(
                            'lg:text-[#171212] lg:font-[400] lg:text-[16px] lg:normal lg:leading-[150%] lg:w-[300px] ',
                        )}
                    >
                        {cartItem.name}
                    </span>
                    <span
                        className={cx(
                            'lg:text-[#171212] lg:font-[400] lg:text-[16px] lg:normal lg:leading-[150%] lg:w-[300px] ',
                        )}
                    >
                        {cartItem.quality}
                    </span>
                </div>
            </div>

            <div className={cx('lg:flex lg:flex-col lg:gap-[30px] lg:w-[250px] lg:h-[196px]')}>
                <span className={cx('lg:text-[#AB8A37] lg:text-[28px] lg:font-[700] lg:leading-[normal] lg:normal')}>
                    {cartItem.price}
                </span>
                <Quality />
            </div>
        </div>
    );
}

export default Cart;
