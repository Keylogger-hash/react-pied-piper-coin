import styles from "@/app/page.module.css";
import './team.css'
import {TeamMember,TeamMemberProps} from "@/components/TeamItem/TeamMember/TeamMember";
import {ReactNode} from "react";

const TeamMembersData:TeamMemberProps[] = [
    {
        ImageSrc:'/Team/RichardHendriks.png',
        Position:'Founder & CEO',
        Name:'Richard Hendricks',
    },
    {
        ImageSrc:'/Team/DineshChugtai.png',
        Position:'Senior Programmer',
        Name:'Dinesh Chugtai',
    },
    {
        ImageSrc:'/Team/BertramGilfoyle.png',
        Position:'Chief Systems Architect',
        Name:'Bertram Gilfoyle',
    },
    {
        ImageSrc:'/Team/JaredDunn.png',
        Position:'Chief Operating Officer',
        Name:'Jared Dunn',
    },
    {
        ImageSrc:'/Team/MonicaHall.png',
        Position:'Chief Financial Officer',
        Name:'Monica Hall',
    },
    {
        ImageSrc:'/Team/NelsonBighetti.png',
        Position:'Majority Investor',
        Name:'Nelson Bighetti',
    }
]

const TeamMembersItems:ReactNode[] = TeamMembersData.map((item,index)=>{
    return(
        <TeamMember Name={item.Name} ImageSrc={item.ImageSrc} Position={item.Position} key={index}></TeamMember>
    )
})
export const Team = ()=>{
    return (
        <section className='section'>
            <div className={styles.container}>
                <div className='section_wrapper'>
                    <div className='section_header'>
                        The team
                    </div>
                    <div className='section_content'>
                        {TeamMembersItems}
                    </div>
                </div>
            </div>
        </section>
    )
}