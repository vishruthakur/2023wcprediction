const players=[
    {name:"Rohit Sharma",achievement:"5 times IPL champion",shot:"pull"},
    {name:"Yashasvi Jaiswal",achievement:"not much till now",shot:"switch hit"},
    {name:"Shubhman Gill",achievement:"Good at Ahemdabad",shot:"pick up"},
    {name:"Virat Kohli",achievement:"Just chasing sachin",shot:"cover drive"},
    {name:"Hardik Pandya",achievement:"Krke aaya",shot:"Brute swing"},
    {name:"Ravindra Jadeja",achievement:"Best all rounder",shot:"brute swing"},
    {name:"Yuzi Chahal",achievement:"leading wicket taker in t20is",shot:"leg spin"},
    {name:"Kuldeep Yadav",achievement:"comeback king",shot:"googly"},
    {name:"Mohamed Siraj",achievement:"arrogant asshole",shot:"lethal new ball"},
    {name:"Mohammed Shami",achievement:"hardworking asset",shot:"inswing"},
    {name:"Jasprit Bumrah",achievement:"Indias best fast bowler",shot:"yorker"},
    
]
const positions=[1,2,3,4,5,6,7,8,9,10,11];
const thoughts = ["In my opinion,", "From my perspective,", "I have a hunch that", "It's quite possible that", "The chances are high that", "I wouldn't bet against the possibility that", "It's conceivable that", "There's a good chance that", "I believe", "Imagine if"];
const results = ["they perform incredibly.", "the show will be spectacular.", "it could lead to some interesting outcomes.", "we might see some new records.", "they surprise everyone.", "it leads to a major shake-up.", "they pull off an upset.", "they redefine the sport.", "it becomes a historic moment.", "it inspires a new generation of athletes."];
const randim=arr=>{
    let f=Math.floor(Math.random()*arr.length);
    return arr[f];
}
const genrand=()=>{
    const player=randim(players)
    const position=randim(positions)
    const thought=randim(thoughts)
    const result=randim(results)
    return `Can you imagine ${player.name} being ${player.achievement}, having shot ${player.shot} playing at position ${position}?.....${thought} ${result}`
}
console.log(genrand())