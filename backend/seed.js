// Seed script — populates MongoDB with original hardcoded data
import mongoose from "mongoose";
import dotenv from "dotenv";
import Blog from "./models/Blog.js";
import Testimonial from "./models/Testimonial.js";
import Course from "./models/Course.js";

dotenv.config();

const DB_URL = process.env.DB_URL || process.env.DB_URL_LOCAL;

const blogs = [
    { title: "Building Confidence in Muslim Children", desc: "Helping children grow with strong Islamic identity builds confidence from within. When they know who they are as Muslims and understand their purpose, they feel secure, valued, and proud of their faith.", image: "/assets/blog/img1.jpeg" },
    { title: "Teaching Tajweed  Honoring the Words of Allah", desc: "The Qur'an is not an ordinary book  it is the speech of Allah. Teaching children to recite it with Tajweed is teaching them to handle divine words with care, love, and respect, letting their voices carry beauty that reaches the heavens.", image: "/assets/blog/img2.jpeg" },
    { title: "Raising Children with Love for the Qur'an", desc: "A child who grows up with the Qur'an grows up with light in their heart. The verses they memorize become comfort in sadness, guidance in confusion, and strength in times of weakness.", image: "/assets/blog/img3.jpeg" },
    { title: "Building a Child's Relationship with Allah", desc: "When children learn to make du'a, to whisper their worries to Allah, and to thank Him for their blessings, they grow up knowing they are never alone. Their Lord is always near, always listening.", image: "/assets/blog/img4.jpeg" },
    { title: "Loving the Prophet Muhammad", desc: "Teaching children about the mercy, kindness, and character of the Prophet ﷺ plants love in their hearts. That love shapes how they speak, act, forgive, and care for others.", image: "/assets/blog/img5.jpeg" },
    { title: "Family- A Mercy from Allah", desc: "The family is a gift and a responsibility. When homes are filled with prayer, kind words, and reminders of Allah, they become gardens of peace where faith grows naturally in young hearts.", image: "/assets/blog/img6.jpeg" },
    { title: "Honoring Parents -A Path to Jannah", desc: "When children learn to respect, obey, and serve their parents with love, they walk a path that leads to the pleasure of Allah. A gentle word, a helping hand  these small acts carry great reward.", image: "/assets/blog/img7.jpeg" },
    { title: "Modesty - The Beauty of the Believer", desc: "Haya (modesty) is not just in clothing, but in the heart, the tongue, and the actions. Teaching modesty helps children carry themselves with dignity, knowing Allah sees them at all times.", image: "/assets/blog/img8.jpeg" },
    { title: "Good Character : The True Sign of Faith", desc: "A smiling face, kind speech, patience in anger, and forgiveness in hurt — these are the signs of a heart connected to Allah. True Islamic learning shines through character.", image: "/assets/blog/img9.jpeg" },
    { title: "Teaching Sabr : Trusting Allah's Plan", desc: "Life will have tests, but when children learn patience, they learn to trust that Allah's plan is always wise. Sabr fills the heart with calmness even in storms.", image: "/assets/blog/img10.jpeg" },
    { title: "Seeing Allah's Blessings Everywhere", desc: "Teaching children to say Alhamdulillah helps them see blessings in the small and big things. Gratitude turns ordinary days into worship and fills life with contentment.", image: "/assets/blog/img11.jpeg" },
    { title: "Growing with a Strong Muslim Identity", desc: "When children understand their faith, they walk with confidence and dignity. They know who they are, who their Lord is, and what their purpose in life is.", image: "/assets/blog/img12.jpeg" },
    { title: "A Child's First Connection to Allah", desc: "When a child stands in prayer, raising their small hands in du'a, it is a moment of pure beauty. Teaching Salah early builds a lifelong connection with the One who created them.", image: "/assets/blog/img13.jpeg" },
    { title: "Choosing Good Friends", desc: "Righteous friends remind us of Allah, encourage good deeds, and protect us from harm. Teaching children to choose good company helps protect their faith.", image: "/assets/blog/img14.jpeg" },
    { title: "Mercy and Forgiveness", desc: "A heart that forgives is a heart that resembles the mercy Allah shows us every day. Teaching children to forgive makes their hearts soft and beloved to Allah.", image: "/assets/blog/img15.jpeg" },
    { title: "Making Islamic Learning Fun for Children", desc: "Using stories, activities, and interactive lessons helps children enjoy learning about Islam and stay engaged.", image: "/assets/blog/img16.jpeg" },
    { title: "The Importance of Good Friends in Islam", desc: "Friends influence faith and character. Teaching children to choose righteous friends helps protect their values.", image: "/assets/blog/img17.jpeg" },
    { title: "The Importance of Speaking Good or Staying Silent", desc: "Islam teaches us to guard our tongues. Teaching children to speak kindly and avoid hurtful words builds peaceful relationships.", image: "/assets/blog/img18.jpeg" },
    { title: "Teaching Daily Duas to Children", desc: "Simple daily duas help children remember Allah throughout the day  before eating, sleeping, studying, or leaving home  turning ordinary moments into acts of worship.", image: "/assets/blog/img19.jpeg" },
    { title: "The Honor and Blessing of Memorizing the Qur'an", desc: "To memorize the Qur'an is to carry the words of Allah within the heart. It is a gift that brings light to the soul, peace to the mind, and barakah to one's life. A child or adult who memorizes the Qur'an is honored in this world and will be raised in ranks in the Hereafter, as the Qur'an becomes a companion, an intercessor, and a source of guidance on the Day we need it most.", image: "/assets/blog/img20.jpeg" },
];

