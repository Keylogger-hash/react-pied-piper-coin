import './MainItem.css'
import styles from "@/app/page.module.css";
import {ReactNode} from "react";
export interface MainItemProps{
    Header:string,
    ArrayText:ReactNode[]
}
export const MainItem = ({Header,ArrayText}:MainItemProps)=>{
    console.log(typeof(ArrayText))
    const ArrayTextNodes:ReactNode[] = ArrayText.map((text,index)=>{
        return (
            <p key={index}>
                {text}
            </p>
        )
    })
    return (
        <div className='main_content'>
            <div className={styles.container}>
                <div className='main_wrapper'>
                    <div className='main_header'>
                        {Header}
                    </div>
                    <div className='main_text'>
                        {ArrayTextNodes}
                        {/*<p>*/}
                        {/*    Beneath the flashy homepages of your favorite sites lurk Hooli™ and other evil*/}
                        {/*    corporations out to hoard and sell your most personal data.*/}
                        {/*</p>*/}
                        {/*<p>*/}
                        {/*    What was built to be the ultimate platform for the free sharing of knowledge*/}
                        {/*    has turned into a money-hungry monster feasting on our privacy and freedom.*/}
                        {/*</p>*/}
                        {/*<p>*/}
                        {/*    But fear not, for Pied Piper has the answer! And it’s simple:*/}
                        {/*    An autonomous peer-to-peer network featuring distributed storage powered by universal compression, accelerated*/}
                        {/*    scheduling allocation, and end-to-end encryption.*/}
                        {/*</p>*/}
                        {/*<p>Put even simpler — <strong>it’s the internet, completely decentralized</strong>.</p>*/}
                    </div>
                </div>
            </div>
        </div>
    )
}