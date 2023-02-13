import React, { Fragment, FC, InputHTMLAttributes } from "react"
import { textInput } from "./text-input.variant"
import { type VariantProps, cx } from "class-variance-authority"
import styles from "./text-input.module.scss"

export interface TextInputProps
    extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof textInput> {
    id: string,
    name: string,
    label?: string,
    error?: string
}

const TextInput: FC<TextInputProps> = (props) => {
    const { id, name, error, label, onChange, onBlur, intent, dimension, className } = props
    return (
        <Fragment>
            <div className={cx([styles.text_input_wrapper])}>
                {label ? <label htmlFor={`_${id}`}>{label}</label> : null}
                <input
                    className={textInput({ intent: error ? "error" : intent, dimension, className })}
                    {...props}
                    id={`_${id}`}
                    name={name}
                    onChange={onChange}
                    onBlur={onBlur}
                />
                {error ? <span>{error}</span> : null}
            </div>
        </Fragment>
    )
}

TextInput.defaultProps = {}

export default TextInput