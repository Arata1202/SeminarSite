import styles from './index.module.css';

type Props = {
  title: string;
};

export default function Banner({ title }: Props) {
  return (
    <div
      className={`${styles.container} flex justify-center gap-x-1 bg-green-700 px-6 py-2.5 sm:px-3.5`}
    >
      <p className="text:sm sm:text-2xl font-bold leading-6 text-white">{title}</p>
    </div>
  );
}
