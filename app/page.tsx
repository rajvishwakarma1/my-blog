import Link from "next/link";

import { allPosts } from "@/.contentlayer/generated";
import PostCard from "@/components/post-card";

export default function Home() {
  const posts = allPosts
    .sort((a, b) => {
      const aDate = new Date(a.date);
      const bDate = new Date(b.date);

      return bDate.getTime() - aDate.getTime();
    })
    .slice(0, 10);

  return (
    <article className="flex flex-col mt-16">
      <section className="mb-16">
        <h1 className="mb-4">Hello, my name is Raj.</h1>
        <p>
          I am a computer science student who enjoys learning new
          things and sharing them with others.
        </p>
        <p>
          A corner of Web where I share my thoughts, code snippets, and resources on topics that intrigue me.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="mb-4">Recent Notes</h2>
        <div className="mb-4">
          {posts.map((post) => (
            <PostCard
              key={post._id}
              slug={post.slug}
              title={post.title}
              date={post.date}
            />
          ))}
        </div>
        <Link href="/archives" className="btn block">
          Browse more
        </Link>
      </section>

      <section className="mb-16">
        <h2 className="mb-4">Connect</h2>
        <p>
        I always enjoy hearing from you! Whether it's praise, criticism, suggestions, or any thoughts on my notes, I welcome your feedback. Don't hesitate to send me an email, as I do read all of them. However, please understand that I may not be able to respond immediately or within a short timeframe. It's nothing personal; life can get busy at times.
        </p>
        <p>
        Here is how to connect with me: <a href="https://www.linkedin.com/in/raj-vishwakarma-689671223/">LinkedIn</a> • <a href="https://github.com/zionsenpai">Github</a> • <a href="mailto:rajvishwakarma0221@gmail.com">Email</a>
        </p>
      </section>
    </article>
  );
}
