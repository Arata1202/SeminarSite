import { UserGroupIcon } from '@heroicons/react/24/solid';
import { Doughnut } from 'react-chartjs-2';
import styles from './index.module.css';
import PageTitle from '@/components/Common/PageTitle';
import { GENDER, GRADE } from '@/constants/member';

export default function Chart() {
  const options = {
    plugins: {
      datalabels: {
        font: {
          size: 25,
          weight: 'bold' as const,
        },
        formatter: (value: number) => {
          return value + ' 人';
        },
      },
    },
  };

  return (
    <>
      <PageTitle title="人数比" Icon={UserGroupIcon} />
      <div className={`${styles.container} justify-center mt-10 gap-x-16`}>
        <div className={`${styles.chart} flex justify-center items-center`}>
          <Doughnut data={GRADE} options={options} width={300} height={300} />
        </div>
        <div className={`${styles.chart} flex justify-center items-center`}>
          <Doughnut data={GENDER} options={options} width={300} height={300} />
        </div>
      </div>
    </>
  );
}
