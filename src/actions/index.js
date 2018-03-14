export const SET_GUESS = 'SET_GUESS';
export const setGuess = (guess, feedback) => ({
    type: SET_GUESS,
    guess,
    feedback
});

export const SET_AURAL_STATUS = 'SET_AURAL_STATUS';
export const setAuralStatus = () => ({
    type: SET_AURAL_STATUS
});

export const RESTART_GAME = 'RESTART_GAME';
export const restartGame = () => ({
    type: RESTART_GAME
});
