import styles from'../styles/Skill.module.css'

function Skill({name}) {
    return (
    <>
        <span className={styles.span}>{name}</span>
    </>
    );
}

export default Skill;