import React, { Component } from 'react';
import { NavItems } from "./NavItems";
import { Howl } from 'howler';
import buttonSFX from '../../assets/soundfx/button_pressed.mp3';
import musicTheme from '../../assets/soundfx/experiment1.mp3';
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

    bkgMusic = new Howl({
        src: musicTheme,
        volume: 0.1,
        loop: true,
    });

    bkgMusicId = this.bkgMusic.play();

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
        document.addEventListener("visibilitychange", () => {
            if(document.hidden) {
                // console.log('user tabbed out');
                if(this.bkgMusic.playing(this.bkgMusicId)) {
                    // console.log('music was playing and now we are attempting to mute...');
                    this.bkgMusic.volume(0, this.bkgMusicId); // mute does not seem to work (tested on chrome)
                }
            } else {
                if(this.bkgMusic.volume(this.bkgMusicId) == 0) {
                    // console.log('user is locked in and now we are attempting to unmute...');
                    this.bkgMusic.volume(0.1, this.bkgMusicId);
                }
            }
        });
    }
    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }
    handleScroll = () => {
        this.setState({
            scrollPos: document.getElementById("intro").getBoundingClientRect().top
        });
        
        if(this.state.scrollPos < 25) {
            this.setState({
                show: false
            });
            this.props.toggleScrollyDisplay(true);
        } else {
            this.setState({
                show: true
            });
            this.props.toggleScrollyDisplay(false);
        }
    }

    ClickHandler = () => {
        this.setState({clicked: !this.state.clicked});
    }
    
    navOptionClicked = () => {
        this.setState({show: false, clicked: false});
        this.props.toggleScrollyDisplay(false);
        var sound = new Howl({
            src: buttonSFX,
            volume: 0.5
        }).play();
    }

    LoZLink = () => {
        window.open("https://www.zelda.com/");
    }

    Homepage = () => {
        window.location.href="#";
    }
    

    render(){
        return(
            <nav className={this.state.show ? "NavItems" : "NavItems-hide"}>
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
                                <a className={item.class} href={item.link} onClick={this.navOptionClicked}>
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