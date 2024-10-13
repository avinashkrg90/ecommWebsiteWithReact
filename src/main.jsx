
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from "react-redux";
import { store } from "./store";
import './index.css'
// import ShopContextProvider from './Context/ShopContext.jsx'
// import UserContextProvider from './context/UserContext.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')).render(
    // <UserContextProvider>
    <Provider store={store}>
        <App />
        <ToastContainer />
    </Provider>
      
    // </UserContextProvider>
);

