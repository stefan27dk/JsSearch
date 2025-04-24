// It looks like this is not nececery because the .includes(match) does the search. obj[p].toLocaleLowerCase().includes(match).
// async function deepSearch(data, searchTxt) 
// { 
//     let searchTxtFirstChar = searchTxt[0];
//     var searchResult = "";

//     if (searchTxtFirstChar !== undefined) // If not empty string
//     {
//         for (let t = 0; t < data.length; t++) // Loop data to check each char and compare with the Search text first char
//         {
//             if (searchTxtFirstChar == data[t]) // Compare data with search txt first char. If there is match 
//             {
//                 for (let y = 0; y < searchTxt.length; y++) // Try to match the search word with the next chars in the data
//                 {

//                     if (searchTxt[y] == data[t + y]) // Try to match the search word from the data provided
//                     {
//                         searchResult += data[t + y]; // Add the matched char to searchResult string [n],[a],[m],[e]
//                     }
//                     else // if there was no word match // Reset the result to be ready for the next try // At this point here there have been no char match, no full match
//                     {
//                         searchResult = ""; // There is no full match, but partly only some chars, thats why reset the searchResult to continue to the new try, no need to check further there was no match, but partial match let say nam was matched but we need name to be matched as whole word 
//                         break;
//                     }
//                     if (searchResult.length == searchTxt.length) // Check if there is a whole match
//                     {
//                         return true; // Stop everything and return true - there was match
//                     }
//                 }
//             }

//         }
//         return false; // No match, At this point the whole data was looped and there is no match
//     }
//     else 
//     {
//         return false;
//     }
// }



// Search Object
const searchObject = (obj, match) => 
{
    for (const p in obj) 
    {
        let type = typeof obj[p];

        // String
        if (type === 'string')
         {
            if (obj[p].toLocaleLowerCase().includes(match) === true)
            {
                return obj;
            }
        }
        // Int, Float, Bool, BigInt
        else if (type === 'number' || type === 'boolean' || type === 'bigint') 
        {
            if (obj[p].toString().toLocaleLowerCase().includes(match) === true) 
            {
                return obj;
            }
        }
        // Object
        else if (type === 'object') 
        {
            let subResult = searchObject(obj[p], match); // Returns sub object
            if (subResult !== undefined)
            {
                return obj;
            }
        } 
    }
}

// // TEST=OBJ===========================================
// let testObj = 
// { 
//     name: "Dodo", 
//     isLogged: true, 
//     id: "2", 
//     domains: [
//     { domainId: 123, domainName: "www.domainOfMine.com", customerId: '765' },
//     { domainId: 3456, domainName: "www.domain2.com", customerId: '34' }], 
//     role:{roleName:'user', roleQuant:[{qName:'Q1', quantity: 5, cNa:{bName:'B1', bArr:[{jk: 9}]}}]} 
// }

// let resultOBJ = searchObject(testObj, "q1".toLocaleLowerCase());
// console.log(resultOBJ);
// // TEST END ===OBJ===================================





// Search Array
const searchArray = (arr, match) =>
 {console.time();
    let resultArr = [];
    for (let b = arr.length; b--;) 
    {
        let type = typeof arr[b];
        // Object
        if (type === 'object') 
        {
            let result = searchObject(arr[b], match);
            if(result !== undefined)
            { 
                resultArr.push(result);
            }
        } 
        else if (type === 'string')
        { 
            if (arr[b].toLocaleLowerCase().includes(match) === true)
            {
                resultArr.push({stringValue:arr[b]});
            }
        }
         // Int, Float, Bool, BigInt
         else if (type === 'number' || type === 'boolean' || type === 'bigint') 
         {
             if (arr[b].toString().toLocaleLowerCase().includes(match) === true) 
             {
                resultArr.push({[type+'Value']:arr[b]});
             }
         }
    } console.timeEnd();
    return resultArr;
}








// TEST========ARR====================================
let testArr = 
[
    "777",
    6548452,
    ["wer","yter",{er:"hhh"}],
    { 
    name: "Dodo", 
    isLogged: true, 
    id: "2", 
    domains: [
    { domainId: 123, domainName: "www.domainOfMine.com", customerId: '765' },
    { domainId: 687, domainName: "www.domain2.com", customerId: '34' }], 
    role:{roleName:'user', roleQuant:[{qName:'Q1', quantity: 5, cNa:{bName:'B1', bArr:[{jk: 45}]}}]} 
    },
    { 
        name: "Boby", 
        isLogged: true, 
        id: "3", 
        domains: [
        { domainId: 123, domainName: "www.dom1.com", customerId: '87' },
        { domainId: 358456, domainName: "www.dom3.com", customerId: '45' }], 
        role:{roleName:'user', roleQuant:[{qName:'HJ', quantity: 34, cNa:{bName:'SXwer1', bArr:[{jk: 9}]}}]} 
    },
    { 
        name: "Didi", 
        isLogged: true, 
        id: "4", 
        domains: [
        { domainId: 123, domainName: "www.ecomi3.com", customerId: '2321' },
        { domainId: 3456, domainName: "www.toti.com", customerId: '87' }], 
        role:{roleName:'user', roleQuant:[{qName:'RT', quantity: 5, cNa:{bName:'L1', bArr:[{jk: 12}]}}]} 
    }
];


let resultArr = searchArray(testArr, "87".toLocaleLowerCase());


console.log(resultArr);
// TEST END ======ARR================================






























// Search string
const searchString = (string, match) => {
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









// Fetures to ADD
//# Ex: "Hej my name" - split the string in words and search each word and get theresult or each word
