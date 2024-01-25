import { useState } from 'react';
import classNames from 'classnames/bind';

import Button from '~/components/Button';
const cx = classNames.bind();
function Quanlity() {
    const [quanlity, setQuality] = useState(0);
    const handleDecrease = () => {
        setQuality((prev) => {
            prev -= 1;
            if (prev < 0) {
                prev = 0;
            }
            return prev;
        });
    };

    const handleIncrease = () => {
        setQuality((prev) => {
            prev += 1;
            return prev;
        });
    };
    return (
        <div
            className={cx(
                '2xl:flex 2xl:items-center 2xl:gap-[50px] 2xl:py-[5px] 2xl:px-32px 2xl:rounded-[40px] 2xl:bg-[#F3F3F3] 2xl:border-solid 2xl:border-[#8A7268] 2xl:border-[1px] 2xl:font-inter 2xl:h-[50px] 2xl:max-w-[213px] 2xl:justify-evenly',
            )}
        >
            <Button onClick={handleDecrease} className={cx('2xl:text-[18px]')} children="-" />
            <input
                value={quanlity}
                className={cx(
                    '2xl:flex 2xl:justify-center 2xl:items-center 2xl:w-[30px] 2xl:max-h-[20px] 2xl:bg-[transparent] 2xl:pl-[12px] 2xl:outline-none',
                )}
            ></input>
            <Button onClick={handleIncrease} className={cx('2xl:text-[18px]')} children="+" />
        </div>
    );
}

export default Quanlity;
