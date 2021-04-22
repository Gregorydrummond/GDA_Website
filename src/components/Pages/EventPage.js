import React from "react";
import Calendar from "@ericz1803/react-google-calendar";


const EventPage = () => {
  const API_KEY = "AIzaSyBuxEX5nDarx0HOweaAFXsWcPBRGF9FHh4";
  let calendars = [
    { calendarId: "en.usa#holiday@group.v.calendar.google.com" },
    {
      calendarId: "en.usa#holiday@group.v.calendar.google.com",
      color: "#B241D1" //optional, specify color of calendar 2 events
    }
  ];
  return (
    <div>
      <style>{"body{background-color: ghostwhite}"}</style>
      <Calendar apiKey={API_KEY} calendars={calendars} />
    </div>
  )
}

export default EventPage
