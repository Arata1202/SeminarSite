import { CalendarDaysIcon } from '@heroicons/react/24/solid';
import { GRADE2, GRADE3, GRADE4 } from '@/constants/activity';
import Schedule from './Elements/Schedule';
import Grade from './Elements/Grade';

export default function ActivityFeature() {
  return (
    <>
      <Grade title="2年生" imagePath="2.jpeg" data={GRADE2} />
      <Grade title="3年生" imagePath="3.jpeg" data={GRADE3} />
      <Grade title="4年生" imagePath="4.png" data={GRADE4} />
      <Schedule title="スケジュール" Icon={CalendarDaysIcon} />
    </>
  );
}
