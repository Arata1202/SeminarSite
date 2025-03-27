import { FlagIcon } from '@heroicons/react/24/solid';
import Breadcrumb from '@/components/Common/BreadCrumb';
import PageTitle from '@/components/Common/PageTitle';
import SelectionFeature from '@/components/Features/Selection';
import MainContainer from '@/components/Common/Layouts/Container/MainContainer';

export default function SelectionPage() {
  return (
    <MainContainer>
      <Breadcrumb title="選考" path="selection" />
      <PageTitle title="選考" Icon={FlagIcon} />
      <SelectionFeature />
    </MainContainer>
  );
}
