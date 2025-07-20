import { AcademicCapIcon } from '@heroicons/react/24/solid';
import styles from './index.module.css';
import PageTitle from '@/components/Common/PageTitle';
import ScrollAnimation from '@/components/Common/Animation/ScrollAnimation';

export default function Teacher() {
  return (
    <>
      <PageTitle title="教授" Icon={AcademicCapIcon} />
      <div className="mt-10 mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
        <ScrollAnimation
          variant="fadeInLeft"
          duration={1.0}
          className="flex max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl lg:col-span-2 xl:col-auto text-left items-end"
        >
          <h1 className="flex max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl lg:col-span-2 xl:col-auto text-left items-end">
            鈴木 寛<div className="ml-5 text-xl sm:text-3xl">Kan Suzuki</div>
          </h1>
        </ScrollAnimation>

        <ScrollAnimation
          variant="fadeInLeft"
          duration={1.0}
          delay={0.3}
          className={`${styles.description} mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1`}
        >
          <div>
            <p className="text-lg leading-8 text-left">
              ゼミではテキストの輪読、ディベート(大会)、論文執筆等への取り組みを通じて大学生としてのスキルを高められるように先輩方と教員でフォローしていきます。
              <br />
              <br />
              大学生活を通じて何か成し遂げたいとやる気のある方の参加を希望します。
            </p>
            <br />
            <p className="text-lg leading-8 text-left">【趣味・特徴】</p>
            <ul className={`${styles.list} list-disc text-lg leading-8 text-left`}>
              <li>マーケティング学科所属</li>
              <li>スタバ・ディズニー・海外旅行</li>
            </ul>
          </div>
        </ScrollAnimation>

        <ScrollAnimation
          variant="fadeInScale"
          duration={1.0}
          delay={0.6}
          className={`${styles.image} aspect-[6/5] w-full max-w-lg rounded-2xl object-cover lg:max-w-none xl:row-span-2 xl:row-end-2`}
        >
          <img
            alt="教授"
            src="/images/member/teacher.jpeg"
            className={`${styles.image} aspect-[6/5] w-full max-w-lg rounded-2xl object-cover lg:max-w-none xl:row-span-2 xl:row-end-2`}
          />
        </ScrollAnimation>

        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
      </div>
    </>
  );
}
