import styles from './Certificationstyles.module.css'
function Certification() {
  return (
    <section id="Certifications" className={styles.container}>
        <h1 className="sectionTitle">Certifications</h1>
        <div className={styles.CertificationContainer}>
                <a href={"https://www.credly.com/badges/89575fda-1d45-4fd5-9890-fc25d3bdf4bb/linked_in?t=s89cjd"} target="_blank">
                    
                    <h3 className="hover"  alt="aws">  AWS Certified Cloud Practitioner</h3>
                </a> 
                        
        </div>
        
        
            </section>
  )
}

export default Certification
