import React from "react";
import { Link } from "react-router-dom";
import {ReactComponent as Logo} from '../../assets/crown.svg'
import './header.styles.scss'
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropDown from "../cart-dropdown/cart-dropdopwn.component";

import { auth } from "../../firebase/firebase.utils";

import { connect } from "react-redux";

const Header = ({currentUser,hidden}) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo"></Logo>
        </Link>

        <div className="options">
            <Link className="option" to="/shop">shop</Link>
            <Link className="option" to="/contact">contact</Link>
            {
                currentUser ?
                (<div className="option" onClick={()=> auth.signOut()}>Sign out</div>)
                :
                (<Link className="option" to="/signin">Sign In</Link>)
            }
            <CartIcon></CartIcon>
        </div>
        {
            hidden ? null:(<CartDropDown></CartDropDown>)   
        }
        
    </div>
)

const mapStateToProps = ({ user : {currentUser},cart : {hidden}}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);