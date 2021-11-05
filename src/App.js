import './App.css';
import Navbar from './components/Navbar/Navbar';
import TimeButton from './components/TimeButton';
import about_pic from './assets/images/Link_Cooking.gif';

function App() {
  return (
    <div className="App">
      < Navbar/>
      <div id="" class="first_page">
        < TimeButton />
      </div>
      <div id="intro" class="intro">
        <h2 class="subTitle">This is my portfolio page where you can view my list<br/>
        of projects and learn more about me.</h2>
      </div>
      <div id="projects" class="projects">
        <h2>Projects</h2>
        <div class="contact-icons git">
          <a onmousedown="optionClicked()" href="https://www.github.com/PaulKuruvila" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
        </div>
        <div class="container">
          <a href="https://www.github.com/PaulKuruvila/Discord-Bot" target="_blank" rel="noopener noreferrer" className="item one">
            <header className="project-title one">Discord Bot</header>
          </a>
          <a href="https://www.github.com/PaulKuruvila/UbiWeather-App" target="_blank" rel="noopener noreferrer" className="item two">
            <header className="project-title two">UbiWeather App</header>
          </a>
          <a href="https://www.github.com/PaulKuruvila/GameReview-App" target="_blank" rel="noopener noreferrer" className="item three">
            <header className="project-title three">GameReview App</header>
          </a>
        </div>
      </div>
      <div id="about" class="about">
        {/* <h2><img className="Kid_Cudi two" src={Kid_Cudi}/>About Me<img className="Kid_Cudi one" src={Kid_Cudi}/></h2> */}
        <div class="about content">
          <h2>About Me</h2>
          <img className="about_pic" src={about_pic}/>
          <p>Hello, I'm Paul Kuruvila, a junior in college. Since 2019, I have been attending the University of Houston as a Computer Science major with aspirations of working as a full stack developer/software engineer. I expect to graduate in Spring, 2023.</p>
        </div>
      </div>
      <div id="contact" class="contact">
        <h2>Contact</h2>
        <p class="contact-text">You can contact me via:</p>
        <div class="contact-icons">
          <a onmousedown="optionClicked()" href="https://www.linkedin.com/in/paulkuruvila" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
          <a onmousedown="optionClicked()" href="mailto:paulrkuruvila@gmail.com"><i class="fa fa-envelope"></i></a>
        </div>
      </div>
    </div>
  );
}

export default App;
