interface Props {
  count: number;
  onClick: () => void;
}

const Button = ({ count, onClick }: Props) => {
  return (
    <div>
      <button onClick={onClick}>클릭 카운트: {count}</button>
    </div>
  );
};

export default Button;
