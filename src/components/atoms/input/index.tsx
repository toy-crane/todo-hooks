import { useCallback } from "react";

interface Props {
	onKeyDown?: (value: string) => void;
	placeholder?: string;
}

const Input = ({ onKeyDown, placeholder }: Props) => {
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

	return (
		<input
			type="text"
			onKeyDown={handleKeyDown}
			placeholder={placeholder}
		></input>
	);
};

export default Input;
