import { Button, Input } from "antd";
import { useContext } from "react";
import { SeedContext } from "../../context/seed";

export const SeedNameInput: React.FC = () => {
	const {
		seedName: { name, onChange, onRandomSeed },
	} = useContext(SeedContext);

	return (
		<Input
			id="seed"
			placeholder="Seed name"
			value={name}
			onChange={onChange}
			suffix={
				<Button
					type="primary"
					onClick={onRandomSeed}
					style={{ marginRight: -7 }}
				>
					Random
				</Button>
			}
			autoComplete="off"
			autoCapitalize="off"
			autoCorrect="off"
			spellCheck={false}
		/>
	);
};
