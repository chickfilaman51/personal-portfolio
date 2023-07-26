import React, { useEffect, useState } from 'react';
import { GraphQLClient, gql } from 'graphql-request';
import { useParams } from 'react-router-dom'; // Import useParams hook

const graphcms = new GraphQLClient(
    'https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clkaivn6w30cn01t51px644p2/master'
);

const QUERY = gql`
    query GetPostBySlug($slug: String!) {
        post(where: { slug: $slug }) {
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

export default function IndividualBlog() {
    const [post, setPost] = useState(null);
    const { slug } = useParams(); // Use useParams hook to access the slug from the URL

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await graphcms.request(QUERY, { slug });
                setPost(data.post);
            } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    fetchData();
    }, [slug]);

    return (
        <div className='bg-gray-900 pt-4 text-white '>
            {post && (
                <div className="space-y-6 min-h-screen h-max flex text-center flex-col items-center" key={post.id}>
                    {post.coverPhoto && <img src={post.coverPhoto.url} alt="Cover" />}
                    <h2 className='font-beckman text-3xl'>{post.title}</h2>
                    <p className='font-outfit'>Date Published: {post.datePublished}</p>
                    <p className='font-outfit flex flex-row gap-1'><img className = "w-7" src={post.author.avatar.url}></img> {post.author.name}</p>
                <div className="max-w-2xl" dangerouslySetInnerHTML={{ __html: post.content.html }} />
                </div>
            )}
        </div>
    );
}
