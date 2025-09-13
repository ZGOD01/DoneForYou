import CallToActionButton from "./CallToActionButton";

export default function VideoSection() {
  return (
    <>
      <section className="bg-white flex flex-col items-center mt-1 sm:mt-3"> {/* 👇 **CHANGE**: Removed "px-4" */}
        {/* This div will now be full screen width on mobile */}
        <div className="w-full max-w-3xl aspect-video">
          <iframe
            className="w-full h-full sm:rounded-lg shadow-lg" // <-- Added sm:rounded-lg
            src="https://www.youtube.com/embed/kcfs1-ryKWE?autoplay=1&mute=1&rel=0&showinfo=0"
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </>
  );
}