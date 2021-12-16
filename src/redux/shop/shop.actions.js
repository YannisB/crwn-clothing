import ShopActionType from "./shop.types";


export const fetchCollectionsStart = () => ({
    type: ShopActionType.FETCH_COLLECTIONS_START
})
export const fetchCollectionsSuccess = collectionsMap =>({
    type : ShopActionType.FETCH_COLLECTIONS_SUCCESS,
    payload : collectionsMap
})

export const fetchCollectionsFailure = errorMessage =>({
    type : ShopActionType.FETCH_COLLECTIONS_FAILURE,
    payload : errorMessage
})

// export const fetchCollectionsStartAsync =   () => {
//     return dispatch =>{
//         const collectionRef = collection(firestore,'collections')
//         dispatch(fetchCollectionsStart())
//         getDocs(collectionRef)
//             .then(snapshot =>{
//                 const collectionsNewMapping = convertCollectionsSnapshotToMap(snapshot)
//                 dispatch(fetchCollectionsSuccess(collectionsNewMapping))
//             }).catch(error => dispatch(fetchCollectionsFailure(error.message)))
    
//     }
    
// }

