import './App.css';
import Navbar from './components/Navbar/Navbar';
import TimeButton from './components/TimeButton/TimeButton';
import about_pic from './assets/images/Link_Cooking.gif';

function App() {
  return (
    <div className="App">
      < Navbar/>
      <div id="" className="first_page">
        < TimeButton />
      </div>
      <div id="intro" className="intro">
        <h2 className="subTitle long">This is my portfolio page where you can view my list<br/>
        of projects and learn more about me.</h2>
      </div>
      <div id="projects" className="projects">
        <div className='projects-title'>
          <h2 className="subTitle">Projects</h2>
          <div className="git">
            <a onmousedown="optionClicked()" href="https://www.github.com/PaulKuruvila" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
          </div>
        </div>        
        <div className="container">
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
      <div id="about" className="about">
        {/* <h2><img className="Kid_Cudi two" src={Kid_Cudi}/>About Me<img className="Kid_Cudi one" src={Kid_Cudi}/></h2> */}
        <div className="about content">
          <h2 className="subTitle">About Me</h2>
          <img className="about_pic" src={about_pic}/>
          <p>Hello, I'm Paul Kuruvila, a software developer. From 2019 until December 2022, I attended the University of Houston where I received my Bachelor of Science in Computer Science with a Minor in Mathematics. I aspire to work as a full stack developer, and I am hoping for the opportunity to apply my skills to contribute to society.</p>
        </div>
      </div>
      <div id="contact" className="contact">
        <h2 className="subTitle">Contact</h2>
        <p className="contact-text">You can contact me via:</p>
        <div className="contact-icons">
          <a onmousedown="optionClicked()" href="https://www.linkedin.com/in/paulkuruvila" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
          <a onmousedown="optionClicked()" href="mailto:paulrkuruvila@gmail.com"><i className="fa fa-envelope"></i></a>
        </div>
      </div>
    </div>
  );
}

export default App;
