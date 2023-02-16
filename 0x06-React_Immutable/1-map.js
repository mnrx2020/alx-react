/*
function getImmutableObject that accepts object as a parameter and
converts it into an immutable Map using Map of the Immutable.js library
*/
import { Map } from 'immutable';

export default function getImmutableObject(object) {
  const newObj = Map(object);
  return newObj;
}
