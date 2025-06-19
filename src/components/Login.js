import React from 'react'
import {GoogleLogin} from 'react-google-login'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'

const clientId = "187904825061-qraoo6cmgphko14q2g9pqa0mdtfu2oio.apps.googleusercontent.com"

const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onSuccess = async (res) => {
         const result = res?.profileObj;
         const token = res?.tokenId;
          
         try{
          
          dispatch({type: 'AUTH', data: {result, token}});
          navigate('/');

         }catch(error){
          console.log(error)
         }
    }

    const onFailure = (res) => {
        console.log("Login Not Successful")
    }

  return (
    <div>
        <GoogleLogin 
        clientId={clientId}
        buttonText='Login'
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}/>
    </div>
  )
}

export default Login