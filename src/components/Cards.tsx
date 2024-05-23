"use client"
import React, { useState, useEffect } from 'react';
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  interface Blog {
    title: string;
    brief: string;
    url: string;
    
  }
  const [blogs, setBlogs] = useState<Blog[]>([]);


  useEffect(() => {
    const fetchData = async () => {
      const endpoint = 'https://gql.hashnode.com';
      const query = `
        query Publication {
          publication(host: "adnancodes01.hashnode.dev/") {
            isTeam
            title
            posts(first: 10) {
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
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ query }),
        });
        const { data, errors } = await response.json();
        if (errors) {
          throw new Error(errors[0].message);
        }
        if (!data || !data.publication || !data.publication.posts || !data.publication.posts.edges) {
          throw new Error('No blog data found');
        }
        const posts = data.publication.posts.edges.map((edge: any) => edge.node);
        console.log(posts)
        setBlogs(posts);
      } catch (error) {
        console.error('Error fetching data:', error);
        
      }
    };

    fetchData();
  }, []);

  

  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={blogs}
        direction="right"
        speed="fast"
      />
    </div>
  );
}

