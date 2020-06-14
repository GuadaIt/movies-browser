import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import MainContainer from './components/MainContainer';
import SingleContainer from './components/SingleContainer';
import Results from './components/Results';
import ExploreAll from './components/ExploreAll';

const App = () => {

  const api_key = process.env.REACT_APP_API_KEY;
  const baseUrl = 'https://api.themoviedb.org/3';

  const links = {
    home: {
      linkHeader: `${baseUrl}/trending/all/week?api_key=${api_key}`,
      title1: 'Trending Movies',
      link1: `${baseUrl}/trending/movie/week?api_key=${api_key}`,
      title2: 'Trending Tv Shows',
      link2: `${baseUrl}/trending/tv/week?api_key=${api_key}`
    },

    tv: {
      linkHeader: `${baseUrl}/trending/tv/week?api_key=${api_key}`,
      title1: 'Popular Tv Shows',
      link1: `${baseUrl}/tv/popular?api_key=${api_key}&language=en-US&page=1`,
      title2: 'Top Rated Tv Shows',
      link2: `${baseUrl}/tv/top_rated?api_key=${api_key}&language=en-US&page=1`,
      title3: 'Currently Airing Tv Shows',
      link3: `${baseUrl}/tv/on_the_air?api_key=${api_key}&language=en-US&page=1`,
      title4: 'Tv Shows Airing Today',
      link4: `${baseUrl}/tv/airing_today?api_key=${api_key}&language=en-US&page=1`
    },

    movie: {
      linkHeader: `${baseUrl}/movie/upcoming?api_key=${api_key}&language=en-US&page=1`,
      title1: 'Popular Movies',
      link1: `${baseUrl}/movie/popular?api_key=${api_key}&language=en-US&page=1`,
      title2: 'Top Rated Movies',
      link2: `${baseUrl}/movie/top_rated?api_key=${api_key}&language=en-US&page=1`,
      title3: 'Upcoming Movies',
      link3: `${baseUrl}/movie/upcoming?api_key=${api_key}&language=en-US&page=1`,
      title4: 'Now Playing Movies',
      link4: `${baseUrl}/movie/now_playing?api_key=${api_key}&language=en-US&page=1`
    }
  };

  return (
    <Router>

      <div className="App">
        <Nav />
      </div>

      <Switch>
        <Route exact path='/' component={() => <MainContainer links={links.home} api_key={api_key}/>} />
        <Route exact path='/tv' component={() => <MainContainer links={links.tv} api_key={api_key}/>} />
        <Route exact path='/movie' component={() => <MainContainer links={links.movie} api_key={api_key}/>} />
        <Route exact path='/search/:searchInput' component={() => <Results api_key={api_key} />} />
        <Route exact path='/:media/:id' component={() => <SingleContainer api_key={api_key} baseUrl={baseUrl} />} />        
        <Route exact path='/:media/category/:category' component={() => <ExploreAll api_key={api_key} />} />
        <Route exact path='/:media/:id/similar' component={() => <ExploreAll api_key={api_key} />} />
      </Switch>

    </Router>
  );
};

export default App;