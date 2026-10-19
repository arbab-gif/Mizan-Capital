/** Centers content at the 1240px site width with side gutters on small screens. */
export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`mx-auto w-full max-w-[1280px] px-5 ${className}`}>{children}</div>;
}
