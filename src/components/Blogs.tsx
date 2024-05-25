"use client";
import React, { useState, useEffect } from "react";
import { BackgroundGradient } from "../components/ui/background-gradient";
import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { url } from "inspector";

const Blogs = () => {
  const router = useRouter();
  interface Blog {
    title: string;
    brief: string;
    url: string;
    coverImage: {
      url: string;
    };
  }

  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading , setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const endpoint = "https://gql.hashnode.com";
      const query = `
        query Publication {
          publication(host: "adnancodes01.hashnode.dev/") {
            isTeam
            title
            posts(first: 50) {
              edges {
                node {
                  title
                  brief
                  url
                  coverImage {
                    url
                  }
                }
              }
            }
          }
        }
      `;

      try {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ query }),
        });
        const { data, errors } = await response.json();
        if (errors) {
          throw new Error(errors[0].message);
        }
        if (
          !data ||
          !data.publication ||
          !data.publication.posts ||
          !data.publication.posts.edges
        ) {
          throw new Error("No blog data found");
        }
        const posts = data.publication.posts.edges.map(
          (edge: any) => edge.node
        );
        setBlogs(posts);
      } catch (error: any) {
        console.error("Error fetching data:", error);
        setError(error.message);
      }
      finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if(loading){
    return   <div className="wrapper ">
    <div className="circle"></div>
    <div className="circle"></div>
    <div className="circle"></div>
    <div className="shadow"></div>
    <div className="shadow"></div>
    <div className="shadow"></div>
  </div>
  }

  if (error) {
    return <p className="text-center text-red-500 text-xl">oops!! something went wrong</p>;
  }

 
  return (
    <>
    <h1 className='lg:text-2xl mb-10 sm:text-xl font-bold text-center'>
        My Hashnode {' '}
        <span className='text-purple'>Blogs</span>
      </h1>
    <div
      className="flex flex-wrap justify-center items-center gap-4 "
      id="blogs"

    >
     
      {blogs.map((blog, index) => (
        <BackgroundGradient
          key={index}
          className="rounded-[22px] flex flex-col items-center justify-center w-[300px] h-[400px] sm:h-[500px]  p-4 sm:p-10 bg-white dark:bg-zinc-900"
        >
          <img
            src={blog.coverImage.url}
            alt={blog.title}
            height="200"
            width="200"
            className="object-contain mt-4 rounded-lg"
          />
          <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
            {blog.title}
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 ">
            {blog.brief}
          </p>
          <button
            onClick={() => router.push(blog.url)}
            className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800"
          >
            <span className="text-base ">Read more</span>
          </button>
        </BackgroundGradient>
      ))}
    </div>
    </>
  );
};

export default Blogs;
