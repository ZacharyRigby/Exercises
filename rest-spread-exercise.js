const filterOutOdds = (...nums) => nums.filter(n => n % 2 === 0)

const findMin = (...nums) => Math.min(...nums)

const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 })

const douubleAndReturArgs = (arr, ...args) => [...arr, ...args.map(n => n * 2)]

const removeRandom = items => {
    let idx = Math.floor(Math.random() * itrms.length);
    return [...items.slice(0, idx), ...items.slice(idx + 1)];
}

const extend = (arr1, arr2) => {
    return [...arr1, ...arr2];
}

const addKeyVal = (obj, key, val) => {
    let newObj = { ...obj }
    newObj[key] = val
}

const removeKeyVal = (obj, key) => {
    let newObj = {...obj}
    delete newObj[key]
    return newObj;
}

const combine = (obj1, obj2) => {
return {...obj1, ...obj2};
}

const update = (obj, key, val) => {
let newObj = {...obj}
newObj[key] = val;
return newObj;
}