import {FunctionComponent, ReactElement} from "react";
import {Navbar} from "../../navbar/Navbar";
import styles from "./DefaultLayout.module.css"
import "../../../uikit/normalize.css"


type Props = {
    children: ReactElement
}

export const DefaultLayout: FunctionComponent<Props> = ({children}) => {
    return (
        <div className={styles.wrapper}>
            <Navbar/>

            <main className={styles.body}>
                {children}
            </main>

            <footer className={styles.footer}>
                <div className={styles.container}>
                    Footer
                </div>
            </footer>
        </div>
    )
}