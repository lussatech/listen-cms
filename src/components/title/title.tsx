import React, { ReactNode, Fragment, FC, HTMLAttributes } from "react"
import { title } from "./title.variant"
import { type VariantProps } from "class-variance-authority"

export interface TitleProps
    extends HTMLAttributes<HTMLElement>,
    VariantProps<typeof title> {
    children: ReactNode
}

type HeadingProps = {
    type?: "h1" | "h2" | null
    children: ReactNode
}

const Heading: FC<HeadingProps> = (props) => {
    const { type, children } = props
    let heading: ReactNode;
    switch (type) {
        case "h2":
            heading = <h2 {...props}>{children}</h2>
            break;
        default:
            heading = <h1 {...props}>{children}</h1>
            break;
    }
    return heading;
}

const Title: FC<TitleProps> = (props) => {
    const { className, children, intent, type, textAlign } = props
    return (
        <Fragment>
            <Heading type={type} className={title({ intent, type, textAlign, className })} {...props} >
                {children}
            </Heading>
        </Fragment>
    )
}

Title.defaultProps = {}

export default Title