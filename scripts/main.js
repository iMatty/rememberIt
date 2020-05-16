const cardsImgEASY = ["card0", "card0", "card1", "card1", "card2", "card2", "card3", "card3", "card4", "card4", "card5", "card5"];

const cardsImgMEDIUM = ["card0", "card0", "card1", "card1", "card2", "card2", "card3", "card3", "card4", "card4", "card5", "card5", "card6", "card6", "card7", "card7"];

const cardsImgHARD = ["card0", "card0", "card1", "card1", "card2", "card2", "card3", "card3", "card4", "card4", "card5", "card5", "card6", "card6", "card7", "card7", "card8", "card8", "card9", "card9"];

document.querySelector(".tableEASY").style.display = 'none'; // hide board
document.querySelector(".tableMEDIUM").style.display = 'none'; // hide board
document.querySelector(".tableHARD").style.display = 'none'; // hide board
document.querySelector(".turns").style.display = 'none'; // hide score
document.querySelector(".startAgain").style.display = 'none'; // hide try-again btn

var cardSound = new Audio("audio/cardSound.mp3");
var matchSound = new Audio("audio/matchSound.mp3");
var winSound = new Audio("audio/winSound.mp3");
let gameDifficulty = "";


// GAME
function startGame(gameDifficulty) {
    document.querySelector(".turns").style.display = ''; // show score
    document.querySelector(".level").innerHTML = 'Level: ' + gameDifficulty;
    let cards = document.querySelectorAll(".card" + gameDifficulty);
    cards = [...cards];

    let turn = 0;
    const starTimer = new Date().getTime();

    let revealedCard = "";
    const revealedCards = [];

    const pairs = cards.length / 2; //6
    let result = 0;

    const revealCard = function() {
        cardSound.play();
        revealedCard = this;
        revealedCard.classList.remove("hidden");

        if (revealedCard == revealedCards[0]) {
            return; //double click bug fix
        }
        revealedCard.classList.remove("hidden");
        //first click
        if (revealedCards.length === 0) {
            revealedCards[0] = revealedCard;
            return;
        }

        //second click
        else {
            cards.forEach(function(card) {
                card.removeEventListener("click", revealCard)
            })
            revealedCards[1] = revealedCard;
            setTimeout(function() {
                if (revealedCards[0].className === revealedCards[1].className) {
                    console.log("win");
                    matchSound.play();
                    revealedCards.forEach(function(card) {
                        card.classList.add("off")
                    })
                    result++;

                    cards = cards.filter(function(card) {
                        return !card.classList.contains("off") // kick two revalaed cards from deck
                    })

                    if (result == pairs) {
                        const stopTimer = new Date().getTime();
                        const gameTime = (stopTimer - starTimer) / 1000;
                        winSound.play();
                        //alert("You won! Your time: " + gameTime + " sec, Turns: " + turn);
                        //location.reload(); // old win-screen version
						
						document.querySelector(".turns").style.display = 'none'; // hide score
						document.querySelector(".table" + gameDifficulty).style.display = 'none'; // hide table
						document.querySelector(".startAgain").style.display = ''; // show try-again btn
						document.getElementsByClassName("win-box")[0].innerHTML = "You won! <br>Your time: " + gameTime + " sec <br>Turns: " + turn;
                    }
                } else {
                    console.log("lose");
                    revealedCards.forEach(function(card) {
                        card.classList.add("hidden");
                    })
                }
                revealedCard = "";
                revealedCards.length = 0;
                cards.forEach(function(card) {
                    card.addEventListener("click", revealCard);
                })
            }, 500)
        }
        turn++;
        document.getElementsByClassName("turns")[0].innerHTML = "Turn: " + turn;
    };

    let init = "init" + gameDifficulty;

    init = function() {
        document.querySelector(".table" + gameDifficulty).style.display = '';
        document.querySelector(".buttons").style.display = 'none'; // hide buttons

        cards.forEach(function(card) {

            if (gameDifficulty == "EASY") {
                const position = Math.floor(Math.random() * (cardsImgEASY).length); //0,1,2,3,4,5,6,7,8,9,10,11
                card.classList.add(cardsImgEASY[position]);
                cardsImgEASY.splice(position, 1); // delete element from cardsImg tab
            }
            if (gameDifficulty == "MEDIUM") {
                const position = Math.floor(Math.random() * (cardsImgMEDIUM).length);
                card.classList.add(cardsImgMEDIUM[position]);
                cardsImgMEDIUM.splice(position, 1); // delete element from cardsImg tab
            }
            if (gameDifficulty == "HARD") {
                const position = Math.floor(Math.random() * (cardsImgHARD).length);
                card.classList.add(cardsImgHARD[position]);
                cardsImgHARD.splice(position, 1); // delete element from cardsImg tab
            }
        })

        cards.forEach(function(card) {
            card.classList.add("hidden");
            card.addEventListener("click", revealCard);
        })
    };
    init();
};