const testimonials = [
    { name: "Ayat parent", role: "Parent", rating: 5, text: "Alhamdulillah, enrolling my child at Al-Amana Tarbiyah Academy has been one of the best decisions for our family. The online classes are well-organized, and the teachers truly care about both Islamic character and academic growth. I've seen my child become more confident in salah, duas, and daily manners. May Allah reward the team for their sincere efforts." },
    { name: "Aafiya parent", role: "Parent", rating: 5, text: "Before joining Al-Amana Tarbiyah Academy, I was shy in class. Now I feel more confident speaking and reading, especially in Quran class. My teachers encourage me and that helps a lot." },
    { name: "Sameeha parent", role: "Parent", rating: 4, text: "I am very happy and satisfied with the quran class. The teacher took extra care to make my daughter comfortable. I was not sure about online classes at first but MashaAllah seeing my daughter how fast she coped with the help of her wonderful teacher made me realize that this was the best decision. My daughter enjoys her classes." },
    { name: "Maria / Inaya", role: "Parent", rating: 5, text: "Alhamdulillah my daughter learns the Quran in a very positive environment with you...she is eager to join the classes as you keep on motivating the kids. You are dedicated and patient with the kids." },
    { name: "Yusuf Ali", role: "Student", rating: 5, text: "Classes are engaging and practical. I appreciate the guidance and supportive environment that encourages growth." },
];

const courses = [
    { title: "QURAN HIFDH", desc: "Kids learn step-by-step Quran memorization with expert teachers and structured daily revision system.", image: "/assets/demo.png", category: "child", order: 1 },
    { title: "BASIC ARABIC", desc: "Children learn Arabic reading, vocabulary building, sentence formation and grammar basics in fun way.", image: "/assets/demo.png", category: "child", order: 2 },
    { title: "NOORANI QAIDA", desc: "Beginner course designed for children to start Quran reading correctly with Tajweed practice.", image: "/assets/demo.png", category: "child", order: 3 },
];

async function seed() {
    try {
        await mongoose.connect(DB_URL);
        console.log("Connected to MongoDB");

        // Clear existing data
        await Blog.deleteMany({});
        await Testimonial.deleteMany({});
        await Course.deleteMany({});

        // Insert data
        await Blog.insertMany(blogs);
        console.log(`✅ Seeded ${blogs.length} blogs`);

        await Testimonial.insertMany(testimonials);
        console.log(`✅ Seeded ${testimonials.length} testimonials`);

        await Course.insertMany(courses);
        console.log(`✅ Seeded ${courses.length} courses`);

        console.log("\n🎉 Database seeded successfully!");
        process.exit(0);
    } catch (err) {
        console.error("Seed error:", err);
        process.exit(1);
    }
}

seed();
