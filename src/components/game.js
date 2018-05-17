import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount from './guess-count';
import GuessList from './guess-list';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            guesses: [],
            feedback: 'Make your guess!!',
            //answer: Math.round(Math.random() * 100) + 1
            answer: 99,
            showModal: false
        }
    }

    makeGuess(guess) {
        guess = parseInt(guess, 10);
        if (isNaN(guess)) {
            this.setState({
                feedback: 'GUESS A NUMBER!'
            });

            return;
        }

        const difference = Math.abs(guess - this.state.answer);

        let feedback;
        if (difference >= 50) {
            feedback = 'You\'re Ice Cold...';
        } else if (difference >= 30) {
            feedback = 'You\'re Cold...';
        } else if (difference >= 10) {
            feedback = 'You\'re Warm.';
        } else if (difference >= 1) {
            feedback = 'You\'re Hot!';
        } else {
            feedback = 'You got it!';
        }

        this.setState({
            guesses: [...this.state.guesses, guess],
            feedback,
        });
    }

    render() {
        const { feedback, guesses, showModal } = this.state;
        const count = guesses.length;

        return (
            <div>
                <Header showModal={showModal} />
                <GuessSection feedback={feedback} onMakeGuess={guess => this.makeGuess(guess)} />
                <GuessCount count={count} />
                <GuessList guesses={guesses} />
            </div>
        );
    }
}
