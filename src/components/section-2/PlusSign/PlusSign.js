import styles from  "./PlusSign.module.css";
import { useContext } from "react";
import { Context } from "../../../ContextProvider";

function PlusSign() {
	const { mixColors } = useContext(Context);

	return (
		<div className={styles.plus}>
			<div className={styles.x} style={{ backgroundColor: mixColors.two }}></div>
			<div className={styles.y} style={{ backgroundColor: mixColors.two }}></div>
			<div className={styles.y} style={{ backgroundColor: mixColors.one }}></div>
			<div className={styles.x} style={{ backgroundColor: mixColors.one }}></div>
		</div>
	);
}

export default PlusSign;
