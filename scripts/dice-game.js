/*
	author: ryan carswell	
	date:   2-jul-2021
	notes:	ryan carswell comp 2132 final project dice game and player objects
*/

/**
 * This models a dice player
 */
 class Player
 {
    NO_SCORE = 0;
 
    constructor()
    {
        this.totalScore = this.NO_SCORE;
    }
 
    /**
         * adds the given round score to the user's total score
         * @param {*} roundScore a given round score
         */
    addToScore(roundScore)
    {
        this.totalScore += roundScore;
    }

    /**
     * @returns the player's total score
     */
    getScore()
    {
        return this.totalScore;
    }
     
    /**
     * sets the player's score
     * @param {*} score a given score
     */
    setScore(score)
    {
        this.totalScore = score;
    }
 }


class DiceGame
{

    /**
     * plays a game of dice between a human and a computer
     * @param {*} player1 a player for the dice game
     * @param {*} player2 a second player for the dice game (typically computer)
     * @returns the player and second player's dice rolls
     */
    playRound(player1, player2)
    {
        let player1DiceRolled = this.rollDice();
        let player1RoundScore = this.determineRoundScore(player1DiceRolled);
        player1.addToScore(player1RoundScore);
        
        let player2DiceRolled = this.rollDice();
        let player2RoundScore = this.determineRoundScore(player2DiceRolled);
        player2.addToScore(player2RoundScore);
        
        let allDiceRolls = [player1DiceRolled, player2DiceRolled];

        return allDiceRolls;
    }

    /**
     * @returns an array of the two dice roll values
     */
    rollDice()
    {
        const MIN_DICE_ROLL = 1;
        const MAX_DICE_ROLL = 6;
        
        // adapted from https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
        let rollOne = Math.floor(Math.random() * (MAX_DICE_ROLL - MIN_DICE_ROLL + 1) + MIN_DICE_ROLL);
        let rollTwo = Math.floor(Math.random() * (MAX_DICE_ROLL - MIN_DICE_ROLL + 1) + MIN_DICE_ROLL);

        let diceRolled = [rollOne, rollTwo];

        return diceRolled;
    }

    /**
     * @param {*} diceRolled an array of two dice roll values
     * @returns the player's round score, based on their dice rolls
     */
    determineRoundScore(diceRolled)
    {
        const NO_SCORE_DICE_FACE   = 1;
        const NO_SCORE             = 0;
        const ROLL_ONE             = diceRolled[0];
        const ROLL_TWO             = diceRolled[1];
        const SAME_ROLL_MULTIPLIER = 2;
        
        if(diceRolled.includes(NO_SCORE_DICE_FACE))
        {
            return NO_SCORE;
        }
        else if(ROLL_ONE == ROLL_TWO)
        {
            let roundScore = SAME_ROLL_MULTIPLIER * (ROLL_ONE + ROLL_TWO);
            return roundScore;
        }
        else
        {
            return ROLL_ONE + ROLL_TWO;
        }
    }

    /**
     * compares the players' scores and determines the winner, returning a string
     * @param {*} player1FinalScore player1's final score
     * @param {*} player2FinalScore player2's final score
     */
    determineWinner(player1FinalScore, player2FinalScore)
    {
        if(player1FinalScore > player2FinalScore)
        {
            return "<p>You win!</p>";
        }
        else if(player1FinalScore == player2FinalScore)
        {
            return "<p>It was a tie!</p>";
        }
        else
        {
            return "<p>The computer won!</p>";
        }
    }
}