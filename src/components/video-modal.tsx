import { createPortal } from "react-dom";

type PropsType = {
  isOpen: boolean;
  onClose: () => void;
};

export default function VideoModal({ isOpen, onClose }: PropsType) {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black/60">
      <div className="relative w-full max-w-4xl bg-gray-900">
        <button
          onClick={onClose}
          className="absolute -top-2 -right-4 translate-x-full text-7xl leading-none text-white cursor-pointer"
        >
          <span className="sr-only">Close modal</span>
          &times;
        </button>
        <video
          width="100%"
          height="500"
          src="/images/video/hela-ahasa-demo.mp4"
          controls
          autoPlay
          playsInline
          style={{ display: "block", background: "#000" }}
        />
      </div>
    </div>,
    document.body,
  );
}