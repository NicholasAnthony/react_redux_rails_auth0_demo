import {connect} from 'react-redux'
// import {submitNewsletter} from './state/newsletter'
// import {searchNearbyStores} from './state/storeFns'
// import {ensureStoreLoaded} from './state/store'
import { bindActionCreators } from 'redux'
import {loadEvent, loadEvents, loginSuccess, loginError, logoutSuccess} from '../../actions'


function mapStateToProps(state) {
  const { events, event, auth } = state
  const { errorEvents } = events
  const { singleEvent } = event
  return {
    ...state,
    auth,
    events,
    singleEvent,
    errorEvents
  }
}


const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({ 
    loadEvents,
    loadEvent,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)



// export default connect((state) => {
//     return {
//       ...state,
//       auth: state.auth,
//     }
//   }, (dispatch, ownProps) => {
//     return {

//       doConsole: (v) => console.log(v),

//       authLogin: () => {
//         ownProps.auth.login()
//         // const authLockLogin = new Promise((resolve, reject) => ownProps.auth.login())
//         // return authLockLogin.then((profile) => {
//         //   // dispatch(loginSuccess(profile))
//         //   console.log("LOGGED IN!! profile: ", profile)
//         // }).catch(error => {
//         //   alert(error);
//         // })
//       }
//       // loadStore: (slug) => dispatch(ensureStoreLoaded(slug)),
//       // submitNewsletter: (emailAddress, slug) => dispatch(submitNewsletter(emailAddress, slug))
//     }
//   }
// )
