const TagButton = ({ href = "#0", text }: { href?: string; text: string }) => {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-lg bg-white/5 px-4 py-2 text-sm font-medium text-white border border-white/10 duration-300 hover:bg-primary hover:border-primary hover:text-white"
    >
      {text}
    </a>
  );
};

export default TagButton;