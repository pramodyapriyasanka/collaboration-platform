import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import blogData from "./blogData";

const Blog = () => {
  return (
    <section
      id="blog"
      className="relative z-10 py-16 md:py-20 lg:py-28 overflow-hidden bg-[#090E16]"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/2 -z-10 h-full w-full -translate-x-1/2 opacity-30 blur-[120px]">
        <div className="absolute top-0 left-1/4 h-[300px] w-[300px] rounded-full bg-primary/20"></div>
        <div className="absolute bottom-0 right-1/4 h-[300px] w-[300px] rounded-full bg-blue-500/10"></div>
      </div>

      <div className="container">
        <SectionTitle
          title="Insights & Innovation"
          paragraph="Stay updated with the latest trends in team collaboration, enterprise security, and cloud-native performance."
          center
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogData.map((blog) => (
            <div key={blog.id} className="w-full">
              <SingleBlog blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;