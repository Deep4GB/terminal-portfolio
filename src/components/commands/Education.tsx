import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>Here is my education background!</EduIntro>
      {eduBg.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "BS in Computer Science",
    desc: "The Pennsylvania State University - Abington | 2020 ~ 2024",
  },
  {
    title: "Diploma",
    desc: "Bensalem High School - Bensalem | 2016 ~ 2020",
  },
];


export default Education;
