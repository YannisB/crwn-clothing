import React, {useEffect} from "react";
import { connect } from "react-redux";
import { Route } from "react-router";

import { fetchCollectionsStart } from "../../redux/shop/shop.actions";


import CollectionOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionPageContainer from "../collection/collection.container";


const ShopPage =({fetchCollectionsStart,match}) => {
    useEffect( () => {

        fetchCollectionsStart();
    },[fetchCollectionsStart])
        
    return(

        <div className="shop-page">
            <Route  exact path ={`${match.path}`} component={CollectionOverviewContainer}></Route>
            <Route path={`${match.path}/:collectionName`} component={CollectionPageContainer}></Route>
        </div>          
    )

}
    
 


const mapDispatchToProps = dispatch =>({
    fetchCollectionsStart : () => dispatch(fetchCollectionsStart())
})



export default connect(null,mapDispatchToProps)(ShopPage);