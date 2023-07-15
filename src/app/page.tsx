import Image from 'next/image'
import styles from './page.module.css'
import {Footer} from '@/components/footer/footer';
import {Header} from '@/components/header/header';
import {Team} from "@/components/TeamItem/team";
import {MainItem,MainItemProps} from "@/components/MainItem/MainItem";
import {ImageItem,ImageItemProps} from "@/components/ImageItem/ImageItem";
import {ReactNode} from "react";

const ImageItemPropsData:ImageItemProps[] = [
    {
        Title:'PiperNet Is Here\n',
        ImageSrc:'/green.png',
        FontSize:72,
        AltSrc:'green'
    },
    {
        Title:'We’re in this together! All of our computers and phones join in a network to make the strongest supercomputer the world has ever seen.',
        ImageSrc:'/blue.png',
        FontSize:48,
        AltSrc:'blue'
    },
]
const MainItemPropsData:MainItemProps =
    {
        Header:'The Problem',
        ArrayText:[
            'Beneath the flashy homepages of your favorite sites lurk Hooli™ and other evil corporations out to hoard and sell your most personal data.\n',
            'What was built to be the ultimate platform for the free sharing of knowledge\n' +
            'has turned into a money-hungry monster feasting on our privacy and freedom.\n',
            'But fear not, for Pied Piper has the answer! And it’s simple:\n' +
            'An autonomous peer-to-peer network featuring distributed storage powered by universal compression, accelerated\n' +
            'scheduling allocation, and end-to-end encryption.\n',
            'Put even simpler — it’s the internet, completely decentralized.'
        ]
    }
const MainItemPropsData1: MainItemProps =
    {
        Header:'Introducing PiedPiperCoin',
        ArrayText:[
            'Pied Piper\'s new internet is built for users, by users. You supply the storage, compute, and networking resources that power our entire decentralized web.',
            'Now there\'s a way to give credit where credit is due. Compute credit, that is! The more you share your device resources, the more PiedPiperCoin you receive.',
            'Whether you\'re a developer with an app ready for market, or just an Average Joe with a smartphone you\'ll love all you can do with PiedPiperCoin.'
        ]
    }
// const ImageItems:ReactNode[] = ImageItemPropsData.map((item,index)=>{
//     return (
//         <ImageItem
//             {...item}
//             key={index}>
//         </ImageItem>
//     )
// })
export default function Home() {
  return (
    <div>
        <Header></Header>
      <main className={styles.main}>
          <ImageItem Title='Piper net' FontSize={72}  ImageSrc='/green.png' AltSrc='green'></ImageItem>
          <MainItem {...MainItemPropsData}></MainItem>
          <ImageItem Title='We’re in this together! All of our computers and phones join in a network to make the strongest supercomputer the world has ever seen.' FontSize={48} ImageSrc='/blue.png' AltSrc='blue'></ImageItem>
          <MainItem {...MainItemPropsData1}></MainItem>
      </main>
        <Team></Team>
        <Footer></Footer>
    </div>
  )
}
