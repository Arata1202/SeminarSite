import styles from './index.module.css';
import ScrollAnimation from '@/components/Common/Animation/ScrollAnimation';

type Props = {
  title: string;
  description: string;
};

export default function Catchphrase({ title, description }: Props) {
  return (
    <>
      <ScrollAnimation variant="fadeInUp" duration={1.0}>
        <div className={`${styles.title} mt-20 font-bold text-center`}>{title}</div>
      </ScrollAnimation>
      <ScrollAnimation variant="fadeInUp" duration={1.0}>
        <div className={`${styles.description} m-auto mt-5`}>{description}</div>
      </ScrollAnimation>
    </>
  );
}
