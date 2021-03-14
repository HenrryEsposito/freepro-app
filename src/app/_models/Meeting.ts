import { Batch } from './Batch';
import { Hoster } from './Hoster';
import { SocialNetwork } from './SocialNetwork';


export interface Meeting {
    id: number;
    place: string;
    meetingDate: Date;
    theme: string;
    invited: number;
    phone: string;
    batches: Batch[];
    imgUrl: string;
    socialNetworks: SocialNetwork[];
    hosters: Hoster[];
}
