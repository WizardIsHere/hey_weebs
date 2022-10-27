import {createRoot}from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import store from './store/ReduxStore';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const app = document.getElementById('root');

// create a root
const root = createRoot(app);

//render app to root
root.render(
    <Provider store= {store}>
        <BrowserRouter>
            <Routes>
                <Route path='*' element={<App />} />
            </Routes>
        </BrowserRouter>
    </Provider>
);