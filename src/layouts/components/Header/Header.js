import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Tippy from '@tippyjs/react/headless';
import { Cart, Down, Iconsearch, LeftImage, Stroke } from '~/components/Icons/Icon';
import Button from '~/components/Button';
import images from '~/assets/images';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import React from 'react';

const cx = classNames.bind(styles);
/*
menu = [
    {   
    data: (btnAccounts)
    [
    {
        title: 'Sign up',
        to: '/signup',
    },

    {
        title: 'Log out',
        to: '/login',
    },

    {
        title: 'Language',
        children: {
            mainTitle: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Việt Nam',
                },
            ],
        }
    },

    ],
   }

children: {
            mainTitle: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Việt Nam',
                },
            ],
        },]
 */
const btnAccounts = [
    {
        title: 'Sign up',
        to: '/signup',
    },
    {
        title: 'Log out',
        to: '/login',
    },
    {
        title: 'Language',
        children: {
            mainTitle: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Việt Nam',
                },
            ],
        },
    },
];
function Header() {
    const navigate = useNavigate();
    const [menu, setMenu] = useState([{ data: btnAccounts }]);
    const current = menu[menu.length - 1];

    const items = [
        {
            img: images.no_image,
            title: "Man's Clothes",
            content: '1 Colour',
        },
        {
            img: images.no_image,
            title: "Man's Clothes",
            content: '1 Colour',
        },
        {
            img: images.no_image,
            title: "Man's Clothes",
            content: '1 Colour',
        },
    ];

    const arrButton = ['Store', 'Account', 'Wish List'];
    const [account, setAccount] = useState(false);
    const [searchShow, setSearchShow] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const handleonChange = (e) => {
        const searchValueInput = e.target.value;
        if (searchValue.startsWith(' ')) {
            setSearchShow(false);
        } else {
            setSearchValue(searchValueInput);
        }
    };

    useEffect(() => {
        setSearchShow(true);
        console.log(searchValue);
    }, [searchValue]);

    const handleOutsideClick = () => {
        setSearchShow(!searchShow);
    };
    const handleResetMenuPage = () => {
        setMenu((prev) => prev.slice(0, 1));
    };
    const handleBack = () => {
        setMenu((prev) => prev.slice(0, prev.length - 1));
    };
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <span onClick={() => navigate('/')} className={cx('header__span min-w-[150px] lg:cursor-pointer ')}>
                    Luxury’s Closet
                </span>
                <div className={cx('header__input')}>
                    <Tippy
                        onClickOutside={handleOutsideClick}
                        placement="bottom-start"
                        visible={searchShow}
                        interactive={setSearchShow}
                        render={(attrs) => (
                            <div
                                className={cx(
                                    'lg:flex lg:flex-col lg:gap-[8px] lg:w-[450px] lg:bg-white lg:min-h-[100px] lg:p-[12px] lg:rounded-[10px] lg:z-[1]',
                                )}
                                tabIndex="-1"
                                {...attrs}
                            >
                                {items.map((item, index) => (
                                    <SearchItems key={index} item={item} />
                                ))}
                            </div>
                        )}
                    >
                        <div>
                            <label htmlFor="search">
                                <Iconsearch className={cx('header__input__iconsearch')} />
                            </label>
                            <input
                                type="text"
                                value={searchValue}
                                onChange={handleonChange}
                                onFocus={() => {
                                    setSearchShow(!searchShow);
                                }}
                                id="search"
                                placeholder="Search for an item..."
                            />
                        </div>
                    </Tippy>
                    <Stroke className={cx('header__input__stroke')} />
                </div>

                <div className={cx('header__nav')}>
                    {arrButton.map((item, index) => (
                        <Tippy content="hello">
                            <Button key={index} children={item} />
                        </Tippy>
                    ))}

                    <Button onClick={() => navigate('/cart')}>
                        <Cart className={cx('header__nav__cart')} />
                    </Button>
                </div>

                {!account ? (
                    <div className={cx('account')}>
                        <div className={cx('account-item')}>
                            <img className={cx('img rounded-md w-[45px] h-[45px]')} src={images.no_image} />
                            <div className={cx('block-text flex flex-col')}>
                                <span className={cx('min-w-[150px]')}>Welcome back,</span>
                                <span className={cx('max-w-[150px]')}>An</span>
                            </div>
                        </div>
                        <Tippy
                            placement="bottom-end"
                            interactive={true}
                            trigger="click"
                            onClickOutside={handleResetMenuPage}
                            render={(attrs) => (
                                <div
                                    className={cx('lg:w-[200px] lg:bg-white lg:p-[12px] lg:rounded-[5px] ')}
                                    tabIndex="-1"
                                    {...attrs}
                                >
                                    {menu.length > 1 && (
                                        <div className={cx('lg:flex')}>
                                            <button onClick={handleBack}>
                                                <LeftImage />
                                            </button>
                                            <h2 className={cx('lg:font-[700] lg:text-[20px]')}>{current.mainTitle}</h2>
                                        </div>
                                    )}
                                    {current.data.map((btnAccount, index) => (
                                        <div>
                                            <Button
                                                className={cx('btn-link')}
                                                key={index}
                                                to={btnAccount.to}
                                                children={btnAccount.title}
                                                onClick={() => {
                                                    const flag = !!btnAccount.children;
                                                    if (flag) {
                                                        setMenu((prev) => [...prev, btnAccount.children]);
                                                    }
                                                }}
                                            />
                                        </div>
                                    ))}
                                </div>
                            )}
                        >
                            <button className={cx('lg:cursor-pointer lg:w-[32px] lg:h-[32px]')}>
                                <Down className={cx('w-[27px]')} />
                            </button>
                        </Tippy>
                    </div>
                ) : (
                    ''
                )}
            </header>
        </div>
    );
}

function SearchItems({ item = {} }) {
    return (
        <div className={cx('lg:flex lg:items-center lg:gap-[16px]')}>
            <img className={cx('lg:w-[70px] lg:h-[70px] lg:rounded-md')} src={item.img} />
            <div className={cx('lg:flex lg:flex-col lg:gap-[4px] lg:w-[400px]')}>
                <span className={cx('lg:w-[100%] lg:h-[36px] ')}>{item.title}</span>
                <span className={cx('lg:w-[100%] lg:h-[36px]')}>{item.content}</span>
            </div>
        </div>
    );
}

export default Header;
