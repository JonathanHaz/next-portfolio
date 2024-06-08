import styles from '@/styles/pages/aboutp.module.css'

const AboutPage: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.aboutContainer}>
                <div className={styles.about}>
                    <h1>About Me</h1>
                    <h2>Hi! I'm Jonathan, a full-stack developer from Israel.</h2>
                    <p>I honed my coding skills at IITC College's bootcamp and discovered my passion for design back in high school. I love creating slick websites and powerful web apps.</p>
                    <p>When I'm not buried in code, I'm either saving the world in video games or experimenting with new recipes in the kitchen. My culinary creations are as adventurous as my code!</p>
                </div>
                <div className={styles.imageContainer}>
                    {/* Add an image or any other content here */}
                </div>
            </div>
        </div>
    )
}

export default AboutPage;
