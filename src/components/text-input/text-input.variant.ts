import { cva } from "class-variance-authority";
import styles from "./text-input.module.scss"

export const textInput = cva(null, {
    variants: {
        intent: {
            main: styles.i_main,
            success: styles.i_success,
            warning: styles.i_warning,
            error: styles.i_error,
        },
        dimension: {
            normal: styles.d_normal
        },
    },
    compoundVariants: [],
    defaultVariants: {
        intent: "main",
        dimension: "normal"
    },
});