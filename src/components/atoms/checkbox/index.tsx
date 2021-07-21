import { useCallback, useState } from "react";

interface Props {
	onChange?: (checked: boolean) => void;
	checked?: boolean;
}

const Checkbox = ({ onChange, checked = false }: Props) => {
	const [state, setState] = useState<boolean>(checked);
	const handleChecked = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			onChange?.(e.target?.checked);
			setState((state) => !state);
		},
		[onChange]
	);
	return <input type="checkbox" onChange={handleChecked} checked={state} />;
};

export default Checkbox;
