import {call, put, takeLatest}  from 'redux-saga/effects'; 


function* getData(action) {
    const { count, page } = action.payload;
    const arrayImg = yield call(async () => {
        const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=${count}&page=${page}`,{headers: { 'x-api-key': 'f13cc16e-17e9-4a80-863b-957175ba8256' }})
        const data = await response.json();
        const arreImgs = data.map(({url, width, height}) => ({src:url, width, height}));
        return arreImgs;
    });
    const page_current ={ images:arrayImg, page , total:count };
    yield put({ type: 'SET_DATA', payload: page_current });
}



export default function* fetchUsersWatcher() {
    yield takeLatest('LOAD_DATA',getData);
}

