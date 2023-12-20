import styles from "./Button.module.scss";
export const Button = (props) => {
    const { id, style, onClick, label } = props;
    return (
        <button className={styles.button} id={id} style={{ ...style }} onClick={onClick ?? (() => { })}> {label} </button>
    )
}