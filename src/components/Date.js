import React, { useEffect, useState } from "react";

const CurrentDate = () => {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const options = {
      weekday: "long",
      // year: "numeric",
      month: "long",
      day: "numeric",
      // hour: "numeric",
      // minute: "numeric",
      // second: "numeric",
      timeZone: "Asia/Kolkata",
      // timeZoneName: "short",
    };
    const dateFormatter = new Intl.DateTimeFormat("en-US", options);
    const formattedDate = dateFormatter.format(new Date());
    // const formattedDate =new Date().toLocaleDateString('en-US', options);
    setCurrentDate(formattedDate);
  }, []);

  return <div>{currentDate}</div>;
};

export default CurrentDate;
