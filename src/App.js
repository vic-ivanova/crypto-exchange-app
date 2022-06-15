import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Results, Details, HeaderSearch } from './routes';
import { changeSearchValue } from './redux/actions/searchActions';

function App() {
  const searchState = useSelector(state => state.search);
  const pair = searchState[0].pair.toUpperCase();
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (location.pathname !== '/' && !location.pathname.includes('/details')) {
      dispatch(
        changeSearchValue(
          {
            pair: location.pathname.replace(/\//g, "").toUpperCase()
          }
        )
      )
    }
  }, [location.pathname, dispatch])

  return (
    <>
      <HeaderSearch />
      <div id='modal' />
      <Routes>
        <Route exact path={`/${pair}`} element={pair && <Results />} />
        <Route exact path={`/${pair}/details`} element={pair && <Details />} />
      </Routes>
    </>
  );
}

export default App;