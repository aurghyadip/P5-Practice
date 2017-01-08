
var axiom = "F−G−G";
var sentence = axiom;

var rules = [];
rules[0] = {
  a: "F",
  b: "F−G+F+G−F"
}

rules[1] = {
  a: "G",
  b: "GG"
}

function generate() {
  var nextSentence = "";
  for (var i = 0; i < sentence.length; i++) {
    var current = sentence.charAt(i);
    var found = false;
    for (var j = 0; j < rules.length; j++) {
      if (current == rules[j].a){
        found = true;
        nextSentence += rules[j].b;
        break;
      }
    }
    if(!found) {
      nextSentence += current;
    }
  }
  sentence = nextSentence;
  createP(sentence);

}

function setup() {
  noCanvas();
  createP(axiom);
  var button = createButton("generate");
  button.mousePressed(generate);
}

function draw()
