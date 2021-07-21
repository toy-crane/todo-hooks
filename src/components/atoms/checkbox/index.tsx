import { useCallback, useState } from "react";

interface Props {
	onChange?: (checked: boolean) => void;
	checked?: boolean;
}

const Checkbox = ({ onChange, checked: checkedProps = false }: Props) => {
	const [checked, setChecked] = useState<boolean>(checkedProps);
	const handleChecked = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			onChange?.(e.target?.checked);
			setChecked(!checked);
		},
		[checked, onChange]
	);
	return <input type="checkbox" onChange={handleChecked} checked={checked} />;
};

export default Checkbox;
