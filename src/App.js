import './App.css';
import { Route, Switch,  BrowserRouter, Redirect  } from 'react-router-dom';
import { Layout} from 'antd';
import Navbar from './Navbar/Navbar.js';
import DataApp from './Data/Data.js';
import MovieSection from './Section/MovieSection.js';
import GameSection from './Section/GameSection.js';
import LoginForm from './Form/Login/Login.js'
import RegisterForm from './Form/Register/Register.js';
import MovieDetail from './Section/MovieDetail.js';
import MovieSearch from './Section/MovieSearch.js';
import GameDetail from './Section/GameDetail.js';
import GameSearch from './Section/GameSearch.js';
import MovieManagement from './Management/MovieManagement.js';
import AddMovie from './Management/AddMovie.js';
import EditMovie from './Management/EditMovie.js';
import SearchMovieManagement from './Management/SearchMovieManagement.js';
import GameManagement from './Management/GameManagement.js';
import AddGame from './Management/AddGame.js';
import EditGame from './Management/EditGame.js';
import SearchGameManagement from './Management/SearchGameManagement.js';
import ChangePassword from './Form/ChangePassword.js';

const { Header, Content, Footer, Sider } = Layout;
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <DataApp>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/movie" />
            <Footer style={{ textAlign: 'center', height: '20pt', backgroundColor: '#002140', color : 'white'}}>Wendi Kardian - JabarCodingCamp 2021</Footer>
          </Route>
          <Route path="/movie" exact>
            <Navbar />
            <MovieSection />
            <Footer style={{ textAlign: 'center', height: '20pt', backgroundColor: '#002140', color : 'white'}}>Wendi Kardian - JabarCodingCamp 2021</Footer>
          </Route>
          <Route path="/moviemanagement" exact>
            <Navbar />
            <MovieManagement />
            <Footer style={{ textAlign: 'center', height: '20pt', backgroundColor: '#002140', color : 'white'}}>Wendi Kardian - JabarCodingCamp 2021</Footer>
          </Route>
          <Route path="/addmovie" exact>
            <Navbar />
            <AddMovie />
            <Footer style={{ textAlign: 'center', height: '20pt', backgroundColor: '#002140', color : 'white'}}>Wendi Kardian - JabarCodingCamp 2021</Footer>
          </Route>
          <Route path="/movie/detail/:id" exact>
            <Navbar />
            <MovieDetail />
            <Footer style={{ textAlign: 'center', height: '20pt', backgroundColor: '#002140', color : 'white'}}>Wendi Kardian - JabarCodingCamp 2021</Footer>
          </Route>
          <Route path="/movie/edit/:id" exact>
            <Navbar />
            <EditMovie />
            <Footer style={{ textAlign: 'center', height: '20pt', backgroundColor: '#002140', color : 'white'}}>Wendi Kardian - JabarCodingCamp 2021</Footer>
          </Route>
          <Route path="/movie/search/:keyword" exact>
            <Navbar />
            <MovieSearch />
            <Footer style={{ textAlign: 'center', height: '20pt', backgroundColor: '#002140', color : 'white'}}>Wendi Kardian - JabarCodingCamp 2021</Footer>
          </Route>
          <Route path="/moviemanagement/search/:keyword" exact>
            <Navbar />
            <SearchMovieManagement />
            <Footer style={{ textAlign: 'center', height: '20pt', backgroundColor: '#002140', color : 'white'}}>Wendi Kardian - JabarCodingCamp 2021</Footer>
          </Route>
          <Route path="/game" exact>
            <Navbar />
            <GameSection />
            <Footer style={{ textAlign: 'center', height: '20pt', backgroundColor: '#002140', color : 'white'}}>Wendi Kardian - JabarCodingCamp 2021</Footer>
          </Route>
          <Route path="/addgame" exact>
            <Navbar />
            <AddGame />
            <Footer style={{ textAlign: 'center', height: '20pt', backgroundColor: '#002140', color : 'white'}}>Wendi Kardian - JabarCodingCamp 2021</Footer>
          </Route>
          <Route path="/gamemanagement" exact>
            <Navbar />
            <GameManagement />
            <Footer style={{ textAlign: 'center', height: '20pt', backgroundColor: '#002140', color : 'white'}}>Wendi Kardian - JabarCodingCamp 2021</Footer>
          </Route>
          <Route path="/game/detail/:id" exact>
            <Navbar />
            <GameDetail />
            <Footer style={{ textAlign: 'center', height: '20pt', backgroundColor: '#002140', color : 'white'}}>Wendi Kardian - JabarCodingCamp 2021</Footer>
          </Route>
          <Route path="/game/edit/:id" exact>
            <Navbar />
            <EditGame />
            <Footer style={{ textAlign: 'center', height: '20pt', backgroundColor: '#002140', color : 'white'}}>Wendi Kardian - JabarCodingCamp 2021</Footer>
          </Route>
          <Route path="/game/search/:keyword" exact>
            <Navbar />
            <GameSearch />
            <Footer style={{ textAlign: 'center', height: '20pt', backgroundColor: '#002140', color : 'white'}}>Wendi Kardian - JabarCodingCamp 2021</Footer>
          </Route>
          <Route path="/gamemanagement/search/:keyword" exact>
            <Navbar />
            <SearchGameManagement />
            <Footer style={{ textAlign: 'center', height: '20pt', backgroundColor: '#002140', color : 'white'}}>Wendi Kardian - JabarCodingCamp 2021</Footer>
          </Route>
          <Route path="/changepassword" exact>
            <Navbar />
            <ChangePassword />
            <Footer style={{ textAlign: 'center', height: '20pt', backgroundColor: '#002140', color : 'white'}}>Wendi Kardian - JabarCodingCamp 2021</Footer>
          </Route>
          <Route path="/login" exact>
            <LoginForm />
          </Route>
          <Route path="/register" exact>
            <RegisterForm />
          </Route>
          
        </Switch>
      </DataApp>
      </BrowserRouter>
    </div>
  );
}

export default App;
