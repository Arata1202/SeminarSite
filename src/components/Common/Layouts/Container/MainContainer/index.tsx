import styles from './index.module.css';

type Props = {
  children: React.ReactNode;
};
export default function MainContainer({ children }: Props) {
  return (
    <div className={styles.container}>
      <div className={`${styles.subContainer} mx-auto max-w-7xl px-6 text-center lg:px-8`}>
        {children}
      </div>
    </div>
  );
}
