// getListObject accepts an array as parameter and
// converts it into an immutable List using the Immutable.js library
// addElementToList accepts two arguments: first one is a List and second one is a string
// append the string to the list and return the list
import { List } from 'immutable';

export function getListObject(array) {
  const newList = List(array);
  return newList;
}
export function addElementToList(list, element) {
  const li = list.push(element);
  return li;
}
