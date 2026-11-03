export default function AnnouncementBar() {
  const message =
    "Shipping across India . Free delivery on first order above Rs. 1000";

  return (
    <div className="w-full overflow-hidden bg-[#EE4B2B] py-3 text-white">
      <div className="flex w-max animate-marquee">
        {[...Array(4)].map((_, i) => (
          <p
            key={i}
            className="shrink-0 px-6 text-xs font-medium uppercase tracking-[0.2em]"
          >
            {message}
          </p>
        ))}
      </div>
    </div>
  );
}
