import styles from "@/app/page.module.css";
import './footer.css'
export const Footer = ()=>{
    return (
        <footer className='footer'>
            <div className={styles.container}>
                <div className='footer_wrapper'>
                    All other trademarks and copyrights are the property of their <br/>
                    respective owners. Use of these names, trademarks and brands <br/>
                    does not  imply endorsement.
                </div>
            </div>
        </footer>
    )
}