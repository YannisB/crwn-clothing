import React from "react";
// import { Link } from "react-router-dom";
import {ReactComponent as Logo} from '../../assets/crown.svg'
// import './header.styles.scss'
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";


import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import {HeaderContainer,LogoContainer,OptionsContainer,OptionLink} from './header.styles'

import { signOutStart } from "../../redux/user/user.actions";

const Header = ({currentUser,hidden,signOutStart}) => (
    <HeaderContainer >
        <LogoContainer to="/">
            <Logo className="logo"></Logo>
        </LogoContainer>

        <OptionsContainer>
            <OptionLink  to="/shop">shop</OptionLink>
            <OptionLink  to="/contact">contact</OptionLink>
            {
                currentUser ?
                (<OptionLink as='div' onClick={signOutStart}>Sign out</OptionLink>)
                :
                (<OptionLink to="/signin">Sign In</OptionLink>)
            }
            <CartIcon></CartIcon>
        </OptionsContainer>
        {
            hidden ? null:(<CartDropDown></CartDropDown>)   
        }
        
    </HeaderContainer>
)

const mapStateToProps = createStructuredSelector( {
    currentUser : selectCurrentUser,
    hidden : selectCartHidden
})

const mapDispatchToProps = dispatch => ({
    signOutStart : () => dispatch(signOutStart())
})

export default connect(mapStateToProps,mapDispatchToProps)(Header);