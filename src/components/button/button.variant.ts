import { cva } from "class-variance-authority";
import styles from "./button.module.scss"

export const button = cva(styles.btn, {
    variants: {
        intent: {
            primary: styles.i_primary_border,
            success: styles.i_success_border,
            warning: styles.i_warning_border,
            error: styles.i_error_border,
        },
        dimension: {
            normal: styles.d_normal
        },
        bordered: {
            true: null,
            false: null
        },
        shadow: {
            true: styles.btn_shadow,
            false: null
        }
    },
    compoundVariants: [
        { intent: "primary", bordered: false, className: [styles.cv_primary, styles.txt_white] },
        { intent: "success", bordered: false, className: [styles.cv_success, styles.txt_white] },
        { intent: "warning", bordered: false, className: [styles.cv_warning, styles.txt_white] },
        { intent: "error", bordered: false, className: [styles.cv_error, styles.txt_white] },
    ],
    defaultVariants: {
        intent: "primary",
        dimension: "normal",
        bordered: false,
        shadow: false,
    },
});