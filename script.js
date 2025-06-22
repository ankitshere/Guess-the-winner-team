var arr = [
    {
        team: "CSK",
        captain: "M.S dhoni",
        primary: "yellow",
        secondary: "green",
        bgImage:"csk.jpg"
    },
    {
        team: "RCB",
        captain: "Virat kohli",
        primary: "red",
        secondary: "darkgold",
        bgImage:"rcb.jpg"
    },
    {
        team: "MI",
        captain: "Rohit sharma",
        primary: "blue",
        secondary: "darkgold",
        bgImage:"mi.jpg"
    },
    {
        team: "DC",
        captain: "Axar patel",
        primary: "blue",
        secondary: "lightred",
        bgImage:"dc.avif"
    }]
var button = document.querySelector('button')
var body = document.querySelector('body')
var h1 = document.querySelector('h1')
var h2 = document.querySelector('h2')
var button = document.querySelector('button')
button.addEventListener('click', function () {
    let num = Math.floor(Math.random() * arr.length)
    let winner = arr[num]
    h1.innerHTML = winner.team
    h2.innerHTML = winner.captain
    body.style.backgroundImage=`url(${winner.bgImage})`;
    // h1.style.backgroundColor = winner.primary
    // h1.style.Color = winner.secondary
})