import React, { useEffect, useState } from 'react';
import { GraphQLClient, gql } from 'graphql-request';
import { Link } from 'react-router-dom';

const graphcms = new GraphQLClient(
  'https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clkaivn6w30cn01t51px644p2/master'
);

const QUERY = gql`
  {
    posts {
      id
      title
      slug
      coverPhoto {
        url
      }
      content {
        html
      }
      datePublished
      author {
        name
        avatar {
          url
        }
      }
    }
  }
`;

export default function BlogLayout() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await graphcms.request(QUERY);
        setPosts(data.posts);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className='bg-gray-900 min-h-screen h-max flex flex-col gap-4 p-4'>
      {posts.map((post) => (
        <Link to={`/blog/${post.slug}`} key={post.id}>
          <div className='bg-gray-700 rounded-xl p-4 max-w-md mx-auto shadow-lg transform transition duration-300 hover:scale-105'>
            {post.coverPhoto && (
              <img
                className='w-full h-44 object-cover rounded-xl shadow-lg mb-4'
                src={post.coverPhoto.url}
                alt='Cover'
              />
            )}
            <h2 className='text-yellow-300 font-beckman text-2xl text-center mb-2'>
              {post.title}
            </h2>
            <p className='text-blue-300 font-outfit text-center'>
              Date Published: {post.datePublished}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
