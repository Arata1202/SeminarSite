import { SELECTION_CONTENT } from '@/contents/selection';
import Progress from './Elements/Progress';
import Markdown from '@/components/Common/Markdown';
import ScrollAnimation from '@/components/Common/Animation/ScrollAnimation';

export default function SelectionFeature() {
  return (
    <>
      <Progress />
      <ScrollAnimation variant="fadeInUp" delay={0.8}>
        <Markdown content={SELECTION_CONTENT} />
      </ScrollAnimation>
    </>
  );
}
