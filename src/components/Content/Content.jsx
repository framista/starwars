import { always, cond, T, prop } from 'ramda';

import { CardError, CardSkeleton } from '../common';
import PersonCard from '../PersonCard/PersonCard';

const Content = cond([
  [prop('loading'), always(<CardSkeleton />)],
  [prop('error'), always(<CardError />)],
  [T, PersonCard],
]);

export default Content;
