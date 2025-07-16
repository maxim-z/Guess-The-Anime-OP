import './Alert.css'
import React, { useEffect } from "react";

type AlertProps = {
    type: 'Success' | 'Error';
    message: string;
    onDone: () => void;
    duration?: number; // ms
};

export const Alert: React.FC<AlertProps> = ({
    type,
    message,
    onDone,
    duration = 3000,
}) => {
    useEffect(() => {
        const id = setTimeout(onDone, duration);
        return () => clearTimeout(id);
    }, [duration, onDone]);

    return (
        <div className={`Alert ${type === 'Success' ? 'Success' : 'Error'}`}
        >
            {message}
        </div>
    )
};