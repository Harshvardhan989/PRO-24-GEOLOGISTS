const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber;
var stone;
var iron;
var pebble1;
var pebble2;
var pebble3;
var pebble4;
var pebble5;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber = new Rubber(900,580,60);
    stone = new Stone(700,500);
    iron = new Iron(200,580);
    
    pebble1 = new Pebbles(230,580,30);
    pebble2 = new Pebbles(250,580,30);
    pebble3 = new Pebbles(270,580,30);
    pebble4 = new Pebbles(290,580,30);
    pebble5 = new Pebbles(310,580,30);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber.display();
    stone.display();
    iron.display();
    pebble1.display();
    pebble2.display();
    pebble3.display();
    pebble4.display();
    pebble5.display();
}