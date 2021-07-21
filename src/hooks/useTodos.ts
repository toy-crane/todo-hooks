import produce from "immer";
import {
	useCallback,
	useEffect,
	useLayoutEffect,
	useMemo,
	useState,
} from "react";
import { Todo } from "../types";
import { v4 as uuidv4 } from "uuid";

const LOCALSTORAGE_NAME = "todos";

interface State {
	todos: Todo[];
}

interface Result extends State {
	createTodo: (title: string) => void;
	changeIsDoneAll: (completed: boolean) => void;
	isDoneAll: boolean;
}

const useTodos = (): Result => {
	const [state, setState] = useState<State>({ todos: [] });

	// 화면을 업데이트하기 전에 LocalStorage에서 todos 가져오기
	useLayoutEffect(() => {
		const loadedTodos = localStorage.getItem(LOCALSTORAGE_NAME);
		if (loadedTodos) {
			setState(JSON.parse(loadedTodos));
		}
	}, [setState]);

	// 화면을 업데이트하고, todos LocalStorage에 저장하기
	useEffect(() => {
		localStorage.setItem(LOCALSTORAGE_NAME, JSON.stringify(state));
	}, [state]);

	// Todo 신규 생성하기
	const createTodo = useCallback(
		(title: string) => {
			const newState = produce(state, (draft) => {
				draft.todos.push({ title, id: uuidv4(), completed: false });
			});
			setState(newState);
		},
		[state]
	);

	// 모든 Todo 한 번에 Complete 처리하기
	const changeIsDoneAll = useCallback(
		(completed: boolean) => {
			const newState = produce(state, (draft) => {
				draft.todos = draft.todos.map((todo) => ({
					...todo,
					completed,
				}));
			});
			setState(newState);
		},
		[state]
	);

	// 모든 Todo가 Done 상태인지 확인하는 flag 값
	const isDoneAll = state.todos.filter((todo) => !todo.completed).length === 0;

	return useMemo(
		() => ({ ...state, createTodo, changeIsDoneAll, isDoneAll }),
		[changeIsDoneAll, createTodo, state, isDoneAll]
	);
};

export default useTodos;
