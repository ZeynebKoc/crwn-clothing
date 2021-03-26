/*import { createSelector } from 'reselect';

const COLLECTION_ID_MAO = {
  hats: 1,
  sneakers:2,
  jackets:3,
  womens:4,
  mens:5
}

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);


export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectCollections],
    collections.find(
      collections => collectionUrlParam.id === COLLECTION_ID_MAP[collectionUrlParam]
  )
);


export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => Object.keys(collections).map(key => collections[key])
);*/

import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => Object.keys(collections).map(key => collections[key])
);

export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam]
  );