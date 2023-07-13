import Image from 'next/image'
import styles from './page.module.css'
export default function Home() {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.container}>
            <div className={styles.header_wrapper}>
                <div>
                    <svg width="184" height="45" viewBox="0 0 184 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M45.0684 0C45.0684 0 30.6934 6.71121 26.3032 16.7974C23.9721 22.1897 23.3893 28.6681 19.1545 32.7414C16.2407 35.5345 12.1613 36.5819 8.58697 38.4052C6.25589 39.6078 1.90454 42.4785 0.0396729 45.0388H33.0633C39.7069 45.0388 45.0684 39.6853 45.0684 33.0517V0ZM61.7356 23.5474V15.0129C61.7356 14.819 61.891 14.6638 62.0853 14.6638H67.4856C68.4957 14.6638 69.3505 15.0905 69.3505 16.5259V23.2759C69.3505 24.3233 68.4957 25.1379 67.4856 25.1379H63.2508C62.4349 25.0216 61.7745 24.3621 61.7356 23.5474ZM59.9873 12.0647C59.4045 12.0647 58.9772 12.4914 58.9772 13.0345V35.3793H61.3471C61.5414 35.3793 61.6968 35.2241 61.6968 35.0302V26.7285C62.0853 27.2328 62.8623 27.7371 63.8336 27.7371H67.4468C69.9721 27.7371 72.0312 25.9526 72.0312 23.3147V16.4871C72.0312 13.3836 69.9721 12.0647 67.4468 12.0647H59.9873ZM75.9164 12.0647V27.3879C75.9164 27.5819 76.0718 27.7371 76.266 27.7371H78.6359V12.375C78.6359 12.181 78.4805 12.0647 78.2863 12.0647H75.9164ZM75.9164 5.0431V7.60345C75.9164 7.79741 76.0718 7.95259 76.266 7.95259H78.6359V5.39224C78.6359 5.19828 78.4805 5.0431 78.2863 5.0431H75.9164ZM85.3184 18.194V16.4871C85.3184 15.2457 86.1343 14.625 87.1832 14.625H91.4957C92.739 14.625 93.3218 15.2069 93.3218 16.4871V18.194C93.3218 18.3879 93.1664 18.5431 92.9721 18.5431H85.668C85.4349 18.5043 85.3184 18.3491 85.3184 18.194ZM87.1832 12.0647C84.6579 12.0647 82.5988 13.6164 82.5988 16.5259V23.1595C82.5988 25.681 84.619 27.7371 87.1832 27.7371H95.3032V25.4871C95.3032 25.2931 95.1478 25.1379 94.9535 25.1379H87.1832C86.1343 25.1379 85.3184 24.3233 85.3184 23.2759V20.4828C85.5903 20.8707 86.0566 21.0647 86.5616 21.0647H95.1478C95.8859 21.0647 95.9636 20.6379 95.9636 20.0948V16.4871C95.9636 13.5776 93.9434 12.0259 91.3792 12.0259H87.1832V12.0647ZM102.258 23.2759V16.5259C102.258 15.4784 103.073 14.6638 104.122 14.6638H108.357C109.134 14.7414 109.795 15.4009 109.872 16.2543V24.7888C109.872 24.9828 109.717 25.0991 109.523 25.0991H104.122C103.073 25.1379 102.258 24.3233 102.258 23.2759ZM110.183 4.22845C109.989 4.22845 109.834 4.38362 109.834 4.57759V13.0733C109.445 12.5302 108.668 12.0647 107.658 12.0647H104.006C101.481 12.0647 99.4991 14.0819 99.4991 16.6422V23.1595C99.4991 25.681 101.519 27.7371 104.084 27.7371H111.543C112.126 27.7371 112.553 27.3103 112.553 26.7285V4.22845H110.183ZM120.557 23.5474V15.0129C120.557 14.819 120.712 14.6638 120.906 14.6638H126.268C127.278 14.6638 128.133 15.0905 128.133 16.5259V23.2759C128.133 24.3233 127.278 25.1379 126.268 25.1379H122.033C121.217 25.0216 120.595 24.3621 120.557 23.5474ZM118.808 12.0647C118.225 12.0647 117.798 12.4914 117.798 13.0345V35.3793H120.168C120.362 35.3793 120.518 35.2241 120.518 35.0302V26.7285C120.906 27.2328 121.683 27.7371 122.655 27.7371H126.268C128.793 27.7371 130.852 25.9526 130.852 23.3147V16.4871C130.852 13.3836 128.793 12.0647 126.268 12.0647H118.808ZM134.737 12.0647V27.3879C134.737 27.5819 134.893 27.7371 135.087 27.7371H137.457V12.375C137.457 12.181 137.301 12.0647 137.107 12.0647H134.737ZM134.737 5.0431V7.60345C134.737 7.79741 134.893 7.95259 135.087 7.95259H137.457V5.39224C137.457 5.19828 137.301 5.0431 137.107 5.0431H134.737ZM144.217 23.5474V15.0129C144.217 14.819 144.372 14.6638 144.567 14.6638H149.967C150.977 14.6638 151.832 15.0905 151.832 16.5259V23.2759C151.832 24.3233 150.977 25.1379 149.967 25.1379H145.732C144.916 25.0216 144.295 24.3621 144.217 23.5474ZM142.508 12.0647C141.925 12.0647 141.497 12.4914 141.497 13.0345V35.3793H143.867C144.062 35.3793 144.217 35.2241 144.217 35.0302V26.7285C144.606 27.2328 145.383 27.7371 146.354 27.7371H149.967C152.492 27.7371 154.551 25.9526 154.551 23.3147V16.4871C154.551 13.3836 152.492 12.0647 149.967 12.0647H142.508ZM161.04 18.194V16.4871C161.04 15.2457 161.856 14.625 162.905 14.625H167.217C168.421 14.625 169.043 15.2069 169.043 16.4871V18.194C169.043 18.3879 168.888 18.5431 168.693 18.5431H161.389C161.156 18.5043 161.04 18.3491 161.04 18.194ZM162.905 12.0647C160.379 12.0647 158.32 13.6164 158.32 16.5259V23.1595C158.32 25.681 160.34 27.7371 162.905 27.7371H171.024V25.4871C171.024 25.2931 170.869 25.1379 170.675 25.1379H162.905C161.856 25.1379 161.04 24.3233 161.04 23.2759V20.4828C161.312 20.8707 161.778 21.0647 162.244 21.0647H170.83C171.568 21.0647 171.646 20.6379 171.646 20.0948V16.4871C171.646 13.5776 169.626 12.0259 167.062 12.0259H162.905V12.0647ZM180.349 12.0647C179.378 12.0647 178.6 12.5302 178.212 13.0733V12.375C178.212 12.181 178.057 12.0647 177.862 12.0647H175.492V27.3879C175.492 27.5819 175.648 27.7371 175.842 27.7371H178.212V16.0991C178.29 15.3621 178.872 14.7026 179.727 14.7026H183.651C183.845 14.7026 184.001 14.5474 184.001 14.3534V12.1034H180.349V12.0647Z" fill="white"/>
                    </svg>
                </div>
                <div className={styles.header_block}>
                    <div>
                        the problem
                    </div>
                    <div>
                        |
                    </div>
                    <div>
                        PiedPiperCoin
                    </div>
                    <div>
                        |
                    </div>
                    <div>
                        the team
                    </div>
                </div>
            </div>
        </div>
      </header>
      <main>

            <div className={styles.main_content}>
                <div className={styles.main_wrapper}>
                    <div className={styles.main_header}>
                        The Problem
                    </div>
                    <div className={styles.main_text}>
                        Beneath the flashy homepages of your favorite sites lurk Hooli™ and other evil <br/>
                        corporations out to hoard and sell your most personal data. <br/>

                        What was built to be the ultimate platform for the free sharing of knowledge  <br/>
                        has turned into a money-hungry monster feasting on our privacy and freedom.

                        But fear not, for Pied Piper has the answer! And it’s simple: <br/>
                        An autonomous peer-to-peer network featuring distributed storage powered by universal compression, accelerated  <br/>
                        scheduling allocation, and end-to-end encryption. <br/>

                        Put even simpler — <strong>it’s the internet, completely decentralized</strong>.
                    </div>
                </div>
          </div>
          <div className={styles.main_content}>
              <div className={styles.main_wrapper}>
                  <div className={styles.main_header}>
                      Introducing PiedPiperCoin
                  </div>
                  <div className={styles.main_text}>
                      Beneath the flashy homepages of your favorite sites lurk Hooli™ and other evil <br/>
                      corporations out to hoard and sell your most personal data. <br/>

                      What was built to be the ultimate platform for the free sharing of knowledge  <br/>
                      has turned into a money-hungry monster feasting on our privacy and freedom.

                      But fear not, for Pied Piper has the answer! And it’s simple: <br/>
                      An autonomous peer-to-peer network featuring distributed storage powered by universal compression, accelerated  <br/>
                      scheduling allocation, and end-to-end encryption. <br/>

                      Put even simpler — <strong>it’s the internet, completely decentralized</strong>.
                  </div>
              </div>
          </div>
      </main>
      <footer className={styles.footer}>
          <div className={styles.container}>
              <div className={styles.footer_wrapper}>
                  All other trademarks and copyrights are the property of their <br/>
                  respective owners. Use of these names, trademarks and brands <br/>
                  does not  imply endorsement.
              </div>
          </div>
      </footer>
    </div>
  )
}
