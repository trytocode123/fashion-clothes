import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Tippy from '@tippyjs/react/headless';
import { Cart, Down, Iconsearch, LeftImage, Stroke } from '~/components/Icons/Icon';
import Button from '~/components/Button';
import images from '~/assets/images';
import { useLayoutEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';
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
                {
                    code: 'fr',
                    title: 'France',
                },
                {
                    code: 'vi',
                    title: 'Việt Nam',
                },
                {
                    code: 'vi',
                    title: 'Việt Nam',
                },
                {
                    code: 'vi',
                    title: 'Việt Nam',
                },
                {
                    code: 'vi',
                    title: 'Việt Nam',
                },
                {
                    code: 'vi',
                    title: 'Việt Nam',
                },
            ],
        },
    },
    {
        title: 'Coins',
    },
    {
        title: 'Profile',
    },
    {
        title: 'Thông báo',
    },
    {
        title: 'Voucher',
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
    const [account, setAccount] = useState(true);
    const [searchShow, setSearchShow] = useState(true);
    const [searchValue, setSearchValue] = useState('');
    const [del, setDel] = useState(false);
    const ref = useRef();

    const handleonChange = (e) => {
        if (searchValue.startsWith(' ')) {
            setSearchShow(false);
        } else {
            setSearchShow(true);
            setSearchValue(e.target.value);
        }
    };
    const handleCleanSearch = () => {
        setSearchValue('');
        ref.current.focus();
    };
    const handleSwitchMenu = (childrenMenu) => {
        const flag = !!childrenMenu;
        if (flag) {
            setMenu((prev) => [...prev, childrenMenu]);
        }
    };
    useLayoutEffect(() => {
        if (searchValue !== '') {
            setSearchShow(searchShow);
            setDel(true);
        } else {
            setSearchShow(!searchShow);
            setDel(false);
        }
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
                        appendTo={() => document.body}
                        onClickOutside={handleOutsideClick}
                        placement="bottom-start"
                        visible={searchShow}
                        interactive={true}
                        render={(attrs) => (
                            <div
                                className={cx(
                                    'lg:flex lg:flex-col lg:gap-[8px] lg:w-[300px] lg:bg-white lg:max-h-[300px] lg:p-[12px] lg:rounded-[10px] lg:overflow-y-auto',
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
                        <div className={cx('lg:flex lg:items-center lg:w-[150px]')}>
                            <label className={cx('lg:ml-5')} htmlFor="search">
                                <Iconsearch className={cx('header__input__iconsearch')} />
                            </label>
                            <input
                                ref={ref}
                                type="text"
                                value={searchValue}
                                onChange={handleonChange}
                                onFocus={() => setSearchShow(true)}
                                id="search"
                                placeholder="Search for an item..."
                            />

                            {del === true ? (
                                <Button onClick={handleCleanSearch}>
                                    <FontAwesomeIcon icon={faCircleXmark} />
                                </Button>
                            ) : (
                                ''
                            )}
                        </div>
                    </Tippy>
                </div>

                <div className={cx('header__nav')}>
                    {arrButton.map((item, index) => (
                        <Button key={index} children={item} />
                    ))}

                    <Button onClick={() => navigate('/cart')}>
                        <Cart className={cx('header__nav__cart')} />
                    </Button>
                </div>

                {account ? (
                    <div className={cx('account')}>
                        <div className={cx('account-item')}>
                            <img className={cx('img rounded-lg w-[45px] h-[45px]')} src={images.no_image} />
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
                                <div className={cx('lg:drop-shadow-lg')}>
                                    <div
                                        className={cx(
                                            'lg:w-[150px] lg:p-[12px] lg:rounded-[5px] lg:max-h-[200px] lg:overflow-y-auto lg:bg-[#faf5eb] ',
                                        )}
                                        tabIndex="-1"
                                        {...attrs}
                                    >
                                        {menu.length > 1 && (
                                            <header
                                                className={cx(
                                                    'lg:flex lg:items-center lg:w-[120px] lg:h-[32px]  lg:bg-[#faf5eb] lg:fixed lg:top-0 lg:border-b-[black] lg: border-solid border-b-[1px] lg:z-[1] lg:shrink-0',
                                                )}
                                            >
                                                <button onClick={handleBack}>
                                                    <LeftImage className={cx('lg:w-[20px]')} />
                                                </button>
                                                <h2 className={cx('lg:font-[700] lg:text-[20px] lg:w-[100px]')}>
                                                    {current.mainTitle}
                                                </h2>
                                            </header>
                                        )}
                                        <div className={cx('lg:pt-3 lg:pb-3 lg:bg-[#faf5eb]')}>
                                            {current.data.map((btnAccount, index) => (
                                                <Button
                                                    key={index}
                                                    className={cx('btn-link')}
                                                    to={btnAccount.to}
                                                    children={btnAccount.title}
                                                    onClick={() => {
                                                        handleSwitchMenu(btnAccount.children);
                                                    }}
                                                />
                                            ))}
                                        </div>
                                    </div>
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
    const navigate = useNavigate();
    return (
        <div
            className={cx('lg:flex lg:items-center lg:gap-[16px] lg:cursor-pointer')}
            onClick={() => navigate('/details')}
        >
            <img className={cx('lg:w-[70px] lg:h-[70px] lg:rounded-lg')} src={item.img} />
            <div className={cx('lg:flex lg:flex-col lg:gap-[4px] lg:w-[200px]')}>
                <span className={cx('lg:w-[100%] lg:h-[36px] ')}>{item.title}</span>
                <span className={cx('lg:w-[100%] lg:h-[36px]')}>{item.content}</span>
            </div>
        </div>
    );
}

export default Header;
