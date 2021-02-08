// Create a list of fruits with their properties (name, color, pricePerKg)
// and convert it into a format so that for a given fruit name
// retrieval of its color and pricePerKg value is fast


// Write your code here
const arr=[
{name:"apple",color:"red",pricePerKg:124},
{name:"orange",color:"blue",pricePerKg:20.4},
{name:"mango",color:"green",pricePerKg:30},
{name:"banana",color:"yellow",pricePerKg:300},

];
const convert = (arr1, keyField) => 
	
    arr1.reduce((obj, item) => {
        obj[item[keyField]] = item;
        return obj;
      }, {});

 const fruitObj = convert(arr1, 'name');
  console.log(arr); 
  console.log(arr.mango); 