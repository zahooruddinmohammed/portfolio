import SkillList  from '../../common/SkillList';
import styles from './SkillsStyles.module.css';
import checkMarkIcon from '../../assets/checkmark-dark.svg';
function Skills() {
  return (
    <section id="skills" className={styles.container}>
        <h1>Skills</h1>
        <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="HTML" />
        </div>
    </section>
);
}
export default Skills;
