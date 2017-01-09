import {connect} from 'react-redux'
// import {submitNewsletter} from './state/newsletter'
// import {searchNearbyStores} from './state/storeFns'
// import {ensureStoreLoaded} from './state/store'

export default connect((state) => {
    return {
      ...state,
      auth: state.auth,
    }
  }, (dispatch, ownProps) => {
    debugger;
    return {

      doConsole: (v) => console.log(v),

      authLogin: () => {
        debugger
        ownProps.auth.login()
        // const authLockLogin = new Promise((resolve, reject) => ownProps.auth.login())
        // return authLockLogin.then((profile) => {
        //   // dispatch(loginSuccess(profile))
        //   console.log("LOGGED IN!! profile: ", profile)
        // }).catch(error => {
        //   alert(error);
        // })
      }
      // loadStore: (slug) => dispatch(ensureStoreLoaded(slug)),
      // submitNewsletter: (emailAddress, slug) => dispatch(submitNewsletter(emailAddress, slug))
    }
  }
)
