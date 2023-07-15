import Image from 'next/image';
import './TeamMember.css'
export interface TeamMemberProps{
    Name: string,
    ImageSrc: string,
    Position: string
}

export const TeamMember = ({Name,ImageSrc,Position}:TeamMemberProps)=>{
    return(
        <div className='team_member_item'>
            <Image src={ImageSrc} alt={Name} width={168} height={168}></Image>
            <p className='team_member_name'>{Name}</p>
            <p className='team_member_position'>{Position}</p>
        </div>
    )
}