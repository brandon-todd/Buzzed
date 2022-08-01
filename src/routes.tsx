import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DrinkCreation } from './view/DrinkCreation/DrinkCreation';
import { RandomDrink } from './view/RandomDrink/RandomDrink';

const routes = [
  {
    path: '/',
    component: <DrinkCreation />
  },
  {
    path: '/random-drink',
    component: <RandomDrink />
  }
]

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {
          routes.map((route) => {
            return (
              <Route key={route.path} path={route.path} element={route.component}></Route>
            );
          })
        } 
      </Routes> 
    </BrowserRouter>
  )
}
