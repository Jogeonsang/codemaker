import { all } from 'redux-saga/effects';

import { watchData } from './apod/sagas';

export default function* apodRoot() {
    yield all([watchData()]);
}