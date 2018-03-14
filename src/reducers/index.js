import {SET_GUESS, SET_AURAL_STATUS, RESTART_GAME} from '../actions/index';

const initialState = {
  guesses: [],
  feedback: 'Make your guess!',
  auralStatus: '',
  correctAnswer: Math.round(Math.random() * 100) + 1
};

export const hotColdReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GUESS:
    
    return Object.assign({}, state, {
            guesses:[...state.guesses, action.guess],
            feedback: action.feedback
      });
    
    case SET_AURAL_STATUS:

    let { guesses, feedback } = state;

    // If there's not exactly 1 guess, we want to
    // pluralize the nouns in this aural update.
    const pluralize = guesses.length !== 1;

    let  auralStatus = `Here's the status of the game right now: ${feedback} You've made ${guesses.length} ${pluralize ? 'guesses' : 'guess'}.`;

    if (guesses.length > 0) {
      auralStatus += ` ${pluralize ? 'In order of most- to least-recent, they are' : 'It was'}: ${guesses.reverse().join(', ')}`;
    }
    return Object.assign({}, state, {auralStatus});
    
    case RESTART_GAME:
      return Object.assign({}, state, {...initialState, correctAnswer: Math.round(Math.random() * 100) + 1});

    default:
    return state;
  }
};
