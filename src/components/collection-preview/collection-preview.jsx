import React from "react";
import "./collection-preview.scss";
import CollectionItem from "../collection-item/collection-item";
const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((items, idx) => idx < 4)
        .map((items) => (
          <CollectionItem key={items.id} items={items} />
        ))}
    </div>
  </div>
);
export default CollectionPreview;
