import { ContentContainer, Header, TodoInput } from "../components";
import useTodos from "../hooks/useTodos";

const MainPage = () => {
	const { todos, createTodo, isDoneAll, changeIsDoneAll } = useTodos();

	return (
		<ContentContainer>
			<Header />
			<TodoInput
				createTodo={createTodo}
				isDoneAll={isDoneAll}
				handleChangeIsDoneAll={changeIsDoneAll}
			/>
		</ContentContainer>
	);
};
export default MainPage;
