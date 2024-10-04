interface SocialButtonProps {
  imgSrc: string;
  title: string;
  altText: string;
  link: string;
}

export function SocialButton({ imgSrc, title, altText, link }: SocialButtonProps) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <button className="btnRedes" title={title}>
        <img src={imgSrc} alt={altText} />
      </button>
    </a>
  );
}