import FooterCopyright from "./copyright/main";
import SocialMediaAccounts from "./social-media-accounts";

const Footer = () => {
  return (
    <>
      <footer className="border-border bg-background border-y shadow-xs">
        <div className="mx-auto max-w-5xl overflow-hidden sm:pb-10">
          <SocialMediaAccounts />
          <FooterCopyright />
        </div>
      </footer>
    </>
  );
};

export default Footer;
