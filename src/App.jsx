import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'
import { About, Contact, Github, Home, User } from './components'
import { githubLoader } from './components/Github/Github'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='user/:userId' element={<User/>}/>
      <Route path='git' loader={githubLoader} element={<Github/>}/>
      </Route>
    )
  )

  return (
  <RouterProvider router={router}/>
  )
}

export default App
