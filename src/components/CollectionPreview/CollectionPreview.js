import React from 'react';

import CollectionItem from '../CollectionItem/CollectionItem';

import './CollectionPreview.scss';

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title}</h1>
    <div className="preview">
      {items.slice(0, 4).map(({id, name, imageUrl, price }) => (
        <CollectionItem
          key={id}
          name={name}
          imageUrl={imageUrl}
          price={price}
        />
      ))}
    </div>
  </div>
);

export default CollectionPreview;
