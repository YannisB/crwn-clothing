import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router";
// import { createStructuredSelector } from "reselect";
// import {selectShopCollections} from '../../redux/shop/shop.selectors'

import {convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils.js';

import { updateCollections } from "../../redux/shop/shop.actions";

import WithSpinner from "../../components/with-spinner/with-spinner.component.jsx";

import CollectionOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class ShopPage extends React.Component {
    state = {
        loading :true
    }
    unsubscribeFromAuth=null 


    

    componentDidMount() {
        const {updateCollections} = this.props
        const collectionsNewMapping = convertCollectionsSnapshotToMap()
        collectionsNewMapping
            .then((collections) => updateCollections(collections))
            .then(this.setState({loading:false}))
    }
    render(){
        const {match} = this.props;
        const {loading} = this.props;
        return(
            <div className="shop-page">
                <Route  exact path ={`${match.path}`} render={(props) =><CollectionOverviewWithSpinner isLoading={loading} {...props} /> }></Route>
                <Route path={`${match.path}/:collectionName`} render={(props) =><CollectionPageWithSpinner isLoading={loading} {...props} /> }></Route>
            </div>          
        )
    }

}
    
 

// const mapStateToProps = createStructuredSelector({
//     collections : selectShopCollections
// })

const mapDispatchToProps = (dispatch) => ({
    updateCollections : (collectionsMap) => dispatch(updateCollections(collectionsMap))
})

export default connect(null,mapDispatchToProps)(ShopPage);