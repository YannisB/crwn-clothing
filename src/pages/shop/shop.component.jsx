import React from "react";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import SHOP_DATA from "../../resources/shop.data";

class ShopPage extends React.Component {
    constructor(){
        this.state = SHOP_DATA
    }

    render(){
        return(

            <div>Shop page</div>

        )
    }
}

export default ShopPage