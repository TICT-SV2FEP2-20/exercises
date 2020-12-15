import {createAction} from '@reduxjs/toolkit';

export default {
    increment: createAction('counter/increment', (amount) => ({payload: amount ?? 1})),
    decrement: createAction('counter/decrement', (amount) => ({payload: amount ?? 1})),
    reset: createAction('counter/reset')
};