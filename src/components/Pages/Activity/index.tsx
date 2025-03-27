import { FireIcon, CalendarDaysIcon } from '@heroicons/react/24/solid';
import Breadcrumb from '@/components/Common/BreadCrumb';
import PageTitle from '@/components/Common/PageTitle';
import Schedule from './Elements/Schedule';
import Grade from './Elements/Grade';
import { GRADE2, GRADE3, GRADE4 } from '@/constants/activity';

export default function ActivityPage() {
  return (
    <>
      <div className="MainLayout">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8 main_side top_title">
          <Breadcrumb title="活動内容" path="activity" />
          <PageTitle title="活動内容" Icon={FireIcon} />
          <Grade title="2年生" imagePath="2.jpeg" data={GRADE2} />
          <Grade title="3年生" imagePath="3.jpeg" data={GRADE3} />
          <Grade title="4年生" imagePath="4.png" data={GRADE4} />
          <Schedule title="スケジュール" Icon={CalendarDaysIcon} />
        </div>
      </div>
    </>
  );
}
