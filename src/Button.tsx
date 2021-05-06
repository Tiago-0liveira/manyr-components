/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import styled, { css, FlattenSimpleInterpolation } from "styled-components"
// eslint-disable-next-line no-unused-vars
import type { Property } from "csstype"
import { Colors } from "./consts"
import React from "react"

export type buttonType = "confirm" | "cancel" | "info" | "dead" | "danger"
export type Size = QuantitativeSize | QualitativeSize
export type QuantitativeSize = "0.5x" | "1x" | "1.25x" | "1.5x" | "1.75x" | "2x"
export type QualitativeSize = "s" | "normal" | "m" | "l" | "xl" | "2xl"
export interface ButtonProps {
	readonly ButtonType?: buttonType
	readonly solid?: boolean
	readonly color?: Property.Color
	readonly Size?: Size
	readonly shakeIfDisabled?: boolean
}
export type TsetColors = (
	btnType: buttonType | undefined,
	solid: boolean | undefined
) => FlattenSimpleInterpolation

export type TgetSize = (btnSize: Size | undefined) => FlattenSimpleInterpolation

const setColors: TsetColors = (btnType, solid) => {
	switch (btnType) {
		case "cancel":
			return solid
				? css`
						background-color: ${Colors.RED};
				  `
				: css`
						border: 2px solid ${Colors.RED};
						&:hover {
							background-color: ${Colors.RED};
						}
				  `
		case "info":
			return solid
				? css`
						background-color: ${Colors.BLUE};
				  `
				: css`
						border: 2px solid ${Colors.BLUE};
						&:hover {
							background-color: ${Colors.BLUE};
						}
				  `
		case "dead":
			return solid
				? css`
						background-color: ${Colors.GREY};
				  `
				: css`
						border: 2px solid ${Colors.GREY};
						&:hover {
							background-color: ${Colors.GREY};
						}
				  `
		case "danger":
			return solid
				? css`
						background-color: ${Colors.YELLOW};
				  `
				: css`
						border: 2px solid ${Colors.YELLOW};
						&:hover {
							background-color: ${Colors.YELLOW};
						}
				  `
		default:
			return solid
				? css`
						background-color: ${Colors.GREEN};
				  `
				: css`
						border: 2px solid ${Colors.GREEN};
						&:hover {
							background-color: ${Colors.GREEN};
						}
				  `
	}
}
const getSize: TgetSize = btnSize => {
	switch (btnSize) {
		case "0.5x":
		case "s":
			return css`
				font-size: 10px;
				padding: 4px 6px;
				margin: 2px;
			`
		case "1.25x":
		case "m":
			return css`
				font-size: 16px;
				padding: 6px 9px;
				margin: 5px;
			`
		case "1.5x":
		case "l":
			return css`
				font-size: 19px;
				padding: 6px 10px;
				margin: 5px;
			`
		case "1.75x":
		case "xl":
			return css`
				font-size: 21px;
				padding: 8px 11px;
				margin: 5px;
			`
		case "2x":
		case "2xl":
			return css`
				font-size: 24px;
				padding: 8px 11px;
				margin: 5px;
			`
		default:
			/* normal | 1x */
			return css`
				font-size: 14px;
				padding: 4px 7px;
				margin: 5px;
			`
	}
}
const KeyframesShake = () => {
	return css`
		@keyframes shake {
			0% {
				transform: translateX(0);
			}
			10% {
				transform: translateX(1px);
			}
			20% {
				transform: translateX(-1px);
			}
			30% {
				transform: translateX(1px);
			}
			40% {
				transform: translateX(-1px);
			}
			50% {
				transform: translateX(1px);
			}
			60% {
				transform: translateX(-1px);
			}
			70% {
				transform: translateX(1px);
			}
			80% {
				transform: translateX(-1px);
			}
			90% {
				transform: translateX(1px);
			}
			100% {
				transform: translateX(0);
			}
		}
	`
}

const BaseButton = styled.button<ButtonProps>`
	border: 0;
	border-radius: 5px;
	font-family: monospace;
	transition: 0.2s;
	border: 1px solid transparent;
	color: ${props => (props.color ? props.color : "black")};
	${props => setColors(props.ButtonType, props.solid)}
	${props => getSize(props.Size)}
    &:hover {
		&:not(:disabled) {
			color: white;
			border: 1px solid whitesmoke;
		}
		&:disabled {
			animation: ${props =>
				props.shakeIfDisabled ? "shake 1.5s infinite" : "none"};
		}
	}
	&:disabled {
		filter: brightness(70%);
	}
	${KeyframesShake()}
`

const Button: React.FC<ButtonProps & React.HTMLProps<HTMLDivElement>> = ({
	children,
	ButtonType,
	solid,
	color,
	Size,
	shakeIfDisabled,
	key,
	disabled,
	...props
}) => {
	return (
		<div {...props}>
			<BaseButton
				ButtonType={ButtonType}
				solid={solid}
				color={color}
				Size={Size}
				shakeIfDisabled={shakeIfDisabled}>
				{children}
			</BaseButton>
		</div>
	)
}
export default Button
