import React from 'react'
import './App.css';
import { Switch,Route,Redirect } from 'react-router';

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Checkout from './pages/checkout/checkout.component';

//Firebase import
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { onSnapshot } from '@firebase/firestore';


//Redux related import
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';





class App extends React.Component{
  unsubscribeFromAuth = null

  componentDidMount(){

    const {setCurrentUser} = this.props;



    this.unsubscribeFromAuth= auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth)
        onSnapshot(userRef, (snap)=> {
          setCurrentUser({
            id : snap.id,
            ...snap.data()
          })   
        })
        setCurrentUser(userAuth)
        
      }
      
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }

  

  render(){
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
}

const mapStateToProps = createStructuredSelector(
  {currentUser : selectCurrentUser
  }
)


const mapDispatchToProps = dispatch =>({
  setCurrentUser : user => dispatch(setCurrentUser(user))
})


export default connect(mapStateToProps,mapDispatchToProps)(App);
