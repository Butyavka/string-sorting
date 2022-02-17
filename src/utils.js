export const stringSort = (a, b) => {
    if (a > b) {
        return 1;
    }
    if (a < b) {
        return -1;
    }
    return 0;
}

export const selectHandler = (sortType, arr) => {
    let sortedArr = [];
    switch (sortType) {
        case 'string': {
            sortedArr = arr.sort((a, b) => stringSort(a.value.toLowerCase(), b.value.toLowerCase()))
            return sortedArr;
        }
        case 'number': {
            sortedArr = arr.sort((a, b) => {return a.value - b.value})
            return sortedArr;
        }
        case 'count': {
            sortedArr = arr.sort((a, b) => {return a.count - b.count})
            return sortedArr;
        }
        case 'date': {
            sortedArr = arr.sort((a, b) => {return a.date - b.date})
            return sortedArr;
        }
        default: break;
    }
}