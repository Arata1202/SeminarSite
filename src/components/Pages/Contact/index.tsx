'use client';

import { EnvelopeIcon } from '@heroicons/react/24/solid';
import Breadcrumb from '@/components/Common/BreadCrumb';
import PageTitle from '@/components/Common/PageTitle';
import ContactFeature from '@/components/Features/Contact';
import MainContainer from '@/components/Common/Layouts/Container/MainContainer';

export default function ContactPage() {
  return (
    <>
      <MainContainer>
        <Breadcrumb title="お問い合わせ" path="contact" />
        <PageTitle title="お問い合わせ" Icon={EnvelopeIcon} />
        <ContactFeature />
      </MainContainer>
    </>
  );
}
