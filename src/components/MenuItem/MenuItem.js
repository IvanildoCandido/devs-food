import React from 'react';
import {LinkArea, LinkIcon} from './MenuItem.styled';

const MenuItem = ({icon, link}) => {
    return ( <LinkArea href={link}>
    <LinkIcon src={icon}/>
    </LinkArea> );
}
 
export default MenuItem;
