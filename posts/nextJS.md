---
    title: 'NextJS'
    image: 'nextJS.png'
    excerpt: 'NextJS is a React framework for production'
    date: '2022-04-22'
    slug: 'nextJS'
    isFeatured: true
---

# Difference between `getStaticProps` and `getServerSideProps`

The main difference between them is **when they are ran**.

_getServerSideProps_ is ran when every new request is made to the page.

```
export const getServerSideProps = async (context) => {
    const {postId} = context.params
    const post = await getPosts(postId)

    return {
        props: {
           post
        }
    }

}

export const Post = ({ post }) => {
    return (
        <div>
            <h1>{post.title}</h1>
        </div>
    )
}
```

_getStaticProps_ is ran at build time.

```
export const getStaticProps = async () => {
    const blogPosts = await getBlogPosts()

    return {
        props: {
            blogPosts
        }
    }
}

export const Home = ({ blogPosts }) => {
    return (
        <div>
            {blogPosts.map(post => (
                <h1>{post.name}</h1>
            ))}
        </div>
    )
}
```

![nextJS](nextJS.png)
