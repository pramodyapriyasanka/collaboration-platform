import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "For Productivity, Collaboration is Key.",
    paragraph:
      "Learn how a unified workspace can bridge communication gaps and bring your entire team onto a single, high performance platform built for modern efficiency.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["creative"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "For Security, Cloud-Native is the Future.",
    paragraph:
      "Data protection is no longer optional. Explore the core principles of securing your business assets within a cloud-native ecosystem designed for maximum reliability and performance.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Musharof Chy",
      image: "/images/blog/author-02.png",
      designation: "Content Writer",
    },
    tags: ["computer"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "For Cloud/Technology, Speed is Everything.",
    paragraph:
      "Speed is the backbone of efficiency. Explore how modern cloud architecture ensures zero latency and seamless scalability for businesses of any size.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["design"],
    publishDate: "2025",
  },
];
export default blogData;
