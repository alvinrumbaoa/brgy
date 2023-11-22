// components/LoginButton.js
import { signIn } from 'next-auth/react';

function LoginButton() {
  return (
    <button onClick={() => signIn('google')}>
      Sign in with Google
    </button>
  );
}

export default LoginButton;
