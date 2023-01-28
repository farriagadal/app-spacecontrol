import { useContext } from 'react'
import AuthContext from '../context/authContext'

export default function useAuth () {
  const contextValue = useContext(AuthContext.Context)
  return contextValue
}
