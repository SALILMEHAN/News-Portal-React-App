import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './Redux/Store.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NewsArea from './Components/NewsArea.jsx'
import NewsPage from './Components/NewsPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <NewsArea type="world" />
      },
      {
        path: "/world",
        element: <NewsArea type="world" />
      },
      {
        path: "/sports",
        element: <NewsArea type="sports" />
      },
      {
        path: "/technology",
        element: <NewsArea type="technology" />
      },
      {
        path: "/business",
        element: <NewsArea type="business" />
      },
      {
        path: "/entertainment",
        element: <NewsArea type="entertainment" />
      },
      {
        path: "/article/:id",
        element: <NewsPage />,
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
