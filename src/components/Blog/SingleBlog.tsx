import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { title, image, paragraph, author, tags, publishDate } = blog;
  return (
    <>
      <div className="group relative overflow-hidden rounded-2xl bg-white/[0.03] border border-white/10 p-4 duration-300 hover:bg-white/[0.05] hover:border-primary/50 shadow-2xl">
        <Link
          href="/blog-details"
          className="relative block aspect-[16/9] w-full overflow-hidden rounded-xl"
        >
          <span className="absolute top-4 right-4 z-20 inline-flex items-center justify-center rounded-lg bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
            {tags[0]}
          </span>
          <Image 
            src={image} 
            alt="blog-image" 
            fill 
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 duration-300" />
        </Link>
        
        <div className="mt-6 px-2">
          <h3>
            <Link
              href="/blog-details"
              className="mb-3 block text-xl font-bold text-white hover:text-primary sm:text-2xl transition-colors"
            >
              {title}
            </Link>
          </h3>
          <p className="mb-6 text-base font-medium text-body-color border-b border-white/10 pb-6">
            {paragraph}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-primary/20">
                <Image src={author.image} alt="author" fill />
              </div>
              <div className="ml-3">
                <h4 className="text-sm font-semibold text-white">
                  {author.name}
                </h4>
                <p className="text-[10px] text-body-color uppercase tracking-widest">
                  {author.designation}
                </p>
              </div>
            </div>
            <div className="text-right">
              <h4 className="text-[10px] font-bold text-primary uppercase tracking-widest">
                Published
              </h4>
              <p className="text-xs text-body-color">{publishDate}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;