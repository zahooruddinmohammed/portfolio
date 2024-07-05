import SkillList  from '../../common/SkillList';
import styles from './SkillsStyles.module.css';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';

import { useTheme } from '../../common/ThemeContext';
function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;
  return (
    <section id="skills" className={styles.container}>
        <h1 className="sectionTitle">Skills</h1>
        <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="HTML" />
        <SkillList src={checkMarkIcon} skill="CSS" />
        <SkillList src={checkMarkIcon} skill="JavaScript" />
        <SkillList src={checkMarkIcon} skill="TypeScript" />
        <SkillList src={checkMarkIcon} skill="NodeJS" />  

        </div>
        <hr/>
        <div className={styles.skillList}>
          <SkillList src={checkMarkIcon} skill="React" />
          <SkillList src={checkMarkIcon} skill="Angular" />
          <SkillList src={checkMarkIcon} skill="Vue" />
          <SkillList src={checkMarkIcon} skill="NodeJS" />  

        </div>
        <hr/>
        <div className={styles.skillList}>
          <SkillList src={checkMarkIcon} skill="Git" />
          <SkillList src={checkMarkIcon} skill="Amazon Web Services (AWS)" />
          <SkillList src={checkMarkIcon} skill="Heroku" />
          <SkillList src={checkMarkIcon} skill="SQL" />
          
        </div>
        <hr/>
        
    </section>
);
}
export default Skills;
