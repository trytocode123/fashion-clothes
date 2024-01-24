import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Sidebar() {
    const titles = [
        {
            title: 'Filter',
            filter: ['Women', 'Men', "Women's jewel", "Men's jewelry"],
        },
        {
            title: 'Brands',
            filter: [
                'H&M',
                'Mark & Spencer',
                'Mark & Spencer',
                'Dior',
                'Gucci',
                'Fendi',
                'Prada',
                'Versace',
                'Dolce & Gabbana',
                'Zara',
                'Chanel',
            ],
            more: '+ 234 more',
            moreBtn: true,
        },
        {
            title: 'Categories',
            filter: ['Dresses', 'Tops', 'Lingerie & Lounge Wear', 'Blouse', 'Vintage'],
            more: '+ 4 more',
            moreBtn: true,
        },
        {
            title: 'Size',
            filter: ['Medium', 'Large', 'Plus Size', 'Sexy Plus Size'],
        },
    ];

    return (
        <div className={cx('wrapper')}>
            <div className={cx('price-range')}>
                <h2 className={cx('title-price')}>PRICES</h2>

                <div className={cx('block-range')}>
                    <div className={cx('range')}>
                        <span className={cx('range-span')}>Range</span>
                        <span className={cx('range-price')}>$120 - $300</span>
                    </div>

                    <div className={cx('line')}>
                        <img className={cx('hand-left')} src={images.hand} />
                        <img className={cx('line-adjust')} src={images.line} />
                        <img className={cx('hand-right')} src={images.hand} />
                    </div>
                </div>
            </div>

            {titles.map((title, index) => (
                <div key={index} className={cx('title')}>
                    <h2 className={cx('h2-title')}>{title.title}</h2>

                    <div className={cx('select')}>
                        {title.filter.map((filter, index) => (
                            <div key={index} className={cx('block-checkbox')}>
                                <input key={filter} id={filter} className={cx('input')} type="checkbox" />
                                <label htmlFor={filter} key={index}>
                                    {filter}
                                </label>
                            </div>
                        ))}
                        {title.moreBtn && (
                            <Button key={index} className={cx('btn-more')}>
                                {title.more}
                            </Button>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Sidebar;
