import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/layout/App';
import reportWebVitals from './reportWebVitals';
import './app/layout/styles.css'
import { BrowserRouter } from 'react-router-dom'
import { configureStore } from './app/store/configureStore';
import { Provider } from 'react-redux';

// const config: Config = {
//   readOnlyChainId: Mainnet.chainId,
//   readOnlyUrls: {
//     [Mainnet.chainId]: getDefaultProvider('mainnet'),
//   },
// }

const store = configureStore();

ReactDOM.render(
  // <DAppProvider config={config}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  // </DAppProvider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
