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
      <PageTitle title="人数比" Icon={UserGroupIcon} />
      <ScrollAnimation variant="fadeInUp" duration={1.0}>
        <div className={`${styles.container} justify-center mt-10 gap-x-16`}>
          <div className={`${styles.chart} flex justify-center items-center`}>
            <ScrollAnimation variant="fadeInUp">
              <Doughnut data={GRADE} options={options} width={300} height={300} />
            </ScrollAnimation>
          </div>
          <div className={`${styles.chart} flex justify-center items-center`}>
            <ScrollAnimation variant="fadeInUp" duration={1.0}>
              <Doughnut data={GENDER} options={options} width={300} height={300} />
            </ScrollAnimation>
          </div>
        </div>
      </ScrollAnimation>
    </>
  );
}
