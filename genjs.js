var eqns=['Finklestein Reaction',' Swarts Reaction','Hunsdiecker Reaction','Birnbaum Simonini Reaction','Williamson\'s Synthesis','Wurtz Reaction','Frankland\'s Reaction','Sandmeyer Reaction','Gattermann\'s Reaction','Balz-Schiemann Reaction','Fittig Reaction','Wurtz Fittig Reaction','Friedel Crafts Alkylation','Friedel Crafts Acylation','NBS','Reimer Tiemann Reaction','Kolbe\'s Reaction','Rosenmund\'s Reaction',
'Gattermann Koch Synthesis','Friedel Crafts Formylation','Wolff Kishner Reduction','Haloform Reaction','Cannizaro\'s Reaction','Hell Volhard Zelinsky Reaction','Gabriel Phtalimide Synthesis','Hoffman Bromamide Degradation','Carbylamine Reaction','Diazotisation','Bromine Water Test for Glucose'];
function NewEqn()
{
var randomeqn= Math.floor(Math.random()* (eqns.length));
document.getElementById('question').innerHTML=eqns[randomeqn];
}