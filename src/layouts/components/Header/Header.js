import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Tippy from '@tippyjs/react/headless';
import { Cart, Down, Iconsearch, Stroke } from '~/components/Icons/Icon';
import Button from '~/components/Button';
import images from '~/assets/images';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);
function Header() {
    const navigate = useNavigate();
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
    const btnAccounts = [
        {
            title: 'Đăng ký',
            to: '/signup',
            borderBottom: true,
        },
        {
            title: 'Đăng xuất',
            to: '/login',
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
            setSearchShow(true);
            setSearchValue(searchValueInput);
        }
    };
    const handleOutsideClick = () => {
        setSearchShow(!searchShow);
    };
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <span onClick={() => navigate('/')} className={cx('header__span min-w-[150px] lg:cursor-pointer ')}>
                    Luxury’s Closet
                </span>
                <div className={cx('header__input')}>
                    <label htmlFor="search">
                        <Iconsearch className={cx('header__input__iconsearch')} />
                    </label>
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
                            render={(attrs) => (
                                <div
                                    className={cx('lg:w-[200px] lg:bg-white lg:p-[12px] lg:rounded-[5px] ')}
                                    tabIndex="-1"
                                    {...attrs}
                                >
                                    {btnAccounts.map((btnAccount, index) => (
                                        <Button
                                            borderBottom={btnAccount.borderBottom}
                                            className={cx('btn-link')}
                                            key={index}
                                            to={btnAccount.to}
                                            children={btnAccount.title}
                                        />
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
