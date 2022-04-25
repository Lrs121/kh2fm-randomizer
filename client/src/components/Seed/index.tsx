import { Tabs } from "antd";
import { useCallback, useState } from "react";
import { SeedContextProvider } from "../../context/seed";
import { ButtonDownload } from "./ButtonDownload";
import { ButtonShare } from "./ButtonShare";
import { ModalPresets } from "./ModalPresets";
import "./Seed.css";
import { SeedNameInput } from "./SeedNameInput";
import {
	experimentalSettings,
	TabPaneExperimental,
} from "./TabPaneExperimental";
import { TabPaneGameModeSettings } from "./TabPaneGameModeSettings";
import { TabPaneHelp } from "./TabPaneHelp";
import { TabPaneInclude } from "./TabPaneInclude";
import { TabPaneSettings } from "./TabPaneSettings";
import { TabPaneSpoilerLogs } from "./TabPaneSpoilerLogs";
import { TabPaneWorlds } from "./TabPaneWorlds";

export const Seed: React.FC = () => {
	const [activeKey, setActiveKey] = useState("settings");

	const onTabClick = useCallback((key: string) => {
		setActiveKey(key);
	}, []);

	return (
		<SeedContextProvider>
			<div style={{ margin: "0 auto", maxWidth: 1200 }}>
				<SeedNameInput />

				<ButtonDownload />

				<Tabs
					activeKey={activeKey}
					onTabClick={onTabClick}
					style={{ padding: "0 16px 16px", backgroundColor: "white" }}
					tabBarExtraContent={
						<>
							<ModalPresets />

							<ButtonShare />
						</>
					}
				>
					<Tabs.TabPane tab="Help" key="help">
						<TabPaneHelp />
					</Tabs.TabPane>

					<Tabs.TabPane tab="Settings" key="settings">
						<TabPaneSettings />
					</Tabs.TabPane>

					<Tabs.TabPane tab="Worlds" key="worlds">
						<TabPaneWorlds />
					</Tabs.TabPane>

					<Tabs.TabPane tab="Include" key="include">
						<TabPaneInclude />
					</Tabs.TabPane>

					<Tabs.TabPane tab="Game Mode Settings" key="gameModeSettings">
						<TabPaneGameModeSettings />
					</Tabs.TabPane>

					<Tabs.TabPane
						tab="Experimental"
						key="experimental"
						disabled={experimentalSettings.length === 0}
					>
						<TabPaneExperimental />
					</Tabs.TabPane>

					<Tabs.TabPane tab="Spoiler Logs" key="spoilerLogs">
						<TabPaneSpoilerLogs active={activeKey === "spoilerLogs"} />
					</Tabs.TabPane>
				</Tabs>
			</div>
		</SeedContextProvider>
	);
};
