import React from 'react'
import { Navbar } from '../../../../react/heroes-app/src/components/ui/Navbar';
import { Switch, Route, Redirect } from 'react-router-dom';
import { MarvelScreen } from '../../../../react/heroes-app/src/components/marvel/MarvelScreen';
import { HeroScreen } from '../../../../react/heroes-app/src/components/heroes/HeroScreen';
import { DcScreen } from '../../../../react/heroes-app/src/components/dc/DcScreen';
import { SearchScreen } from '../../../../react/heroes-app/src/components/search/SearchScreen';

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />

      <div className="container mt-2">
        <Switch>
          <Route exact path="/marvel" component={ MarvelScreen } />
          <Route exact path="/hero/:heroeId" component={ HeroScreen } />
          <Route exact path="/dc" component={ DcScreen } />
          <Route exact path="/search" component={ SearchScreen } />

          <Redirect to="/marvel" />
        </Switch>
      </div>
    </>
  )
}
