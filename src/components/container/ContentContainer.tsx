import styled from "styled-components";

const Wrapper = styled.div`
	display: flex;
	width: 1024px;
	margin: 0 auto;
`;

interface Props {
	children: React.ReactNode;
}

const ContentContainer = ({ children }: Props) => <Wrapper>{children}</Wrapper>;
export default ContentContainer;
