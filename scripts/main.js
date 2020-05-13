const cardsImgEasy = ["card0", "card0", "card1", "card1", "card2", "card2", "card3", "card3", "card4", "card4", "card5", "card5"];

const cardsImgMedium = ["card0", "card0", "card1", "card1", "card2", "card2", "card3", "card3", "card4", "card4", "card5", "card5", "card6", "card6", "card7", "card7"];

const cardsImgHard = ["card0", "card0", "card1", "card1", "card2", "card2", "card3", "card3", "card4", "card4", "card5", "card5", "card6", "card6", "card7", "card7", "card8", "card8", "card9", "card9"];

document.querySelector(".tableEasy").style.display = 'none'; // hide board
document.querySelector(".tableMedium").style.display = 'none'; // hide board
document.querySelector(".tableHard").style.display = 'none'; // hide board
document.querySelector(".turns").style.display = 'none'; // hide score

// EASY
document.querySelector(".game-startEasy").addEventListener("click", function() {
	document.querySelector(".turns").style.display = ''; // hide score
	document.querySelector(".level").innerHTML = 'Level: Easy';
    let cards = document.querySelectorAll(".cardEasy");
    cards = [...cards];

    let turn = 0;
    const starTimer = new Date().getTime();

    let revealedCard = "";
    const revealedCards = [];

    const pairs = cards.length / 2; //6
    let result = 0;

    const revealCard = function() {
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
                        alert("You won! Your time: " + gameTime + " sec, Turns: " + turn);
                        location.reload();
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

    const initEasy = function() {
        document.querySelector(".tableEasy").style.display = '';
        document.querySelector(".buttons").style.display = 'none'; // hide buttons

        cards.forEach(function(card) {
            const position = Math.floor(Math.random() * cardsImgEasy.length); //0,1,2,3,4,5,6,7,8,9,10,11
            card.classList.add(cardsImgEasy[position]);
            cardsImgEasy.splice(position, 1); // delete element from cardsImg tab
        })

        cards.forEach(function(card) {
            card.classList.add("hidden");
            card.addEventListener("click", revealCard);
        })
    };
    initEasy();
});

// MEDIUM
document.querySelector(".game-startMedium").addEventListener("click", function() {
	document.querySelector(".turns").style.display = ''; // hide score
	document.querySelector(".level").innerHTML = 'Level: Medium';
    let cards = document.querySelectorAll(".cardMedium");
    cards = [...cards];

    let turn = 0;
    const starTimer = new Date().getTime();

    let revealedCard = "";
    const revealedCards = [];

    const pairs = cards.length / 2; //6
    let result = 0;

    const revealCard = function() {
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
                        alert("You won! Your time: " + gameTime + " sec, Turns: " + turn);
                        location.reload();
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

    const initMedium = function() {
        document.querySelector(".tableMedium").style.display = '';
        document.querySelector(".buttons").style.display = 'none'; // hide buttons

        cards.forEach(function(card) {
            const position = Math.floor(Math.random() * cardsImgMedium.length);
            card.classList.add(cardsImgMedium[position]);
            cardsImgMedium.splice(position, 1); // delete element from cardsImg tab
        })

        cards.forEach(function(card) {
            card.classList.add("hidden");
            card.addEventListener("click", revealCard);
        })
    };
    initMedium();
});

// HARD
document.querySelector(".game-startHard").addEventListener("click", function() {
	document.querySelector(".turns").style.display = ''; // hide score
	document.querySelector(".level").innerHTML = 'Level: Hard';
    let cards = document.querySelectorAll(".cardHard");
    cards = [...cards];

    let turn = 0;
    const starTimer = new Date().getTime();

    let revealedCard = "";
    const revealedCards = [];

    const pairs = cards.length / 2; //6
    let result = 0;

    const revealCard = function() {
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
                        alert("You won! Your time: " + gameTime + " sec, Turns: " + turn);
                        location.reload();
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

    const initHard = function() {
        document.querySelector(".tableHard").style.display = '';
        document.querySelector(".buttons").style.display = 'none'; // hide buttons

        cards.forEach(function(card) {
            const position = Math.floor(Math.random() * cardsImgHard.length); //0,1,2,3,4,5,6,7,8,9,10,11
            card.classList.add(cardsImgHard[position]);
            cardsImgHard.splice(position, 1); // delete element from cardsImg tab
        })

        cards.forEach(function(card) {
            card.classList.add("hidden");
            card.addEventListener("click", revealCard);
        })
    };
    initHard();
});