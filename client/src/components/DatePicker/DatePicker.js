import React, { useState } from "react";
import DateCss from "./DatePicker.module.css";
import DatePicker from "react-datepicker";
function MyDatePicker() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className={DateCss.dateinputcontainer}>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="dd/MM/yyyy"
        placeholderText="dd/mm/yyyy"
        className={DateCss.dateinput}
      />
    </div>
  );
}

export default MyDatePicker;
