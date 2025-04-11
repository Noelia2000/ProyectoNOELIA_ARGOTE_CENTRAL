
import './index.css'
import App from './App'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store'


ReactDOM.createRoot(document.getElementById('root')as HTMLAnchorElement).render(
  <Provider store={store}>
    <App/>
  </Provider>,
)