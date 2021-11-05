import React, { Component } from 'react';
import { NavItems } from "./NavItems";
import './Navbar.css';

class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            show: true,
            lastScrollPos: 0,
            scrollPos: 0,
            clicked: false
        };
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }
    handleScroll = () => {
        this.setState({
            lastScrollPos: document.body.getBoundingClientRect().top,
            scrollPos: document.getElementById("intro").getBoundingClientRect().top,
            show: this.state.scrollPos > 25, //|| document.body.getBoundingClientRect().top > this.state.lastScrollPos
        });
        if(this.state.scrollPos < 25 && this.state.clicked){
            this.setState({
                clicked: false
            });
        }
    }

    ClickHandler = () => {
        this.setState({clicked: !this.state.clicked});
    }
    
    optionClicked = () => {
        this.setState({show: false, clicked: false});
        // let loading_img = document.getElementById('scrolly');
        // window.setTimeout(loading_img.style.display = 'block', 3000);
    }

    LoZLink = () => {
        window.open("https://www.zelda.com/");
            //ADD BUTTON SOUNDS FOR ALL BUTTONS
    }

    Homepage = () => {
        window.location.href="#";
    }
    

    render(){
        console.log(this.state);
        return(
            <nav className={this.state.show ? "NavItems" : "NavItems-hide"}>
                <div id="scrolly" className='scroll-page'></div>
                <div className="Title">
                    <div className="TitleGif" onClick={this.LoZLink}></div>
                    <h1 className="TitleText" onClick={this.Homepage}>Paul Kuruvila</h1>
                </div>
                <div className="DropdownMenu" onClick={this.ClickHandler}>
                    <i color='limegreen' className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'NavMenu active' : 'NavMenu'}>
                    {NavItems.map((item,index) => {
                        return(
                            <li key={index}>
                                <a className={item.class} href={item.link} onClick={this.optionClicked}>
                                    {item.label} 
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navbar