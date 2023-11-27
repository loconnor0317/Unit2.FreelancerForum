/* State */
// DATA VARIABLES BELOW ARE DEFINED FOR THE PROGRAM TO USE.
    
const name = ["Pistachio", "Fern", "Emerald", "Basil", "Sage", "Pickle", "Chartreuse", "Mint", "Lime"];
const prices = ["25", "51", "43", "81", "43", "76", "47", "72", "64"];
const occupation = ["gardener", "programmer", "teacher", "driver", "artist"];
const maxNames = 9;
const names = [
  {
    name: "Pistactio", 
    occupation: "gardener",
    price: 25,
  },
  {
    name: "Fern",
    occupation: "programmer",
    price: 51,
  },
];

//  interval will be q 1500 milliseconds

const addNameIntervalId = setInterval(addName, 1500);

// 1. TO DO: ADD RENDER () HERE TO INITIALIZE STATE 
//-(CREATE INITIAL ARRAY FOR INITIAL FL, PISTACHIO AND FERN)
//-(CREATE RANDOM ARRAY FOR OTHER RANDOM FL,)
// 2. TO DO: ADD F(N) TO RENDER NAMES
// 3. TO DO: ADD F(N) TO AVERAGE PRICES AFTER Q FREELANCER NAME, AFTER THE FIRST TWO FREELANCERS.

function addName() {
  
  const name = names[Math.floor(Math.random() * names.length)];
  
  const occupation = occupations[Math.floor(Math.random() * occupations.length)];

  const price = prices[Math.floor(Math.random() * prices.length)];

  names.push({ name, occupation, price});
}
//TO DO: ADD RENDER()

//TO DO:
//1. ADD F(N) FOR A CLEAR INTERVAL @ MAX NAMES: 9

//**DOUBLE CHECK RUBRIC CRITERION BEFORE FINAL SUBMIT */
