import { getAllAuthors } from "@/lib/wordpress";
import Image from "next/image";
import React from "react";

const Authors = async () => {
  const authors = await getAllAuthors();

  //   console.log(authors[0]);

  return (
    <section className="flex justify-around items-center ">
      {authors.map((author) => (
        <div key={author.id}>
          <Image
            src={`${author.avatar_urls["24"]}`}
            alt={author.name}
            width={30}
            height={30}
          />
          <h2>{author.name}</h2>
          <span>
            {author.description ? author.description : "no description"}
          </span>
        </div>
      ))}
    </section>
  );
};

export default Authors;
