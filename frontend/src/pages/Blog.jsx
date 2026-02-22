import React,{useState} from "react";
import { Link } from "react-router-dom";

const blogs = [
  {
    id: 1,
    title: "Building Confidence in Muslim Children",
    desc: "Helping children grow with strong Islamic identity builds confidence from within. When they know who they are as Muslims and understand their purpose, they feel secure, valued, and proud of their faith.",
    img: "/assets/blog/img1.jpeg",
  },
  {
    id: 2,
    title: "Teaching Tajweed  Honoring the Words of Allah",
    desc: "The Qur’an is not an ordinary book  it is the speech of Allah. Teaching children to recite it with Tajweed is teaching them to handle divine words with care, love, and respect, letting their voices carry beauty that reaches the heavens.",
    img: "/assets/blog/img2.jpeg",
  },
  {
    id: 3,
    title: "Raising Children with Love for the Qur’an",
    desc: "A child who grows up with the Qur’an grows up with light in their heart. The verses they memorize become comfort in sadness, guidance in confusion, and strength in times of weakness.",
    img: "/assets/blog/img3.jpeg",
  },
  {
    id: 4,
    title: "Building a Child’s Relationship with Allah",
    desc: "When children learn to make du’a, to whisper their worries to Allah, and to thank Him for their blessings, they grow up knowing they are never alone. Their Lord is always near, always listening.",
    img: "/assets/blog/img4.jpeg",
  },
  {
    id: 5,
    title: "Loving the Prophet Muhammad",
    desc: "Teaching children about the mercy, kindness, and character of the Prophet ﷺ plants love in their hearts. That love shapes how they speak, act, forgive, and care for others.",
    img: "/assets/blog/img5.jpeg",
  },
  {
    id: 6,
    title: "Family- A Mercy from Allah",
    desc: "The family is a gift and a responsibility. When homes are filled with prayer, kind words, and reminders of Allah, they become gardens of peace where faith grows naturally in young hearts.",
    img: "/assets/blog/img6.jpeg",
  },
  {
    id: 7,
    title: "Honoring Parents -A Path to Jannah",
    desc: "When children learn to respect, obey, and serve their parents with love, they walk a path that leads to the pleasure of Allah. A gentle word, a helping hand  these small acts carry great reward.",
    img: "/assets/blog/img7.jpeg",
  },
  {
    id: 8,
    title: "Modesty - The Beauty of the Believer",
    desc: "Haya (modesty) is not just in clothing, but in the heart, the tongue, and the actions. Teaching modesty helps children carry themselves with dignity, knowing Allah sees them at all times.",
    img: "/assets/blog/img8.jpeg",
  },{
    id: 9,
    title: "Good Character : The True Sign of Faith",
    desc: "A smiling face, kind speech, patience in anger, and forgiveness in hurt — these are the signs of a heart connected to Allah. True Islamic learning shines through character.",
    img: "/assets/blog/img9.jpeg",
  },{
    id: 10,
    title: "Teaching Sabr : Trusting Allah’s Plan",
    desc: "Life will have tests, but when children learn patience, they learn to trust that Allah’s plan is always wise. Sabr fills the heart with calmness even in storms.",
    img: "/assets/blog/img10.jpeg",
  },{
    id: 11,
    title: "Seeing Allah’s Blessings Everywhere",
    desc: "Teaching children to say Alhamdulillah helps them see blessings in the small and big things. Gratitude turns ordinary days into worship and fills life with contentment.",
    img: "/assets/blog/img11.jpeg",
  },{
    id: 12,
    title: "Growing with a Strong Muslim Identity",
    desc: "When children understand their faith, they walk with confidence and dignity. They know who they are, who their Lord is, and what their purpose in life is.",
    img: "/assets/blog/img12.jpeg",
  },{
    id: 13,
    title: "A Child’s First Connection to Allah",
    desc: "When a child stands in prayer, raising their small hands in du’a, it is a moment of pure beauty. Teaching Salah early builds a lifelong connection with the One who created them.",
    img: "/assets/blog/img13.jpeg",
  },{
    id: 14,
    title: "Choosing Good Friends",
    desc: "Righteous friends remind us of Allah, encourage good deeds, and protect us from harm. Teaching children to choose good company helps protect their faith.",
    img: "/assets/blog/img14.jpeg",
  },{
    id: 15,
    title: "Mercy and Forgiveness",
    desc: "A heart that forgives is a heart that resembles the mercy Allah shows us every day. Teaching children to forgive makes their hearts soft and beloved to Allah.",
    img: "/assets/blog/img15.jpeg",
  },{
    id: 16,
    title: "Making Islamic Learning Fun for Children",
    desc: "Using stories, activities, and interactive lessons helps children enjoy learning about Islam and stay engaged.",
    img: "/assets/blog/img16.jpeg",
  },{
    id: 17,
    title: "The Importance of Good Friends in Islam",
    desc: "Friends influence faith and character. Teaching children to choose righteous friends helps protect their values.",
    img: "/assets/blog/img17.jpeg",
  },{
    id: 18,
    title: "The Importance of Speaking Good or Staying Silent",
    desc: "Islam teaches us to guard our tongues. Teaching children to speak kindly and avoid hurtful words builds peaceful relationships.",
    img: "/assets/blog/img18.jpeg",
  },{
    id: 19,
    title: "Teaching Daily Duas to Children",
    desc: "Simple daily duas help children remember Allah throughout the day  before eating, sleeping, studying, or leaving home  turning ordinary moments into acts of worship.",
    img: "/assets/blog/img19.jpeg",
  },{
    id: 20,
    title: "The Honor and Blessing of Memorizing the Qur’an",
    desc: "To memorize the Qur’an is to carry the words of Allah within the heart. It is a gift that brings light to the soul, peace to the mind, and barakah to one’s life. A child or adult who memorizes the Qur’an is honored in this world and will be raised in ranks in the Hereafter, as the Qur’an becomes a companion, an intercessor, and a source of guidance on the Day we need it most.",
    img: "/assets/blog/img20.jpeg",
  },
];

export default function BlogPage() {

  const [openId, setOpenId] = useState(null);

  const shortText = (text, words = 25) => {
    const arr = text.split(" ");
    return arr.length > words
      ? arr.slice(0, words).join(" ") + "..."
      : text;
  };

  const toggleBlog = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div style={{ background: "#f5f5f5" }} className="py-5">
      <div className="container px-lg-5">

      <div className="text-center mb-5">
          <h2 className="fw-bold text-success">Our Blog</h2>

          <div
            className="mx-auto mt-3"
            style={{
              width: "90px",
              height: "4px",
              background: "linear-gradient(to right,#198754,#7ed6a5)",
              borderRadius: "20px",
            }}
          />
        </div>

        <div className="row g-4">

          {blogs.map((blog) => (
            <div className="col-lg-4 col-md-6" key={blog.id}>

              <div className="card border-0 rounded-4 shadow-sm h-100">

                <img
                  src={blog.img}
                  alt={blog.title}
                  className="card-img-top rounded-top-4"
                  style={{ height: "180px", objectFit: "cover" }}
                />

                <div className="card-body d-flex flex-column">

                  <h6 className="fw-semibold mb-2">{blog.title}</h6>

                  <p className="text small flex-grow-1">
                    {openId === blog.id
                      ? blog.desc
                      : shortText(blog.desc)}
                  </p>

                  <button
                    onClick={() => toggleBlog(blog.id)}
                    className="btn btn-link p-0 text-decoration-none fw-semibold"
                  >
                    {openId === blog.id ? "Show Less ↑" : "Read More →"}
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>
      </div>
    </div>
  );
}
