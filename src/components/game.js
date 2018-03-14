import React from 'react';
import Header from './header';
import {connect} from 'react-redux';
import GuessSection from './guess-section';
import StatusSection from './status-section';
import InfoSection from './info-section';
import {setGuess, setAuralStatus} from '../actions/index';

class Game extends React.Component {    

makeGuess = (guess) => {
  let feedback;
    guess = parseInt(guess, 10);
    if (isNaN(guess)) {
     feedback = 'Please enter a valid number';
      return this.props.dispatch(setGuess(guess, feedback));
    }
    const difference = Math.abs(guess - this.props.correctAnswer);

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
    this.props.dispatch(setAuralStatus());
  return this.props.dispatch(setGuess(guess, feedback));
}
    render() {
    return (
      <div>
        <Header />
        <main role="main">
          <GuessSection makeGuess={(guess) => this.makeGuess(guess)} />
          <StatusSection />
          <InfoSection />
        </main>
      </div>
    );
    }
  }
const mapStateToProps = state => ({
  correctAnswer: state.correctAnswer
});
export default connect(mapStateToProps)(Game);