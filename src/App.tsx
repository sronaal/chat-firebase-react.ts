import { AuthProvider, FirestoreProvider, StorageProvider, useFirebaseApp } from "reactfire"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage"
import RootLayout from "./layout/root-layout"


function App() {

  const app = useFirebaseApp()
  const db = getFirestore(app)
  const auth = getAuth(app)
  const stogare = getStorage(app)

  return (
    <FirestoreProvider sdk={db}>
      <AuthProvider sdk={auth}>
        <StorageProvider sdk={stogare}>
          <RootLayout/>
        </StorageProvider>
      </AuthProvider>
    </FirestoreProvider>
  )
}

export default App
