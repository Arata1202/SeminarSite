import styles from './index.module.css';

type Props = {
  title: string;
  description: string;
};

export default function Catchphrase({ title, description }: Props) {
  return (
    <>
      <div className={`${styles.title} mt-20 font-bold text-center`}>{title}</div>
      <div className={`${styles.description} m-auto mt-5`}>{description}</div>
    </>
  );
}
