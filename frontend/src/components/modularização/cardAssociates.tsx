import { SocialButton } from "../componentes/socialButton";

interface AssociateCardProps {
  imageSrc: string;
  associateName: string;
  associateState: string;
  associatePosition: string;
  associateEmail: string;
  associateSinopse: string;
  associateYoutube: string;
  associateFacebook: string;
  associateInstagram: string;
  titleYoutube: string;
  titleFacebook: string;
  titleInstagram: string;
}

export function AssociateCard({
  imageSrc,
  associateName,
  associateState,
  associatePosition,
  associateEmail,
  associateSinopse,
  associateYoutube,
  associateFacebook,
  associateInstagram,
  titleYoutube,
  titleFacebook,
  titleInstagram
}: AssociateCardProps) {
  return (
    <div className="associateContent">
      <div className="associateContentPerfilImg">
        <img src={imageSrc} alt={associateName} />
      </div>
      <div className="associateContentPerfil">
        <p>{associateName}</p>
        <p>{associateState}</p>
        <p>{associatePosition}</p>
        <p>{associateEmail}</p>
      </div>
      <div className="associateContentPerfilMsg">
        <p>{associateSinopse}</p>
      </div>
      <div className="associateContentPerfilRedes">
        <SocialButton
          imgSrc="../../../public/assets/imgs/icons/redes/iconeYoutube.png"
          altText="YouTube"
          title={titleYoutube}
          link={associateYoutube}
        />
        <SocialButton
          imgSrc="../../../public/assets/imgs/icons/redes/iconeFacebookPreto.png"
          altText="YouTube"
          title={titleFacebook}
          link={associateFacebook}
        />
        <SocialButton
          imgSrc="../../../public/assets/imgs/icons/redes/instagram.png"
          altText="YouTube"
          title={titleInstagram}
          link={associateInstagram}
        />
      </div>
    </div>
  );
}
