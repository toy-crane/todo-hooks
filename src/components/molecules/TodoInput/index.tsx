import { memo } from "react";
import styled from "styled-components";
import Checkbox from "../../atoms/checkbox";
import Input from "../../atoms/input";

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
`;

interface Props {
	isDoneAll?: boolean;
	handleChangeIsDoneAll?: (checked: boolean) => void;
	createTodo?: (title: string) => void;
}

const TodoInput = ({ isDoneAll, handleChangeIsDoneAll, createTodo }: Props) => (
	<Wrapper>
		<Checkbox checked={isDoneAll} onChange={handleChangeIsDoneAll}></Checkbox>
		<Input
			placeholder="해야 할 일들을 입력하세요."
			onKeyDown={createTodo}
		></Input>
	</Wrapper>
);

export default memo(TodoInput);
