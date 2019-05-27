import App from '../App'
import Header from '../components/Header'
import Home from '../views/Home'
import TopicList from '../views/TopicList'
import NotFound from '../views/NotFound'

const routes = [
  {
    path: '/',
    component: App,
    loadData: Header.loadData,
    key: 'app',
    routes: [
      {
        path: '/',
        component: Home,
        exact: true,
        loadData: Home.loadData,
        key: 'home'
      },
      {
        path: '/topic',
        component: TopicList,
        exact: true,
        loadData: TopicList.loadData,
        key: 'topic'
      },
      {
        component: NotFound
      }
    ]
  }
]

export default routes
