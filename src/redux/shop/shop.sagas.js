import {takeLatest,call,put,all} from 'redux-saga/effects'
import ShopActionType from './shop.types'

import { collection,getDocs } from "@firebase/firestore";
import { firestore,convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'

import { fetchCollectionsSuccess,fetchCollectionsFailure } from './shop.actions';


export function* fetchCollectionsAsync() {
    try {
        const collectionRef = collection(firestore,'collections')
        const snapshot = yield  getDocs(collectionRef)
        const collectionsMap = yield call(convertCollectionsSnapshotToMap,snapshot) 
        yield put(fetchCollectionsSuccess(collectionsMap))
        
    } catch (error) {
        yield put(fetchCollectionsFailure(error.message))
    }

    // dispatch(fetchCollectionsStart())
    // getDocs(collectionRef)
    //     .then(snapshot =>{
    //         const collectionsNewMapping = convertCollectionsSnapshotToMap(snapshot)
    //         dispatch(fetchCollectionsSuccess(collectionsNewMapping))
    //     }).catch(error => dispatch(fetchCollectionsFailure(error.message)))
}

export function* fetchCollectionsStart(){
    yield takeLatest(
        ShopActionType.FETCH_COLLECTIONS_START,
        fetchCollectionsAsync
    )
}

export function* shopSagas(){
    yield all([call(fetchCollectionsStart)])
}