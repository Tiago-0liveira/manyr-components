import React from 'react'
import AllComp, { Button, CenterDiv } from "manyr-components"


const App = () => {
	return <CenterDiv horizontal vertical>
		<CenterDiv horizontal vertical>
			<Button ButtonType={"danger"} disabled shakeIfDisabled solid color="red" Size="2xl">w</Button>
			<Button shakeIfDisabled solid Size="2xl">awd</Button>
			<Button solid>adssd</Button>
			<AllComp />
		</CenterDiv>
	</CenterDiv>
}

export default App
