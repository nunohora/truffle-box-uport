import { uPort, web3 } from './../../../util/uPort'
import { browserHistory } from 'react-router'

export const USER_LOGGED_IN = 'USER_LOGGED_IN'

const userLoggedIn = (user) => ({
  type: USER_LOGGED_IN,
  payload: user
})

export const loginUser = () => (dispatch) => {
    uPort.requestCredentials().then(credentials => {
      web3.eth.defaultAccount = credentials.address
      dispatch(userLoggedIn(credentials))

      return browserHistory.push('/dashboard')
    })
}
