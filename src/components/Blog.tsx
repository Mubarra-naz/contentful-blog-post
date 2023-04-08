import Image, { StaticImageData } from "next/image";
import React, { FC } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";

interface BlogPost {
  title: string;
  img: string;
  description: Document;
  author: string;
}
const Blog: FC<BlogPost> = ({ title, img, description, author }) => {
  return (
    <div className="bg-white rounded-xl text-black">
      <Image
        src={img}
        alt=""
        className="w-full object-cover rounded-t-xl h-60"
        width={100}
        height={100}
      />
      <div className="my-3 mx-7">
        <h3 className="font-bold text-xl text-teal-500">{title}</h3>
        <div className="text-base mt-5">
          {documentToReactComponents(description)}
        </div>
        <p className="font-medium text-lg mt-5 text-teal-700">{author}</p>
      </div>
    </div>
  );
};

export default Blog;
