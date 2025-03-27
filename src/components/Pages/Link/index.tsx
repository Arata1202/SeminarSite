import { LinkIcon } from '@heroicons/react/24/solid';
import { LINK_CONTENT } from '@/contents/link';
import Markdown from '@/components/Common/Markdown';
import Breadcrumb from '@/components/Common/BreadCrumb';
import PageTitle from '@/components/Common/PageTitle';
import FixedDateContainer from '@/components/Common/Layouts/Container/FixedDateContainer';

export default function LinkPage() {
  const dummyDate = new Date(2024, 9, 18);
  const formattedDate = dummyDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

  return (
    <div className="MainLayout">
      <div
        className="top_title mx-auto max-w-7xl px-6 lg:px-8 main_side top_title"
        style={{ marginTop: '80px' }}
      >
        <Breadcrumb title="リンク" path="link" />
        <PageTitle title="リンク" Icon={LinkIcon} />
        <FixedDateContainer date={formattedDate} />
        <Markdown content={LINK_CONTENT} />
      </div>
    </div>
  );
}
