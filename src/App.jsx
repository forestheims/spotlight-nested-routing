import {
  BrowserRouter,
  Link,
  Route,
  useRouteMatch,
  useParams,
} from 'react-router-dom';
import './App.css';

const movieCategories = [
  {
    category: 'Anime',
    id: 'anime',
    description: 'anime movies',
    movies: [
      {
        title: 'Demon Slayer: Mugen Train',
        year: '2020',
        id: '1',
        poster:
          'https://m.media-amazon.com/images/M/MV5BODI2NjdlYWItMTE1ZC00YzI2LTlhZGQtNzE3NzA4MWM0ODYzXkEyXkFqcGdeQXVyNjU1OTg4OTM@._V1_SX300.jpg',
      },
      {
        title: 'Jujutsu Kaisen 0: The Movie',
        year: '2021',
        id: '2',
        poster:
          'https://m.media-amazon.com/images/M/MV5BYzFmMjAwMDYtNzM0Zi00NjY2LWFjMjYtMGQ1OTRiZjk5YjJkXkEyXkFqcGdeQXVyMTMwODY5NDc2._V1_SX300.jpg',
      },
    ],
  },
  {
    category: 'Horror',
    id: 'horror',
    description: 'horror movies',
    movies: [
      {
        title: 'Get Out',
        year: '2017',
        id: '3',
        poster:
          'https://m.media-amazon.com/images/M/MV5BMjUxMDQwNjcyNl5BMl5BanBnXkFtZTgwNzcwMzc0MTI@._V1_SX300.jpg',
      },
      {
        title: "Child's Play 2",
        year: '1990',
        id: '4',
        poster:
          'https://m.media-amazon.com/images/M/MV5BM2Y0NGNiNGItYzYzOS00NDk0LTkzNWUtMGZjMjc1NWM4MzE3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
      },
    ],
  },
  {
    category: 'Action',
    id: 'action',
    description: 'action movies',
    movies: [
      {
        title: 'Last Action Hero',
        year: '1993',
        id: '5',
        poster:
          'https://m.media-amazon.com/images/M/MV5BNjdhOGY1OTktYWJkZC00OGY5LWJhY2QtZmQzZDA2MzY5MmNmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
      },
      {
        title: 'Looney Tunes: Back in Action',
        year: '2003',
        id: '6',
        poster:
          'https://m.media-amazon.com/images/M/MV5BMTkxNDk5MDQ2MF5BMl5BanBnXkFtZTYwMTA0Nzc2._V1_SX300.jpg',
      },
    ],
  },
];

function Movie() {
  return <div></div>;
}

function MovieList() {
  return <div></div>;
}

function CategoryList() {
  const { url, path } = useRouteMatch();
  console.log(url);
  console.log(path);
  return (
    <div>
      <ul>
        {movieCategories.map(({ id, category }) => (
          <li key={id}>
            <Link to={`${url}/${id}`}>{category}</Link>
          </li>
        ))}
      </ul>
      <Route path={`${path}/:categoryid`}>
        <MovieList />
      </Route>
    </div>
  );
}

function Home() {
  return <h1>Home</h1>;
}

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ width: 1000, margin: '0 auto' }}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
        </ul>
        <hr />
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/categories">
          <CategoryList />
        </Route>
      </div>
    </BrowserRouter>
  );
}
