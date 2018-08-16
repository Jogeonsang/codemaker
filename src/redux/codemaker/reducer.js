import {
    SUBMIT_DATA,
} from './action';

// 초기 상태

const initialState = {
    name : "",
    event : "",
    type : "",
    isOnOff : "",
    daliyMaximumUsing : "",
}

const codemaker = (state = initialState, action) => {
    // 래퍼런스 생성

    switch (action.type) {
        case SUBMIT_DATA:
            return {
                ...state
            }
    }
}

export default codemaker