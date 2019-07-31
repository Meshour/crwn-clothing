import React from 'react';

import MenuItem from '../../components/MenuItem/MenuItem';
import './Directory.scss';

const menus = [
  { id: 1, title: 'hats', imageUrl: 'https://i.ibb.co/cvpntL1/hats.png' },
  { id: 2, title: 'jackets', imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png' },
  { id: 3, title: 'sneakers', imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png' },
  { id: 4, title: 'womens', imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',  size: 'large' },
  { id: 5, title: 'mens', imageUrl: 'https://i.ibb.co/R70vBrQ/mens.png',  size: 'large'  },
]

const Directory = () => (
  <div className="directory-menu">
    {menus.map(({ id, title, imageUrl, size }) => (
      <MenuItem
        key={id}
        title={title}
        imageUrl={imageUrl}
        size={size}
      />
    ))}
  </div>
);

export default Directory;
