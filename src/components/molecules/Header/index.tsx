import styled from "styled-components";

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;
const Header = () => (
	<Wrapper>
		<h1>Todo List</h1>
	</Wrapper>
);
export default Header;
