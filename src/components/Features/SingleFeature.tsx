import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full">
      <style>{`
        @keyframes fadeInUp3d {
          from { opacity: 0; transform: translateY(32px) rotateX(12deg); }
          to   { opacity: 1; transform: translateY(0px)  rotateX(0deg); }
        }
        .feature-card {
          perspective: 900px;
          transform-style: preserve-3d;
          transition: transform 0.35s cubic-bezier(.16,1,.3,1), box-shadow 0.35s ease;
          border-radius: 12px;
          padding: 8px;
        }
        .feature-card:hover {
          transform: translateY(-8px) rotateX(4deg) rotateY(-2deg) scale(1.03);
          box-shadow: 0 24px 48px rgba(74,108,247,0.13), 0 8px 16px rgba(0,0,0,0.08);
        }
        .feature-icon {
          transition: transform 0.35s cubic-bezier(.16,1,.3,1);
          transform-style: preserve-3d;
        }
        .feature-card:hover .feature-icon {
          transform: translateZ(16px) rotate(-6deg) scale(1.15);
        }
        .feature-title {
          transition: transform 0.3s ease, color 0.3s ease;
        }
        .feature-card:hover .feature-title {
          transform: translateZ(8px);
        }
      `}</style>

      <div className="wow fadeInUp feature-card" data-wow-delay=".15s">
        <div className="bg-primary/10 text-primary mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md feature-icon">
          {icon}
        </div>
        <h3 className="mb-5 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl dark:text-white feature-title">
          {title}
        </h3>
        <p className="text-body-color pr-[10px] text-base leading-relaxed font-medium">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;