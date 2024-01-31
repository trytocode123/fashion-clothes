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
import Quality from '~/components/Quality';

const cx = classNames.bind(styles);

function Details() {
    const [active, setActive] = useState(0);
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

                    <div className={cx('lg:flex lg:items-center lg:justify-between lg:w-[100%]')}>
                        <Button>
                            <LeftImage className={cx('lg:mr-[-35px]')} />
                        </Button>
                        {arrImgs.map((arrImg, index) => (
                            <img className={cx('lg:w-[100px]')} key={index} src={arrImg} />
                        ))}
                        <Button>
                            <RightImage />
                        </Button>
                    </div>
                </div>

                <div className={cx('block-details__product')}>
                    <div
                        className={cx(
                            'lg:flex lg:flex-col lg:gap-[40px] lg:max-w-[100%] lg:max-h-[250px] lg:border-solid lg:border-b-[1px] lg:border-[#CCC3BC] lg:p-[10px]',
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

                        <div className={cx('lg:flex lg:justify-between lg:mb-[56px]')}>
                            <div className={cx('lg:flex lg:flex-col lg:gap-[11px]')}>
                                <h2
                                    className={cx(
                                        'lg:max-w-[219px] lg:max-h-[34px] lg:font-inter lg:normal lg:font-[600] lg:leading-normal lg:text-[28px] lg:text-[#171212]',
                                    )}
                                >
                                    Cannage Jacket
                                </h2>

                                <span
                                    className={cx(
                                        'lg:max-w-[169px] lg:max-h[24px] lg:text-[#B9BBBF] lg:font-[inter] lg:normal lg:font-[400] lg:text-[16px] lg:leading-[150%]',
                                    )}
                                >
                                    Teixeira Design Studio
                                </span>
                            </div>

                            <div className={cx('lg:flex  lg:justify-center lg:items-center lg:gap-[13px]')}>
                                <div
                                    className={cx(
                                        'lg:flex lg:justify-center lg:items-center lg:max-w-[76px] lg:max-h-[43px] lg:gap-[7px] lg:p-[10px]',
                                    )}
                                >
                                    <Heart />
                                    <span className={cx('lg:text-[#D46F77]')}>109</span>
                                </div>
                                <div className={cx('lg:p-[7px]')}>
                                    <Flag />
                                </div>
                                <div className={cx('lg:p-[7px]')}>
                                    <Share />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className={cx(
                            'lg:flex lg:items-center lg:gap-[41px] lg:max-w-[100%] lg:max-h-[96px] lg:mt-[40px] lg:border-b-[1px] lg:border-solid lg:border-[#CCC3BC] lg:pb-[39px] lg:mb-[40px]',
                        )}
                    >
                        <div className={cx('lg:flex lg:flex-col lg:gap-[6px] lg:max-h-[72px] lg:max-w-[113px]')}>
                            <h2
                                className={cx(
                                    'lg:max-w-[100%] lg:max-h-[41px] lg:font-inter lg:text-[34px] lg:font-[700] lg:text-[#AB8A37]',
                                )}
                            >
                                $71.56
                            </h2>
                            <span
                                className={cx(
                                    'lg:max-w-[113px] lg:max-h-[25px] lg:text-[#AFA095] lg:font-inter lg:normal lg:leading-[normal] lg:line-through lg:text-[21px]',
                                )}
                            >
                                $71.56
                            </span>
                        </div>
                        {/* Wrapper total */}
                        <div className={cx('lg:flex lg:flex-col lg:gap-[14px] lg:max-w-[264px] lg:max-h-[62px]')}>
                            {/* Star */}
                            <div
                                className={cx(
                                    'lg:flex lg:gap-[12px] lg:items-center lg:max-w-[100%] lg:max-h-[31px] lg:p-[10px]',
                                )}
                            >
                                <div className={cx('lg:flex lg:gap-[7px] lg:items-center')}>
                                    <Star />
                                    <span
                                        className={cx(
                                            'lg:font-inter lg:text-[14px] lg:text-[#D48D3B] lg:normal lg:leading-[normal] lg:font-[600]',
                                        )}
                                    >
                                        4.8
                                    </span>
                                </div>
                                <div />
                                {/* Message */}
                                <div
                                    className={cx(
                                        'lg:flex lg:items-center lg:gap-[7px] lg:max-w-[121px] lg:p-[10px] lg:bg-[#EDF0F8]',
                                    )}
                                >
                                    <Message />

                                    <span
                                        className={cx(
                                            'lg:font-inter lg:text-[14px] lg:normal lg:leading-[normal] lg:text-[#3A4980]',
                                        )}
                                    >
                                        67 Reviews
                                    </span>
                                </div>
                            </div>
                            <div className={cx('lg:flex lg:item-center lg:max-w-[300px] lg:max-h-[18px]')}>
                                <span
                                    className={cx(
                                        'lg:text-[#3E9242] lg:font-inter lg:normal lg:font-[600] lg:text-[14px] lg:leading-[normal] lg:mr-[2px]',
                                    )}
                                >
                                    93%
                                </span>
                                <span
                                    className={cx(
                                        'lg:text-[ #AFA095] lg:font-inter lg:normal lg:leading-[normal] lg:text-[14px] lg:font-[400] lg:ml-[3px]',
                                    )}
                                >
                                    of buyers have recommended this.
                                </span>
                            </div>
                        </div>
                    </div>

                    <div
                        className={cx(
                            'lg:flex lg:flex-col lg:gap-[13px] lg:border-b-[1px] lg:border-solid lg:border-[#CCC3BC] lg:pb-[72px] lg:mb-[40px]',
                        )}
                    >
                        <span
                            className={cx(
                                'lg:max-w-[118px] lg:max-h-[19px] lg:font-inter lg:normal lg:leading:[normal] lg:text-[16px] lg:font-[600] lg:text-[#AFA095]',
                            )}
                        >
                            Choose a Color
                        </span>
                        <div className={cx('lg:flex lg:gap-[12px] lg:items-center lg:max-w-[100%] lg:max-h-[96px]')}>
                            {inputCheckboxes.map((inputCheckbox, index) => (
                                <div key={index}>{inputCheckbox}</div>
                            ))}
                        </div>
                    </div>

                    <div
                        className={cx(
                            'lg:bg-[#faf5eb] lg:flex lg:max-h-[125px] max-w-[100%] lg:flex-col lg:gap-[14px]  lg:border-b-[1px] lg:border-[#CCC3BC] lg:border-solid lg:pb-[40px] lg:mb-[40px]',
                        )}
                    >
                        <span
                            className={cx(
                                'lg:font-inter lg:text-[16px] lg:normal lg:font-[400] lg:leading-[150%] lg:text-[#AFA095]',
                            )}
                        >
                            Choose a Size
                        </span>

                        <div className={cx('lg:flex lg:gap-[11px] max-w-[494px]')}>
                            {arrSizes.map((arrSize, index) => (
                                <div
                                    key={arrSize}
                                    className={cx(
                                        'lg:flex lg: items-center lg:gap-[8px] lg:pl-[10px] lg:pr-[10px] lg:pt-[7px] lg:pb-[7px] lg:mb-[8px] lg:rounded-[8px] lg:bg-[#EDF0F8]',
                                    )}
                                >
                                    <input
                                        name="size"
                                        className={cx('lg:w-4 lg:h-4')}
                                        type="radio"
                                        key={index}
                                        id={index}
                                    />
                                    <label
                                        htmlFor={index}
                                        className={cx(
                                            'lg:font-inter lg:text-[14px] lg:normal lg:text-[#3A4980] lg:font-[500]',
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
                            'lg:bg-[#faf5eb] lg:flex lg:justify-between lg:items-center lg:h-[50px] lg:mb-[68px]',
                        )}
                    >
                        <Quality />
                        <button
                            className={cx(
                                'lg:flex lg:items-center lg:text-[#FFFFFF] lg:bg-[#AB8A37] lg:w-[300px] lg:h-[50px] lg:rounded-[40px] lg:justify-center lg:cursor-pointer lg:hover:opacity-[0.9]',
                            )}
                        >
                            <div
                                className={cx(
                                    'lg:flex lg:items-center lg:justify-center lg:gap-[10px] lg:min-w-[200px]',
                                )}
                            >
                                <Cart2 />
                                <span>Add To Cart</span>
                            </div>
                        </button>
                    </div>

                    <div
                        className={cx(
                            'lg:grid lg:grid-cols-1 lg:rounded-[14px] lg:p-[17px] lg:border-solid lg:border-[3px] lg:border-[E4E4E4]',
                        )}
                    >
                        {arrDeliveries.map((arrDelivery, index) => (
                            <div
                                key={index}
                                className={cx('lg:flex lg:gap-[14px]', {
                                    'border-bottom': arrDelivery.borderBottom,
                                    'padding-bottom': arrDelivery.paddingBottom,
                                    'padding-top': arrDelivery.paddingTop,
                                })}
                            >
                                <span> {arrDelivery.icon}</span>

                                <div className={cx('lg:grid lg:grid-cols-1 lg:gap-y-[7px]')}>
                                    <strong>{arrDelivery.title}</strong>
                                    <span>{arrDelivery.content}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className={cx('lg:flex lg:flex-col lg:min-h-[1070px]')}>
                <div
                    className={cx(
                        'lg:flex lg:items-center lg:border-[#E5E0DC] lg:border-b-[5px] lg:h-[80px]  lg:text-[#AB8A37] lg:pb-[30px] lg:mb-[53px]',
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
                    <div className={cx('lg:flex lg:flex-col lg:mb-[40px]')}>
                        <div className={cx('lg:flex lg:flex-col lg:gap-[21px] lg:mb-[40px] ')}>
                            <strong className={cx('lg:text-[#344054] lg:text-[24px] lg:normal lg:font-[700]')}>
                                Product Description
                            </strong>
                            <span className={cx('lg:text-[#5F4C49] lg:font-inter lg:font-[400]')}>
                                When it's colder than the far side of the moon and spitting rain too, you've still got
                                to look good. From water-repellent leather to a rugged outsole, the Lunar Force 1 adapts
                                AF-1 style, so you can keep your flame burning when the weather hits. Metal lace
                                hardware and extended tongue bring mountain boot toughness, while the star-studded toe
                                design gives your look the edge
                            </span>
                        </div>
                        <div className={cx('lg:flex lg:flex-col lg:mb-[40px]')}>
                            <strong
                                className={cx(
                                    'lg:text-[#344054] lg:text-[24px] lg:normal lg:font-[700] lg:block lg:mb-[21px]',
                                )}
                            >
                                Benefits
                            </strong>

                            <div className={cx('lg:flex lg:flex-col lg:gap-[14px]')}>
                                {arrBenefits.map((arrBenefit, index) => (
                                    <div key={index} className={cx('lg:flex lg:gap-[14px] lg:items-center')}>
                                        <span>
                                            <Tick />
                                        </span>
                                        <span key={arrBenefit}>{arrBenefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className={cx('lg:flex lg:flex-col lg:mb-[40px]')}>
                            <strong
                                className={cx(
                                    'lg:text-[#344054] lg:text-[24px] lg:normal lg:font-[700] lg:block lg:mb-[21px]',
                                )}
                            >
                                Product Details
                            </strong>

                            <div className={cx('lg:flex lg:flex-col lg:gap-[14px]')}>
                                {productDetails.map((productDetail, index) => (
                                    <div key={index} className={cx('lg:flex lg:gap-[14px] lg:items-center')}>
                                        <span>
                                            <Tick />
                                        </span>
                                        <span key={productDetail}>{productDetail}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className={cx('lg:flex lg:flex-col lg:mb-[40px]')}>
                            <strong
                                className={cx(
                                    'lg:text-[#344054] lg:text-[24px] lg:normal lg:font-[700] lg:block lg:mb-[21px]',
                                )}
                            >
                                More Details
                            </strong>

                            <div className={cx('lg:flex lg:flex-col lg:gap-[14px]')}>
                                {moreDetails.map((moreDetail, index) => (
                                    <div key={index} className={cx('lg:flex lg:gap-[14px] lg:items-center')}>
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
                    <div className={cx('lg:flex lg:flex-col lg:gap-[41px] lg:mb-[80px]')}>
                        <span
                            className={cx(
                                'lg:text-[#344054] lg:font-Proxima Nova] lg:text-[24px] lg:normal lg:font-[700]',
                            )}
                        >
                            Stylish and Comfortable: A Review of XYZ Brand's Fall Collection
                        </span>

                        <div className={cx('lg:flex lg:flex-col lg:gap-[21px]')}>
                            <span className={cx('lg:leading-7')}>
                                I recently had the pleasure of exploring XYZ Brand's latest Fall collection, and I must
                                say, I am thoroughly impressed with the blend of style and comfort they've managed to
                                achieve. From cozy sweaters to chic outerwear, the entire collection exudes a sense of
                                modern sophistication.
                            </span>

                            <span className={cx('lg:leading-7')}>
                                One standout piece from the collection is the "Autumn Bliss Sweater." The material is
                                incredibly soft against the skin, providing a level of comfort that makes it perfect for
                                all-day wear. The design is both trendy and versatile, featuring a slightly oversized
                                fit that adds an extra touch of coziness. The attention to detail, from the intricate
                                knit pattern to the well-finished seams, showcases the brand's commitment to quality
                                craftsmanship.
                            </span>

                            <span className={cx('lg:leading-7')}>
                                Another highlight is the "Urban Explorer Jacket." This outerwear piece not only keeps
                                you warm on chilly days but also elevates your overall look. The tailored fit and
                                attention-grabbing color options make it a statement piece for any autumn wardrobe. The
                                addition of functional pockets and a durable zipper adds practicality to the fashionable
                                design.
                            </span>

                            <span className={cx('lg:leading-7')}>
                                One aspect that particularly impressed me is the inclusivity of sizing in XYZ Brand's
                                collection. The diverse range ensures that individuals of all body types can enjoy the
                                latest trends without compromising on style. It's refreshing to see a brand prioritize
                                inclusivity, making fashion accessible to a wider audience.
                            </span>

                            <span className={cx('lg:leading-7')}>
                                While the price point may be slightly higher than some other brands, the quality and
                                design justify the investment. I appreciate the brand's commitment to sustainable
                                practices, using eco-friendly materials and ethical manufacturing processes. Knowing
                                that my fashion choices contribute to a more sustainable industry adds an extra layer of
                                satisfaction.
                            </span>

                            <span className={cx('lg:leading-7')}>
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
                <div className={cx('lg:flex lg:flex-col lg:gap-[40px]')}>
                    <strong
                        className={cx(
                            'lg:font-[700] lg:text-[#344054] lg:font-[inter] lg:normal lg:text-[30px] lg:leading-[150%]',
                        )}
                    >
                        Similar Items You Might Also Like
                    </strong>
                    <div className={cx('lg:flex lg:gap-[12px] lg:flex-wrap lg:max-w-[100%]')}>
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
        <div
            className={cx(
                'lg:flex lg:flex-col lg:gap-[16px] lg:pt-[6px] lg:pr-[6px] lg:pb-[14.458px] lg:pl-[6px] lg:rounded-[6px] lg:border-solid lg:border-[1px] lg:border-[#8A7268] lg:max-w-[187px]',
            )}
        >
            <img src={similarItems.img} />

            <div className={cx('lg:flex lg:flex-col lg:gap-[4px] ')}>
                <span
                    className={cx(
                        'lg:text-[#667085] lg:font-[inter] lg:text-[16px] lg:font-[400] lg:normal lg:leading-[150%]',
                    )}
                >
                    {similarItems.title}
                </span>
                <span
                    className={cx(
                        'lg:normal lg:font-[inter] lg:font-[700] lg:leading-[28px] lg:text-[18px] lg:text-[#344054]',
                    )}
                >
                    {similarItems.price}
                </span>
                <span
                    className={cx(
                        'lg:text-[#98A2B3] lg:font-[inter] lg:text-[14px] lg:normal lg:leading-[150%] lg:font-[400]',
                    )}
                >
                    5 types of shoos available
                </span>

                <div className={cx('lg:flex lg:items-center')}>
                    {similarItems.stars.map((star, index) => (
                        <img key={index} src={star} />
                    ))}
                    <img src={images.Star_Half} />
                </div>
            </div>
        </div>
    );
}

export default Details;
