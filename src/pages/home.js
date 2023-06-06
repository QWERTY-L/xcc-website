import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainMenu from '../components/navbar';
import { Button } from 'react-bootstrap';

//import '../App.scss';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <MainMenu websiteName="Xavier Coding Club" colour="primary" />
      </header>
    
      <section>
        <Button>
            TEST
        </Button>
      </section>
    </div>
  );
}

export default Home;
