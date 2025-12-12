import 'react-photo-view/dist/react-photo-view.css';
import GalleryCard from './Cards/GalleryCard';

export default function AlertDetial() {
    const school = [
        {
            id: 1,
            title: 'Classroom',
            images: ['/assets/buddhist/image1.jpg', '/assets/buddhist/image2.jpg', '/assets/buddhist/image3.jpg', '/assets/buddhist/hero.JPG'],
            long_description: `Classrooms are designed to the standard sizes according to students' grade
levels; kindergarten, primary school, and high school. They are equipped with
quality chairs and tables; air conditioners, cameras, and teaching equipment
like smart boards, computers, LCD projectors, and whiteboards. Incorporated in
each class are the school and national motto, educational slogans, lesson
reviews, and educational images as part of the decoration of the classroom.`,
        },
        {
            id: 2,
            title: 'Library',
            images: ['/assets/buddhist/image1.jpg', '/assets/buddhist/image2.jpg', '/assets/buddhist/image3.jpg', '/assets/buddhist/hero.JPG'],
            long_description: `Libraries consist of a room filled with shelves and bookstands. They are
spacious and have air conditioners giving students the comfort they need
as they read the books. The librarian is also stationed at the entrance to
better accommodate the readers. Students are also allowed to borrow any
books with the librarian's permission. There are different subjects of the
books such as History, Geography, Science, English language and literature,
General Knowledge, and many more.`,
        },
        {
            id: 3,
            title: 'Science laboratory',
            images: ['/assets/buddhist/image1.jpg', '/assets/buddhist/image2.jpg', '/assets/buddhist/image3.jpg', '/assets/buddhist/hero.JPG'],
            long_description: `Science laboratories consist of different scientific apparatus used for practical
works carried out by the students. The scientific instruments and chemicals
are kept in a safe and secured storage room.
The laboratory is considered to be the main part of the practical work of
science teaching and it is an important place because students learn how to
handle different pieces of equipment and think independently. These
well-equipped and organized laboratories are a great help for science teachers
to develop students' scientific attitudes to a considerable extent.`,
        },
        {
            id: 4,
            title: 'School Outdoor Environment',
            images: ['/assets/buddhist/image1.jpg', '/assets/buddhist/image2.jpg', '/assets/buddhist/image3.jpg', '/assets/buddhist/hero.JPG'],
            long_description: `Outdoor play areas of the school provide a safe environment for students to use
their creative energy, enjoy and interact with each other. All the campuses have
a presence of nature for cleaner and healthier air, and they also help protect
students from the sun's heat. These outdoor play areas ensure the students
remain healthy by being physically active.`,
        },
        {
            id: 5,
            title: 'Indoor Playgrounds',
            images: ['/assets/buddhist/image1.jpg', '/assets/buddhist/image2.jpg', '/assets/buddhist/image3.jpg', '/assets/buddhist/hero.JPG'],
            long_description: `Indoor Playgrounds allow students to play, do fun activities, and explore in a
safe and secure environment. The rooms are filled with different educational
toys and equipment that students can use to learn while playing around. It is
also designed in a way that is visually attractive to the kids.`,
        },
        {
            id: 6,
            title: 'Canteen',
            images: ['/assets/buddhist/image1.jpg', '/assets/buddhist/image2.jpg', '/assets/buddhist/image3.jpg', '/assets/buddhist/hero.JPG'],
            long_description: `The design of canteens varies according to the different grade levels of the
students. The rooms are big and can hold many tables and chairs to
accommodate all the students. The school provides food for all grade levels,
from Nursery to Grade 12. All the equipment is kept well-maintained and
cleaned to guarantee the safety of the student's health.`,
        },
        {
            id: 7,
            title: 'Music and Dance room',
            images: ['/assets/buddhist/image1.jpg', '/assets/buddhist/image2.jpg', '/assets/buddhist/image3.jpg', '/assets/buddhist/hero.JPG'],
            long_description: `Music and Dance classes are offered in some grade levels. The rooms
equipped with musical instruments such as pianos and guitars, and there is
also a room with complete musical instruments for the school band and
students to practice. A dance room with a full-size mirror and sound system
is also provided for students to enhance their dancing skills.`,
        },
    ];

    const firstRow = school.slice(0, 3); // first 3 items
    const secondRow = school.slice(3, 7); // next 4 items

    return (
        <div className="section-container mt-10 space-y-6">
            {/* FIRST ROW — 3 columns */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {firstRow.map((item) => (
                    <GalleryCard key={item.id} item={item} />
                ))}
            </div>

            {/* SECOND ROW — 4 columns */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                {secondRow.map((item) => (
                    <GalleryCard key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
}
