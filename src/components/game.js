import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount from './guess-count';
import GuessList from './guess-list';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            guesses: [10, 15, 25, 50],
            answer: 99,
            feedback: 'Make your guess!!',
        }
    }

    setGuesses(guess) {
    }

    render() {
        return (
            <div>
                <Header />
                <GuessSection feedback={this.state.feedback} />
                <GuessCount count={this.state.guesses.length} />
                <GuessList guesses={this.state.guesses} />
            </div>
        );
    }
}
