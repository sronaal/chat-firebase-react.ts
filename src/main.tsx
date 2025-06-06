import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { FirebaseAppProvider } from 'reactfire'
import { firebaseConfig } from './lib/firebase-config.ts'

createRoot(document.getElementById('root')!).render(

    <FirebaseAppProvider firebaseConfig={ firebaseConfig }>
        <App />
    </FirebaseAppProvider>

)
