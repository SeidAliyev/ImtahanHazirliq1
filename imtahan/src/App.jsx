import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import routes from "./Routes/router.jsx"

const router = createBrowserRouter(routes);

function App() {

  return (
     <RouterProvider router={router} />
  )
}

export default App
