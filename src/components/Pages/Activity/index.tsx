import { FireIcon } from '@heroicons/react/24/solid';
import Breadcrumb from '@/components/Common/BreadCrumb';
import PageTitle from '@/components/Common/PageTitle';
import ActivityFeature from '@/components/Features/Activity';

export default function ActivityPage() {
  return (
    <>
      <div className="MainLayout">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8 main_side top_title">
          <Breadcrumb title="活動内容" path="activity" />
          <PageTitle title="活動内容" Icon={FireIcon} />
          <ActivityFeature />
        </div>
      </div>
    </>
  );
}
