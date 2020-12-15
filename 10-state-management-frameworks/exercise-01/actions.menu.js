import {createAction} from '@reduxjs/toolkit';

export default {
    open: createAction('menu/open'),
    close: createAction('menu/close')
};