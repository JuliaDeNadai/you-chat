import { ReactNode, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Login } from '../../pages/Login'

//const Login = lazy(() => import('../../pages/Login'))

interface RoutesProps {
  name: string;
  path: string;
  element: any;
}

const routes: RoutesProps[] = [
  {
    name: "default",
    path: "/",
    element: Login
  },
  {
    name: "login",
    path: "/login",
    element: Login
  }
]

export const AppRouter: React.FunctionComponent = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Router basename="/you-chat">
        <Routes>
          {
            routes.map((item: RoutesProps) => {
              return <Route key={`route-item-${item.name}`} path={item.path} element={<item.element/>} />
            })
          }
        </Routes>
      </Router>
    </Suspense>
  );
}