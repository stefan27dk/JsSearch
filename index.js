
// Search Object
const searchObject = (obj, match) =>
{ 
    let lMatch = match.toLowerCase(); for (const p in obj)
    {
        let type = typeof obj[p];
        // String
        if (type === 'string')  
        {
            if(obj[p].toLocaleLowerCase().includes(match) === true)
            {
                return [obj];
            }
        } 
        // Int, Float, Bool, BigInt
        else if (type === 'number' || type === 'boolean' || type === 'bigint')  
        {
            if(obj[p].toString().toLocaleLowerCase().includes(match) === true)
            {
                return [obj];
            }
        }
        // Array
        else if (type === 'array')
        {
           return searchArray(obj[p], match);
        }
    }
}


let testObj = {name:"Dodo", isLogged: true, id:"2"}

console.log(searchObject(testObj, "dodo".toLocaleLowerCase()));

// Search Array
const searchArray = (array, match) =>
{

}

// Search string
const searchString = (string, match) =>
{
  // String
//   if (typeof arr[b] === 'string' && arr[b].includes(match) === true) // Add int
//   {
//       resultArr.push(arr[b]);
//   }
}


//   const getSearchResult = (arr, match) =>
//   {
//       let resultArr = [];
//       for (var b = 0; b < arr.length; b++)
//       {  
//           // Object
//            if (typeof arr[b] === 'object')
//           {
//               for (const p in arr[b])
//               {
//                   // String
//                   if (typeof arr[b] === 'string' && arr[b].includes(match) === true) // Add int
//                   {
//                       resultArr.push(arr[b]);
//                   }
//                   else if (typeof arr[b][p] === '')
//                   {
                
//                   }
//               }
//           }
//           // Array
//           else if (typeof arr[b] === 'array')
//           {
//               getSearchResult(arr[b], match);  
//           }
//       }

//       //console.log(resultArr);
//       return resultArr;
//   }



//   let objArr = [
//       {name:"Boby", roles:
//       [
//           {roleName:"user", roleId:"1"}
//       ]},
//        {name:"Dodo",roles:
//        [
//            {roleName:"admin", roleId:"0"}
//        ]}];

//        let result = getSearchResult(objArr,'admin');
//        console.log(result);