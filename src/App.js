import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import MainContainer from './components/MainContainer';
import SingleContainer from './components/SingleContainer';
import Results from './components/Results';
import ExploreAll from './components/ExploreAll';

const App = () => {
  
  const api_key = process.env.REACT_APP_API_KEY;

  return (
    <Router>
      <div className="App">
        <Nav />
      </div>

      <Switch>
        <Route exact path='/'
          component={() => <MainContainer
            linkHeader={`https://api.themoviedb.org/3/trending/all/day?api_key=${api_key}`}
            link1={`https://api.themoviedb.org/3/trending/movie/day?api_key=${api_key}`}
            title1={'Trending Movies'}
            link2={`https://api.themoviedb.org/3/trending/tv/day?api_key=${api_key}`}
            title2={'Trending Tv Shows'} />}
        />
        <Route exact path='/movie'
          component={() => <MainContainer
            linkHeader={`https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=en-US&page=1`}
            link1={`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`}
            title1={'Popular Movies'}
            link2={`https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US&page=1`} 
            title2={'Top Rated Movies'}
            link3={`https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=en-US&page=1`}
            title3={'Upcoming Movies'}
            link4={`https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}&language=en-US&page=1`} 
            title4={'Now Playing Movies'} />}
        />
        <Route exact path='/tv'
          component={() => <MainContainer
            linkHeader={`https://api.themoviedb.org/3/tv/on_the_air?api_key=${api_key}&language=en-US&page=1`}
            link1={`https://api.themoviedb.org/3/tv/popular?api_key=${api_key}&language=en-US&page=1`}
            title1={'Popular Tv Shows'}
            link2={`https://api.themoviedb.org/3/tv/top_rated?api_key=${api_key}&language=en-US&page=1`} 
            title2={'Top Rated Tv Shows'}
            link3={`https://api.themoviedb.org/3/tv/on_the_air?api_key=${api_key}&language=en-US&page=1`}
            title3={'Currently Airing Tv Shows'}
            link4={`https://api.themoviedb.org/3/tv/airing_today?api_key=${api_key}&language=en-US&page=1`} 
            title4={'Tv Shows Airing Today'} />}
        />
        <Route exact path='/movie/:movieid' 
          component={() => <SingleContainer api_key={api_key} />}
        />
        <Route exact path='/tv/:tvid' 
          component={() => <SingleContainer api_key={api_key} />}
        />
        <Route path='/search/:searchInput' component={() => <Results api_key={api_key}/>}/>
        <Route path='/:media/category/:category' component={() => <ExploreAll api_key={api_key} />}/>

      </Switch>
    </Router>
  );
}

export default App;