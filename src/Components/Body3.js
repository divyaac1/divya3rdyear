import React, { Component } from "react";
import './Body.css';
import Image from '../Components/flower.jpeg'

import ReactPlayer from 'react-player'
class Body extends Component {
    constructor() {
        super();
        this.state = { count: 0 };
    }

    increment = () => {
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        return (
            <div className='center-div'>
                <div style={{  alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
                    <ReactPlayer url={'https://www.youtube.com/watch?v=t0Q2otsqC4Inpm '} />
                    <p>Tom & Jerry is popular because of the very idea of friendship, the cat's tries of mouse's abuse, and the ways out the characters are able to find in the situations they appear. .</p>
                </div>
                <p>{this.state.count}</p>
                <button onClick={this.increment} className="like-button">like</button>

                <hr/>
               <center> <img src={Image} alt="" /></center>

            </div>
        );
    }
}

export default Body;