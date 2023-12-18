export default function Bar(props: any) {
  const { color } = props;

  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24">
      <path
        style={{ fill: 'transparent', stroke: 'none' }}
        d="M0 0L0 24L24 24L24 0L0 0z"
      />
      <path
        style={{ fill: color, stroke: 'none' }}
        d="M8 5L8 7L22 7L22 5L8 5M2 11L2 13L22 13L22 11L2 11M12 17L12 19L22 19L22 17L12 17z"
      />
    </svg>
  );
}
