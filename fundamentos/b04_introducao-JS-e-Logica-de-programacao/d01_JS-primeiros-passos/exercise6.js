/* Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz. */

const chessPice = "Queen";
const lowerCasePice = chessPice.toLowerCase();

switch (lowerCasePice) {
    case "king":
        console.log("Move one square in any direction.");
        break;
    case "queen":
        console.log("Move diagonally, horizontally, or vertically any number of squares.");
        break;
    case "knight":
        console.log("Move in an L shape.");
        break;
    case "rook":
        console.log("Move horizontally or vertically any number of squares.");
        break;
    case "bishop":
        console.log("Move diagonally any number of squares.");
        break;
    case "pawn":
        console.log("Move vertically forward one square.");
        break;
    default:
        console.log("!Error - It is not a valid Chess Pice.");
}
