import "./style.css";
interface buttonProps {
  title: string;
  width?: string;
}

export function Button(props: buttonProps) {
  return <button style={{ width: props.width }}>{props.title}</button>;
}
