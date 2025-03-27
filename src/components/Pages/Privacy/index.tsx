import { LockClosedIcon } from '@heroicons/react/24/solid';
import { PRIVACY_CONTENT } from '@/contents/privacy';
import Breadcrumb from '@/components/Common/BreadCrumb';
import PageTitle from '@/components/Common/PageTitle';
import FixedDateContainer from '@/components/Common/Layouts/Container/FixedDateContainer';
import Markdown from '@/components/Common/Markdown';
import MainContainer from '@/components/Common/Layouts/Container/MainContainer';

export default function PrivacyPage() {
  const dummyDate = new Date(2024, 9, 18);
  const formattedDate = dummyDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

  return (
    <MainContainer>
      <Breadcrumb title="プライバシーポリシー" path="privacy" />
      <PageTitle title="プライバシーポリシー" Icon={LockClosedIcon} />
      <FixedDateContainer date={formattedDate} />
      <Markdown content={PRIVACY_CONTENT} />
    </MainContainer>
  );
}
