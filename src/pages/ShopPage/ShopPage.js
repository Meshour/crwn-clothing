import React, { Component } from 'react';
import { SHOP_DATA } from './shop-data';

import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';

export default class ShopPage extends Component {
  state = {
    collections: SHOP_DATA,
  };

  render() {
    const { collections } = this.state;

    return (
      <div className="shop-page">
        {collections.map(collection => (
          <CollectionPreview
            key={collection.id}
            title={collection.title}
            items={collection.items}
          />
        ))}
      </div>
    );
  }
}
