'use client';

import { EnvelopeIcon } from '@heroicons/react/24/solid';
import Breadcrumb from '@/components/Common/BreadCrumb';
import PageTitle from '@/components/Common/PageTitle';
import ContactFeature from '@/components/Features/Contact';

export default function ContactPage() {
  return (
    <>
      <div className="MainLayout">
        <div
          className="mx-auto max-w-7xl px-6 lg:px-8 main_side top_title"
          style={{ marginTop: '80px' }}
        >
          <Breadcrumb title="お問い合わせ" path="contact" />
          <PageTitle title="お問い合わせ" Icon={EnvelopeIcon} />
          <ContactFeature />
        </div>
      </div>
    </>
  );
}
