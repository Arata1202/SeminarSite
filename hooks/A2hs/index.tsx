import * as React from 'react';

interface IBeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
}

interface Config {
  onAccepted?: () => void;
  onDismissed?: () => void;
}

const isIOS = (): boolean => {
  return (
    typeof navigator !== 'undefined' &&
    (/iPad|iPhone|iPod/.test(navigator.userAgent) ||
      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1))
  );
};

/**
 * prompt A2HS if available.
 * Only Chrome and Edge is supported. (https://developer.mozilla.org/en-US/docs/Web/API/BeforeInstallPromptEvent)
 */
export const useA2HS = (
  config?: Config,
): [IBeforeInstallPromptEvent | null, () => void, boolean] => {
  const [promptEvent, setPromptEvent] = React.useState<IBeforeInstallPromptEvent | null>(null);
  const [isIOSUser, setIsIOSUser] = React.useState<boolean>(false);

  const promptToInstall = () => {
    if (promptEvent) promptEvent.prompt();
  };

  React.useEffect(() => {
    if (isIOS()) {
      setIsIOSUser(true);
      return;
    }

    const listener = (e: IBeforeInstallPromptEvent) => {
      e.preventDefault();
      setPromptEvent(e);
      e.userChoice
        .then((result) => {
          if (result.outcome === 'accepted') {
            if (config?.onAccepted) config.onAccepted();
          } else {
            if (config?.onDismissed) config.onDismissed();
          }
          return;
        })
        .catch(console.error);
    };

    window.addEventListener('beforeinstallprompt', listener as any);
    return () => {
      window.removeEventListener('beforeinstallprompt', listener as any);
    };
  }, [config]);

  return [promptEvent, promptToInstall, isIOSUser];
};

const CustomIOSDialog = ({ onClose }: { onClose: () => void }) => (
  <div className="dialog-overlay">
    <div className="dialog-content">
      <h2>ホーム画面に追加</h2>
      <p>Safariの共有ボタンをタップし、「ホーム画面に追加」を選択してください。</p>
      <button onClick={onClose}>閉じる</button>
    </div>
  </div>
);

export default function Page() {
  const [promptEvent, promptToInstall, isIOSUser] = useA2HS({
    onAccepted: () => {
      console.log('A2HSプロンプトが受け入れられました');
    },
    onDismissed: () => {
      console.log('A2HSプロンプトが拒否されました');
    },
  });

  const [showIOSDialog, setShowIOSDialog] = React.useState(false);

  const handleAddToHomeClick = () => {
    if (isIOSUser) {
      setShowIOSDialog(true);
    } else {
      promptToInstall();
    }
  };

  return (
    <>
      <div style={{ marginTop: '80px' }}>
        <div className="TopBanner flex justify-center gap-x-1 bg-green-700 px-6 py-2.5 sm:px-3.5">
          <p className="text:sm sm:text-2xl font-bold leading-6 text-white">
            ようこそ、東洋大学 鈴木ゼミナールへ
          </p>
          <button
            onClick={handleAddToHomeClick}
            className="flex-none rounded-full bg-white px-3.5 py-1 text-base font-semibold text-black shadow-sm hover:text-green-500"
          >
            ホーム画面に追加 <span aria-hidden="true">&rarr;</span>
          </button>
        </div>
        {showIOSDialog && <CustomIOSDialog onClose={() => setShowIOSDialog(false)} />}
      </div>
    </>
  );
}
