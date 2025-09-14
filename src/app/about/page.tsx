import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PersonalIntro from '@/components/about/PersonalIntro';
import CareerTimeline from '@/components/about/CareerTimeline';
import EducationCertifications from '@/components/about/EducationCertifications';
import PersonalHobbies from '@/components/about/PersonalHobbies';
import WorkPhilosophy from '@/components/about/WorkPhilosophy';
import {
  personalInfo,
  careerTimeline,
  education,
  certifications,
  hobbies,
  philosophy
} from '@/data/about';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <PersonalIntro data={personalInfo} />
        <CareerTimeline timeline={careerTimeline} />
        <EducationCertifications 
          education={education} 
          certifications={certifications} 
        />
        <PersonalHobbies hobbies={hobbies} />
        <WorkPhilosophy philosophy={philosophy} />
      </main>
      <Footer />
    </div>
  );
}
