import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { persistor, store } from './redux/store.js';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Footer from './components/Footer.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <div className=''>
        <App />
      <Footer className="mt-auto mb-0 pb-0" />
      </div>
      
    </PersistGate>
  </Provider>
);
