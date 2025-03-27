import styles from './index.module.css';

type Props = {
  children: React.ReactNode;
};

export default function BlogMainContainer({ children }: Props) {
  return (
    <div className={`${styles.container} mx-auto max-w-7xl`}>
      <div className="grid lg:grid-cols-3 gap-y-8 lg:gap-y-0 lg:gap-x-6">{children}</div>
    </div>
  );
}
