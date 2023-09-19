import MCCFrontSmall from '../assets/mcc-front-small.png';
import MCCFront from '../assets/mcc-front.jpg';
import Bonfire from '../assets/bonfire.jpg';
import Tech from '../assets/tech.jpg';
import Books from '../assets/books.jpg';
import ParkingLot from '../assets/parking-lot.jpg';

export const images = [MCCFrontSmall, MCCFrontSmall, MCCFrontSmall, MCCFrontSmall];

export const desktopImages = [
    {
        image: MCCFront,
        title: "Summer 2023 at Muslim Community Center",
        text: "Experience Summer 2023 at the Muslim Community Center! We're offering a diverse range of programs tailored for every family member. Recognizing that many desire to delve into Islamic teachings but can't commit full-time, our weekly classes are designed to accommodate your schedule, all within the masjid.",
    },
    {
        image: Bonfire,
        title: "Sisters' Summer Bonfire and Potluck",
        text: "Join the Muslim Sisters' Alliance for an enchanting evening by the bonfire! We are excited to host the Sisters' Summer Bonfire and Potluck on Friday, August 19th, at 6 PM. Dive into heartwarming conversations and strengthen community bonds - don't miss out on this evening of sisterhood!"
    },
    {
        image: Tech,
        title: "AWS Cloud Training at MCC",
        text: "MCC IT Academy is proud to announce its AWS Cloud Training, commencing on September 2nd, 2023. Grasp the opportunity to enhance your technical skills and dive deep into the world of cloud computing. Stay ahead of the curve and enrich your knowledge with our hands-on training sessions."
    },
    {
        image: Books,
        title: "Sunday School Registration",
        text: "It's that time of year again! MCC Sunday School is excited to open registrations for the 2023-2024 academic year. Whether you're a returning student or new to our community, we welcome all to join our family of learning. Reserve your spot today and embark on a spiritual journey with us!"
    },
    {
        image: ParkingLot,
        title: "MCC Driveway and Parking Lot Repavement",
        text: "Following our Ramadan fundraiser, we're moving forward with our driveway and parking lot renovation. We appreciate your support and patience during this time. With these improvements, we aim to serve the MCC community even better. Stay tuned for more details!"
    }
];

const generateRecurringEvents = () => {
    const today = new Date();
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const recurringEvents = daysOfWeek.map((dayName, index) => {
        const eventDate = new Date(today);
        eventDate.setDate(today.getDate() + (index - today.getDay() + 7) % 7);
        const dateStr = eventDate.toISOString().split('T')[0];
        
        const eventsForDay = [];
        if (dayName === 'Monday') {
        eventsForDay.push({ name: 'Fajr Halaqah', date: dateStr, startTime: `${dateStr}T05:30:00` });
        eventsForDay.push({ name: 'Sirah Study', date: dateStr, startTime: `${dateStr}T19:30:00` });
        } else if (dayName === 'Tuesday') {
        eventsForDay.push({ name: 'Tazkiyah Tuesdays', date: dateStr, startTime: `${dateStr}T07:30:00` });
        } else if (dayName === 'Wednesday') {
        eventsForDay.push({ name: 'Hadith Study', date: dateStr, startTime: `${dateStr}T19:30:00` });
        } else if (dayName === 'Thursday') {
        eventsForDay.push({ name: 'YAP Book Club', date: dateStr, startTime: `${dateStr}T07:30:00` });
        } else if (dayName === 'Friday') {
        eventsForDay.push({ name: "1st Jumu'ah", date: dateStr, startTime: `${dateStr}T13:00:00` });
        eventsForDay.push({ name: "2nd Jumu'ah", date: dateStr, startTime: `${dateStr}T14:00:00` });
        eventsForDay.push({ name: 'MYO Halaqah', date: dateStr, startTime: `${dateStr}T18:00:00` });
        } else if (dayName === 'Saturday') {
        eventsForDay.push({ name: 'Breakfast Club', date: dateStr, startTime: `${dateStr}T09:00:00` });
        eventsForDay.push({ name: 'MCC Cleanup', date: dateStr, startTime: `${dateStr}T11:00:00` });
        } else if (dayName === 'Sunday') {
        eventsForDay.push({ name: 'Family Picnic', date: dateStr, startTime: `${dateStr}T12:00:00` });
        }
        
        eventsForDay.push({ name: 'Islamic Studies', date: dateStr, startTime: `${dateStr}T16:00:00` });
        eventsForDay.push({ name: "Qur'an Program", date: dateStr, startTime: `${dateStr}T17:00:00` });
        
        return eventsForDay;
    }).flat();

    return recurringEvents;
};
  
export const events = generateRecurringEvents();
  