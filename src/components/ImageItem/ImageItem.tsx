import './ImageItem.css'
import styles from '../../app/page.module.css'
import Image from 'next/image'
import {CSSProperties} from "react";
export interface  ImageItemProps{
    Title: string,
    FontSize: number,
    ImageSrc: string,
    AltSrc: string,
}

export const ImageItem = ({Title,FontSize,ImageSrc,AltSrc}:ImageItemProps)=>{
    const fontStyle = `${FontSize}px !important`
    const style:CSSProperties = {
        fontSize:fontStyle,
    }
    return(
        <div className='image_block'>
            <Image fill src={ImageSrc} alt={AltSrc} sizes="100%,483px">
            </Image>
            <div className='image_overlay'  style={style}>
                <div className={styles.container}>
                    <div className='image_text'>
                        {Title}
                    </div>
                </div>
            </div>
        </div>
    )
}