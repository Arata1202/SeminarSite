import '../../../app/globals.css';
import './index.css';
import PublishedDate from '@/components/Elements/Date';
import { LockClosedIcon, ChevronRightIcon, HomeIcon } from '@heroicons/react/24/solid';

export default function Privacy() {
  const dummyDate = new Date(2024, 9, 18);
  const formattedDate = dummyDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

  return (
    <div
      className="mx-auto max-w-7xl px-6 lg:px-8 main_side top_title"
      style={{ marginTop: '80px' }}
    >
      <h1 className="categoryTitle text-3xl font-bold pt-5 max-w-[85rem] mx-auto pb-2">
        <nav className="flex" aria-label="Breadcrumb">
          <ol role="list" className="flex items-center space-x-4">
            <li>
              <a href="/" className="flex text-gray-500 hover:text-green-500">
                <HomeIcon className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
              </a>
            </li>
            <li>
              <div className="flex items-center">
                <ChevronRightIcon
                  className="h-4 w-4 flex-shrink-0 text-gray-500"
                  aria-hidden="true"
                />
                <a
                  href="/privacy"
                  className="ml-4 text-sm font-medium text-gray-500 hover:text-green-500"
                >
                  プライバシーポリシー
                </a>
              </div>
            </li>
          </ol>
        </nav>
      </h1>
      <h1 className="text-3xl font-bold">
        <div className="flex items-center pb-2 pt-2 mt-5">
          <LockClosedIcon className="h-8 w-8 mr-2" aria-hidden="true" />
          <div>プライバシーポリシー</div>
        </div>
      </h1>
      <div className="space-y-5 lg:space-y-8">
        <div className="includeBanner flex justify-end gap-x-5">
          <PublishedDate date={formattedDate} />
        </div>
      </div>
      <div className="">
        <h2 className="mt-2 font-bold">個人情報取り扱いに関する基本方針</h2>
        <p className="mt-6">
          鈴木ゼミ｜東洋大学経営学部マーケティング学科鈴木ゼミナール（以下、「本サービス」と言います。）では、ご利用頂くお客様の個人情報を適切に保護するため、個人情報の保護に関する法律、その他の関係法令を遵守すると共に、以下に定めるプライバシーポリシーに従って、個人情報を安全かつ適切に取り扱うことを宣言いたします。
        </p>
        <h2 className="mt-10 font-bold">個人情報の定義</h2>
        <p className="mt-6">
          「個人情報」とは、個人情報保護法にいう「個人情報」を指すものとし、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日、住所、電話番号、連絡先その他の記述等により特定の個人を識別できる情報及び容貌、指紋、声紋にかかるデータ、及び健康保険証の保険者番号などの当該情報単体から特定の個人を識別できる情報（個人識別情報）を指します。
        </p>
        <h2 className="mt-10 font-bold">個人情報の取得方法</h2>
        <p className="mt-6">
          本サービスはユーザーが利用登録をする際に氏名、住所、電話番号、メールアドレス、などの個人情報をお尋ねすることがあります。また、ユーザーと提携先などとの間でなされたユーザーの個人情報を含む取引記録や決済に関する情報を、本サービスの提携先（情報提供元、広告主、広告配信先などを含みます。以下、｢提携先｣といいます。）などから収集することがあります。
        </p>
        <h3 className="mt-10 font-bold">クッキー（Cookie）</h3>
        <p className="mt-6">
          本サービスでは、アクセス解析サービス、各種アフィリエイトプログラム、広告配信サービスを利用しております。これらの広告配信業者は、ユーザーのご興味に応じた商品やサービスの広告を表示するため、ユーザーの本サービスおよび他サイトへのアクセスに関する情報Cookieを使用することがございます。
          <br />
          <br />
          Cookieは、ユーザーが本サービスあるいは他サイトを閲覧された際、使用されたコンピューターやデバイス内に記録されます。ただし、この情報には、お名前・ご住所・メールアドレス・電話番号など個人を特定できるものは一切含まれません。
          <br />
          <br />
          Cookieによる情報収集を好まれない場合、ユーザーご自身でブラウザで受け入れを拒否するよう設定することも可能です。ただし、この設定により一部のコンテンツが正しく機能しない場合、またサービスが受けられない場合がございます。あらかじめご了承ください。
          <br />
          <br />
          なお、設定方法に関しては
          <a
            href="https://policies.google.com/technologies/partner-sites?hl=ja"
            className="text-green-700 hover:text-green-500"
            target="blank"
          >
            Googleポリシーと規約
          </a>
          にてご確認いただけます。
        </p>
        <h3 className="mt-10 font-bold">アクセス解析ツール</h3>
        <p className="mt-6">
          本サービスでは、Googleの提供するアクセス解析ツール『Google
          Analytics』を使用しています。Google
          Analyticsはトラフィックデータの収集のためCookieを利用します。このトラフィックデータは匿名で収集されており、個人を特定するものではございません。
          <br />
          <br />
          ユーザーは、Cookieを無効化することにより、データの収集を拒否することができます。お使いのブラウザより設定をご確認ください。
          <br />
          <br />
          なお、この規約に関しては、
          <a
            href="https://marketingplatform.google.com/about/analytics/terms/jp/"
            className="text-green-700 hover:text-green-500"
            target="blank"
          >
            Googleアナリティクス利用規約
          </a>{' '}
          および
          <a
            href="https://policies.google.com/technologies/partner-sites?hl=ja"
            className="text-green-700 hover:text-green-500"
            target="blank"
          >
            Googleポリシーと規約
          </a>{' '}
          でご確認いただけます。
        </p>
        <h3 className="mt-10 font-bold">コメントについて</h3>
        <p className="mt-6">
          当ブログへのコメントを残す際に、IP アドレスを収集しています。
          <br />
          <br />
          これはブログの標準機能としてサポートされている機能で、スパムや荒らしへの対応以外にこのIPアドレスを使用することはありません。
          <br />
          <br />
          なお、全てのコメントは管理人が事前にその内容を確認し、承認した上での掲載となります。あらかじめご了承ください。
        </p>
        <h2 className="mt-10 font-bold">個人情報の利用目的</h2>
        <p className="mt-6">
          本サービスが個人情報を収集・利用する目的は、以下のとおりです。
          <br />
          <br />
          本サービスのお問い合わせ際に、名前（ニックネーム）、メールアドレス等の個人情報を入力いただく場合がございます。
          <br />
          <br />
          これらの個人情報は、質問に対する回答や必要な情報を電子メールなどでご連絡する場合に利用させていただくものであり、個人情報をご提供いただく際の目的以外では利用いたしません。
          <br />
          <br />
          本サービスでは，有料のサービスを提供しております。その際の利用料金のご請求をするために利用しております。
          <br />
          <br />
          その他に、本サービスを不正・不当な目的で利用しようとするユーザーがいた場合、ユーザーの特定をし、ご利用をお断りするために利用します。
        </p>
        {/* <h2 className="mt-10 font-bold">
            本サービスが利用している広告サービス
          </h2>
          <p className="mt-6">
            本サービスは、以下の第三者の配信する広告サービスならびにアフィリエイトプログラムを利用しております。
          </p>
          <ul className="mt-6 list-disc pl-5">
            <li>もしもアフィリエイト</li>
            <li>レントラックスアフィリエイト</li>
          </ul>
          <p className="mt-6">
            これらのサービスにおいて取得・収集される情報については、各プログラムのプライバシーポリシーにてご確認ください。
          </p>
          <h3 className="mt-10 font-bold">
            Amazonアソシエイトプログラム
          </h3>
          <p className="mt-6">
            Amazonのアソシエイトとして、当メディアは適格販売により収入を得ています。
          </p>
          <h3 className="mt-10 font-bold">
            Googleの広告サービス
          </h3>
          <p className="mt-6">本サービスは、Googleの提供する以下の広告サービスを利用しています。</p>
          <ul className="mt-6 list-disc pl-5">
            <li>Google AdSense</li>
            <li>Google AdMob</li>
          </ul>
          <p className="mt-6">
            これらの広告サービスにおいて、Cookieやデバイス特有の情報、位置情報、当該デバイスから収集されるその他の情報が利用される場合があります。ただし、これらの情報で個人を特定することはありません。
            <br />
            <br />
            ユーザーは、広告設定に関してGoogleのポリシーと規約に従い、設定を変更することができます。ただし、この設定により一部のコンテンツが正しく機能しない場合があります。あらかじめご了承ください。
            <br />
            <br />
            詳細については、以下のリンクをご参照ください：
            <a
              href="https://policies.google.com/technologies/partner-sites?hl=ja"
              className="text-green-500 hover:text-green-700"
              target="blank"
            >
              Googleポリシーと規約
            </a>
          </p> */}
        <h2 className="mt-10 font-bold">個人情報の管理方法</h2>
        <p className="mt-6">
          本サービスは第三者に皆さまの重要な情報を読み取られたり、改ざんされたりすることを防ぐために、SSLを使用しております。
          <br />
          <br />
          SSL(SecureSocketLayer)とはデータを暗号化して通信するセキュリティ機能です。
          SSLで暗号化することによってお客さまの個人情報をハッカーやクラッカーから守り、安全に情報を送信することができます。
        </p>
        <h2 className="mt-10 font-bold">個人情報の第三者提供</h2>
        <p className="mt-6">
          本サービスは次に掲げる場合を除いて、あらかじめユーザーの同意を得ることなく第三者に個人情報を提供することはありません。
          <br />
          <br />
          ただし、個人情報保護法その他の法令で認められる場合を除きます。
        </p>
        <h2 className="mt-10 font-bold">個人情報の開示、訂正などの手続きについて</h2>
        <p className="mt-6">
          ご本人からの個人情報の開示、訂正、追加、削除、利用停止のご希望の場合には、ご本人であることを確認させて頂いた上、速やかに対応させていただきます。
        </p>
        <h2 className="mt-10 font-bold">個人情報の取扱いに関する相談や苦情の連絡先</h2>
        <p className="mt-6">
          本ポリシーに関するお問い合わせは、下記の窓口までお願いいたします。
          <br />
          <br />
          連絡先：
          <a href="/contact" className="text-green-700 hover:text-green-500">
            お問い合わせ
          </a>
        </p>
      </div>
    </div>
  );
}
