/*## Aufgabenstellung - Teil 1
Schreibe ein Array mit den Namen: John, Chuck, Henry, Oscar, Ryan, Bob, Pete.*/
const array = ["John", "Chuck", "Henry", "Oscar", "Ryan", "Bob", "Pete"]

// ## Aufgabenstellung - Teil 2
// Schreibe eine Funktion mit dem Parameter firstName.
function firstName(item) {
    console.log(item);
}

//In der Funktion soll der Parameter in der Konsole ausgeschrieben werden.

// ## Aufgabenstellung - Teil 3
// Wende map() auf das Array an. 
array.map(firstName);

// map() soll die Funktion als Argument übergeben werden.