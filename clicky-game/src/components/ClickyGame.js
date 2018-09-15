import React from "react";
import Photos from "./Photos";
import Score from "./Score";
import PhotoArray from './PhotoArray';

class Game extends React.Component {

    constructor(props) {
            super(props);
            this.state = {
                PhotoArray: PhotoArray,
                guessed: [],
                topScore: 0,
                currentScore: 0,
                message: "To start the game click an image"
            };
        };

        handleClick = (id) => {
            if (this.state.guessed.indexOf(id) === -1) {
                this.setState({
                    guessed: this.state.guessed.concat(id),
                    currentScore: this.state.currentScore + 1,
                    message: "Correct!!"
                })
                this.shuffle();
          
            } else {
                this.setState({
                    guessed: [],
                    currentScore: 0,
                    message: "No Dice!! Try Again"
                })
            }
        };

        shuffle = () => {
            for (let i = 0; i < this.state.PhotoArray.length; i++) {
                const j = Math.floor(Math.random() * (i + 1));
                [this.state.PhotoArray[i], this.state.PhotoArray[j]] = [this.state.PhotoArray[j], this.state.PhotoArray[i]];
            };
            this.setState({
                PhotoArray:PhotoArray
            })
        };

 

        render() {
            return (
                <div className = "game">
                    <Score currentScore = {this.state.currentScore} message={this.state.message}/>
                    <Photos check={this.handleClick} photo={this.state.PhotoArray} />
                </div >
                );
        }
}

export default Game;