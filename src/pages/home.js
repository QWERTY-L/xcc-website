import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainMenu from '../components/navbar';
import { Button } from 'react-bootstrap';

//import '../App.scss';

function Home(){

  return (
    <div className="Homepage">
      <MainMenu websiteName="XCC" />

      <h1>XCC Home Page</h1>
      <p>Lorem ipsum dolor sit amet</p>
    </div>
  )
}

export default Home;
