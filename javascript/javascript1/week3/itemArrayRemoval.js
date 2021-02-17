/*------------ exo1 --------------*/

const names = [
    "Peter",
    "Ahmad",
    "Yana",
    "kristina",
    "Rasmus",
    "Samuel",
    "katrine",
    "Tala",
  ];
  const nameToRemove = function(a, index){
      let newNames = [... a];
      newNames.splice(index, 1);
      return newNames;
  };

  let newNames = nameToRemove(names,1);
  
  console.log(names); 

  console.log(newNames);
