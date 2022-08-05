import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { DrinkCreation } from './view/DrinkCreation/DrinkCreation';
import { RandomDrink } from './view/TryMe/TryMe';
import logo from './assets/logo.png'

export const routes = [
  {
    path: '/',
    component: <DrinkCreation />,
    title: 'Home'
  },
  {
    path: '/random-drink',
    component: <RandomDrink />,
    title: 'Try Me'
  }
]

export function Router() {
  return (
    <BrowserRouter>
      <nav className="uk-navbar-container" uk-navbar>
        <div>
          <ul className="uk-navbar-nav">
            <li>
              <Link to="/">
              <img className="uk-height-small" src={logo}></img>
              </Link>
            </li>
            {
              routes.map((route) => {
                return (
                  <li className="uk-flex uk-flex-middle ">
                    <div className="uk-button uk-button-text">
                    <Link style={{"color": "black", "text-decoration": "none"}} to={route.path}>{route.title}</Link>
                    </div>
                  </li>
                );
              })
            }
          </ul>
        </div>
      </nav>
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