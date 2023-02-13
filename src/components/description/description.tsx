import React, { ReactNode, Fragment, FC, HTMLAttributes } from "react"
import { description } from "./description.variant"
import { type VariantProps } from "class-variance-authority"

export interface DescriptionProps
    extends HTMLAttributes<HTMLElement>,
    VariantProps<typeof description> {
    children: ReactNode
}

type HtmlTagProps = {
    type?: "p" | "span" | null
    children: ReactNode
}

const Heading: FC<HtmlTagProps> = (props) => {
    const { type, children } = props
    let paragraf: ReactNode;
    switch (type) {
        case "span":
            paragraf = <span {...props}>{children}</span>
            break;
        default:
            paragraf = <p {...props}>{children}</p>
            break;
    }
    return paragraf;
}

const Title: FC<DescriptionProps> = (props) => {
    const { className, children, intent, type, textAlign } = props
    return (
        <Fragment>
            <Heading type={type} className={description({ intent, type, textAlign, className })} {...props} >
                {children}
            </Heading>
        </Fragment>
    )
}

Title.defaultProps = {}

export default Title