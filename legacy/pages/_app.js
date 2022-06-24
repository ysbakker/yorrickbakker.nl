import 'antd/dist/antd.min.css'
import '../css/colors.sass'
import '../css/index.sass'
import '../css/layout.sass'

import { Provider } from 'react-redux'
import store from '../redux/store'

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
