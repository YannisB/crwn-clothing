import React from "react";
import SHOP_DATA from '../../resources/shop.data'
import CollectionPreview from '../../components/collection-preview/collection-preview.component'

class ShopPage extends React.Component {
    constructor(){
        super()
        this.state = {collections : SHOP_DATA}
        console.log(this.state.collections)
    }

    render(){
        const {collections} = this.state;
        return ( <div className="shop-page">
            {
                collections.map( ({id, ...otherCollectionsProp}) => (
                    <CollectionPreview key={id} {...otherCollectionsProp}></CollectionPreview>
                ))
            }
        </div>
           
        )
        
    }
}

export default ShopPage;