import classNames from 'classnames/bind';
import styles from './Details.module.scss';
import images from '~/assets/images';
import {
    Cart2,
    Delivery,
    Flag,
    Heart,
    InputBlue,
    InputChecked,
    InputGradient,
    InputGreen,
    InputPink,
    LeftImage,
    Message,
    ReturnDelivery,
    RightImage,
    RightNav,
    Share,
    Star,
    Tick,
} from '~/components/Icons/Icon';
import Button from '~/components/Button/Button';
import { useState } from 'react';
import Quanlity from '~/components/Quanlity';

const cx = classNames.bind(styles);

function Details() {
    const [active, setActive] = useState(-1);
    const [borderIndex, setBorderIndex] = useState(0);
    const [hideon, setHideOn] = useState(0);

    const arrNavs = [
        'Home',
        <RightNav />,
        'Decoration',
        <RightNav />,
        'Furniture',
        <RightNav />,
        'Storage',
        <RightNav />,
        'Sideboard',
    ];
    const arrBenefits = [
        'Durable leather is easily cleanable so you can keep your look fresh.',
        'Water-repellent finish and internal membrane help keep your feet dry.',
        'Toe piece with star pattern adds durability.',
        'Synthetic insulation helps keep you warm.',
        'Originally designed for performance hoops, the Air unit delivers lightweight cushioning.',
        'Plush tongue wraps over the ankle to help keep out the moisture and cold.',
        'Rubber outsole with aggressive traction pattern adds durable grip.',
        'Durable leather is easily cleanable so you can keep your look fresh.',
    ];
    const productDetails = [
        'Not intended for use as Personal Protective Equipment (PPE)',
        'Water-repellent finish and internal membrane help keep your feet dry.',
    ];
    const moreDetails = [
        'Lunarlon midsole delivers ultra-plush responsiveness',
        'Encapsulated Air-Sole heel unit for lightweight cushioning',
        'Colour Shown: Ale Brown/Black/Goldtone/Ale Brown',
        'Style: 805899-202',
    ];
    const similarItems = [
        {
            img: images.image6,
            title: 'TDX Sinkers',
            price: '$ 65.00',
            content: '5 types of shoos available',
            stars: [images.Star, images.Star, images.Star, images.Star],
            starHalf: images.Star_Half,
        },
        {
            img: images.image6,
            title: 'TDX Sinkers',
            price: '$ 65.00',
            content: '5 types of shoos available',
            stars: [images.Star, images.Star, images.Star, images.Star],
            starHalf: images.Star_Half,
        },
        {
            img: images.image6,
            title: 'TDX Sinkers',
            price: '$ 65.00',
            content: '5 types of shoos available',
            stars: [images.Star, images.Star, images.Star, images.Star],
            starHalf: images.Star_Half,
        },
        {
            img: images.image6,
            title: 'TDX Sinkers',
            price: '$ 65.00',
            content: '5 types of shoos available',
            stars: [images.Star, images.Star, images.Star, images.Star],
            starHalf: images.Star_Half,
        },
        {
            img: images.image6,
            title: 'TDX Sinkers',
            price: '$ 65.00',
            content: '5 types of shoos available',
            stars: [images.Star, images.Star, images.Star, images.Star],
            starHalf: images.Star_Half,
        },
        {
            img: images.image6,
            title: 'TDX Sinkers',
            price: '$ 65.00',
            content: '5 types of shoos available',
            stars: [images.Star, images.Star, images.Star, images.Star],
            starHalf: images.Star_Half,
        },
    ];
    const arrBtns = ['Description', 'Review'];
    const arrDeliveries = [
        {
            icon: <Delivery />,
            title: 'Free Delivery',
            content: 'Enter your Postal code for Delivery Availability',
            borderBottom: true,
            paddingBottom: true,
        },
        {
            icon: <ReturnDelivery />,
            title: 'Return Delivery',
            content: 'Free 30 days Delivery Return. Details',
            paddingTop: true,
        },
    ];
    const arrImgs = [images.Rectangle6, images.Rectangle5, images.Rectangle7, images.Rectangle8];

    const arrSizes = ['Small', 'Medium', 'Large', 'Extra Large', 'XXL'];
    const inputCheckboxes = [<InputChecked />, <InputGreen />, <InputBlue />, <InputPink />, <InputGradient />];

    return (
        <div className={cx('wrapper')}>
            <div className={cx('block-details')}>
                <div className={cx('block-details__img')}>
                    <img src={images.Rectangle4} />

                    <div className={cx('2xl:flex 2xl:items-center 2xl:justify-between')}>
                        <Button>
                            <LeftImage className={cx('2xl:mr-[-35px]')} />
                        </Button>
                        {arrImgs.map((arrImg, index) => (
                            <img key={index} src={arrImg} />
                        ))}
                        <Button>
                            <RightImage />
                        </Button>
                    </div>
                </div>

                <div className={cx('block-details__product')}>
                    <div
                        className={cx(
                            'md:flex md:flex-col md:gap-[40px] md:max-w-[100%] md:max-h-[250px] md:border-solid md:border-b-[1px] md:border-[#CCC3BC] 2xl:p-[10px]',
                        )}
                    >
                        <div className={cx('block-details__product__category')}>
                            {arrNavs.map((arrNav, index) => (
                                <Button
                                    bold={active === index ? true : false}
                                    key={index}
                                    onClick={() => setActive(index)}
                                    className={cx('block-details__product__category__btn')}
                                    children={arrNav}
                                />
                            ))}
                        </div>

                        <div className={cx('md:flex md:justify-between md:mb-[56px]')}>
                            <div className={cx('md:flex md:flex-col md:gap-[11px]')}>
                                <h2
                                    className={cx(
                                        '2xl:max-w-[219px] 2xl:max-h-[34px] 2xl:font-inter 2xl:normal 2xl:font-[600] 2xl:leading-normal 2xl:text-[28px] 2xl:text-[#171212]',
                                    )}
                                >
                                    Cannage Jacket
                                </h2>

                                <span
                                    className={cx(
                                        'md:max-w-[169px] md:max-h[24px] md:text-[#B9BBBF] md:font-[inter] md:normal md:font-[400] md:text-[16px] md:leading-[150%]',
                                    )}
                                >
                                    Teixeira Design Studio
                                </span>
                            </div>

                            <div className={cx('md:flex  md:justify-center md:items-center md:gap-[13px]')}>
                                <div
                                    className={cx(
                                        '2xl:flex 2xl:justify-center 2xl:items-center 2xl:max-w-[76px] 2xl:max-h-[43px] 2xl:gap-[7px] 2xl:p-[10px]',
                                    )}
                                >
                                    <Heart />
                                    <span className={cx('md:text-[#D46F77]')}>109</span>
                                </div>
                                <div className={cx('2xl:p-[7px]')}>
                                    <Flag />
                                </div>
                                <div className={cx('2xl:p-[7px]')}>
                                    <Share />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className={cx(
                            '2xl:flex 2xl:items-center 2xl:gap-[41px] 2xl:max-w-[100%] 2xl:max-h-[96px] 2xl:mt-[40px] 2xl:border-b-[1px] 2xl:border-solid 2xl:border-[#CCC3BC] 2xl:pb-[39px] 2xl:mb-[40px]',
                        )}
                    >
                        <div className={cx('2xl:flex 2xl:flex-col 2xl:gap-[6px] 2xl:max-h-[72px] 2xl:max-w-[113px]')}>
                            <h2
                                className={cx(
                                    '2xl:max-w-[100%] 2xl:max-h-[41px] 2xl:font-inter 2xl:text-[34px] 2xl:font-[700] 2xl:text-[#AB8A37]',
                                )}
                            >
                                $71.56
                            </h2>
                            <span
                                className={cx(
                                    '2xl:max-w-[113px] 2xl:max-h-[25px] 2xl:text-[#AFA095] 2xl:font-inter 2xl:normal 2xl:leading-[normal] 2xl:line-through 2xl:text-[21px]',
                                )}
                            >
                                $71.56
                            </span>
                        </div>
                        {/* Wrapper total */}
                        <div className={cx('md:flex md:flex-col md:gap-[14px] md:max-w-[264px] md:max-h-[62px]')}>
                            {/* Star */}
                            <div
                                className={cx(
                                    'md:flex md:gap-[12px] md:items-center md:max-w-[100%] md:max-h-[31px] md:p-[10px]',
                                )}
                            >
                                <div className={cx('md:flex md:gap-[7px] md:items-center')}>
                                    <Star />
                                    <span
                                        className={cx(
                                            'md:font-inter md:text-[14px] md:text-[#D48D3B] md:normal md:leading-[normal] md:font-[600]',
                                        )}
                                    >
                                        4.8
                                    </span>
                                </div>
                                <div />
                                {/* Message */}
                                <div
                                    className={cx(
                                        'md:flex md:items-center md:gap-[7px] md:max-w-[121px] md:p-[10px] md:bg-[#EDF0F8]',
                                    )}
                                >
                                    <Message />

                                    <span
                                        className={cx(
                                            'md:font-inter md:text-[14px] md:normal md:leading-[normal] md:text-[#3A4980]',
                                        )}
                                    >
                                        67 Reviews
                                    </span>
                                </div>
                            </div>
                            <div className={cx('md:flex md:item-center md:max-w-[300px] md:max-h-[18px]')}>
                                <span
                                    className={cx(
                                        'md:text-[#3E9242] md:font-inter md:normal md:font-[600] md:text-[14px] md:leading-[normal] md:mr-[2px]',
                                    )}
                                >
                                    93%
                                </span>
                                <span
                                    className={cx(
                                        'md:text-[ #AFA095] md:font-inter md:normal md:leading-[normal] md:text-[14px] md:font-[400] md:ml-[3px]',
                                    )}
                                >
                                    of buyers have recommended this.
                                </span>
                            </div>
                        </div>
                    </div>

                    <div
                        className={cx(
                            '2xl:flex 2xl:flex-col 2xl:gap-[13px] 2xl:border-b-[1px] 2xl:border-solid 2xl:border-[#CCC3BC] 2xl:pb-[72px] 2xl:mb-[40px]',
                        )}
                    >
                        <span
                            className={cx(
                                '2xl:max-w-[118px] 2xl:max-h-[19px] 2xl:font-inter 2xl:normal 2xl:leading:[normal] 2xl:text-[16px] 2xl:font-[600] 2xl:text-[#AFA095]',
                            )}
                        >
                            Choose a Color
                        </span>
                        <div
                            className={cx('2xl:flex 2xl:gap-[12px] 2xl:items-center 2xl:max-w-[100%] 2xl:max-h-[96px]')}
                        >
                            {inputCheckboxes.map((inputCheckbox, index) => (
                                <div key={index}>{inputCheckbox}</div>
                            ))}
                        </div>
                    </div>

                    <div
                        className={cx(
                            '2xl:bg-[#faf5eb] 2xl:flex 2xl:max-h-[125px] max-w-[100%] 2xl:flex-col 2xl:gap-[14px]  2xl:border-b-[1px] 2xl:border-[#CCC3BC] 2xl:border-solid 2xl:pb-[40px] 2xl:mb-[40px]',
                        )}
                    >
                        <span
                            className={cx(
                                '2xl:font-inter 2xl:text-[16px] 2xl:normal 2xl:font-[400] 2xl:leading-[150%] 2xl:text-[#AFA095]',
                            )}
                        >
                            Choose a Size
                        </span>

                        <div className={cx('2xl:flex 2xl:gap-[11px] max-w-[494px]')}>
                            {arrSizes.map((arrSize, index) => (
                                <div
                                    key={arrSize}
                                    className={cx(
                                        '2xl:flex 2xl: items-center 2xl:gap-[8px] 2xl:pl-[10px] 2xl:pr-[10px] 2xl:pt-[7px] 2xl:pb-[7px] 2xl:mb-[8px] 2xl:rounded-[8px] 2xl:bg-[#EDF0F8]',
                                    )}
                                >
                                    <input
                                        name="size"
                                        className={cx('2xl:w-4 2xl:h-4')}
                                        type="radio"
                                        key={index}
                                        id={index}
                                    />
                                    <label
                                        htmlFor={index}
                                        className={cx(
                                            '2xl:font-inter 2xl:text-[14px] 2xl:normal 2xl:text-[#3A4980] 2xl:font-[500]',
                                        )}
                                    >
                                        {arrSize}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div
                        className={cx(
                            '2xl:bg-[#faf5eb] 2xl:flex 2xl:justify-between 2xl:items-center 2xl:h-[50px] 2xl:mb-[68px]',
                        )}
                    >
                        <Quanlity />
                        <button
                            className={cx(
                                '2xl:flex 2xl:items-center 2xl:text-[#FFFFFF] 2xl:bg-[#AB8A37] 2xl:w-[460px] 2xl:h-[50px] 2xl:rounded-[40px] 2xl:justify-center 2xl:cursor-pointer 2xl:hover:opacity-[0.9]',
                            )}
                        >
                            <div className={cx('2xl:flex 2xl:items-center 2xl:gap-[10px]')}>
                                <Cart2 />
                                <span>Add To Cart</span>
                            </div>
                        </button>
                    </div>

                    <div
                        className={cx(
                            '2xl:grid 2xl:grid-cols-1 2xl:rounded-[14px] 2xl:p-[17px] 2xl:border-solid 2xl:border-[3px] 2xl:border-[E4E4E4]',
                        )}
                    >
                        {arrDeliveries.map((arrDelivery, index) => (
                            <div
                                key={index}
                                className={cx('2xl:flex 2xl:gap-[14px]', {
                                    'border-bottom': arrDelivery.borderBottom,
                                    'padding-bottom': arrDelivery.paddingBottom,
                                    'padding-top': arrDelivery.paddingTop,
                                })}
                            >
                                <span> {arrDelivery.icon}</span>

                                <div className={cx('2xl:grid 2xl:grid-cols-1 2xl:gap-y-[7px]')}>
                                    <strong>{arrDelivery.title}</strong>
                                    <span>{arrDelivery.content}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className={cx('2xl:flex 2xl:flex-col 2xl:h-[1670px]')}>
                <div
                    className={cx(
                        '2xl:flex 2xl:items-center 2xl:border-[#E5E0DC] 2xl:border-b-[5px] 2xl:h-[80px]  2xl:text-[#AB8A37] 2xl:pb-[30px] 2xl:mb-[53px]',
                    )}
                >
                    {arrBtns.map((arrBtn, index) => (
                        <Button
                            colorAcitve={true}
                            active2={index === borderIndex ? true : false}
                            className={cx('btn')}
                            onClick={() => {
                                setBorderIndex(index);
                                setHideOn(index);
                            }}
                            key={index}
                            children={arrBtn}
                        />
                    ))}
                </div>

                {hideon === 0 ? (
                    <div className={cx('2xl:flex 2xl:flex-col 2xl:mb-[40px]')}>
                        <div className={cx('2xl:flex 2xl:flex-col 2xl:gap-[21px] 2xl:mb-[40px] ')}>
                            <strong className={cx('2xl:text-[#344054] 2xl:text-[24px] 2xl:normal 2xl:font-[700]')}>
                                Product Description
                            </strong>
                            <span className={cx('2xl:text-[#5F4C49] 2xl:font-inter 2xl:font-[400]')}>
                                When it's colder than the far side of the moon and spitting rain too, you've still got
                                to look good. From water-repellent leather to a rugged outsole, the Lunar Force 1 adapts
                                AF-1 style, so you can keep your flame burning when the weather hits. Metal lace
                                hardware and extended tongue bring mountain boot toughness, while the star-studded toe
                                design gives your look the edge
                            </span>
                        </div>
                        <div className={cx('2xl:flex 2xl:flex-col 2xl:mb-[40px]')}>
                            <strong
                                className={cx(
                                    '2xl:text-[#344054] 2xl:text-[24px] 2xl:normal 2xl:font-[700] 2xl:block 2xl:mb-[21px]',
                                )}
                            >
                                Benefits
                            </strong>

                            <div className={cx('2xl:flex 2xl:flex-col 2xl:gap-[14px]')}>
                                {arrBenefits.map((arrBenefit, index) => (
                                    <div key={index} className={cx('2xl:flex 2xl:gap-[14px] 2xl:items-center')}>
                                        <span>
                                            <Tick />
                                        </span>
                                        <span key={arrBenefit}>{arrBenefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className={cx('2xl:flex 2xl:flex-col 2xl:mb-[40px]')}>
                            <strong
                                className={cx(
                                    '2xl:text-[#344054] 2xl:text-[24px] 2xl:normal 2xl:font-[700] 2xl:block 2xl:mb-[21px]',
                                )}
                            >
                                Product Details
                            </strong>

                            <div className={cx('2xl:flex 2xl:flex-col 2xl:gap-[14px]')}>
                                {productDetails.map((productDetail, index) => (
                                    <div key={index} className={cx('2xl:flex 2xl:gap-[14px] 2xl:items-center')}>
                                        <span>
                                            <Tick />
                                        </span>
                                        <span key={productDetail}>{productDetail}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className={cx('2xl:flex 2xl:flex-col 2xl:mb-[40px]')}>
                            <strong
                                className={cx(
                                    '2xl:text-[#344054] 2xl:text-[24px] 2xl:normal 2xl:font-[700] 2xl:block 2xl:mb-[21px]',
                                )}
                            >
                                More Details
                            </strong>

                            <div className={cx('2xl:flex 2xl:flex-col 2xl:gap-[14px]')}>
                                {moreDetails.map((moreDetail, index) => (
                                    <div key={index} className={cx('2xl:flex 2xl:gap-[14px] 2xl:items-center')}>
                                        <span>
                                            <Tick />
                                        </span>
                                        <span key={moreDetail}>{moreDetail}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className={cx('2xl:flex 2xl:flex-col 2xl:gap-[41px] 2xl:mb-[80px]')}>
                        <span
                            className={cx(
                                '2xl:text-[#344054] 2xl:font-Proxima Nova] 2xl:text-[24px] 2xl:normal 2xl:font-[700]',
                            )}
                        >
                            Stylish and Comfortable: A Review of XYZ Brand's Fall Collection
                        </span>

                        <div className={cx('2xl:flex 2xl:flex-col 2xl:gap-[21px]')}>
                            <span className={cx('2xl:leading-7')}>
                                I recently had the pleasure of exploring XYZ Brand's latest Fall collection, and I must
                                say, I am thoroughly impressed with the blend of style and comfort they've managed to
                                achieve. From cozy sweaters to chic outerwear, the entire collection exudes a sense of
                                modern sophistication.
                            </span>

                            <span className={cx('2xl:leading-7')}>
                                One standout piece from the collection is the "Autumn Bliss Sweater." The material is
                                incredibly soft against the skin, providing a level of comfort that makes it perfect for
                                all-day wear. The design is both trendy and versatile, featuring a slightly oversized
                                fit that adds an extra touch of coziness. The attention to detail, from the intricate
                                knit pattern to the well-finished seams, showcases the brand's commitment to quality
                                craftsmanship.
                            </span>

                            <span className={cx('2xl:leading-7')}>
                                Another highlight is the "Urban Explorer Jacket." This outerwear piece not only keeps
                                you warm on chilly days but also elevates your overall look. The tailored fit and
                                attention-grabbing color options make it a statement piece for any autumn wardrobe. The
                                addition of functional pockets and a durable zipper adds practicality to the fashionable
                                design.
                            </span>

                            <span className={cx('2xl:leading-7')}>
                                One aspect that particularly impressed me is the inclusivity of sizing in XYZ Brand's
                                collection. The diverse range ensures that individuals of all body types can enjoy the
                                latest trends without compromising on style. It's refreshing to see a brand prioritize
                                inclusivity, making fashion accessible to a wider audience.
                            </span>

                            <span className={cx('2xl:leading-7')}>
                                While the price point may be slightly higher than some other brands, the quality and
                                design justify the investment. I appreciate the brand's commitment to sustainable
                                practices, using eco-friendly materials and ethical manufacturing processes. Knowing
                                that my fashion choices contribute to a more sustainable industry adds an extra layer of
                                satisfaction.
                            </span>

                            <span className={cx('2xl:leading-7')}>
                                In conclusion, XYZ Brand's Fall collection is a testament to their commitment to
                                blending fashion and functionality seamlessly. The attention to detail, comfort,
                                inclusivity, and sustainability make this collection a standout choice for anyone
                                looking to stay stylish and cozy during the autumn season. I would highly recommend
                                exploring their offerings for a wardrobe upgrade that marries fashion and comfort
                                effortlessly.
                            </span>
                        </div>
                    </div>
                )}
                <div className={cx('2xl:flex 2xl:flex-col 2xl:gap-[40px]')}>
                    <strong
                        className={cx(
                            '2xl:font-[700] 2xl:text-[#344054] 2xl:font-[inter] 2xl:normal 2xl:text-[30px] 2xl:leading-[150%]',
                        )}
                    >
                        Similar Items You Might Also Like
                    </strong>
                    <div className={cx('2xl:flex 2xl:gap-[16px] 2xl:flex-wrap')}>
                        {similarItems.map((similarItem, index) => (
                            <SimilarItems key={index} similarItems={similarItem} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

function SimilarItems({ similarItems }) {
    return (
        <div className={cx('2xl:flex 2xl:items-center 2xl:gap-[16px]')}>
            <div
                className={cx(
                    '2xl:flex 2xl:flex-col 2xl:gap-[16px] 2xl:pt-[6px] 2xl:pr-[4px] 2xl:pb-[14.458px] 2xl:pl-[5px] 2xl:rounded-[6px] 2xl:border-solid 2xl:border-[1px] 2xl:border-[#8A7268]',
                )}
            >
                <img src={similarItems.img} />

                <div className={cx('2xl:flex 2xl:flex-col 2xl:gap-[4px] ')}>
                    <span
                        className={cx(
                            '2xl:text-[#667085] 2xl:font-[inter] 2xl:text-[16px] 2xl:font-[400] 2xl:normal 2xl:leading-[150%]',
                        )}
                    >
                        {similarItems.title}
                    </span>
                    <span
                        className={cx(
                            '2xl:normal 2xl:font-[inter] 2xl:font-[700] 2xl:leading-[28px] 2xl:text-[18px] 2xl:text-[#344054]',
                        )}
                    >
                        {similarItems.price}
                    </span>
                    <span
                        className={cx(
                            '2xl:text-[#98A2B3] 2xl:font-[inter] 2xl:text-[14px] 2xl:normal 2xl:leading-[150%] 2xl:font-[400]',
                        )}
                    >
                        5 types of shoos available
                    </span>

                    <div className={cx('2xl:flex 2xl:items-center')}>
                        {similarItems.stars.map((star, index) => (
                            <img key={index} src={star} />
                        ))}
                        <img src={images.Star_Half} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Details;
