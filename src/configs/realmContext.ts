import {Habit} from '../models/Habits';
import {Report} from '../models/Report';
import {ReportItem} from '../models/ReportItem';
import {createRealmContext} from '@realm/react';

export const {useRealm, useQuery, RealmProvider} = createRealmContext({
  schema: [Report, Habit, ReportItem],
});
