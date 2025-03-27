type Props = {
  title: string;
  Icon: any;
};

export default function PageTitle({ title, Icon }: Props) {
  return (
    <div className="text-3xl font-bold">
      <div className="flex items-center pb-2 pt-2 mt-5">
        <Icon className="h-8 w-8 mr-2" />
        {title}
      </div>
    </div>
  );
}
