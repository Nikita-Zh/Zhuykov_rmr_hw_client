import styles from "./button.module.css"
import React, {ButtonHTMLAttributes, FunctionComponent} from "react";
import clsx from "clsx";

export enum ButtonMode {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    THIRD = 'third',
}

/*type Props = React.PropsWithChildren & React.HTMLAttributes<HTMLButtonElement> & {
    className?: string,
    mode?: ButtonMode,
    type?:
}*/

type Props = ButtonHTMLAttributes<any> & {
    className?: string,
    mode?: ButtonMode,
}

export const Button: FunctionComponent<Props> = (
    {
        className,
        mode = ButtonMode.PRIMARY,
        children,
        type = "button",
        ...props
    }) => {


    return (
        <button
            {...props}
            className={
                clsx(
                    styles.container,
                    className,
                    styles[mode]
                )
            }

        >
            <div>{children}</div>
        </button>
    )

}