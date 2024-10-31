import "./Header.css";
import { Heading } from "/src/components/typography/Heading.jsx";
import { Image } from "/src/components/images/Image.jsx";
import { Paragraph } from "/src/components/typography/Paragraph.jsx";

const introText =
  "Zoe is an exceptional developer known for her innovative solutions and exceptional coding abilities. She creates user-friendly applications and solves complex issues with ease. Her drive for excellence makes her a valuable asset to any project and a standout in the technology field.";

export const Header = () => {
  return (
    <header tabIndex="0">
      <section className="introduction">
        <Image
          sectionClassName={"profile-img"}
          elementClassName={"circle-img"}
          link={"src/assets/profile-img-zoe.jpg"}
          ImageAltText={"Profile Image of Zoe"}
        />
        <section className="headings">
          <Heading
            level={4}
            text="Hi, I'm Zoe Lindqvist"
            aria-label="Developer greeting"
            className="header-h4"
          />
          <Heading
            level={2}
            text="Software Developer"
            aria-label="Software Developer"
            className="header-h2"
          />
        </section>
        <section className="intro-text">
          <Paragraph text={introText} />
        </section>
      </section>
    </header>
  );
};
