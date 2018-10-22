let fruits = ["banana", "orange", "apple", "kiwi"];	
    document.getElementById("displayFruits").innerHTML=fruits;

//addFruits();

function addFruits() {
    let fruitInput = prompt("Please Enter More Fruits").toLowerCase().split(" ");
    let fruitsAdded = fruits.push(...fruitInput);
    fruits.sort();
    let upperCased = fruits.map(function(value) {
        return value[0].toUpperCase() + value.slice(1);
    });

// below; removes original display on click
	document.getElementById("hideH1").style.display="none";
//below ; hides original given fruits 
	document.getElementById("displayFruits").style.display="none";
//below ; shows h1 user sorted 
    document.getElementById("showAdded").innerHTML="Your Fruits Added on :)";
    fruits.sort();
    fruits.join(" and ");
    document.getElementById("showNew").innerHTML=fruits;

	document.getElementById('showAdded').style.display = "block";
    document.getElementById("sortedFruits").innerHTML = upperCased.join(" With ");
}
