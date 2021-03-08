import { SocialNetwork } from './SocialNetwork';
import { Meeting } from './Meeting';


export interface Hoster {
    id: number;
    name: string;
    miniCV: string;
    imgUrl: string;
    phone: string;
    email: string;
    socialNetworks: SocialNetwork[];
    meetings: Meeting[];
}
