import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import AuthLayout from '@/layout/AuthLayout'
import NotFound from '@/pages/NotFound'
import Home from '@/pages/Home'
import Map from '@/pages/Map'
import Login from '@/pages/auth/Login'
import MainLayout from '@/layout/MainLayout'
import CustomizeLayout from '@/layout/CustomizeLayout'

import Order from '@/pages/Order'
import Customize from '@/pages/customize/Customize'
import ChatList from '@/pages/chat/ChatList'
import ChatRoom from '@/pages/chat/ChatRoom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: 'map', element: <Map /> },
      { path: 'chat', element: <ChatList /> },
      { path: 'order', element: <Order /> },
    ],
  },
  {
    path: '/chat/:chatId',
    element: <ChatRoom />,
  },
  {
    path: '/customize',
    element: <CustomizeLayout />,
    children: [
      { index: true, element: <Customize /> },
      { path: ':cakeId', element: <Customize /> },
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [{ path: 'login', element: <Login /> }],
  },
])

export default function AppRouter() {
  return <RouterProvider router={router} />
}
