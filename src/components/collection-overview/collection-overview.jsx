import React from "react";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import CollectionPreview from "../collection-preview/collection-preview";
import { selectShopCollectionPreview } from "../../redux/shop/shop-selector";

import "./collection-overview.scss";

const CollectionOverview = ({ collections }) => {
  return (
    <div className="collection-overview">
      {collections.map(({ id, ...otherCollections }) => (
        <CollectionPreview id={id} {...otherCollections} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollectionPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
