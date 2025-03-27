import PublishedDate from '@/components/Common/Date';

type Props = {
  date: string;
};

export default function FixedDateContainer({ date }: Props) {
  return (
    <div className="includeBanner flex justify-end gap-x-5">
      <PublishedDate date={date} />
    </div>
  );
}
