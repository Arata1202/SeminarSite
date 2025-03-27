'use client';

import Breadcrumb from '@/components/Common/BreadCrumb';
import MemberFeature from '@/components/Features/Member';
import MainContainer from '@/components/Common/Layouts/Container/MainContainer';

export default function MemberPage() {
  return (
    <>
      <MainContainer>
        <Breadcrumb title="組織" path="member" />
        <MemberFeature />
      </MainContainer>
    </>
  );
}
