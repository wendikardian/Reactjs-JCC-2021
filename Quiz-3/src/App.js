import './App.css';
import { Route, Switch,  BrowserRouter  } from 'react-router-dom';
import Navbar from './Navbar/Navbar.js';
import Content from './Content/Content.js'
import Footer from './Footer/Footer.js';
import DataContent from './Content/DataContent.js';
import List from './List/List.js';
import About from './About/About.js';
import FormMobile from './Form/Form.js';
import EditMobile from './Form/Edit.js'
import SearchContent from './Content/Search.js'
import Search from 'antd/lib/transfer/search';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <DataContent>
          <Navbar/>
        <Switch>
          <Route path="/" exact>
            <Content />
          </Route>
          <Route path="/mobile-list">
            <List />
          </Route>
          <Route path="/mobile-form" exact> 
            <FormMobile />
          </Route>
          <Route path="/mobile-form/edit/:idReal">
            <EditMobile />
          </Route>
          <Route path="/search/:search">
            <SearchContent />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </DataContent>
      <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
