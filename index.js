
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
 {
    let resultArr = [];
    for (var b = 0; b < arr.length; b++) 
    {
        // Object
        if (typeof arr[b] === 'object') 
        {
            let result = searchObject(arr[b], match);
            if(result !== undefined)
            { 
                resultArr.push(result);
            }
        } 
    } 
    return resultArr;
}








// TEST========ARR====================================
let testArr = 
[
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
        role:{roleName:'user', roleQuant:[{qName:'HJ', quantity: 34, cNa:{bName:'SX1', bArr:[{jk: 9}]}}]} 
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

let resultArr = searchArray(testArr, "do".toLocaleLowerCase());
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
