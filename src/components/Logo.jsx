export default function Logo({ LogoAlt, LogoSrc, LogoLink }) {
  return (
    <div className="">
      <a href={LogoLink}>
        <img alt={LogoAlt} src={LogoSrc} className="h-fit" />
      </a>
    </div>
  );
}
