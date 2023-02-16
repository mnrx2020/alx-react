// Create & export a constant named map.
// It should create an Immutable Map with the following object:
import { Map } from 'immutable';

export const map = Map({
  1: 'Liam',
  2: 'Noah',
  3: 'Elijah',
  4: 'Oliver',
  5: 'Jacob',
  6: 'Lucas',
});
// Export a second constant named map2. It should use the first map and modify the following values:

// Modify the value for the index 2, to Benjamin
// Modify the value for the index 4, to Oliver
export const map2 = map.withMutations((map) => {
  map.set(2, 'Benjamin').set(4, 'Oliver');
});
