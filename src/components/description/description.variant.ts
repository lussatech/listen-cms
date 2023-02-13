import { cva } from "class-variance-authority";
import styles from "./description.module.scss"

export const description = cva(styles.description, {
    variants: {
        intent: {
            gray: styles.c_gray,
            main: styles.c_main,
            primary: styles.c_primary,
            success: styles.c_success,
            warning: styles.c_warning,
            error: styles.c_error,
        },
        type: {
            p: styles.p,
            span: styles.span
        },
        fontSize: {
            xs: styles.s_xs,
            sm: styles.s_sm,
            base: styles.s_base
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
        fontSize: "sm",
        type: "span",
        textAlign: "left"
    },
});