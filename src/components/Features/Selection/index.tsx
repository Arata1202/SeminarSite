import { SELECTION_CONTENT } from '@/contents/selection';
import Progress from './Elements/Progress';
import Markdown from '@/components/Common/Markdown';

export default function SelectionFeature() {
  return (
    <>
      <Progress />
      <Markdown content={SELECTION_CONTENT} />
    </>
  );
}
