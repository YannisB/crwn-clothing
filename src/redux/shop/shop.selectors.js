import { createSelector } from "reselect";
import memoize from 'lodash.memoize';

export const selectShop = state => state.shop ;

export const selectShopCollections = createSelector([selectShop],
    shop => shop.collections)


export const selectShopCollection = memoize((collectionUrlName) =>
    createSelector([selectShopCollections], 
        collections => collections ? collections[collectionUrlName] : null
        )
)

export const selectShopCollectionsForPreview = createSelector([selectShopCollections],
    collections => collections ? Object.values(collections) : [])

