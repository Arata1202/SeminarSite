import SingleDate from '@/components/Common/SingleDate';

type Props = {
  date: string;
};

export default function FixedDateContainer({ date }: Props) {
  return (
    <div className="flex justify-end gap-x-5">
      <SingleDate date={date} />
    </div>
  );
}
