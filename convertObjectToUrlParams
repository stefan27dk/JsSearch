export const convertObjToUrlParams = (obj) =>
{
    var paramString = '';
    for (let key in obj)
    {
        if (obj[key] !== null && obj[key] !== undefined)
        {
            paramString += '&';
            paramString += key + "=" + obj[key];
        }
    }
    return paramString;
}
