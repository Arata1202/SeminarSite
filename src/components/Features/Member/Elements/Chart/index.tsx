import { UserGroupIcon } from '@heroicons/react/24/solid';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Doughnut } from 'react-chartjs-2';
import styles from './index.module.css';
import PageTitle from '@/components/Common/PageTitle';
import ScrollAnimation from '@/components/Common/Animation/ScrollAnimation';
import { GENDER, GRADE } from '@/constants/member';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

export default function Chart() {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
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
      <ScrollAnimation variant="fadeInUp">
        <PageTitle title="人数比" Icon={UserGroupIcon} />
      </ScrollAnimation>
      <ScrollAnimation variant="fadeInUp" delay={0.1}>
        <div className={`${styles.container} justify-center mt-10 gap-x-16`}>
          <div className={`${styles.chart} flex justify-center items-center`}>
            <Doughnut data={GRADE} options={options} width={300} height={300} />
          </div>
          <div className={`${styles.chart} flex justify-center items-center`}>
            <Doughnut data={GENDER} options={options} width={300} height={300} />
          </div>
        </div>
      </ScrollAnimation>
    </>
  );
}
