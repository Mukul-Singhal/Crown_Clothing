import React, { Component } from "react";
import SHOP_DATA from "./shopData";
import CollectionPreview from "../../components/collection-preview/collection-preview";
class ShopPage extends Component {
  state = {
    collections: SHOP_DATA,
  };
  render() {
    return (
      <div>
        {this.state.collections.map(({ id, ...otherCollections }) => (
          <CollectionPreview id={id} {...otherCollections} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
