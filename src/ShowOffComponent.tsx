import React from "react"
import styled from "styled-components"
import CenterDiv from "./CenterDiv"

const ShowOffComponent: React.FC = () => {
	return (
		<RootWrapper className='ShowOffComponent' column vertical horizontal>
			<CenterDiv>WDEADW</CenterDiv>
		</RootWrapper>
	)
}

const RootWrapper = styled(CenterDiv)`
	position: absolute;
	width: 100vw;
	height: 100vh;
`

export default ShowOffComponent
