import styles from'../styles/Skill.module.css'

function Skill({name}) {
    return (
    <>
        <span className={styles.span}><strong>{name}</strong></span>
    </>
    );
}

export default Skill;