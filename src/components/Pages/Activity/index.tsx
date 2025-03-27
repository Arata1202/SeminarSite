import { FireIcon } from '@heroicons/react/24/solid';
import Breadcrumb from '@/components/Common/BreadCrumb';
import PageTitle from '@/components/Common/PageTitle';
import ActivityFeature from '@/components/Features/Activity';
import MainContainer from '@/components/Common/Layouts/Container/MainContainer';

export default function ActivityPage() {
  return (
    <>
      <MainContainer>
        <Breadcrumb title="活動内容" path="activity" />
        <PageTitle title="活動内容" Icon={FireIcon} />
        <ActivityFeature />
      </MainContainer>
    </>
  );
}
