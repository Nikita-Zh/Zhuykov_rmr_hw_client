import styles from "./Input.module.css"
import {forwardRef, ComponentPropsWithRef, FunctionComponent} from "react";
import clsx from "clsx";

type Props = ComponentPropsWithRef<'input'>
    & {
    className?: string,
    title?: string,
    error?: string
}


export const Input: FunctionComponent<Props> = forwardRef((props, ref) => {
    const {
        className,
        title,
        error
    } = props
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>{title}</div>
            <input
                ref={ref}
                {...props}
                className={clsx(
                    styles.container,
                    className)}
            />
            {error
                ? <div className={styles.error}>{error}</div>
                : <div className={styles.error_mock}></div>
            }

        </div>
    )
})
