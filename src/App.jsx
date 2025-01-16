import Header from "./components/Header/Header";
import IntroSection from "./components/IntroSection";
import TabsSection from "./components/TabsSection";
import FeedbackSection from "./components/FeedbackSection/FeedbackSection";
import TeachungSection from "./components/TeachingSection";
import DifferencesSection from "./components/DifferencesSection";
import UserSection from "./components/UserSection/UserSection";
import { useState } from "react";


export default function App() {

	const [tab, setTab] = useState('main');

  return (
    <>
      <Header />
      <main>
	  	<IntroSection />
		<TabsSection active={tab} onChange={(current) => setTab(current)} />

		{tab === 'main' && <>
			<TeachungSection />
			<DifferencesSection />
		</>}

		{tab === 'feedback' && <FeedbackSection />}

		{tab === 'effect' && <UserSection />}

      </main>
    </>
  );
}
