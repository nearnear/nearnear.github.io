const today = document.querySelector("h2#date-and-clock");
const koDayOfWeek = [
    "일", "월", "화", "수", "목", "금", "토"
]

function getDateAndClock() {
    const date = new Date();
    const year = String(date.getFullYear()).padStart(4, " ");
    const month = String(date.getMonth()).padStart(2, " ");
    const dayOfMonth = String(date.getDate()).padStart(2, " ");
    const dayOfWeek = koDayOfWeek[date.getDay()];
    let timeLine = ""
    let hours = ""
    if (date.getHours() > 12) {
        timeLine = "오후"
        hours = String(date.getHours() - 12).padStart(2, "0");
    } else {
        timeLine = "오전"
        hours = String(date.getHours()).padStart(2, "0");
    }
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    const currentDate = `${year}년 ${month}월 ${dayOfMonth}일 (${dayOfWeek}) \n${timeLine} ${hours}:${minutes}:${seconds}`
    today.innerText = currentDate;
}

getDateAndClock();
setInterval(getDateAndClock, 1000);
