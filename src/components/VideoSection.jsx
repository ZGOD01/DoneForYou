import CallToActionButton from "./CallToActionButton";

export default function VideoSection() {
  return (
    <>
      <section className="bg-white py-16 px-4 flex flex-col items-center">
        <div className="w-full max-w-3xl aspect-video">
          <iframe
            className="w-full h-full rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/kcfs1-ryKWE?autoplay=1&mute=1&rel=0&showinfo=0"
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="mt-6">
          <CallToActionButton />
        </div>
      </section>
    </>
  );
}
