'use client';

import Breadcrumb from '@/components/Common/BreadCrumb';
import MemberFeature from '@/components/Features/Member';

export default function MemberPage() {
  return (
    <>
      <div className="MainLayout">
        <div
          className="main_side top_title mx-auto max-w-7xl px-6 text-center lg:px-8"
          style={{ marginTop: '80px' }}
        >
          <Breadcrumb title="組織" path="member" />
          <MemberFeature />
        </div>
      </div>
    </>
  );
}
