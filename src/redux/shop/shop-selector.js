import { createSelector } from "reselect";

const selectShopData = (state) => state.shop;

export const selectShopDataCollections = createSelector(
  [selectShopData],
  (shop) => shop.collections
);

export const selectShopCollectionPreview = createSelector(
  [selectShopDataCollections],
  (collection) => Object.keys(collection).map((key) => collection[key])
);

export const selectCollection = (collectionUrlParam) =>
  createSelector(
    [selectShopDataCollections],
    (collections) => collections[collectionUrlParam]
  );
