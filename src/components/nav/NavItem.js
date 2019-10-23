// @flow
import React, { Component } from 'react';
import invoke from 'lodash/invoke';
import cx from 'classnames';

type Props = {
    /** A nav item can be active. */
    active: Boolean,

    /** Primary content */
    children?: React.Node,

    /** Additional classes */
    className?: String,

    /** An element type to render as (string or function). */
    component: React.elementType,

    /** A nav item can be disabled. */
    disabled: Boolean,

    /** NavItem index inside Menu. */
    index: Number,

    /**
     * Called on click. When passed, the component will render as an `a`
     * tag by default instead of a `div`.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {object} data - All props.
     */
    onClick: Function,
};

/**
 * A nav can contain an item.
 */
class NavItem extends Component<Props> {
    handleClick = e => {
        const { disabled } = this.props;

        if (!disabled) invoke(this.props, 'onClick', e, this.props);
    };

    render() {
        const { active, children, className, onClick, ...rest } = this.props;

        const classes = cx(active && 'bdl-Nav-item--active', 'bdl-Nav-item', className);

        return (
            <div
                {...rest}
                className={classes}
                onClick={this.handleClick}
                onKeyDown={this.handleClick}
                role="button"
                tabIndex="0"
            >
                {children}
            </div>
        );
    }
}

export default NavItem;
