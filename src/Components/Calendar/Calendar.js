import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export function MyApp() {
  const [value, onChange] = useState(new Date());
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  return (
    <div className="Sample bg-slate-300 p-5">
      <header>
        <h1>Today is: {date}</h1>
      </header>
      <div className="Sample__container grid justify-center p-5">
        <main className="Sample__container__content">
          <Calendar onChange={onChange} value={value} />
        </main>
      </div>
    </div>
  );
}
