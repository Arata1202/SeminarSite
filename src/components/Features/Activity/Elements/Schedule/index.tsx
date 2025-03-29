import styles from './index.module.css';
import PageTitle from '@/components/Common/PageTitle';

type Props = {
  title: string;
  Icon: any;
};

export default function Schedule({ title, Icon }: Props) {
  return (
    <div className="mx-auto max-w-7xl">
      <PageTitle title={title} Icon={Icon} />
      <img
        className={`${styles.pc} block mt-10`}
        src="/images/activity/pc.png"
        alt="スケジュール"
      />
      <img
        className={`${styles.mobile} block mt-10`}
        src="/images/activity/mobile.png"
        alt="スケジュール"
      />
    </div>
  );
}
