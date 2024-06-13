'use client'

import { useEffect, useState } from "react";

export function Timer() {
    const [timeLeft, setTimeLeft] = useState(3600)

    useEffect(() => {
        if (timeLeft > 0) {
            const timerId = setInterval(() => {
                setTimeLeft((prevTime) => prevTime - 1);
            }, 1000);

            return () => clearInterval(timerId);
        }
    }, [timeLeft]);

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
    };

    return (
        <div className="rounded-full px-1 p-3 font-bold text-base border-2 border-zinc-300">
            {formatTime(timeLeft)}
        </div>
    );
}
