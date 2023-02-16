// The first argument is a plain object
// The second one is an array containing a list of a path to some key in the object
import { fromJS } from 'immutable';

export default function accessImmutableObject(object, array) {
  const obj = fromJS(object);
  const name = obj.getIn(array);
  return name;
}
