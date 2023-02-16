/*
Create a function named concatElements
It accepts two arguments page1 and page2. Both are arrays
It should return a List containing the values of the two pages
Create a function named mergeElements
It accepts two arguments page1 and page2. Both are objects
It should return a List containing the values of the two pages
If two values are the same, page2 values should be used.
Requirements:
Use list and map from the Immutable.js library
*/
import { List, Map } from 'immutable';

export function concatElements(page1, page2) {
  const page1list = List(page1);
  const page2list = List(page2);
  const all = page1list.concat(page2list);
  return all;
}
export function mergeElements(page1, page2) {
  const page1map = Map(page1);
  const page2map = Map(page2);

  return page1map.merge(page2map);
}
