export default function Image({ imgAlt, imgSrc, imgLink }) {
  return (
    <>
      <a href={imgLink}>
        <img alt={imgAlt} src={imgSrc} className="h-fit" />
      </a>
    </>
  );
}
