import { atom } from "recoil";
import { Todo, Mode } from "../types";

const todosState = atom<Todo[]>({
	key: "todos",
	default: [],
});

const modeState = atom<Mode>({
	key: "mode",
	default: "All",
});

export { todosState, modeState };
