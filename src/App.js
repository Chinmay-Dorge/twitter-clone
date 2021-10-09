import { BrowserRouter , Switch , Route} from "react-router-dom";
import './App.scss';
import {LeftPane} from "./components/leftPane/LeftPane";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <LeftPane />
        <Switch>
          <Route path="/" exact>Home</Route>
          <Route path="/explore">Explore</Route>
          <Route path="/notifications" >Notifications</Route>
          <Route path="/messages">Messages</Route>
          <Route path="/bookmarks">Bookmarks</Route>
          <Route path="/lists">Lists</Route>'
          <Route path="/profile">Profile</Route>
        </Switch>
        <div>Right Pane</div>
      </div>
    </BrowserRouter>
  );
}

export default App;
