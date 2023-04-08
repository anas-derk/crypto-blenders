import member1Image from "../../Assets/Images/member1.jpeg";
import member2Image from "../../Assets/Images/member2.jpeg";
import member3Image from "../../Assets/Images/member3.jpeg";
import member4Image from "../../Assets/Images/member4.jpeg";
import member5Image from "../../Assets/Images/member5.jpeg";
import member6Image from "../../Assets/Images/member6.jpeg";
import member7Image from "../../Assets/Images/member7.jpeg";
import member8Image from "../../Assets/Images/member8.jpeg";
import { FaTelegramPlane } from "react-icons/fa";
import { RxTwitterLogo } from "react-icons/rx";
import { BsInstagram } from "react-icons/bs";

const our_team_info_list = [
    {
        id: 1,
        imageSrc: member1Image,
        memberName: "Ali Naaman (Guevara)",
        memberSpecialist: "CEO/FOUNDER",
        memberContactLinks: [
            "https://t.me/Mohammeddibeh",
            "https://twitter.com/Gue7ara1",
            "https://instagram.com/gue7ara",
        ],
        contactLinksIcons: [
            <FaTelegramPlane />,
            <RxTwitterLogo />,
            <BsInstagram />,
        ],
    },
    {
        id: 2,
        imageSrc: member2Image,
        memberName: "AAli Maa'rouf",
        memberSpecialist: "CEO-FOUNDER",
        memberContactLinks: [
            "https://t.me/Ma3arouf",
            "https://twitter.com/ali__maarouf",
            "https://instagram.com/ali__ma3rouf",
        ],
        contactLinksIcons: [
            <FaTelegramPlane />,
            <RxTwitterLogo />,
            <BsInstagram />,
        ],
    },
    {
        id: 3,
        imageSrc: member3Image,
        memberName: "Emad Muhammed",
        memberSpecialist: "CFO",
        memberContactLinks: [
            "https://t.me/Emad11mu",
        ],
        contactLinksIcons: [
            <FaTelegramPlane />,
        ],
    },
    {
        id: 4,
        imageSrc: member4Image,
        memberName: "Fares Jabbour",
        memberSpecialist: "TEAM MEMBER",
        memberContactLinks: [
            "https://t.me/Faresjabbour",
        ],
        contactLinksIcons: [
            <FaTelegramPlane />,
        ],
    },
    {
        id: 5,
        imageSrc: member5Image,
        memberName: "Dr.Hassan Taha",
        memberSpecialist: "CRYPTO ANALYST",
        memberContactLinks: [
            "https://t.me/Dr_1Hassan",
        ],
        contactLinksIcons: [
            <FaTelegramPlane />,
        ],
    },
    {
        id: 6,
        imageSrc: member6Image,
        memberName: "Yazan Shaaban",
        memberSpecialist: "CMO",
        memberContactLinks: [
            "https://t.me/Yazansh963",
            "https://twitter.com/YazanShaaban2",
        ],
        contactLinksIcons: [
            <FaTelegramPlane />,
            <RxTwitterLogo />,
        ],
    },
    {
        id: 7,
        imageSrc: member7Image,
        memberName: "Muhammed Dibeh",
        memberSpecialist: "TEAM MEMBER",
        memberContactLinks: [
            "https://t.me/Mohammeddibeh",
            "https://twitter.com/Mohammed6724558?t=1uX-EvtyQJnmj9WzDZK5Eg&s=09",
            "https://instagram.com/mohammed_dibeh_880",
        ],
        contactLinksIcons: [
            <FaTelegramPlane />,
            <RxTwitterLogo />,
            <BsInstagram />,
        ],
    },
    {
        id: 8,
        imageSrc: member8Image,
        memberName: "Lara Tarraf",
        memberSpecialist: "GRAPHIC DESIGNER",
        memberContactLinks: [
            "https://t.me/Larasop",
        ],
        contactLinksIcons: [
            <FaTelegramPlane />,
        ],
    },
];

export default our_team_info_list;