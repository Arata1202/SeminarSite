import { FlagIcon } from '@heroicons/react/24/solid';
import Breadcrumb from '@/components/Common/BreadCrumb';
import PageTitle from '@/components/Common/PageTitle';
import SelectionFeature from '@/components/Features/Selection';

export default function SelectionPage() {
  return (
    <div className="MainLayout">
      <div
        className="mx-auto max-w-7xl px-6 lg:px-8 main_side top_title"
        style={{ marginTop: '80px' }}
      >
        <Breadcrumb title="選考" path="selection" />
        <PageTitle title="選考" Icon={FlagIcon} />
        <SelectionFeature />
      </div>
    </div>
  );
}
