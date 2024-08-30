
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from "react-redux"
import store from "./store/store.js"
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { AuthLayout, Login } from './components/index.js'

import AddPost from "./pages/AddPost.jsx"
import Signup from './components/Signup.jsx'
import EditPost from './pages/EditPost.jsx'
import Post from './pages/Post.jsx'
import AllPosts from './pages/AllPosts.jsx'
import Home from './pages/Home.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/login",
        element: (
          <AuthLayout authetication={false}>
            <Login />
          </AuthLayout>
        )
      },
      {
        path: "/signup",
        element: (
          <AuthLayout authetication={false}>
            <Signup />
          </AuthLayout>
        )
      },
      {
        path: "/all-posts",
        element: (
          <AuthLayout authetication>
            {" "}
            <AllPosts />
          </AuthLayout>
        )
      },
      {
        path: "/add-post",
        element: (
          <AuthLayout authetication>
            {" "}
            <AddPost />
          </AuthLayout>
        )
      },
      {
        path: "/edit-post/:slug",
        element: (
          <AuthLayout authetication>
            {" "}
            <EditPost />
          </AuthLayout>
        )
      },
      {
        path: "/post/:slug",
        element: <Post />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
