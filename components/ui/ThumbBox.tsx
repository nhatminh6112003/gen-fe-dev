import UserThumb from './UserThumb';

const ThumbBox = ({
  align,
  images
}: {
  align: 'left' | 'right';
  images: { imageUrl: string }[];
}) => {
  const RightThumbBox = (
    <div className="h-[50.46vh] absolute right-0 w-[40vw] hidden lg:block">
      <UserThumb
        className={`top-[24vh] left-[10vw]`}
        size="s"
        image={images[0]?.imageUrl}
      />
      <UserThumb
        className="top-[12vh] left-[14vw] "
        size="m"
        image={images[1]?.imageUrl}
      />
      <UserThumb
        className="top-[24vh] left-[16vw] "
        size="m"
        image={images[2]?.imageUrl}
      />
      <UserThumb
        className="top-[36vh] left-[14vw]"
        size="m"
        image={images[3]?.imageUrl}
      />
      <UserThumb
        className="left-[18.05vw]"
        size="l"
        image={images[4]?.imageUrl}
      />
      <UserThumb
        className="top-[20vh] left-[22.22vw]"
        size="l"
        image={images[5]?.imageUrl}
      />
      <UserThumb
        className="top-[40vh] left-[18.05vw]"
        size="l"
        image={images[6]?.imageUrl}
      />
    </div>
  );
  const LeftThumbBox = (
    <div className="h-[50.46vh] absolute left-0 w-[40vw] hidden lg:block">
      <UserThumb
        className="top-[24vh] right-[10vw]"
        size="s"
        image={images[0]?.imageUrl}
      />
      <UserThumb
        className="top-[12vh] right-[14vw]"
        size="m"
        image={images[1]?.imageUrl}
      />
      <UserThumb
        className="top-[24vh] right-[16vw]"
        size="m"
        image={images[2]?.imageUrl}
      />
      <UserThumb
        className="top-[36vh] right-[14vw]"
        size="m"
        image={images[3]?.imageUrl}
      />
      <UserThumb
        className="right-[18.05vw]"
        size="l"
        image={images[4]?.imageUrl}
      />
      <UserThumb
        className="top-[20vh] right-[22.22vw]"
        size="l"
        image={images[5]?.imageUrl}
      />
      <UserThumb
        className="top-[40vh] right-[18.05vw]"
        size="l"
        image={images[6]?.imageUrl}
      />
    </div>
  );

  return align === 'left' ? LeftThumbBox : RightThumbBox;
};

export default ThumbBox;
