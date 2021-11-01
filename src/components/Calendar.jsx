import React, { Component } from 'react';
import Calendar from 'react-calendar';
import './index.css';

export default class CustomCalendar extends Component {
    render() {
        const { classProp, value } = this.props;
        return (
            <div className={classProp}>
                <Calendar
                    value={value}
                    calendarType={"US"}
                    showNeighboringMonth={false}
                />
            </div>
        )
    }
}
