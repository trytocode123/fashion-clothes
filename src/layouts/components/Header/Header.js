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
    const [account, setAccount] = useState(false);
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
                <span onClick={() => navigate('/')} className={cx('header__span min-w-[150px] 2xl:cursor-pointer ')}>
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
                                    '2xl:flex 2xl:flex-col 2xl:gap-[8px] 2xl:w-[450px] 2xl:bg-white 2xl:max-h-[300px] 2xl:p-[12px] 2xl:rounded-[10px] 2xl:overflow-y-auto',
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
                        <div className={cx('2xl:flex 2xl:gap-[36px] 2xl:items-center 2xl:w-[280px]')}>
                            <label htmlFor="search">
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
                                <div className={cx('2xl:drop-shadow-md')}>
                                    <div
                                        className={cx(
                                            '2xl:w-[200px] 2xl:p-[12px] 2xl:rounded-[5px] 2xl:max-h-[200px] 2xl:overflow-y-auto 2xl:bg-[#faf5eb] ',
                                        )}
                                        tabIndex="-1"
                                        {...attrs}
                                    >
                                        {menu.length > 1 && (
                                            <header
                                                className={cx(
                                                    '2xl:flex 2xl:items-center 2xl:w-[160px] 2xl:h-[32px]  2xl:bg-[#faf5eb] 2xl:fixed 2xl:top-0 2xl:border-b-[black] 2xl: border-solid border-b-[1px] 2xl:z-[1] 2xl:shrink-0',
                                                )}
                                            >
                                                <button onClick={handleBack}>
                                                    <LeftImage />
                                                </button>
                                                <h2 className={cx('2xl:font-[700] 2xl:text-[20px] 2xl:w-[100%]')}>
                                                    {current.mainTitle}
                                                </h2>
                                            </header>
                                        )}
                                        <div className={cx('2xl:pt-3 2xl:pb-3 2xl:bg-[#faf5eb]')}>
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
                            <button className={cx('2xl:cursor-pointer 2xl:w-[32px] 2xl:h-[32px]')}>
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
            className={cx('2xl:flex 2xl:items-center 2xl:gap-[16px] 2xl:cursor-pointer')}
            onClick={() => navigate('/details')}
        >
            <img className={cx('2xl:w-[70px] 2xl:h-[70px] 2xl:rounded-md')} src={item.img} />
            <div className={cx('2xl:flex 2xl:flex-col 2xl:gap-[4px] 2xl:w-[400px]')}>
                <span className={cx('2xl:w-[100%] 2xl:h-[36px] ')}>{item.title}</span>
                <span className={cx('2xl:w-[100%] 2xl:h-[36px]')}>{item.content}</span>
            </div>
        </div>
    );
}

export default Header;
