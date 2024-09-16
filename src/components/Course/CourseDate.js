import { useState } from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { isSameDay } from 'date-fns';
import { zhTW } from 'date-fns/locale';

function CourseDate() {
  const [selected, setSelected] = useState(new Date());
  const i = new Date('2022-6-23');

  let footer = <p>請選擇日期</p>;
  if (selected) {
    footer = <p>您選擇 {format(selected, 'yyyy-MM-dd')}.</p>;
  }
  const enabledDays = [
    new Date(2022, 5, 20), // 不想禁用的日子
    new Date(2022, 5, 21),
    new Date(i),
  ];

  function isDayenabled(day) {
    return !enabledDays.some((disabledDay) => isSameDay(day, disabledDay));
  }

  return (
    <>
      <DayPicker
        mode="single"
        selected={selected}
        onSelect={setSelected}
        footer={footer}
        disabled={isDayenabled}
        locale={zhTW}
      />
    </>
  );
}
export default CourseDate;
