import { useTranslation, Trans } from 'react-i18next';

function App() {
  const { t } = useTranslation();
  const user = "Martin"; 

  return (
    <>
      <div>
        {t("welcomeMessage", { user })}
      </div>
      <div>
        {/* Use values attribute for dynamic values, remember to use double {{ }} within json where translation is kept */}
        <Trans i18nKey="welcomeMessageTag" values={{ user }}>
          Welcome, <b>{ user }</b>! <i>Test</i>
        </Trans>
      </div>
    </>
  );
}

export default App;
