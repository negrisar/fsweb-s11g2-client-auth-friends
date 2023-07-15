import './App.css';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom';
import FriendList from './components/FriendsList';
import Login from './components/Login';
import AddFriend from './components/AddFriend';
import Logout from './components/Logout';
import Header from './components/Header';
import AuthContextProvider from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <AuthContextProvider>
      <div className="App">
        
        <Header/>
        <Switch>
          <Route path='/login' component={Login}/>

          <ProtectedRoute path= '/friends'>
          <FriendList/>
          </ProtectedRoute>

          <ProtectedRoute path= '/friends_add'>
          <AddFriend/>
          </ProtectedRoute>

          <ProtectedRoute path= '/logout'>
          <Logout/>
          </ProtectedRoute>
          
        </Switch>
      </div>
    </AuthContextProvider>
  );
}

export default App;
