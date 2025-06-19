import React, {useState} from 'react'
import { GoogleLogout } from 'react-google-login'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const clientId = "187904825061-qraoo6cmgphko14q2g9pqa0mdtfu2oio.apps.googleusercontent.com"

const Logout = () => {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
  const dispatch = useDispatch();
  const navigate = useNavigate();

    const onSuccess = (res) => {

      dispatch({type:  'LOGOUT'});
      setUser(null)
      navigate('/') 
    }


  return (
    <div id='signOutButton'>
        <GoogleLogout 
        clientId={clientId}
        buttonText={"Logout"}
        onLogoutSuccess={onSuccess}/>
    </div>
  )
}

export default Logout