import classNames from 'classnames/bind';
import styles from './Cart.module.scss';
import { AddVoucher, Location1, Location2, Location3 } from '~/components/Icons/Icon';
import images from '~/assets/images';
import Quanlity from '~/components/Quanlity';
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
        <div className={cx('2xl:flex 2xl:flex-col')}>
            <h2
                className={cx(
                    '2xl:border-b-[#000] 2xl:border-solid 2xl:border-b-[1px] 2xl:font-[inter] 2xl:text-[60px] 2xl:font-[700] 2xl:normal 2xl:leading-[120%] 2xl:text-[#5F4C49] 2xl:outline-none 2xl:pb-[30px] 2xl:mb-[30px]',
                )}
            >
                Cart
            </h2>

            <div className={cx('2xl:flex 2xl:flex-col 2xl:gap-[30px]')}>
                <div className={cx('2xl:flex 2xl:gap-[15px]')}>
                    <Location1 />
                    <span
                        className={cx(
                            '2xl:text-[#171212] 2xl:font-[Poppins] 2xl:text-[24px] 2xl:font-[600] 2xl:normal',
                        )}
                    >
                        Delivery address
                    </span>
                </div>

                <div className={cx('2xl:flex 2xl:items-center 2xl:gap-[53px] mb-[120px]')}>
                    <div
                        className={cx(
                            '2xl:flex 2xl:flex-col 2xl:p-[25px] 2xl:bg-[#D8BC7E] 2xl:w-[369px] 2xl:h-[150px] 2xl:gap-[20px] 2xl:rounded-[10px]',
                        )}
                    >
                        <Location2 />
                        <span
                            className={cx(
                                '2xl:text-[#171212] 2xl:font-[Inter] 2xl:text-[16px] 2xl:font-[400] 2xl:leading-[150%] 2xl:whitespace-normal ',
                            )}
                        >
                            925/6 Ngô Quyền,An Hải Bắc,quận Sơn Trà, thành phố Đà Nẵng
                        </span>
                    </div>

                    <div
                        className={cx(
                            '2xl:flex 2xl:flex-col 2xl:p-[25px] 2xl:border-dashed 2xl:w-[369px] 2xl:rounded-[10px] 2xl:h-[150px] 2xl:border-[2px] 2xl:border-[#D8BC7E] 2xl:gap-[20px]',
                        )}
                    >
                        <Location3 />
                        <span
                            className={cx(
                                '2xl:text-[#171212] 2xl:font-[Inter] 2xl:text-[16px] 2xl:font-[400] 2xl:leading-[150%] 2xl:whitespace-normal',
                            )}
                        >
                            36/7 Tôn Thất Thuyết, thành phố Đông Hà, Quảng Trị
                        </span>
                    </div>
                </div>

                <div className={cx('2xl:flex 2xl:flex-col 2xl:gap-[120px] 2xl:mb-[96px]')}>
                    {carts.map((cart, index) => (
                        <CartItems key={index} cartItem={cart} />
                    ))}
                </div>

                <div className={cx('2xl:flex 2xl:flex-col 2xl:gap-[40px]')}>
                    <h2
                        className={cx(
                            '2xl:text-[#171212] 2xl:font-[700] 2xl:normal 2xl:leading-[120%] 2xl:text-[36px] 2xl:pb-[30px] 2xl:border-b-solid 2xl:border-[#8A7268] 2xl:border-b-[1px] 2xl:px-[16px]',
                        )}
                    >
                        Pricing & shipping fee
                    </h2>
                    <div className={cx('2xl:grid 2xl:grid-cols-2 2xl:gap-x-[574px] 2xl:max-h-[415px]')}>
                        <div className={cx('2xl:flex 2xl:flex-col 2xl:gap-[50px]')}>
                            {fields.map((field, index) => (
                                <div key={index} className={cx('2xl:flex 2xl:items-center 2xl:gap-[21px]')}>
                                    {field.icon && <span key={field}>{field.icon}</span>}
                                    <span
                                        key={index}
                                        className={cx(
                                            '2xl:text-[#171212] 2xl:text-[36px] 2xl:normal 2xl:font-[700] 2xl:leading-[120%]',
                                        )}
                                    >
                                        {field.text}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <div className={cx('2xl:grid 2xl:gird-cols-1 2xl:gap-y-[40px] 2xl:text-center')}>
                            {results.map((result, index) => (
                                <span
                                    key={index}
                                    className={cx(
                                        '2xl:bg-[#C5A356] 2xl:w-[131px] 2xl:text-[#E5E0DC] 2xl:text-[24px] 2xl:font-[700] 2xl:normal 2xl:leading-[120%] 2xl:rounded-[40px] 2xl:p-[10px]',
                                    )}
                                >
                                    {result}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className={cx('2xl:flex 2xl:justify-end 2xl:items-center')}>
                    <Button />
                </div>
            </div>
        </div>
    );
}

function CartItems({ cartItem = {} }) {
    return (
        <div className={cx('2xl:flex 2xl:items-center 2xl:justify-between')}>
            <div className={cx('2xl:flex 2xl:items-center 2xl:justify-between 2xl:w-[600px]')}>
                <img src={cartItem.img} />
                <div className={cx('2xl:flex 2xl:flex-col 2xl:gap-[10px]')}>
                    <span
                        className={cx(
                            '2xl:text-[#171212] 2xl:font-[700] 2xl:text-[30px] 2xl:normal 2xl:leading-[150%] ',
                        )}
                    >
                        {cartItem.title}
                    </span>
                    <span
                        className={cx(
                            '2xl:text-[#171212] 2xl:font-[400] 2xl:text-[30px] 2xl:normal 2xl:leading-[150%] ',
                        )}
                    >
                        {cartItem.name}
                    </span>
                    <span
                        className={cx(
                            '2xl:text-[#171212] 2xl:font-[400] 2xl:text-[30px] 2xl:normal 2xl:leading-[150%] ',
                        )}
                    >
                        {cartItem.quality}
                    </span>
                </div>
            </div>

            <div className={cx('2xl:flex 2xl:flex-col 2xl:gap-[30px] 2xl:w-[250px] 2xl:h-[196px]')}>
                <span
                    className={cx('2xl:text-[#AB8A37] 2xl:text-[34px] 2xl:font-[700] 2xl:leading-[normal] 2xl:normal')}
                >
                    {cartItem.price}
                </span>
                <Quanlity />
            </div>
        </div>
    );
}

export default Cart;
