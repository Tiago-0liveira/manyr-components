// eslint-disable-next-line no-unused-vars
import styled, { css, FlattenSimpleInterpolation } from "styled-components"
// eslint-disable-next-line no-unused-vars

export type CenterDivProps = {
	horizontal?: boolean
	vertical?: boolean
	column?: boolean
	reverse?: boolean
}
export type TgetbyStyles = (
	column: boolean | undefined,
	reverse: boolean | undefined,
	horizontal: boolean | undefined,
	vertical: boolean | undefined
) => FlattenSimpleInterpolation

const getbyStyles: TgetbyStyles = (column, reverse, horizontal, vertical) => {
	if (column)
		if (horizontal) {
			if (vertical) {
				if (reverse) {
					return css`
						align-items: center;
						justify-content: center;
						flex-direction: column-reverse;
					`
				} else {
					return css`
						align-items: center;
						justify-content: center;
						flex-direction: column;
					`
				}
			} else {
				if (reverse) {
					return css`
						align-items: center;
						flex-direction: column-reverse;
					`
				} else {
					return css`
						align-items: center;
						flex-direction: column;
					`
				}
			}
		} else {
			if (vertical) {
				if (reverse) {
					return css`
						justify-content: center;
						flex-direction: column-reverse;
					`
				} else {
					return css`
						justify-content: center;
						flex-direction: column;
					`
				}
			}
			if (reverse) {
				return css`
					flex-direction: column-reverse;
				`
			} else {
				return css`
					flex-direction: column;
				`
			}
		}

	if (horizontal) {
		if (vertical) {
			if (reverse) {
				return css`
					align-items: center;
					justify-content: center;
					flex-direction: column-reverse;
				`
			} else {
				return css`
					align-items: center;
					justify-content: center;
					flex-direction: column;
				`
			}
		} else {
			if (reverse) {
				return css`
					justify-content: center;
					flex-direction: column-reverse;
				`
			} else {
				return css`
					justify-content: center;
					flex-direction: column;
				`
			}
		}
	} else {
		if (vertical) {
			if (reverse) {
				return css`
					align-items: center;
					flex-direction: column-reverse;
				`
			} else {
				return css`
					align-items: center;
					flex-direction: column;
				`
			}
		}
		if (reverse) {
			return css`
				flex-direction: column-reverse;
			`
		} else {
			return css`
				flex-direction: column;
			`
		}
	}
}

export default styled.div<CenterDivProps>`
	display: flex;
	${props =>
		getbyStyles(
			props.column,
			props.reverse,
			props.horizontal,
			props.vertical
		)}
	justify-content: center;
	align-items: center;
`
