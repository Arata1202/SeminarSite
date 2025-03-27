import { DocumentTextIcon } from '@heroicons/react/24/solid';
import { COPYRIGHT_CONTENT } from '@/contents/copyright';
import Breadcrumb from '@/components/Common/BreadCrumb';
import PageTitle from '@/components/Common/PageTitle';
import FixedDateContainer from '@/components/Common/Layouts/Container/FixedDateContainer';
import Markdown from '@/components/Common/Markdown';
import MainContainer from '@/components/Common/Layouts/Container/MainContainer';

export default function CopyrightPage() {
  const dummyDate = new Date(2024, 9, 18);
  const formattedDate = dummyDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

  return (
    <MainContainer>
      <Breadcrumb title="著作権" path="copyright" />
      <PageTitle title="著作権" Icon={DocumentTextIcon} />
      <FixedDateContainer date={formattedDate} />
      <Markdown content={COPYRIGHT_CONTENT} />
    </MainContainer>
  );
}
