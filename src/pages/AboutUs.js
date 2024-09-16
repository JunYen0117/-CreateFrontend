import CreateLogo from '../components/AboutUs/CreateLogo';
import IntroduceUs from '../components/AboutUs/IntroduceUs';
import Member from '../components/AboutUs/Member';

function AboutUs() {
  return (
    <>
      <div className="container ">
        <CreateLogo />
        <IntroduceUs />
        <Member />
      </div>
    </>
  );
}

export default AboutUs;
