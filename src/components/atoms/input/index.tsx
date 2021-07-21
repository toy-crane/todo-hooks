import { useCallback } from "react";

interface Props {
	onKeyDown?: (value: string) => void;
}

const Input = ({ onKeyDown }: Props) => {
	const handleKeyDown = useCallback(
		(e: React.KeyboardEvent<HTMLInputElement>) => {
			if (e.code !== "Enter") {
				return;
			}
			e.preventDefault();
			const value = e.currentTarget?.value;
			if (value.trim() !== "") {
				onKeyDown?.(value);
				e.currentTarget.value = "";
			}
		},
		[onKeyDown]
	);

	return <input type="text" onKeyDown={handleKeyDown}></input>;
};

export default Input;
