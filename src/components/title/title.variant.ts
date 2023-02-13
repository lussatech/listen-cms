import { cva } from "class-variance-authority";
import styles from "./title.module.scss"

export const title = cva(styles.title, {
    variants: {
        intent: {
            main: styles.c_main,
            primary: styles.c_primary,
            success: styles.c_success,
            warning: styles.c_warning,
            error: styles.c_error,
        },
        type: {
            h1: styles.h1,
            h2: styles.h2
        },
        textAlign: {
            center: styles.ta_center,
            left: styles.ta_left,
            right: styles.ta_right
        }
    },
    compoundVariants: [],
    defaultVariants: {
        intent: "main",
        type: "h1",
        textAlign: "left"
    },
});