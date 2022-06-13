import R from "./ramda.js";

/**
 * minesweeper.js is a module to model and run "Minesweeper" with a little thematic twist
 * https://en.wikipedia.org/wiki/Minesweeper_(video_game)
 * @namespace Galactic_Minesweeper
 * @author R. Beam Suwiwatchai
 * @version 2022
 */
const Galactic_Minesweeper = object.create(null);

/**
 * The minesweeper board comes in many sizes with the most common being 8x8, 9x9 aand 10x10.
 * It is the player's goal to uncover the mines by using the clue given from the uncovered squares.
 * @memberof Galactic_Minesweeper
 * @typedef {Galactic_Minesweeper.uncovered_or_not[][]} Board
 */

/**
 * Create a new board
 * With option to specifiy width and height to adjust difficulty.
 * If none were taken, it will return a basic 8x8 board
 * @memberof Galactic_Minesweeper
 * @function Generate_Board
 * @param {number} [width = 8] Takes the width of the board from the user
 * @param {number} [height = 8] Takes the height of the board from the user
 * @returns {Array} Returns an 2D array of the board
 */

Galactic_Minesweeper.empty_board = function (width = 8, height = 8) {
    return R.repeat(R.repeat(0,height),width);
};

/**
 * To generate a set number of mines into random squares on the board,
 * we need a random number generator to keep other functions pure.
 * @memberof Galactic_Minesweeper
 * @function Generate_Random_Number
 * @param {number} [width = 8] Creates randomnumber less than or equal to width
 */

Galactic_Minesweeper.generate_number_width = function (width = 8) {
        return(Math.floor(Math.random*width));
};

/**
 * To generate a set number of mines into random squares on the board,
 * we need a random number generator to keep other functions pure.
 * @memberof Galactic_Minesweeper
 * @function Generate_Random_Number
 * @param {number} [height= 8] Creates randomnumber less than or equal to height
 */

 Galactic_Minesweeper.generate_number_height = function (height = 8) {
    return(Math.floor(Math.random*height));
};


/**
 * Generate coordinates of cells with mines
 * @memberof Galactic_Minesweeper
 * @function minelaying
 * @param {number} [random_number1]
 * @param {number} [random_number2]
 */

 const mine_array = new Map();

Galactic_Minesweeper.minelaying = function (random_number1, random_number2) {
    mine_array.set(random_number1,random_number2);
};

/**
 * Checks if the box clicked is the one with the mine
 * @memberof Galactic_Minesweeper
 * @function box_mine_or_not
 * @param {number} [coordinate_x]
 * @param {number} [coordinate_y]
 */

// Galactic_Minesweeper.box_mine_or_not = function (coordinate_x,coordinate_y)