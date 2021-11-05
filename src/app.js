const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers = [];
    // Create players using for loop
    // Type your code here
    for(i=0;i<players.length;i++){
        let person = {};
        person.name=players[i];
        person.strength=getRandomStrength();
        person.image=`images/super-${i+1}.png`;
        person.type=getRandomStrength() % 2 === 0 ? "villain" : "hero";
        detailedPlayers.push(person);
    }


    return detailedPlayers;
}

// getting random strength
const getRandomStrength = () => {
    var strength = Math.ceil(Math.random()*100);
    return strength;

    // Return a random integer (0,100]
    // Note: You can use Math.random() and Math.ceil()
}

const buildPlayers = (players, type) => {
    let fragment = '';

    for(var i=0;i<players.length;i++)
    {
        fragment+=`  <div class="player">
                    <img src="${players[i].image}" alt="">
                    <div class="name">${players[i].name}</div>
                    <div class="strength">${players[i].strength}</div>
                    </div>`;
    }

    // Loop through players and accumulate HTML template
    // depending of type of player(hero|villain)
    // Type your code here

    return fragment;
}
// Display players in HTML
const viewPlayers = (players) => {

    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');

}

window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}