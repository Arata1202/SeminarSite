import PageTitle from '@/components/Common/PageTitle';

type Props = {
  title: string;
  Icon: any;
};

export default function Schedule({ title, Icon }: Props) {
  return (
    <div className="mx-auto max-w-7xl">
      <PageTitle title={title} Icon={Icon} />
      <img className="pc mt-10" src="/images/activity/pc.png" alt="" />
      <img className="mobile mt-10" src="/images/activity/mobile.png" alt="" />
    </div>
  );
}
