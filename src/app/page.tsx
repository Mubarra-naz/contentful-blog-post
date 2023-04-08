import Blog from "@/components/Blog";

async function getBlogs() {
  const res = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_KEY}&content_type=blog`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Invalid Reposnse from API");
  }

  return res.json();
}

export default async function Home() {
  const blogs = await getBlogs();

  const findBlogImg = (item: any) => {
    const asset = blogs.includes.Asset.find((a: any) => {
      return item.fields.image.sys.id == a.sys.id;
    });
    return asset ? `https:${asset.fields.file.url}` : "";
  };

  const findBlogAuthor = (item: any) => {
    const author = blogs.includes.Entry.find((e: any) => {
      return item.fields.createdBy.sys.id == e.sys.id;
    });
    return author ? author.fields.name : "";
  };
  return (
    <div className="mx-auto p-5 grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-8">
      {blogs.items.map((blog: any, index: number) => (
        <Blog
          key={index}
          title={blog.fields.title}
          description={blog.fields.description}
          img={findBlogImg(blog)}
          author={findBlogAuthor(blog)}
        />
      ))}
    </div>
  );
}
