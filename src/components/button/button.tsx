import React, { ReactNode, Fragment, FC, ButtonHTMLAttributes } from "react"
import { button } from "./button.variant"
import { type VariantProps } from "class-variance-authority"

export interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
    children: ReactNode
}

const Button: FC<ButtonProps> = (props) => {
    const { intent, dimension, className, children, bordered, shadow } = props
    return (
        <Fragment>
            <button className={button({ intent, dimension, bordered, shadow, className })} {...props} >
                {children}
            </button>
        </Fragment>
    )
}

Button.defaultProps = {}

export default Button