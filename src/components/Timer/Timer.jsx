import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';


const Timer = () => {
    const { t } = useTranslation();
    const [timeRemaining, setTimeRemaining] = useState({ days: 0, hours: 0, minutes: 0 });


    const calculateTimeRemaining = () => {
        const endTime = new Date("2025-05-10T23:59:59");
        const currentTime = new Date();
        const timeLeft = endTime - currentTime;

        if (timeLeft <= 0) {
            setTimeRemaining({ days: 0, hours: 0, minutes: 0 });
        } else {
            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));

            setTimeRemaining({ days, hours, minutes });
        }
    };

    useEffect(() => {

        calculateTimeRemaining();

        const interval = setInterval(() => {
            calculateTimeRemaining();
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    function getDayWord(n) {
        if (n % 100 >= 11 && n % 100 <= 14) return t("timerD1");
        let lastDigit = n % 10;
        if (lastDigit === 1) return t("timerD3");
        if (lastDigit >= 2 && lastDigit <= 4) return t("timerD2");
        return t("timerD1");
    }

    function getHourWord(n) {
        if (n % 100 >= 11 && n % 100 <= 14) return t("timerH1");
        let lastDigit = n % 10;
        if (lastDigit === 1) return t("timerH3");
        if (lastDigit >= 2 && lastDigit <= 4) return t("timerH2");
        return t("timerH1");
    }

    function getMinuteWord(n) {
        if (n % 100 >= 11 && n % 100 <= 14) return t("timerM1");
        let lastDigit = n % 10;
        if (lastDigit === 1) return t("timerM2");
        if (lastDigit >= 2 && lastDigit <= 4) return t("timerM3");
        return t("timerM1");
    }

    return (
        <div className="promotion__timer">
            <div className="promotion__timer-day">
                <div className="promotion__timer-days" id="day">{timeRemaining.days < 10 ? `0${timeRemaining.days}` : timeRemaining.days}</div>
                <div className="time__divider"></div>
                <p>{getDayWord(timeRemaining.days)}</p>
            </div>

            <div className="promotion__timer-hour">
                <div className="promotion__timer-hours" id="hour">{timeRemaining.hours < 10 ? `0${timeRemaining.hours}` : timeRemaining.hours}</div>
                <div className="time__divider"></div>
                <p>{getHourWord(timeRemaining.hours)}</p>
            </div>

            <div className="promotion__timer-minute">
                <div className="promotion__timer-minutes" id="minute">{timeRemaining.minutes < 10 ? `0${timeRemaining.minutes}` : timeRemaining.minutes}</div>
                <div className="time__divider"></div>
                <p>{getMinuteWord(timeRemaining.minutes)}</p>
            </div>
        </div>
    )
}

export default Timer;