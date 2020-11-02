const work1 = () =>
    new Promise(resolve => {
        setTimeout(() => resolve('작업 1 완료!'), 100);
});

const work2 = () =>
    new Promise(resolve => {
        setTimeout(() => resolve('작업 12 완료!'), 200);
});

function urgentWork(){
    console.log('긴급 상황');
}

const nextWorkDone = (msg1) => {
    console.log('done after 100ms:' + msg1)
    return work2();
}

work1()
    .then(nextWorkDone)
    .then((msg2) => {
        console.log('done after 200ms:' + msg2);
    })

urgentWork();