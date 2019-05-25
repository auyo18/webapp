import App from '../App'
import Home from '../views/Home'
import TopicList from '../views/TopicList'
import NotFound from '../views/NotFound'

const routes = [
  {
    path: '/',
    component: App,
    key: 'app',
    routes: [
      {
        path: '/',
        component: Home,
        exact: true,
        loadData: '',
        key: 'home'
      },
      {
        path: '/login',
        component: NotFound,
        exact: true,
        loadData: '',
        key: 'home'
      },
      {
        component: NotFound
      }
    ]
  }
]

export default routes
