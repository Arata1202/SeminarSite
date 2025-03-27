import { ExclamationCircleIcon } from '@heroicons/react/24/solid';
import { DISCLAIMER_CONTENT } from '@/contents/disclaimer';
import Breadcrumb from '@/components/Common/BreadCrumb';
import PageTitle from '@/components/Common/PageTitle';
import FixedDateContainer from '@/components/Common/Layouts/Container/FixedDateContainer';
import Markdown from '@/components/Common/Markdown';
import MainContainer from '@/components/Common/Layouts/Container/MainContainer';

export default function DisclaimerPage() {
  const dummyDate = new Date(2024, 9, 18);
  const formattedDate = dummyDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

  return (
    <MainContainer>
      <Breadcrumb title="免責事項" path="disclaimer" />
      <PageTitle title="免責事項" Icon={ExclamationCircleIcon} />
      <FixedDateContainer date={formattedDate} />
      <Markdown content={DISCLAIMER_CONTENT} />
    </MainContainer>
  );
}
