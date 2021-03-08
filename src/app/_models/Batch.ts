export interface Batch {
    id: number;
    name: string;
    price: number;
    startDate?: Date;
    endDate?: Date;
    amount: number;
    meetingId: number;
}
