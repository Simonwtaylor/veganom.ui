import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { StyledHeader } from '../src/components';

function MyApp({ Component, pageProps }: AppProps) {
  const handleLogin = () => {};
  const handleLogout = () => {};
  const handleCreateAccount = () => {};

  return (
    <>
      <StyledHeader
        onLogin={handleLogin}
        onLogout={handleLogout}
        onCreateAccount={handleCreateAccount}
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
