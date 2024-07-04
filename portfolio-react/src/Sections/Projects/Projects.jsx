import styles from './ProjectsStyles.module.css';
import cricbuzz from '../../assets/cricbuzz.webp';
import ProjectCard from '../../common/ProjectCard';
import wine_quality from '../../assets/quality-in-wine.webp';
import multi_player_card from '../../assets/multiplayer_card_game.webp';
import rent_a_car from '../../assets/rent_a_car.jpg';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
        <h1 className="sectionTitle">Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard src ={cricbuzz } 
                        link= "https://github.com/zahooruddinmohammed/web-development"
                        h3="Cricbuzz API" p="API-Driven Web Development" />
            <ProjectCard src ={wine_quality} 
                        link= "https://github.com/zahooruddinmohammed/cloudcomp"
                        h3="Wine Quality prediction" p="AWS Spark Wine Quality Prediction Application" />
            <ProjectCard src ={multi_player_card } 
                        link= "https://github.com/zahooruddinmohammed/multiplayer-card-game-socketprogramming"
                        h3="Multiplayer card game" p="Multiplayer card game using socket programming" />
            <ProjectCard src ={rent_a_car } 
                        link= "https://github.com/zahooruddinmohammed/rent-a-car-database-management-project"
                        h3="Car renting" p="rent a car with Oracle SQL" />
                        
        </div>
        
        
            </section>
  );

}

export default Projects
