const secondsHand=document.querySelector('.sec-hand');
const minutesHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

const getTime = () => {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    // console.log(minutes);
    console.log(hours);

    if(seconds === 0 || minutes === 0 || hours === 0){
        secondsHand.style.transition = `none`;
        minutesHand.style.transition = `none`;
        hourHand.style.transition = `none`;
    }

    const secondsDegree = (seconds/60)*360 + 90;
    const minutesDegree = (minutes/60)*360 + 90;
    const hoursDegree = (hours/12)*360 + 90;

    secondsHand.style.transform = `rotate(${secondsDegree}deg)`;
    minutesHand.style.transform = `rotate(${minutesDegree}deg)`;
    hourHand.style.transform = `rotate(${hoursDegree}deg)`;
}

setInterval(getTime, 1000);