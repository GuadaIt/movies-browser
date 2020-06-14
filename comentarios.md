### Comentarios

Maravilloso trabajo, Guada!! 

Tu codigo es excelente: claro, muy prolijo, usando muy bien las practicas que fuimos recomendado a lo largo de la cursada, demostrando una comprension excelente de react y todos los temas vistos. 

Como ya me tenes acostumbrada, no solo tu codigo es muy claro sino que no descuidas lo visual: tu pagina esta impecablemente maquetada, merito doble teniendo en cuenta que elegiste el mas complejo de los modelos. Hay muy poquitos detalles a mencionar. 

A nivel codigo, es destacable el buen tabulado y los nombres de variables descriptivos y claros. 

Cuesta creer que un trabajo asi venga de alguien que aprendió a programar este año. Sentite muy orgullosa de esto. 

Las siguientes observaciones son detalles, solo para ir mejorando si tenes ganas:

- Codigos como el de home se hacen dificiles de leer porque hay mucho repetido. Por ejemplo

```
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
```

Una alternativa para mejorar esto es guardar las variables que usamos muchas veces, como las rutas a la api, en un archivo contants.js que podemos importar cuando lo necesitemos.

```
export const API_URL_BASE = `https://api.themoviedb.org/3/`;
export const API_URL_LAST = `?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`;
```

Y luego en nuestro componente podemos importar esas variables

```
import { API_URL_BASE, API_URL_LAST } from './constants.js;
```

Y usarlas en los componentes:

```
<Route exact path='/movie'
    component={() => <MainContainer
      linkHeader={API_URL_BASE + 'upcoming' + API_URL_LAST}
  />
```

Asi todo se vuelve un poco mas legible. 

- Tenes algunos warnings en la consola que deberias atacar lo antes posible: no queda bien que esten ahi. 
- Corregi los console log olvidados 
- Hay una barra blanca debajo de tu pagina. Supongo que es por flex? Trate de corregirla y no hubo caso - me pone muy nerviosa, jaja. Supongo que tambien vos ya la notaste. Si se me ocurre como arreglarla te vuelvo a escribir!


