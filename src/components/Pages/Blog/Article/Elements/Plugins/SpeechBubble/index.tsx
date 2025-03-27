import { ContentBlock } from '@/types/microcms';

type Props = {
  block: ContentBlock;
};

export default function SpeechBubble({ block }: Props) {
  return (
    <>
      <div className="my-10">
        <div className={`speech-bubble ${block.bubble_isRight ? 'right' : 'left'}`}>
          {block.bubble_image && (
            <div className={`bubble-image-wrapper ${block.bubble_isRight ? 'right' : 'left'}`}>
              <div>
                <img
                  src={block.bubble_image.url}
                  width={75}
                  height={75}
                  alt="吹き出しのイメージ"
                  className="bubble-image"
                />
              </div>
            </div>
          )}
          <div className={`bubble-content ${block.bubble_isRight ? 'right' : 'left'}`}>
            <p className="bubble-text">{block.bubble_text}</p>
          </div>
        </div>
      </div>
    </>
  );
}
