import React, { useEffect, useState } from 'react';
import AttendanceTable from './AttendanceTable';
import Layout from './Layout';
import './Layout.css';

const App = () => {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const footerContent = (
        <div className="footer-content">
            <p>Avisos legales y otra información relevante</p>
        </div>
    );

    return (
        <div className="app-container">
            <div className="date-time-container">
                <span>{currentDateTime.toLocaleTimeString()}</span>
                <p>{currentDateTime.toLocaleString('es-ES', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' }).charAt(0).toUpperCase() + currentDateTime.toLocaleString('es-ES', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' }).slice(1)}</p>
            </div>
            <Layout
                content={<AttendanceTable />}
                footer={footerContent}
            />
        </div>
    );
};

export default App;
