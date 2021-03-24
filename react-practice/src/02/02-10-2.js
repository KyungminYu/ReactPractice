const work1 = () => 
    new Promise(resolve => {
        setTimeout(() => resolve('작업1 완료!'), 100);
    });

const work2 = () => 
    new Promise(resolve => {
        setTimeout(() => resolve('작업2 완료!'), 200);
    });

const work3 = () => 
    new Promise(resolve => {
        setTimeout(() => resolve('작업3 완료!'), 300);
    });

const urgentWork = () => console.log("긴급 작업 완료");

export {work1, work2, work3, urgentWork};