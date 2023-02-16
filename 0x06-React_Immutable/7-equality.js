/*
Create a function named areMapsEqual
It accepts two arguments map1 and map2. Both are Immutable.js Maps
It should return true if the Maps are equal
*/
import { is } from 'immutable';

export default function areMapsEqual(map1, map2) {
  return is(map1, map2);
}
