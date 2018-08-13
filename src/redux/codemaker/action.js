export const DATA_POST = 'DATA_POST';
export const SUBMIT_DATA = 'SUBMIT_DATA';
// 액션 생성 함수

export const dataPost = () => ({
    type : DATA_POST
})

export const SUBMIT_DATA = (data) => ({
    type : SUBMIT_DATA,
    data
})