import React from 'react'

export const LoginScreen = ({ history }) => {
  const handleLogin = () => {
    // history.push('/');
    history.replace('/');
  }
  return (
    <div>
      <h1>Login</h1>
      <hr/>
      <button
        className="btn btn-primary"
        onClick={ handleLogin }
      >
        Login
      </button>
    </div>
  )
}
