import React from 'react';

import MenuItem from '../../components/MenuItem/MenuItem';
import './Directory.scss';

const menus = [
  {
    id: 1,
    title: 'hats',
    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
    linkUrl: 'hats',
  },
  {
    id: 2,
    title: 'jackets',
    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
    linkUrl: '',
  },
  {
    id: 3,
    title: 'sneakers',
    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    linkUrl: '',
  },
  {
    id: 4,
    title: 'womens',
    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
    size: 'large',
    linkUrl: '',
  },
  {
    id: 5,
    title: 'mens',
    imageUrl: 'https://i.ibb.co/R70vBrQ/mens.png',
    size: 'large',
    linkUrl: '',
  },
]

const Directory = () => (
  <div className="directory-menu">
    {menus.map(({ id, ...props }) => (
      <MenuItem key={id} {...props} />
    ))}
  </div>
);

export default Directory;
