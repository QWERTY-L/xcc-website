import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainMenu from '../components/navbar';

function About() {
  return (
    <div className="App">
      <header className="App-header">
        <MainMenu pagename="test" colour="primary" />
        <h>About Page</h>
      </header>
    </div>
  );
}

export default About;
