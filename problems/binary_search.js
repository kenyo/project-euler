const a = [1,2,3,4,5,6,7,8,9]
const searchKey = 4

function binarySearch(searchKey, list) {
  const pivotIndex = Math.floor(list.length / 2)
  const pivot = list[pivotIndex]
  const lowerArray = list.slice(0, pivotIndex)
  const upperArray = list.slice(pivotIndex, list.length)

  if (list.length == 1) {
    return list[0]
  } else if (searchKey < pivot) {
    return binarySearch(searchKey, lowerArray)
  } else {
    return binarySearch(searchKey, upperArray)
  }
}

console.log(binarySearch(searchKey, a))
