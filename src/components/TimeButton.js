import React, {Component} from 'react';
import './TimeButton.css';

class TimeButton extends Component {
    constructor() {
        super();
        this.state = {
            time: new Date().toLocaleTimeString(),
        };
    }

    componentDidMount() {
        window.setInterval(this.displayTime,1000);
    }

    displayTime = () => {
        this.setState({
            time: new Date().toLocaleTimeString(),
        });
    }

    render(){
        return (
            <div>
                <div className="timebox">
                    <h5>{new Date().toLocaleTimeString()}</h5>
                </div>
            </div>
        )
    }
}


export default TimeButton

