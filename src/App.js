import React, {useEffect} from 'react'
import './App.css';
import { Switch,Route,Redirect } from 'react-router';

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Checkout from './pages/checkout/checkout.component';



//Redux related import
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';

import { checkUserSession } from './redux/user/user.actions';





const App =({checkUserSession}) =>{

  useEffect( () =>{
    checkUserSession()
  },[checkUserSession])

  return(
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/shop" component={ShopPage}/>
          <Route 
            exact 
            path="/signin" 
            render={ () => 
                this.props.currentUser ? (
                <Redirect to='/'/>
                  ) : (
                <SignInAndSignUpPage/>
                  )
                }
            />
            <Route exact path="/checkout" component={Checkout}></Route>
        </Switch>
      </div>
  )
}

const mapStateToProps = createStructuredSelector(
  {currentUser : selectCurrentUser
  }
)

const mapDispatchToProps = dispatch =>({
  checkUserSession : () => dispatch(checkUserSession())
})


export default connect(mapStateToProps,mapDispatchToProps)(App);
