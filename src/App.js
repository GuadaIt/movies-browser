import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { API_URL_BASE, API_URL_LAST } from './constants';
import Nav from './components/Nav';
import MainContainer from './components/MainContainer';
import SingleContainer from './components/SingleContainer';
import Results from './components/Results';
import ExploreAll from './components/ExploreAll';

const App = () => {

  const links = {
    home: {
      linkHeader: `${API_URL_BASE}trending/all/week${API_URL_LAST}`,
      title1: 'Trending Movies',
      link1: `${API_URL_BASE}trending/movie/week${API_URL_LAST}`,
      title2: 'Trending Tv Shows',
      link2: `${API_URL_BASE}trending/tv/week${API_URL_LAST}`
    },

    tv: {
      linkHeader: `${API_URL_BASE}trending/tv/week${API_URL_LAST}`,
      title1: 'Popular Tv Shows',
      link1: `${API_URL_BASE}tv/popular${API_URL_LAST}`,
      title2: 'Top Rated Tv Shows',
      link2: `${API_URL_BASE}tv/top_rated${API_URL_LAST}`,
      title3: 'Currently Airing Tv Shows',
      link3: `${API_URL_BASE}tv/on_the_air${API_URL_LAST}`,
      title4: 'Tv Shows Airing Today',
      link4: `${API_URL_BASE}tv/airing_today${API_URL_LAST}`
    },

    movie: {
      linkHeader: `${API_URL_BASE}movie/upcoming${API_URL_LAST}`,
      title1: 'Popular Movies',
      link1: `${API_URL_BASE}movie/popular${API_URL_LAST}`,
      title2: 'Top Rated Movies',
      link2: `${API_URL_BASE}movie/top_rated${API_URL_LAST}`,
      title3: 'Upcoming Movies',
      link3: `${API_URL_BASE}movie/upcoming${API_URL_LAST}`,
      title4: 'Now Playing Movies',
      link4: `${API_URL_BASE}movie/now_playing${API_URL_LAST}`
    }
  };

  return (
    <Router>

      <div className="App">
        <Nav />
      </div>

      <Switch>
        <Route exact path='/' component={() => <MainContainer links={links.home} />} />
        <Route exact path='/tv' component={() => <MainContainer links={links.tv} />} />
        <Route exact path='/movie' component={() => <MainContainer links={links.movie} />} />
        <Route exact path='/search/:searchInput' component={Results} />
        <Route exact path='/:media/:id' component={SingleContainer} />        
        <Route exact path='/:media/category/:category' component={ExploreAll} />
        <Route exact path='/:media/:id/similar' component={ExploreAll} />
      </Switch>

    </Router>
  );
};

export default App;