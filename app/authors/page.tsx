import { Container, Section } from "@/components/craft";
import { getAllAuthors } from "@/lib/wordpress";
import Image from "next/image";
import React from "react";

const Authors = async () => {
  const authors = await getAllAuthors();

  return (
    <Section>
      <Container>
        <h1>Authors</h1>
        <div className="grid grid-cols-3">
          {authors.map((author) => (
            <div
              key={author.id}
              className="flex items-center justify-center flex-col bg-gray-100 dark:bg-black dark:border dark:border-gray-100 m-2 p-5 rounded-xl dark:shadow-gray-100 shadow transition-all hover:shadow-xl hover:transition-all"
            >
              <Image
                src={`${author.avatar_urls["24"]}`}
                alt={author.name}
                width={60}
                height={60}
                className="rounded-full"
              />
              <h3 className="capitalize text-xl font-normal">{author.name}</h3>
              <span className="capitalize">
                {author.description ? author.description : "no description !"}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Authors;
