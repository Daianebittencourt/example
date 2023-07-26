import { useContext } from "react"
import { AuthContext } from "../../contexts/Auth/AuthContext"

 export function Private() {
  const auth = useContext(AuthContext)
  return (
    <div>
      <h2>Private Page</h2>
      <span>{`Olá ${auth.user?.name} tudo bem?`}</span>
    </div>
  )
}
