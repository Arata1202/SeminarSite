import styles from './index.module.css';
import PageTitle from '@/components/Common/PageTitle';
import ScrollAnimation from '@/components/Common/Animation/ScrollAnimation';

type Props = {
  title: string;
  Icon: any;
};

export default function Schedule({ title, Icon }: Props) {
  return (
    <div className="mx-auto max-w-7xl">
      <ScrollAnimation variant="fadeInUp">
        <PageTitle title={title} Icon={Icon} />
      </ScrollAnimation>

      <ScrollAnimation variant="fadeInScale" delay={0.3}>
        <img
          className={`${styles.pc} block mt-10`}
          src="/images/activity/pc.png"
          alt="スケジュール"
        />
      </ScrollAnimation>

      <ScrollAnimation variant="fadeInScale" delay={0.3}>
        <img
          className={`${styles.mobile} block mt-10`}
          src="/images/activity/mobile.png"
          alt="スケジュール"
        />
      </ScrollAnimation>
    </div>
  );
}
