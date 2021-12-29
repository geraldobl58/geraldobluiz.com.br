export type PostsTemplateProps = {
  post: {
    date: string
    title: string
    slug: string
    description: {
      html: string
    }
  }
}

export default function PostsTemplate({ post }: PostsTemplateProps) {
  return (
    <>
      <span>{post.date}</span>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.description.html }} />
    </>
  )
}
