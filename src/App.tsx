import { Toaster } from 'react-hot-toast';
import './App.scss';
import Login from './modules/onBoard/login/login';

function App(): JSX.Element {
  return (
    <div className="App">
      <Toaster
        containerStyle={{ zIndex: '100000000000000' }}
        toastOptions={{ className: 'toasterStyles' }}
      />
      <Login />
    </div>
  );
}

export default App;
