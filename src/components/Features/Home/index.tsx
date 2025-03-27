import styles from './index.module.css';
import { NAVIGATION_ITEMS, SLIDER_ITEMS } from '@/constants/home';
import Banner from './Elements/Banner';
import LargeSlider from './Elements/Slider';
import Catchphrase from './Elements/Catchphrase';
import Navigation from './Elements/Navigation';

export default function HomeFeature() {
  return (
    <>
      <div className={styles.top}>
        <Banner title="ようこそ、東洋大学 鈴木ゼミナールへ" />
        <LargeSlider items={SLIDER_ITEMS} />
      </div>

      <div className={styles.container}>
        <div className={`${styles.subContainer} mx-auto max-w-2xl px-6 lg:max-w-7xl`}>
          <Catchphrase
            title="消費者行動 × 企業戦略"
            description="鈴木ゼミナールでは、日ごろの購買行動について解明を試み、『消費者の視点』と、消費者を引きつけて商品を買ってもらうための戦略を策定する『企業の視点』の双方を理解することに努めています。経営学部内のゼミや他大学との交流を通じて、消費者行動学を追求します。"
          />
          <Navigation items={NAVIGATION_ITEMS} />
        </div>
      </div>
    </>
  );
}
