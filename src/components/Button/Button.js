import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function Button({
    children,
    to,
    href,
    onClick,
    className,
    active = false,
    bold = false,
    active2 = false,
    borderBottom = false,
}) {
    let Comp = 'button';

    const props = {
        onClick,
    };

    if (to) {
        Comp = Link;
        props.to = to;
    } else if (href) {
        Comp = 'a';
        props.href = href;
    }
    const classes = cx('wrapper', {
        [className]: className,
        active,
        active2,
        bold,
        borderBottom,
    });
    return (
        <Comp className={classes} {...props}>
            <span className={cx('span')}>{children}</span>
        </Comp>
    );
}

export default Button;
