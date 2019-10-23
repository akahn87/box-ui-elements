// @flow
import cx from 'classnames';
import React, { Component } from 'react';

import NavItem from './NavItem';
import NavText from './NavText';
import NavIcon from './NavIcon';

import './Nav.scss';

type Props = {
    /** Primary content */
    children?: React.Node,

    /** Additional classes */
    className?: String,

    /** An element type to render as (string or function). */
    component: React.elementType,
};

/**
 * A nav displays grouped navigation actions.
 */
class Nav extends Component<Props> {
    static Item = NavItem;

    static Text = NavText;

    static Icon = NavIcon;

    render() {
        const { children, className, component, ...rest } = this.props;

        const classes = cx(className, 'bdl-Nav');

        const ElementType = component || 'div';

        return (
            <ElementType {...rest} className={classes}>
                {children}
            </ElementType>
        );
    }
}

export default Nav;
