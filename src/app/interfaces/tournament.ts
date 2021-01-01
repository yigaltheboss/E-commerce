import { member } from "./member";

export interface tournament {
    _id: string,
    title: string,
    startTime: string,
    image: string,
    startDate: string,
    participats: member[],
    participatsLimit: number,
    timeZone: string,
    startHours: number,
    startMinutes: number
    entryPrice: number,
    prizePrice: number,
    currency: string
}