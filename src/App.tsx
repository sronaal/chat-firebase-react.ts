import { AuthProvider, FirestoreProvider, useFirebaseApp } from "reactfire"
import { Button } from "./components/ui/button"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"


function App() {

  const app = useFirebaseApp()
  const db = getFirestore(app)
  const auth = getAuth(app)

  return (
    <FirestoreProvider sdk={db}>
      <AuthProvider sdk={auth}>
        
      </AuthProvider>
    </FirestoreProvider>
  )
}

export default App
