import React, { ReactNode, Fragment, FC, HTMLAttributes } from "react"
import { card } from "./card.variant"
import { type VariantProps } from "class-variance-authority"

export interface CardProps
    extends HTMLAttributes<HTMLElement>,
    VariantProps<typeof card> {
    children: ReactNode
}

const Card: FC<CardProps> = (props) => {
    const { intent, className, children, bordered, shadow } = props
    return (
        <Fragment>
            <div className={card({ intent, bordered, shadow, className })} {...props} >
                {children}
            </div>
        </Fragment>
    )
}

Card.defaultProps = {}

export default Card