import React from "react";
// import './collection-item.styles.scss'
// import CustomButton from "../custom-button/custom-button.component";

import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

import {CollectionItemContainer,AddButton,BackgroundImage,CollectionFooterContainer,NameContainer,PriceContainer} from './collection-item.styles'




const CollectionItem = ( {item,addItem}) => {
    const {name,imageUrl,price} = item;
    return (
        <CollectionItemContainer>
            <BackgroundImage imageUrl={imageUrl}/>
            <AddButton onClick={() => addItem(item)}> ADD TO CART</AddButton>
        
            <CollectionFooterContainer>
                <NameContainer className="name">{name}</NameContainer>
                <PriceContainer className="price">{price}</PriceContainer>
            </CollectionFooterContainer>
        </CollectionItemContainer>
    )}
       


function mapDispatchToProps(dispatch) {
    return ({
        addItem: item => dispatch(addItem(item))
    });
}


export default connect(null,mapDispatchToProps)(CollectionItem);