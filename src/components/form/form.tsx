import React, { ReactNode, Fragment, FC, FormHTMLAttributes } from "react"
import { type VariantProps } from "class-variance-authority"
import { form } from "./form.variant"

export interface FormProps
    extends FormHTMLAttributes<HTMLFormElement>,
    VariantProps<typeof form> {
    children: ReactNode
}

const Form: FC<FormProps> = (props) => {
    const { className, children } = props
    return (
        <Fragment>
            <form className={form({ className })} {...props} >
                {children}
            </form>
        </Fragment>
    )
}

Form.defaultProps = {}

export default Form