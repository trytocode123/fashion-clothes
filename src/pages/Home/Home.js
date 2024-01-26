import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import images from '~/assets/images';
import { Line14 } from '~/components/Icons/Icon';
import Button from '~/components/Button';
import { useState } from 'react';

const cx = classNames.bind(styles);
function Home() {
    const [activeBtn, setActiveBtn] = useState(0);
    const arrButtons = ['SIGNIFICANT', 'UNIQUE', 'BEST-SELLING'];
    const handleActiveBtnClick = (index) => {
        setActiveBtn(index);
    };
    return (
        <div className={cx('wrapper')}>
            <img src={images.Rectangle} />
            <div className={cx('wrapper__body')}>
                <div className={cx('wrapper__body__item')}>
                    <h2 className={cx('header')}>PRODUCT CATALOG</h2>
                    <div className={cx('lg:grid lg:grid-cols-4 gap-4')}>
                        <img src={images.Rectangle1389} />
                        <img src={images.Rectangle1391} />
                        <img src={images.Rectangle1392} />
                        <img src={images.Rectangle1393} />
                    </div>
                </div>

                <div className={cx('wrapper__body__item')}>
                    <img src={images.Rectangle1390} />
                </div>

                <div className={cx('wrapper__body__item')}>
                    <div className={cx('header-category')}>
                        <div className={cx('header-line')}>
                            <h2 className={cx('header')}>FEATURED PRODUCTS</h2>
                            <Line14 className={cx('line14')} />
                        </div>

                        <div className={cx('category')}>
                            {arrButtons.map((arrButton, index) => (
                                <Button
                                    active={activeBtn === index && true}
                                    onClick={() => {
                                        handleActiveBtnClick(index);
                                    }}
                                    key={index}
                                    children={arrButton}
                                    className={cx('category__button')}
                                />
                            ))}
                        </div>

                        {activeBtn === 0 && (
                            <div className={cx('lg:grid lg:grid-cols-4 lg:gap-4')}>
                                <img alt="img" src={images.Rectangle1394} />

                                <img src={images.Rectangle1395} alt="img" />

                                <img src={images.Rectangle1396} alt="img" />

                                <img src={images.Rectangle1397} alt="img" />
                                <img alt="img" src={images.Rectangle1394} />

                                <img src={images.Rectangle1395} alt="img" />

                                <img src={images.Rectangle1396} alt="img" />

                                <img src={images.Rectangle1397} alt="img" />
                            </div>
                        )}
                        {activeBtn === 1 && (
                            <div className={cx('lg:grid  lg:grid-cols-4 lg:gap-4')}>
                                <img
                                    className={cx('lg:h-[351px] lg:w-[285px] lg:rounded-[6px]')}
                                    alt="img"
                                    src={images.Rectangle1395}
                                />

                                <img
                                    className={cx('lg:h-[351px] lg:w-[285px] lg:rounded-[6px]')}
                                    src={images.watch}
                                    alt="img"
                                />

                                <img
                                    className={cx('lg:h-[351px] lg:w-[285px] lg:rounded-[6px]')}
                                    src={images.watch2}
                                    alt="img"
                                />

                                <img
                                    className={cx('lg:h-[351px] lg:w-[285px] lg:rounded-[6px]')}
                                    src={images.watch3}
                                    alt="img"
                                />
                                <img
                                    className={cx('lg:h-[351px] lg:w-[285px] lg:rounded-[6px]')}
                                    alt="img"
                                    src={images.Rectangle1395}
                                />

                                <img
                                    className={cx('lg:h-[351px] lg:w-[285px] lg:rounded-[6px]')}
                                    src={images.watch}
                                    alt="img"
                                />

                                <img
                                    className={cx('lg:h-[351px] lg:w-[285px] lg:rounded-[6px]')}
                                    src={images.watch2}
                                    alt="img"
                                />

                                <img
                                    className={cx('lg:h-[351px] lg:w-[285px] lg:rounded-[6px]')}
                                    src={images.watch3}
                                    alt="img"
                                />
                            </div>
                        )}
                        {activeBtn === 2 && (
                            <div className={cx('lg:grid  lg:grid-cols-4 lg:gap-4')}>
                                <img
                                    className={cx('lg:h-[351px] lg:w-[285px] lg:rounded-[6px]')}
                                    alt="img"
                                    src={images.Rectangle1396}
                                />

                                <img
                                    className={cx('lg:h-[351px] lg:w-[285px] lg:rounded-[6px]')}
                                    src={images.shoes_vintage}
                                    alt="img"
                                />

                                <img
                                    className={cx('lg:h-[351px] lg:w-[285px] lg:rounded-[6px]')}
                                    src={images.shoes_vintage2}
                                    alt="img"
                                />

                                <img
                                    className={cx('lg:h-[351px] lg:w-[285px] lg:rounded-[6px]')}
                                    src={images.shoes_vintage3}
                                    alt="img"
                                />
                                <img
                                    className={cx('lg:h-[351px] lg:w-[285px] lg:rounded-[6px]')}
                                    alt="img"
                                    src={images.Rectangle1396}
                                />

                                <img
                                    className={cx('lg:h-[351px] lg:w-[285px] lg:rounded-[6px]')}
                                    src={images.shoes_vintage}
                                    alt="img"
                                />

                                <img
                                    className={cx('lg:h-[351px] lg:w-[285px] lg:rounded-[6px]')}
                                    src={images.shoes_vintage2}
                                    alt="img"
                                />

                                <img
                                    className={cx('lg:h-[351px] lg:w-[285px] lg:rounded-[6px]')}
                                    src={images.shoes_vintage3}
                                    alt="img"
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
