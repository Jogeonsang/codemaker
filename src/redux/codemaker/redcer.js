import {
    DATA_POST,
    SUBMIT_DATA
} from './action';

//초기 상태

const initalState = {
    name : '',
    event : '',
    type : '',
    isOnOff : '',
    dailyMaximumUsing : ''
}

const codemaker = (state = initalState, action) => {

    switch (action.type) {
        case SUBMIT_DATA:
            return {
                ...state,
                data : action.data
            }
    }
}

export default codemaker