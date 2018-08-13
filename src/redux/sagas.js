import { all } from 'redux-saga/effects';

import { watchData } from '../redux/apod/sagas';

export default function* apodRoot() {
    yield all([watchData()]);
}