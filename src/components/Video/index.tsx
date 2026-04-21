"use client";

import VideoModal from "@/components/video-modal";
import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";

export default function Video() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <style>{`
        @keyframes pulseRing {
          0%   { transform: scale(1);   opacity: 0.6; }
          100% { transform: scale(2.2); opacity: 0; }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes floatY {
          0%, 100% { transform: translateY(0px) rotateX(0deg); }
          50%       { transform: translateY(-12px) rotateX(2deg); }
        }
        @keyframes glowBorder {
          0%, 100% { box-shadow: 0 0 0px 0px rgba(74,108,247,0); }
          50%       { box-shadow: 0 0 40px 8px rgba(74,108,247,0.35); }
        }
        @keyframes scanLight {
          0%   { top: -10%; opacity: 0.6; }
          100% { top: 110%; opacity: 0; }
        }

        .video-section-title {
          animation: fadeSlideUp 0.8s cubic-bezier(.16,1,.3,1) 0.1s both;
        }
        .video-frame-wrap {
          animation: fadeSlideUp 0.9s cubic-bezier(.16,1,.3,1) 0.25s both;
          perspective: 1000px;
        }
        .video-frame {
          animation: floatY 6s ease-in-out infinite, glowBorder 4s ease-in-out infinite;
          transform-style: preserve-3d;
          border-radius: 16px;
          overflow: hidden;
          transition: transform 0.4s ease;
        }
        .video-frame:hover {
          transform: translateY(-6px) rotateX(3deg) scale(1.015);
        }
        .play-btn {
          transition: transform 0.3s ease, background 0.3s ease;
        }
        .play-btn:hover {
          transform: scale(1.15);
          background: white !important;
        }
        .pulse-ring {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 3px solid rgba(255,255,255,0.6);
          animation: pulseRing 2s ease-out infinite;
        }
        .pulse-ring-2 {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 3px solid rgba(255,255,255,0.4);
          animation: pulseRing 2s ease-out 0.6s infinite;
        }
        .scan-light {
          position: absolute;
          left: 0;
          right: 0;
          height: 60px;
          background: linear-gradient(to bottom, transparent, rgba(255,255,255,0.06), transparent);
          animation: scanLight 4s ease-in-out infinite;
          pointer-events: none;
          z-index: 2;
        }
        .video-overlay-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(74,108,247,0.18) 0%,
            transparent 50%,
            rgba(74,108,247,0.10) 100%
          );
          pointer-events: none;
          z-index: 1;
        }
        .play-btn-wrap {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 80px;
          height: 80px;
        }
      `}</style>

      <section className="relative z-10 py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="video-section-title">
            <SectionTitle
              title="See Hela Ahasa in Action"
              paragraph="Watch how Sri Lankan teams are replacing multiple tools with one unified platform, saving time, cutting costs, and collaborating better."
              center
              mb="80px"
            />
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="video-frame-wrap mx-auto max-w-[770px]">
                <div className="video-frame">
                  <div className="relative aspect-77/40 items-center justify-center">

                    {/* thumbnail */}
                    <Image
                      src="/images/video/image.png"
                      alt="Hela Ahasa Demo Video"
                      className="object-cover"
                      fill
                    />

                    {/* colour overlay */}
                    <div className="video-overlay-gradient" />

                    {/* scan light effect */}
                    <div className="scan-light" />

                    {/* play button */}
                    <div className="absolute top-0 right-0 flex h-full w-full items-center justify-center z-10">
                      <button
                        aria-label="video play button"
                        onClick={() => setOpen(true)}
                        className="play-btn cursor-pointer"
                      >
                        <div className="play-btn-wrap">
                          <div className="pulse-ring" />
                          <div className="pulse-ring-2" />
                          <div className="text-primary flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white/80 hover:bg-white transition-all duration-300 relative z-10">
                            <svg
                              width="16"
                              height="18"
                              viewBox="0 0 16 18"
                              className="fill-current ml-1"
                            >
                              <path d="M15.5 8.13397C16.1667 8.51888 16.1667 9.48112 15.5 9.86602L2 17.6603C1.33333 18.0452 0.499999 17.564 0.499999 16.7942L0.5 1.20577C0.5 0.43597 1.33333 -0.0451549 2 0.339745L15.5 8.13397Z" />
                            </svg>
                          </div>
                        </div>
                      </button>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute right-0 bottom-0 left-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat" />
        </div>
      </section>

      <VideoModal
        isOpen={isOpen}
        onClose={() => setOpen(false)}
      />
    </>
  );
}