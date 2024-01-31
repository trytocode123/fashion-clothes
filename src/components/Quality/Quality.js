import { useState } from 'react';
import classNames from 'classnames/bind';

import Button from '~/components/Button';
const cx = classNames.bind();
function Quality() {
    const [quality, setQuality] = useState(0);

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
    const handleOnchange = () => {};

    return (
        <div
            className={cx(
                'lg:flex lg:items-center lg:gap-[50px] lg:py-[5px] lg:px-32px lg:rounded-[40px] lg:bg-[#F3F3F3] lg:border-solid lg:border-[#8A7268] lg:border-[1px] lg:font-inter lg:h-[50px] lg:max-w-[190px] lg:justify-evenly',
            )}
        >
            <Button onClick={handleDecrease} className={cx('lg:text-[18px]')} children="-" />
            <input
                onChange={handleOnchange}
                value={quality}
                className={cx(
                    'lg:flex lg:justify-center lg:items-center lg:w-[30px] lg:max-h-[20px] lg:bg-[transparent] lg:pl-[12px] lg:outline-none',
                )}
            ></input>
            <Button onClick={handleIncrease} className={cx('lg:text-[18px]')} children="+" />
        </div>
    );
}

export default Quality;
