


function getToday() {
    var todayDate = new Date().toISOString().slice(0, 10);
    return todayDate
}


export {getToday}